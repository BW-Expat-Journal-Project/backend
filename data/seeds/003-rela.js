exports.seed = function (knex) {
  // Inserts seed entries
  const users_posts_rela = [
    { users_id: 1, posts_id: 1 },
    { users_id: 2, posts_id: 2 },
    { users_id: 3, posts_id: 3 },
    { users_id: 4, posts_id: 4 },
  ];

  return knex("users_posts_rela").insert(users_posts_rela);
};
