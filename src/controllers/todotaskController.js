const Todotask = require("../models/Todotask");

//CREATE TODO TASK
exports.createTodotask = async (req, res) => {
  try {
    const todotask = await req.body;
    const createdTodotask = await Todotask.create(todotask);
    if (!createdTodotask)
      return res
        .status(400)
        .json({ sucess: false, message: "Todo task creation failed" });
    return res.status(201).json({
      sucess: true,
      message: "Todo task created successfully",
      todotask: createdTodotask,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//GET ALL TODO TASKS
exports.getTodotasks = async (req, res) => {
  try {
    const todotasks = await Todotask.find();
    if (todotasks.length === 0)
      return res
        .status(404)
        .json({ sucess: false, message: "No Todo task was found" });
    return res
      .status(200)
      .json({
        sucess: true,
        message: "All Todo tasks",
        todotasks,
        count: todotasks.length,
      });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//GET SINGLE TODO TASK
exports.getTodotask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const todotask = await Todotask.findOne(id);
    if (!todotask)
      return res
        .status(404)
        .json({ sucess: false, message: "Todo task not found" });
    return res
      .status(200)
      .json({ sucess: true, message: "Todo task found", todotask });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//UPDATE TODO TASK
exports.updateTodotask = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const todotask = await req.body;
    const update = await Todotask.findOneAndUpdate(id, todotask, { new: true });

    if (!update)
      return res
        .status(404)
        .json({ sucess: false, message: "Todo task not updated" });
    return res
      .status(200)
      .json({ sucess: true, message: "Todo task updated", todotask: update });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//DELETE TODO TASK
exports.deleteTodotask = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const deleted = await Todotask.findOneAndRemove(id);
    if (!deleted)
      return res
        .status(400)
        .json({ sucess: false, message: "Todo task not deleted" });

    return res.status(200).json({ sucess: true, message: "Todo task deleted" });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
