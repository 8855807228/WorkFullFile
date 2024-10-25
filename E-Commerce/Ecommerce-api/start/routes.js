"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/products", "ProductController.index");
Route.post("/products", "ProductController.store");
Route.post("/api/admin/login", "AuthController.login");
Route.get("/api/admin/index", "AuthController.index");
Route.post("/api/placeorder", "OrderController.store");
Route.get("/api/placeorder", "OrderController.index");
