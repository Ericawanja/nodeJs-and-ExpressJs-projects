const express = require("express");
const router = express.Router();

//get controllers
const {
  getAllTrainees,
  getTrainee,
  addTrainee,
  updateTrainee,
  deleteTrainee,
} = require("../controllers/trainees");
router.get("/", getAllTrainees);
router.post("/", addTrainee);
router.get('/:id', getTrainee)
router.put("/:id", updateTrainee);
router.delete("/:id", deleteTrainee)

module.exports = router;
