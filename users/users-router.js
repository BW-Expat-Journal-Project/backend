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

router.get('/:id/posts', (req, res) => {
  Users.findById(req.params.id)
  .then(user =>{
      if(user){
          Posts.findBy({id: user.id}).then(posts =>{
              res.status(200).json(posts)
          })
          .catch(err =>{
              res.status(401).json({message: `Failed To Find Posts For: ${user.username}`, error: err.message})
          })
      } else{
          res.status(401).json({message: `Failed To Find User With ID: ${req.params.id} `})
      }
  })
  .catch(err => {
      res.status(500).json({message: 'Failed To Get Users Posts'})
  })
})

module.exports = router;