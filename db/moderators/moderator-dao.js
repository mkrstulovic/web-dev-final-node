const model = require('./moderator-model');

const findAllModerators = () => {
    return model.find();
};


const findModByUsername = ({username}) =>
    model.findOne({username});

const updateBanned = (id, body) => {
    return model.updateOne({username: id},
        {$push: {banned: body[0]}});
};

const createModerator = async(moderator) => {
    await model.create(moderator);
    return model.find();
};


module.exports = {
    findAllModerators, findModByUsername,
    updateBanned, createModerator
};
