const passport = require("../helpers/passport.js");

class PassportService {
  authenticate() {
    passport.authenticate('local', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/login',
      failureMessage: true
    })
  }
}

module.exports = new PassportService();