"use strict";

const Schema = use("Schema");

class OrdersSchema extends Schema {
  up() {
    this.create("orders", (table) => {
      table.increments();
      table.string("customer_name", 80).notNullable();
      table.string("shipping_address", 255).notNullable();
      table.string("phone_number", 15).notNullable();
      table.string("pincode", 10).notNullable();
      table.string("state", 50).notNullable();
      table.string("payment_method", 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrdersSchema;
