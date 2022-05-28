module.exports = app => {
  const Items = require("../controllers/Item.controller.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", Items.create);

  // Retrieve all Items
  router.get("/", Items.findAll);

  // Retrieve a single Item with id
  router.get("/:id", Items.findOne);

  // Update a Item with id
  router.patch("/:id", Items.update);

  // Delete a Item with id
  router.delete("/:id", Items.delete);


  app.use('/api/v1/items', router);
};
