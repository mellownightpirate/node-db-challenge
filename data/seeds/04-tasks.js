exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          projectId: 1,
          taskDescription: "Collect data from first quarter",
          notes:
            "Make sure data is first hand and reported by relevant personnel",
          completed: "false"
        },
        {
          projectId: 1,
          taskDescription: "Review the Spring customer feedback reports",
          completed: "false"
        },
        {
          projectId: 1,
          taskDescription: "Calculate all of the relevant metrics",
          completed: "false"
        },
        {
          projectId: 1,
          taskDescription: "Double check calculations with finance dept.",
          notes: "Don't get this bit wrong!",
          completed: "false"
        },
        {
          projectId: 1,
          taskDescription: "Speak to sales team on pipeline coverage",
          notes:
            "Be mindful of difficult conversations regarding poor performances",
          completed: "false"
        },
        {
          projectId: 2,
          taskDescription: "Review Summer sales projections",
          notes: "Look out for seasonal spikes",
          completed: "false"
        },
        {
          projectId: 2,
          taskDescription: "Review Summer stock, costs and sales",
          completed: "false"
        },
        {
          projectId: 2,
          taskDescription: "Compare YoY seasonality",
          completed: "false"
        },
        { projectId: 3, 
          taskDescription: "Attain Autumn YoY reports", 
          completed: "false" },
        {
          projectId: 3,
          taskDescription: "Speak to top management about expectations for Autumn",
          notes: "Big picture discussions",
          completed: "false"
        },
        {
          projectId: 3,
          taskDescription: "Rehearse presentation",
          notes: "Don't read from the script!",
          completed: "false"
        }
      ]);
    });
};
