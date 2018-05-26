# sequelize-date-issue

This repository shows that it's difficult to get sequelize to insert a `DATEONLY` field based on a javascript Date object without it converting the date object to local time.

### Install
    git clone https://github.com/dland512/sequelize-date-issue.git
    cd sequelize-date-issue
    npm i
    ./node_modules/.bin/sequelize db:create
    ./node_modules/.bin/sequelize db:migrate
    
Note:  this connects to a localhost Postgres instance using the `postgres` user with password `x` and creates a database called `testdb`. It will then run a migration that will create a table called `test_table`.
### Run
    node go.js

Note: this will insert a few records into `test_table`, only the last of which will result in the correct date (10/31/2000).
