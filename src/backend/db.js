const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
    host: 'collegedb.cx2ei0awui3y.us-west-2.rds.amazonaws.com',
    database: 'postgres',
    user: 'collegewishlist',
    password: 'CollegeWishlist!*3',
    port: 5432,
});

async function getColleges(satScore) {
    if (!satScore) {
        throw new Error('SAT score is missing');
    }

    const query = `
    SELECT "INSTNM"
    FROM college_raw_data
    WHERE "SATVR25" <= $1
    ORDER BY "INSTNM" DESC
    LIMIT 10;
  `;

    try {
        const result = await pool.query(query, [satScore]);
        return result.rows.map((row) => row.INSTNM);
    } catch (error) {
        console.error('Error querying the database:', error);
        throw error;
    }
}

module.exports = { getColleges };
