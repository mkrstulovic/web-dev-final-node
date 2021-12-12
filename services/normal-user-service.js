const dao = require('../db/users/user-dao');

module.exports = (app) => {
    const findAllUsers = (req, res) =>
        dao.findAllUsers()
            .then(users => res.json(users));

    const updateBanned = (req, res) => {
        dao.updateBanned(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    const updateReport = (req, res) => {
        dao.updateReport(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    const updateProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }

    const login = (req, res) => {
        dao.findByUsernameAndPassword(req.body)
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
        dao.findByUsername(req.body)
            .then(user => {
                if(user) {
                    res.sendStatus(404);
                    return;
                }

                dao.createUser(req.body)
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
    app.put('/api/users/:id', updateProfile);
    app.put('/api/users/:id/banned', updateBanned);
    app.put('/api/users/:id/report', updateReport);
    app.get('/api/users', findAllUsers);
};
