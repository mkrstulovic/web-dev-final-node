const model = require('./comment-model');

const findAllComments = () => {
    return model.find();
};

const flagComment = (id, body) => {
    return model.updateOne({_id: id},
        {$set: {flags: body[0], flaggedBy: body[1]}});
};

const createComment = async(comment) => {
    await model.create(comment);
    return model.find();
};

const deleteComment = (id) => {
    return model.deleteOne({_id: id});
};


module.exports = {
    findAllComments, flagComment,
    createComment, deleteComment
};
