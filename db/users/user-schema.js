const mongoose = require('mongoose');
const schema = mongoose.Schema({
    reports: Number,
    reportedBy: [String],
    isBanned: Boolean,
    profPic: String,
    username: String,
    password: String,
    favoriteColors: [String],
    bio: String
}, {collection: "users"});
schema.set('timestamps', true);
module.exports = schema;


