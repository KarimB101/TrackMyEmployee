const connection = require('./connection');

// Class to contain all database methods
class database {
    // Connection constructor to ensure queries are sent to database
    constructor(connection) {
        this.connection = connection;
    }
}