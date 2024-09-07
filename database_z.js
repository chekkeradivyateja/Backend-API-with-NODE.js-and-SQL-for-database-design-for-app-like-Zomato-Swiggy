
const {Sequelize } = require('sequelize');



const sequelize = new Sequelize('USER', 'postgres', '9550392007', {
    host: 'localhost',
    dialect: 'postgres',  // Use 'postgres' for PostgreSQL
  });

sequelize.authenticate()
.then(() =>{
    console.log("Connected to postgres successfully....");
})
.catch((err)=>{
    console.error("Unable to connect due to some error..."+err);
});


module.exports = sequelize;


// (node database_z.js) ----- to run the program in the terminal