"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index({ response }) {
    const products = await Product.all();
    return response.json(products);
  }

  async store({ request, response }) {
    const { name, description, price, stock, image } = request.only([
      "name",
      "description",
      "price",
      "stock",
      "image",
    ]);

    try {
      const product = await Product.create({
        name,
        description,
        price,
        stock,
        image,
      });

      return response.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      return response.status(500).json({ error: "Could not create product" });
    }
  }
}

module.exports = ProductController;
