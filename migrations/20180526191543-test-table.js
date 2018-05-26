var sequelize = require('sequelize');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('date_test', {
            id: {
                type: sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            some_date: {
                type: sequelize.DATEONLY
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.dropTable('date_test');
    }
};
