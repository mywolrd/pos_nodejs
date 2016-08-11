'use strict';

var pg = require('pg'); //postgres connector

module.exports = (function() {
    var postgres = {}, pool = null;

    postgres.setPool = function(h, d, u, p) {
	if (null === pool) {
	    pool = new pg.Pool({
		user : u,
		password : p,
		host : h,
		database : d,
		max : 4,
		min : 2,
		idleTimeoutMillis : 1000
	    });
	}
    }
    /*    
    postgresTemplate.query = function(queryString) {
	if (null !== connection) {
	    pg.connect(connection, function(err, client, done) {
		if (err) {
		    console.log(err);
		    return;
		}
		client.query(queryString, function(err, result) {
		    done();
		    if (err) {
			console.log(err);
			return;
		    }
		})
	    });
	}
    }*/

    return postgres;
})();
