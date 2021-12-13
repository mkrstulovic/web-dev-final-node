const model = require('./comment-model');

const findAllComments = () => {
    return model.find().sort({createdAt: -1});
};

const flagComment = (id, body) => {
    return model.updateOne({_id: id},
        {$set: {flags: body[0], flaggedBy: body[1]}});
};

const createComment = async(newComment) => {
    await model.create(newComment);
    return model.find();
};

const deleteComment = (id) => {
    return model.deleteOne({_id: id});
};


module.exports = {
    findAllComments, flagComment,
    createComment, deleteComment
};
