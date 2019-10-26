const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
});

const getCompanies = (request, response) => {
    pool.query('SELECT * FROM company ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getCompanyById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM company WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    getCompanies,
    getCompanyById,
};