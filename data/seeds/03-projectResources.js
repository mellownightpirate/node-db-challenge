exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("projectResources")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("projectResources").insert([
          { projectId: 1, resourceId: 1 },
          { projectId: 1, resourceId: 4 },
          { projectId: 1, resourceId: 6 },
          { projectId: 1, resourceId: 9 },
          { projectId: 1, resourceId: 8 },
          { projectId: 1, resourceId: 10 },
          { projectId: 1, resourceId: 11 },
          { projectId: 1, resourceId: 12 },
          { projectId: 1, resourceId: 13 },
          { projectId: 1, resourceId: 14 },
          { projectId: 2, resourceId: 2 },
          { projectId: 2, resourceId: 3 },
          { projectId: 2, resourceId: 4 },
          { projectId: 2, resourceId: 5 },
          { projectId: 2, resourceId: 6 },
          { projectId: 2, resourceId: 7 },
          { projectId: 2, resourceId: 8 },
          { projectId: 2, resourceId: 9 },
          { projectId: 2, resourceId: 10 },
          { projectId: 2, resourceId: 11 },
          { projectId: 2, resourceId: 12 },
          { projectId: 3, resourceId: 13 },
          { projectId: 3, resourceId: 14 }
        ]);
      });
  };