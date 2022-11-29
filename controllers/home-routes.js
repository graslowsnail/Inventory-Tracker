const router = require("express").Router();
const sequelize = require("../config/connection");
const { Part } = require("../models");

// get all parts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Part.findAll({
    attributes: ["id", "title", "stock"],
  })
    .then((dbPartData) => {
      const parts = dbPartData.map((part) => part.get({ plain: true }));

      res.render("homepage", {
        parts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/part/:id", (req, res) => {
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

      const part = dbPartData.get({ plain: true });

      res.render("single-part", {
        part,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
