"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    try {
      const user = await auth.getUser();

      // Check if the user is an admin
      if (!user.is_admin) {
        return response.status(403).send({ message: "Admin access only" });
      }
    } catch (error) {
      return response.status(401).send({ message: "Unauthorized" });
    }

    await next(); // Proceed to the next middleware or controller
  }
}

module.exports = AdminAuth;
