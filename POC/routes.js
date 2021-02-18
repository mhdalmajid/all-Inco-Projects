const { requireAuth, setAuthToken, unsetAuthToken } = require("./auth")
const { User, Schedule } = require('./models');

module.exports = (app) => {

    app.get('/', requireAuth, (req, res) => {
        Schedule.getAllWithUser()
            .then(scheduleData => { res.render('home', { scheduleData }) })
            .catch(msg => { 
                res.render('home', { 
                    messageClass: 'alert-danger', 
                    message: msg 
                }) 
            })
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.post('/login', (req, res) => {
        const { email, password } = req.body;

        User.tryAuth(email, password, res)
            .then(_ => { res.redirect('/') })
            .catch(msg => { 
                res.render('login', {
                    messageClass: 'alert-danger',
                    message: msg 
                }) 
            });
    });

    app.get('/logout', (req, res) => {
        unsetAuthToken(req, res);
        res.redirect('/login');
    });

    app.get('/signup', (req, res) => {
        res.render('signup');
    });

    app.post('/signup', (req, res) => {
        User.create(req.body)
            .then(_ => {
                res.render('login', {
                    messageClass: 'alert-success',
                    message: 'Registration Complete. Please login to continue.'
                })
            }).catch(msg => { 
                res.render('signup', {
                    messageClass: 'alert-danger',
                    message: msg
                }) 
            })
    });

    app.get('/user/:id', requireAuth, (req, res) => {
      const { id } = req.params;

      User.get(id)
        .then(userData => { 
            Schedule.getByUser(userData.id)
                .then(scheduleData => { res.render('user', { userData, scheduleData }) })
        })
        .catch(err => { res.status(404).send(err) })
    });

    app.get('/schedule', requireAuth, (req, res) => {
        Schedule.getByUser(req.user)
            .then(scheduleData => { res.render('schedule', { scheduleData }) })
            .catch(msg => { 
                res.render('schedule', { 
                    messageClass: 'alert-danger', 
                    message: msg 
                }) 
            })
    });

    app.post('/schedule', requireAuth, (req, res) => {
        Schedule.create(req.user, req.body)
            .then(_ => { res.redirect("/schedule") })
            .catch(msg => { 
                res.render('schedule', { 
                    messageClass: 'alert-danger', 
                    message: msg 
                }) 
            })
    });
}
