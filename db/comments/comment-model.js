const mongoose = require('mongoose');
const schema = require('./comment-schema');
const model = mongoose.model('CommentModel', schema);
module.exports = model;
