const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/auth-middleware");
const Posts = require("../posts/posts-model");


router.get("/", restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

//GET user's posts
router.get('/:id/posts', (req, res) => {
    let {id}= req.params.id
  Users.findById(id)
  .then(user =>{
      if(user){
          Posts.findBy({user_id: user.id}).then(posts =>{
              res.status(200).json({notification:`Information of ${user.username} post`, information: posts})
          })
          .catch(err =>{
              res.status(401).json({message: `Failed To Find Posts For: ${user.username}`, errMessage: err.message})
          })
      } else{
          res.status(401).json({message: `Failed To Find User With ID: ${req.params.id}`})
      }
  })
  .catch(err => {
      res.status(500).json({message: 'Failed To Get Users Posts', errMessage:err.message})
  })
})

module.exports = router;