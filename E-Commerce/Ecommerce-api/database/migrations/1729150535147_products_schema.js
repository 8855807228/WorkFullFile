"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductsSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.string("description", 255).notNullable();
      table.decimal("price", 10, 2).notNullable();
      table.integer("stock").notNullable();
      table.longText("image").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsSchema;
