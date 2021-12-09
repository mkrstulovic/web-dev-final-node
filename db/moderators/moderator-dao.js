const model = require('./moderator-model');

const findAllModerators = () => {
    return model.find();
};

const findModByUsernameAndPassword = ({username, password}) =>
    model.findOne({username, password});

const findModByUsername = ({username}) =>
    model.findOne({username});

const updateBanned = (id, body) => {
    return model.updateOne({_id: id},
        {$push: {banned: body}});
};

const createModerator = async(moderator) => {
    await model.create(moderator);
    return model.find();
};

const updateProfile = (id, body) => {
    return model.updateOne({_id: id},
        {$set: {bio: body[0], favoriteColors: body[1], profPic: body[2]}});
};


module.exports = {
    findAllModerators, findModByUsernameAndPassword, findModByUsername,
    updateBanned, createModerator, updateProfile
};
