const {
  login,
  register,
  getAllUsers,
} = require("../controller/userController");
const router = require("express").Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  getAllUsers(req, res, next);
});

router.post("/login", login);
router.post("/register", register);

module.exports = router;
