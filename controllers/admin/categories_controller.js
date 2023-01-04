const handle_session = require("../../helpers/session.js")

const db = require("../../model");

const Category = db.categories
class CategoriesController {
  async index(req, res) {
    handle_session(req, "/admin/categories")

    const categories = await Category.findAndCountAll({ where: Category, limit: 5 });

    console.log(categories)

    let total = 0;

    if(categories.count % 5 == 0) {
      total = categories.count / 5
    }
    else {
      total = Math.round(categories.count / 5)
    }

    res.render("admin/categories/index", { layout: "./layouts/side_bar" , categories: categories.rows, total: total})
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

        console.log("child_category_attrs", child_category_attrs)
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