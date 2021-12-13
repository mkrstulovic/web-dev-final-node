const dao = require('../db/moderators/moderator-dao');

module.exports = (app) => {
    const findAllModerators = (req, res) =>
        dao.findAllModerators()
            .then(mods => res.json(mods));

    const createModerator = (req, res) => {
        const newModerator = {
            "username": req.body[0],
            "banned": []
        }
        dao.createModerator(newModerator)
            .then((insertedMod) => res.json(insertedMod));
    }

    const updateBanned = (req, res) => {
        dao.updateBanned(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    app.put('/api/mods/:id/ban', updateBanned);
    app.post('/api/mods', createModerator);
    app.get('/api/mods', findAllModerators);
};
