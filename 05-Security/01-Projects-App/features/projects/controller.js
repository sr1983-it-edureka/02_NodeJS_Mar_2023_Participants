

const getAllProjects = (req, res) => {

  const allProjects = [
    {id: 1, name: 'Integration Project', client: 'Accenture', cost : 12345},

    {id: 2, name: 'Employee Management System', client: 'IBM', cost : 232345},

    {id: 3, name: 'On Prem + Cloud Integrator', client: 'Google', cost : 343032},

  ];

  res.send(allProjects);
}

module.exports = {getAllProjects};