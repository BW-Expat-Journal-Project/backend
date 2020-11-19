const db = require("../api/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAllUsersPosts,
  findPosts
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).select("users.id", "users.username", "users.password").orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function getAllUsersPosts(userId) {
  return db( "posts" ).where( { users_id: userId } );
};

function findPosts(id){
  return db('users')
  .join('posts', 'posts.id', 'users.id')
  .select('users.username','posts.id', 'posts.title', 'posts.description','posts.photo_url')
  .where({'users.id':id})
  .orderBy('posts.id');
}