var Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb', 'postgres', 'x', {
    host: 'localhost',
    dialect: 'postgres'
});

TestTable = sequelize.define('date_test',
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },

        someDate: {
            field: 'some_date',
            type: Sequelize.DATEONLY
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

var date = new Date(Date.UTC(2000, 9, 31));

// inserts 2000-10-30
TestTable.create({ someDate: date })
    .then(function() {
        // also inserts 2000-10-30
        return TestTable.create({ someDate: date.toUTCString() });
    })
    .then(function() {
        // this works but seems hacky
        var strDate = date.getUTCFullYear() + '-' + pad2(date.getUTCMonth() + 1) + '-' + pad2(date.getUTCDate());
        return TestTable.create({ someDate: strDate });
    })
    .then(function() {
        process.exit(0);
    });


function pad2(n) {
    if (n.length === 1) {
        return '0' + n;
    }

    return n;
}

