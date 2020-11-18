exports.up = function (knex) {
  return knex.schema
    .createTable("posts", (tbl) => {
      tbl.increments();
      // tbl
      //   .integer("users_id") //foreign key
      //   .unsigned() //do not allow interger to be negative
        // .references("id")
        // .inTable("users")
        // .onUpdate("CASCADE")
        // .onDelete("CASCADE");
      tbl.string("title", 100).notNullable().unique();
      tbl.string("description", 250).notNullable();
      tbl.string("photo_url").notNullable();
    })

    .createTable("users_posts_rela", (tbl) => {
      tbl
        .integer("users_id")
        .unsigned()
        .notNullable()
        // .references("id")
        // .inTable("users");

      tbl
        .integer("posts_id")
        .unsigned()
        .notNullable()
        // .references("id")
        // .inTable("posts");

        tbl.primary(['users_id', 'posts_id']);
    });
    
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users_posts_rela")
    .dropTableIfExists("posts");
};
