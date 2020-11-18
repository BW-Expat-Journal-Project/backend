const db = require("../api/config");

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove,
};
//Find all posts data
function find() {
  return db("posts").select("id", "title", "description", "photo_url");
}

//Find posts by id
function findById(id) {
  return db("posts")
    .select("id", "title", "description", "photo_url")
    .where({ id })
    .first();
}

//insert new post into db
function insert(newPost) {
  return db("posts")
    .insert(newPost)
    .returning(["id", "title", "description", "photo_url"]);
}

//Find posts by filter
function findBy(filter) {
  return db("posts").where(filter);
}

//update new infor of pj to db
function update(changes, id) {
  return db("posts").where({ id }).update(changes); //updates the record with 'changes' where the id matches
}

//remove post from database
function remove(id) {
  return db("posts").where({ id }).del();
}
