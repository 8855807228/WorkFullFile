"use strict";

const Order = use("App/Models/Order");

class OrderController {
  async index({ response }) {
    const orders = await Order.all();
    return response.json(orders);
  }

  async store({ request, response }) {
    const orderData = request.only([
      "customer_name",
      "shipping_address",
      "phone_number",
      "pincode",
      "state",
      "payment_method",
    ]);

    const order = await Order.create(orderData);

    return response.status(201).json({
      message: "Order placed successfully!",
      order,
    });
  }
}

module.exports = OrderController;
