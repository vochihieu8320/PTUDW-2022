const handle_session = require("../../helpers/session.js")

const db = require("../../model");

const Category = db.categories

const { Op } = require("sequelize");

class CategoriesController {
  async index(req, res) {
    handle_session(req, "/admin/categories")

    let categories = await Category.findAndCountAll({ where: { parent_category_id: null }, limit: 5 });
    let child_categories = await Category.findAll({ where: { parent_category_id:
                                                            { [Op.ne]: null } }})
    // find child categories

    let total = 0;

    if(categories.count % 5 == 0) {
      total = categories.count / 5
    }
    else {
      total = Math.round(categories.count / 5) + 1
    }

    res.render("admin/categories/index", { layout: "./layouts/side_bar" ,
                                           categories: categories.rows,
                                           total: total,
                                           child_categories: child_categories })
  }

  async new(req, res) {
    res.render("admin/categories/new", { layout: "./layouts/side_bar" })
  }

  async create(req, res) {
    const category_name = req.body.category_name
    const child_category = req.body.child_category_name

    try {
      const category = await Category.create({name: category_name});

      if(child_category.length > 0) {
        let child_category_attrs = []

        for(let i = 0; i < child_category.length; i++) {
          child_category_attrs.push({ name: child_category[i], parent_category_id: category.id })
        }

        await Category.bulkCreate(child_category_attrs);
      }

      res.render("admin/categories/new", { layout: "./layouts/side_bar" })
    }
    catch (error) {
      console.log(error)
    }


    res.render("admin/categories/new", { layout: "./layouts/side_bar" })
  }
}

module.exports = new CategoriesController