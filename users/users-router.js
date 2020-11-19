const router = require("express").Router();

const Users = require("./users-model");
const Posts= require('../posts/posts-model')
const restricted = require("../auth/auth-middleware");


router.get("/", restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id/posts", (req, res) => {
  const { id } = req.params;
  Users.findPosts(id)
    .then((posts) => {
      if (posts.length) {
        res.status(200).json({ getPostByUser: posts });
      } else {
        res
          .status(404)
          .json({
            message: `Failed To Find Posts For: ${user.username}`,
            error: err.message,
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed To Get Users Posts" });
    });
});


module.exports = router;