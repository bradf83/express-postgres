import Sequelize from "sequelize";

const owner = (sequelize) => {
    const Owner = sequelize.define('owner', {
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING,
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        version: 'version',
        tableName: 'owner',
        underscored: true,
    });

    Owner.associate = models => {
        Owner.hasMany(models.Company, { onDelete: 'CASCADE' });
    };

    return Owner;
};

export default owner;