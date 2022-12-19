const db = require('../../model')
const UserUsers = db.user_users;
const UserProfiles = db.user_profiles

const UserUserService = require("../../services/user_user.service.js");

class SessionController {
  async login(req, res) {
    res.render("admin/login", { layout: "./layouts/admin", error: false })
  }

  async register(req, res) {
    res.render("admin/register", { layout: "./layouts/admin", error: false })
  }

  async register_create(req, res) {
    try {
      if(req.body.confirm_password !== req.body.password) {
        const message = "Password confirm dont match"
        res.render("admin/register", { layout: "./layouts/admin", error: message})
      }

      const hashpass = await UserUserService.hashpass(req.body.password);
      await UserUsers.create({ email: req.body.email, encrypt_password: hashpass})

      res.redirect("/admin/categories")
    } catch (error) {
      const message = "Login failure, please try again"
      res.render("admin/register", { layout: "./layouts/admin", error: message})
    }
  }

  async create(req, res) {
    try {
      const user = await UserUsers.findOne({ where: { email: req.body.email } })

      console.log("user", user)
      const validPass = await UserUserService.comparepass(req.body.password, user.encrypt_password);
      if(!validPass) {
        res.render("admin/login", { layout: "./layouts/admin", error: "Email or password mismatch"})
      }

      res.redirect("/admin/categories")
    } catch (error) {
      res.render("admin/login", { layout: "./layouts/admin", error: error.message})
    }
  }

  async logout(req, res) {
    res.redirect("/admin/login")
  }
}

module.exports = new SessionController