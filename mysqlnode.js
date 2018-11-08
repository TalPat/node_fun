var mysql = require('mysql');

function	ft_conmysql() {
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password"
	});
	return (con);
}

function	ft_createdb(con, dbname) {
	con.connect(function(err) {
		if (err)
			throw err;
		console.log("Connected!");
		con.query("CREATE DATABASE IF NOT EXISTS "+dbname, function(err, result) {
			if (err)
				throw err;
			console.log("Database created");
		});
	});
}

function	ft_condb(dbname) {
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password",
		database: dbname
	});
	return (con);
}

function	ft_runsql(con, sql) {
	var res;
	con.connect(function(err) {
		if (err)
			throw err;
		con.query(sql, function (err, result, fields) {
			if (err)
				throw err;
			console.log(result);
			res = result;
		});
	});
	return (res);
}

module.exports = {
	ft_conmysql : ft_conmysql,
	ft_condb : ft_condb,
	ft_createdb : ft_createdb,
	ft_runsql : ft_runsql
}