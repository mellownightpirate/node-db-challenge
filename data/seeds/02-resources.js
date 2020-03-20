exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resourceName: "Time Spent Selling",
          resourceDescription: "Cost of sales team"
        },
        {
          resourceName: "Lead Response Time",
          resourceDescription: "Cost of sale"
        },
        {
          resourceName: "Opportunity Win Rate",
          resourceDescription: "Sales closed over the opportunities available"
        },
        { resourceName: "SPC (Sales Pipeline Coverage)" },
        {
          resourceName: "CAC (Customer Acquisition Cost)",
          resourceDescription:
            "(Money + Time Spent) / Number of Customers Acquired"
        },
        {
          resourceName: "CLV (Customer Lifetime Value)",
          resourceDescription:
            "(Annual revenue per customer * Customer relationship in years) – Customer acquisition cost)"
        },
        {
          resourceName: "Sales Cost Ratio",
          resourceDescription: "Compare CAC with average deal size"
        },
        { resourceName: "Monthly New Leads" },
        { resourceName: "Monthly Sales" },
        {
          resourceName: "Average Deal Size",
          resourceDescription: "Number of deals / Total Sales"
        },
        {
          resourceName: "Previous Year's Reports",
          resourceDescription: "Reports from previous years"
        }
      ]);
    });
};
