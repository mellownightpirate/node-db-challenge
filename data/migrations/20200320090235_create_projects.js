exports.up = function(knex) {
    return knex.schema
      .createTable("projects", table => {
        table.increments("projectId");
        table
          .string("title", 128)
          .notNullable()
          .unique();
        table.text("projectDescription");
        table.boolean("completed").defaultTo(false);
      })
      .createTable("resources", table => {
        table.increments("resourceId");
        table
          .string("resourceName", 140)
          .notNullable()
          .unique();
        table.text("resourceDescription");
    })
    .createTable("projectResources", table => {
      table.increments();
      table
        .integer("projectId")
        .unsigned()
        .notNullable()
        .references("projectId")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("resourceId")
        .unsigned()
        .notNullable()
        .references("resourceId")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tasks", table => {
      table.increments("taskID");
      table
        .integer("projectId")
        .unsigned()
        .notNullable()
        .references("projectId")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("taskDescription").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("projectResources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};