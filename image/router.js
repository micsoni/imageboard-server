const express = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

const router = express.Router();

router.get("/images", async (req, res, next) => {
  try {
    const showImages = await Image.findAll();
    res.send(showImages);
  } catch (error) {
    next(error);
  }
});

router.post("/images", auth, async (req, res, next) => {
  try {
    const imageBody = req.body;
    console.log("BODY", imageBody);
    const postImage = await Image.create(req.body);
    res.send(postImage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// EXAMPLE from David, writing the async function first and using it as a callback
// async function getPosts (request, response, next) {
//   try {
//     const posts = await Post.findAll()

//     response.send(posts)
//   } catch (error) {
//     next(error)
//   }
// }

// router.get(
//   '/post',
//   getPosts
// )
