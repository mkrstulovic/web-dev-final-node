const model = require('./user-model');

const findAllUsers = () => {
    return model.find();
};

const findByUsernameAndPassword = ({username, password}) =>
    model.findOne({username, password});

const findByUsername = ({username}) =>
    model.findOne({username});

const updateReport = (id, body) => {
    return model.updateOne({username: id},
        {$set: {reports: body[0], reportedBy: body[1]}});
};

const updateBanned = (id, body) => {
    return model.updateOne({username: id},
        {$set: {isBanned: body[0]}});
}

const createUser = async(user) => {
    await model.create(user);
    return model.findOne({username: user.username});
};

const updateProfile = (id, body) => {
    return model.updateOne({username: id},
        {$set: {bio: body[0], favoriteColors: body[1], profPic: body[2]}});
};


module.exports = {
    findAllUsers, findByUsernameAndPassword, findByUsername,
    updateReport, updateBanned,
    createUser, updateProfile
};
