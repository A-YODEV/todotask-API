const express = require("express");
const router = express.Router();
const controller = require("../controllers/todotaskController");

router
  .get("/", controller.getTodotasks)
  .get("/:id", controller.getTodotask)
  .post("/", controller.createTodotask)
  .put("/:id", controller.updateTodotask)
  .delete("/:id", controller.deleteTodotask);

module.exports = router;
