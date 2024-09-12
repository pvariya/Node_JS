const { Router } = require("express");
const {
  getUser,
  postUser,
  updateUser,
  deleteUser,
  upload,
} = require("../controllers/user_controller");

const userRouter = Router();

userRouter.get("/getUser", getUser);
userRouter.post("/postUser", upload.single("img"), postUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/upload", upload.single("img"), (req, res) => {
  console.log(req.file);
  res.send("file uploaded");
});
module.exports = userRouter;
