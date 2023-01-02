
const db = require("../model")
const UserUsers = db.user_users;

const UserUserService = require("../services/user_user.service")

module.exports = function (passport) {
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
      UserUsers.findByPk(id).then(function (user) {
        if (user) {
          done(null, user);
        } else {
          done(user.errors, null);
        }
     });
    });

    passport.use(
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          const user = await UserUsers.findOne({ where: { email: email } })

          if (!user) {
            return done(null, false, { message: "Invalid username or password" });
          }

          const validPass = await UserUserService.comparepass(password, user.encrypt_password);

          if (!validPass) {
            return done(null, false, { message: "Invalid username or password" })
          }

          return done(null, user);
        }
      )
    );
}

