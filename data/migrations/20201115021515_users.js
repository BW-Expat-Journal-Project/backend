
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('user_id')

        tbl.string('firstname', 100).notNullable()
        tbl.string('lastname', 100).notNullable()
        tbl.string('username', 255).notNullable().unique()
        tbl.string('password', 255).notNullable()
    })
    
};
  


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};
