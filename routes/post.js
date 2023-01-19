const express = require("express");
const router = express.Router();
const Post = require("../Model/Post");
// {================================GET METHOD===================================}
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
// {================================POST METHOD===================================}
router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    Title: req.body.Title,
    Year: req.body.Year,
    imdbID: req.body.imdbID,
    Type: req.body.Type,
  });
  try {
    const SavedPost = await post.save();
    res.status(201).send(SavedPost);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
// {================================SPECIFIC POST  METHOD===================================}
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
// {================================UPADTE SPECIFIC POST  METHOD===================================}
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          Title: req.body.Title,
          Year: req.body.Year,
          imdbID: req.body.imdbID,
          Type: req.body.Type,
        },
      }
    );
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
// {================================DELETE  METHOD===================================}
router.delete("/:postId", async (req, res) => {
    try {
        const DleData = await Post.remove({ _id: req.params.postId });
        res.status(200).send(DleData);
    } catch (error) {
        res.status(400).send({ message: error });
    }
});
// {================================QUERY  METHOD===================================}

module.exports = router;
