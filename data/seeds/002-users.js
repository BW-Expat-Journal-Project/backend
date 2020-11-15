exports.seed = function(knex) {

   
  // Inserts seed entries
  return knex('users').insert([
    {
      firstname: "kanye", 
      lastname: 'west',
      username: 'kanyewest',
      password: 'password'
    },

    {
      firstname: "cool", 
      lastname: 'beans',
      username: 'coolbeans',
      password: 'password1'
    },

    {
      firstname: "sleepy", 
      lastname: 'tired',
      username: 'yawn',
      password: 'password2'
    },
  ]);

};