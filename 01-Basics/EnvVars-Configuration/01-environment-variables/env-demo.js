
const port = process.env.PORT
console.log(`Port used for the application is ${port}`);

const mysqlDbUrl = process.env.MYSQL_DB_URL;
console.log(`My SQL DB URL is ${mysqlDbUrl}`);

console.log(`${process.env.NODE_ENV}`)