const mongoose = require('mongoose');
const schema = mongoose.Schema({
    banned: [String],
    profPic: String,
    username: String,
    password: String,
    favoriteColors: [String],
    bio: String
}, {collection: "moderators"});
schema.set('timestamps', true);
module.exports = schema;
