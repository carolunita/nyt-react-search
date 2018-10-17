const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/saved"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);
module.exports = router;