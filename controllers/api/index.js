const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const partRoutes = require("./part-routes");
// const commentRoutes = require('./comment-routes');

router.use("/users", userRoutes);
router.use("/parts", partRoutes);
// router.use("/comments", commentRoutes);

module.exports = router;
