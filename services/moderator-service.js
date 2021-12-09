const dao = require('../moderators/moderator-dao');

module.exports = (app) => {
    const findAllModerators = (req, res) =>
        dao.findAllModerators()
            .then(mods => res.json(mods));

    const createModerator = (req, res) => {
        dao.createModerator(req.body)
            .then((insertedMod) => res.json(insertedMod));
    }

    const updateBanned = (req, res) => {
        dao.updateBanned(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    const updateProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }

    const login = (req, res) => {
        dao.findModByUsernameAndPassword(req.body)
            .then(user => {
                if(user) {
                    req.session['profile'] = user;
                    res.json(user);
                    return;
                }
                res.sendStatus(403);
            })
    }

    const register = (req, res) => {
        dao.findModByUsername(req.body)
            .then(user => {
                if(user) {
                    res.sendStatus(404);
                    return;
                }
                dao.createModerator(req.body)
                    .then(user => {
                        req.session['profile'] = user;
                        res.json(user)
                    });
            })
    }

    const profile = (req, res) =>
        res.json(req.session['profile']);

    const logout = (req, res) =>
        res.send(req.session.destroy());

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
    app.put('/api/mods/:id', updateProfile);
    app.put('/api/mods/:id/ban', updateBanned);
    app.post('/api/mods', createModerator);
    app.get('/api/mods', findAllModerators);
};
