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

// midnight UTC on Halloween 🎃
var date = new Date(Date.UTC(2000, 9, 31));

// converts to local time resulting in 2000-10-30
TestTable.create({ someDate: date })
    .then(function() {
        // also apparently converts to local time resulting in 2000-10-30
        return TestTable.create({ someDate: date.toUTCString() });
    })
    .then(function() {
        // convert to string, definitely works but seems unnecessary
        var strDate = date.getUTCFullYear() + '-' + pad2(date.getUTCMonth() + 1) + '-' + pad2(date.getUTCDate());
        return TestTable.create({ someDate: strDate });
    })
    .then(function() {
        // cerate a new local Date, also works but seems hacky
        var newDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        return TestTable.create({ someDate: newDate });
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
