import Sequelize from "sequelize";

const company = (sequelize) => {
    const Company = sequelize.define('company', {
        chargesgst: {
            type: Sequelize.BOOLEAN,
        },
        chargespst: {
            type: Sequelize.BOOLEAN,
        },
        code: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        owner_id: {
            type: Sequelize.BIGINT,
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        version: 'version',
        tableName: 'company',
    });
    return Company;
};

export default company;