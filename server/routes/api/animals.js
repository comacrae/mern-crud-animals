const express = require("express");
const router = express.Router();
const Animal = require("../../models/Animal");

router.get("/test", (req, res) => {
  res.send("testing api");
});

router.get("/", (req, res) => {
  Animal.find()
    .then((animals) => res.json(animals))
    .catch((err) =>
      res.status(404).json({ error: `No animals found: ${err}` })
    );
});

router.get("/:id", (req, res) => {
  Animal.findById(req.params.id)
    .then((animal) => res.json(animal))
    .catch((err) =>
      res
        .status(404)
        .json({ error: `no book with id ${req.params.id} found: ${err}` })
    );
});

router.post("/", (req, res) => {
  Animal.create(req.body)
    .then((animal) =>
      res.json({ msg: `Animal created successfully: ${animal}` })
    )
    .catch((err) =>
      res.json({ error: `Unable to create animal: ${err}. ${req.body}` })
    );
});

router.put("/:id", (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body)
    .then((animal) => res.json(`Update successful to animal ${animal.name}`))
    .catch((err) => {
      res.json({
        error: `Unable to update animal with id ${req.params.id}: ${err}`,
      });
    });
});

router.delete("/:id", (req, res) => {
  Animal.findByIdAndDelete(req.params.id, req.body)
    .then((animal) => res.json(`Successfully deleted animal ${animal.name}`))
    .catch((err) => {
      res.json({
        error: `Unable to delete animal with id ${req.params.id}: ${err}`,
      });
    });
});

module.exports = router;
