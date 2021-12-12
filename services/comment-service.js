const dao = require('../db/comments/comment-dao');

module.exports = (app) => {
    const findAllComments = (req, res) =>
        dao.findAllComments()
            .then(comments => res.json(comments));

    const createComment = (req, res) => {
        const newComment = {
            "username": req.body[0],
            "cardId": req.body[1],
            "body": req.body[2],
            "flags": 0,
            "flaggedBy": []
        }
        dao.createComment(newComment)
            .then((insertedComment) => res.json(insertedComment));
    }

    const deleteComment = (req, res) => {
        dao.deleteComment(req.params.id)
            .then((status) => res.send(status));
    }

    const flagComment = (req, res) => {
        dao.flagComment(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.put('/api/comments/:id/flags', flagComment);
    app.delete('/api/comments/:id', deleteComment);
    app.post('/api/comments', createComment);
    app.get('/api/comments', findAllComments);
};
