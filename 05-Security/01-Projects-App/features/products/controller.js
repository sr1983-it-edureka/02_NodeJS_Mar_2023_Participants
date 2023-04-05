

const getAllProducts = (req, res) => {

  const allProducts = [
    {id: 1, name: 'Google Chrome'},

    {id: 2, name: 'Zoom Application'},

    {id: 3, name: 'Postman'},
  ];

  res.send(allProducts);
}

module.exports = {getAllProducts};