exports.seed = function(knex) {

   
  // Inserts seed entries
  return knex('users').insert([
    {
      //id: 1,
      firstname: "kanye", 
      lastname: 'west',
      username: 'kanyewest',
      password: 'password'
    },

    { //id: 2,
      firstname: "cool", 
      lastname: 'beans',
      username: 'coolbeans',
      password: 'password1'
    },

    { //id: 3,
      firstname: "sleepy", 
      lastname: 'tired',
      username: 'yawn',
      password: 'password2'
    },
  ]);

};