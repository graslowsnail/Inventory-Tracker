const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Part } = require("../../models");
const withAuth = require("../../utils/auth");

// get all parts
router.get("/", (req, res) => {
  console.log("======================");
  Part.findAll({
    attributes: ["id", "title", "stock"],
  })
    .then((dbPartData) => res.json(dbPartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Part.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "stock"],
  })
    .then((dbPartData) => {
      if (!dbPartData) {
        res.status(404).json({ message: "No part found with this id" });
        return;
      }
      res.json(dbParttData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Part.create({
    title: req.body.title,
    stock: req.body.stock,
  })
    .then((dbPartData) => res.json(dbPartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put("/upvote", withAuth, (req, res) => {
//   // custom static method created in models/Post.js
//   Post.upvote(
//     { ...req.body, user_id: req.session.user_id },
//     { Vote, Comment, User }
//   )
//     .then((updatedVoteData) => res.json(updatedVoteData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// update post name
router.put("/:id", withAuth, (req, res) => {
  Part.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPartData) => {
      if (!dbPartData) {
        res.status(404).json({ message: "No part found with this id" });
        return;
      }
      res.json(dbPartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Part.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPartData) => {
      if (!dbPartData) {
        res.status(404).json({ message: "No part found with this id" });
        return;
      }
      res.json(dbPartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
