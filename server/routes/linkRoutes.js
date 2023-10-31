const router = require("express").Router();
const {getLink} = require("../controllers/getLink");

router.post("/",getLink);
console.log("works?");
module.exports = router;