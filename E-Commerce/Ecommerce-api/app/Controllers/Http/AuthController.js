"use strict";

const User = use("App/Models/User");
const Hash = use("Hash");

class AuthController {
  async index({ response }) {
    const user = await User.all();
    return response.json(user);
  }

  async login({ request, auth, response }) {
    const { email, password } = request.only(["email", "password"]);

    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Email and password are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).send({ message: "Invalid email format" });
    }

    try {
      const user = await User.findByOrFail("email", email);

      const isPasswordValid = await Hash.verify(password, user.password);

      if (!isPasswordValid) {
        return response.status(401).send({ message: "Invalid credentials" });
      }

      const token = await auth.generate(user);
      return response.send({
        user,
        token,
      });
    } catch (error) {
      return response.status(404).send({ message: "User not found" });
    }
  }
}

module.exports = AuthController;
