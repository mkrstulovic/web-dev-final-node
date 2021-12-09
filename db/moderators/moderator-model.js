const mongoose = require('mongoose');
const schema = require('./moderator-schema');
const model = mongoose.model('ModeratorModel', schema);
module.exports = model;
