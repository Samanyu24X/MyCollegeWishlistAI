const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
    host: 'collegedb.cx2ei0awui3y.us-west-2.rds.amazonaws.com',
    database: 'postgres',
    user: 'collegewishlist',
    password: 'CollegeWishlist!*3',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,  // In production, set to `true` after proper cert configuration
    },
    // statement_timeout: 180000,  // Set timeout for SQL statements (3 minutes)
    // query_timeout: 180000,  // Set query timeout (3 minutes)
});

async function getColleges({ satScoreMath, satScoreEnglish, state }) {
    if (!satScoreMath || !satScoreEnglish) {
        throw new Error('SAT scores are missing');
    }
    if (!state || state.length === 0) {
        throw new Error('State(s) are missing');
    }

    // Make sure the state is an array
    const statesArray = Array.isArray(state) ? state : [state];

    const query = `
    SELECT "INSTNM"
    FROM college_raw_data
    WHERE 
        "SATVR75" <= $1 AND  -- SAT English score filter
        "SATMT75" <= $2 AND  -- SAT Math score filter
        "STABBR" = ANY($3)   -- State filter (use ANY for multiple states)
    ORDER BY "INSTNM" DESC
    LIMIT 6;
    `;

    try {
        const result = await pool.query(query, [satScoreEnglish, satScoreMath, statesArray]);
        return result.rows.map((row) => row.INSTNM); // Map rows to return only college names
    } catch (error) {
        console.error('Error querying the database:', error);
        throw error;
    }
}

module.exports = { getColleges };
