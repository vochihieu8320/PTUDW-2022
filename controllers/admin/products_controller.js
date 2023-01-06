const db = require('../../model')

const Categories = db.categories
const Products = db.products
const ProductImages = db.product_images

class ProductsController {
  async index(req, res) {
    try {
      const products = await Products.findAndCountAll({ include: [ProductImages, Categories], limit: 5 });

      let total = 0;

      if(products.count % 5 == 0) {
        total = products.count / 5
      }
      else {
        total = Math.round(products.count / 5)
      }

      res.render("admin/products/index",
        {
          layout: "./layouts/side_bar",
          products: products.rows,
          total: total
        })
    }
    catch (error) {

    }
  }

  async new(req, res) {
    const categories = await Categories.findAll()

    res.render("admin/products/new", { layout: "./layouts/side_bar", categories: categories })
  }

  async create(req, res) {
    try {
      console.log(".....Upload Product.....");

      const available_size = req.body.available_size.join(",")
      const product_images_name = req.body.image_name
      const product_image_hex_code = req.body.image_hex_code

      let product_body = {
        name: req.body.name,
        description: req.body.description,
        category_id: req.body.category_id,
        quantity: req.body.quantity,
        price: req.body.price,
        available_size: available_size,
      }

      const product_images = req.body.product_images
      const product = await Products.create(product_body);

      let image_url = []
      for(let i = 0; i < product_images.length; i++) {
        image_url.push({
          image: product_images[i],
          product_id: product.id,
          name: product_images_name[i],
          hex_code: product_image_hex_code[i]
        })
      }


      await ProductImages.bulkCreate(image_url)

      res.json({ status: 200, success: true })
    } catch (error) {
      res.json({ status: 400, error: error })
    }
  }
}

module.exports = new ProductsController