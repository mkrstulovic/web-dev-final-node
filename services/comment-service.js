const dao = require('../comments/comment-dao');

module.exports = (app) => {
    const findAllComments = (req, res) =>
        dao.findAllComments()
            .then(comments => res.json(comments));

    const createComment = (req, res) => {
        dao.createComment(req.body)
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
