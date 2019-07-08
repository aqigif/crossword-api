"use strict";

const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async faker => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: "ourpass"
  };
});