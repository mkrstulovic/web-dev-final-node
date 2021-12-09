const mongoose = require('mongoose');
const schema = mongoose.Schema({
    cardId: String,
    username: String,
    body: String,
    flags: Number,
    flaggedBy: [String]
}, {collection: "comments"});
schema.set('timestamps', true);
module.exports = schema;
