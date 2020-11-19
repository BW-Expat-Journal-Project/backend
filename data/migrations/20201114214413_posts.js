exports.up = function (knex) {
  return knex.schema
    .createTable("posts", (tbl) => {
      tbl.increments();
      tbl.string("title", 100).notNullable().unique();
      tbl.string("description", 250).notNullable();
      tbl.string("photo_url").notNullable();
      tbl
        .integer("users_id") //foreign key
        .unsigned() //do not allow interger to be negative
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

     };

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("posts");
    
};
