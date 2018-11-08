var mysqlnode = require('./mysqlnode.js');

var con = mysqlnode.ft_conmysql();
mysqlnode.ft_createdb(con, 'test_db');
con = mysqlnode.ft_condb('test_db');
console.log(mysqlnode.ft_runsql(con, "CREATE TABLE IF NOT EXISTS test(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), score INT(10))"));
