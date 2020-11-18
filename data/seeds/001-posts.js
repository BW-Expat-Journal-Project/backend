
exports.seed = function (knex) {
  const posts = [
    {
       id: 1,
      // user_id: 1,
      title: "First Expat Journal Title",
      description: "What do you write the First Expat Journal Title description",
      photo_url: "https://images.unsplash.com/photo-1542492026-44f6489c8c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1018&q=80"
    },
    {
       id: 2,
      // user_id: 2,
      title: "Second Expat Journal Title",
      description: "What do you write in the Second Expat Journal Title description",
      photo_url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 3,
      // user_id: 3,
      title: "Third Expat Journal Title",
      description: "What do you write in the Third Expat Journal Title description",
      photo_url: "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80"
    },
    {
      id: 4,
      // user_id: 4,
      title: "Fourth Expat Journal Title",
      description: "What do you write in Fourth Expat Journal Title description",
      photo_url: "https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
  ];
  return knex("posts").insert(posts);
};
