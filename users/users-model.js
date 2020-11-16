const db = require("../api/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("user_id", "username").orderBy("user_id");
}

function findBy(filter) {
  return db("users").where(filter).select("users.user_id", "users.username", "users.password").orderBy("user_id");
}

async function add(user) {
  try {
    const [user_id] = await db("users").insert(user, "user_id");

    return findById(user_id);
  } catch (error) {
    throw error;
  }
}

function findById(user_id) {
  return db("users").where({ user_id }).first();
}