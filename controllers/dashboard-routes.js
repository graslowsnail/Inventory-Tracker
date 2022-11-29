const router = require("express").Router();
const sequelize = require("../config/connection");
const { Part } = require("../models");
const withAuth = require("../utils/auth");

// get all parts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Part.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "stock"],
  })
    .then((dbPartData) => {
      const parts = dbPartData.map((part) => part.get({ plain: true }));
      res.render("dashboard", { parts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Part.findByPk(req.params.id, {
    attributes: ["id", "title", "stock"],
  })
    .then((dbPartData) => {
      if (dbPartData) {
        const part = dbPartData.get({ plain: true });

        res.render("edit-part", {
          part,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
