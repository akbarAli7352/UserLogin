var mongoose = require('mongoose');
const DB_CONNECTION_STRING = "mongodb://localhost:27017/securing-rest-apis-with-jwt"
mongoose.connect(DB_CONNECTION_STRING)
