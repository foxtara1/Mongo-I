const router = require("express").Router();

const Schema = require("./schema");

router
  .route("/")
  .get((req, res) => {
    Schema.find({})
      .then(friends => {
        res.status(200).json(friends);
      })
      .catch(err => {
        console.log("There was an error getting friends.");
      });
  })
  .post((req, res) => {
    const schema = new Schema(req.body);

    schema
      .save()
      .then(savedFriend => {
        res.status(201).json(savedFriend);
      })
      .catch(err => {
        console.log("There was an error while saving the friend to the database.");
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    Schema.findById(req.params.id)
      .then(schema => {
        res.json(schema);
      })
      .catch(err => {
        console.log("There was a problem retrieving friend.");
      });
  })
  .delete((req, res) => {
    Schema.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({ message: "Friend successfully deleted!" });
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was an error deleting Schema." });
      });
  })
  .put((req, res) => {
    Schema.findByIdAndUpdate(req.params.id, req.body)
      .then(schema => {
        console.log("Successfully Updated friend.");
        res.status(201).json(schema);
      })
      .catch(err => {
        console.log("There was a problem updating friend.");
      });
  });

module.exports = router;