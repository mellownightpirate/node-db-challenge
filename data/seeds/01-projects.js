exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("projects")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          {
            title: "Q1 Sales Report",
            projectDescription: "A report summarising first quarter sales.",
            completed: false
          },
          {
            title: "Q2 Sales Report",
            projectDescription:
              "A report summarising second quarter sales.",
            completed: false
          },
          {
            title: "Q3 Sales Report",
            projectDescription: "A report summarising third quarter sales.",
            completed: false
          }
        ]);
      });
  };

  