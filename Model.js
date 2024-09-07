// User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database_z'); // Ensure the correct path to your db connection file

// Define the User model
const User = sequelize.define('User', {
  // Define columns
  UserId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Model options
  timestamps: true, // Adds createdAt and updatedAt timestamps
  tableName: 'NewUser', // Table name in the database
});

//Menu table

const Menu = sequelize.define('Menu', {
  menu_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  restaurant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  
},
{
  // Model options
  timestamps: true, // Adds createdAt and updatedAt timestamps
  tableName: 'Menu', // Table name in the database
});

// Restaurents database

const Restaurants = sequelize.define('Restaurants', {
  restaurant_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  
},
{
  // Model options
  timestamps: true, // Adds createdAt and updatedAt timestamps
  tableName: 'newRestaurants', // Table name in the database
});

Menu.belongsTo(Restaurants, {foreignKey:"restaurant_id"});
Restaurants.hasMany(Menu, {foreignKey:"restaurant_id"});
//relations to order tables






// Sync the model with the database
(async () => {
  try {
    await sequelize.sync({ alter: true }); // This will update the table without dropping it
    console.log('The table for the User model was just synchronized without being dropped!');
  } catch (error) {
    console.error('Error syncing the User model:', error);
  }
})();



// order data model



const Order = sequelize.define('Order', {
  restaurant_id: {
    type: DataTypes.INTEGER,
    
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'UserId',
    },
    
  },
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  order_total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    
  },
  delivery_status: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  
},
{
  // Model options
  timestamps: true, // Adds createdAt and updatedAt timestamps
  tableName: 'Orders', // Table name in the database
});






module.exports = {User:User,
Menu:Menu, Restaurants:Restaurants, Order: Order};

