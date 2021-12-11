const mongoose = require('mongoose');
const schema = mongoose.Schema({
    banned: [String],
    username: String,
}, {collection: "moderators"});
schema.set('timestamps', true);
module.exports = schema;
