const express = require("express");
const app = express();
const port = 8080;
const {User, Restaurants, Menu, Order} = require("./Model");
const sequelize = require('./database_z');


app.listen(port, (err)=> {
    if(err) console.log("Error"+err);
    else console.log("Server started successfully on port "+port);
});

app.use(express.json());

//const User = require('./User');

/// register api for  the new user

app.post("/registerUser", async (req,res) =>{
    const { username, email, phoneNumber, password} = req.body;
    console.log(username , email , phoneNumber , password  );

    try{

    const NewUser = await User.create({
        username,
        email,
        phoneNumber,
        password,
    });
    console.log(NewUser);

    res.status(201).send("User Created Successfully....");
}
catch(err){
    console.error("Error creating new user"+err);
}


//login..to find the user exist

});
app.post("/login", async (req, res) => {
        const { email, password } = req.body;

        // Query the user with correct "where" clause
        const findUser = await User.findOne({
            where: {
                email: email  // OR simply: email (as ES6 shorthand for email: em
            }
        });
        if(findUser) {
            const data = JSON.parse(JSON.stringify(findUser));
            console.log(data.password);
            if(data.password === password){
                res.status(200).send("LoggedIn successfully...");
            }
            else{
                res.status(400).send("Unauthorized login...");
            }
        }
        else{
             res.status(404).send("User not found");
            }
    });

// register api for the new restautent


    app.post("/registerRestaurant", async (req,res) =>{
        const { name, address, phone} = req.body;
        console.log(name , address , phone);
    
        try{
    
        const newRestaurants = await Restaurants.create({
            name,
            address,
            phone,
            
        });
        if(newRestaurants)
        {
            res.status(201).send("Restaurant added successfully....");
        }
        console.log(newRestaurants);
    
        
    }
    catch(err){
        console.error("Error creating new user"+err);
        res.status(404).send("Error while adding Restaurants....");
    }
});

// menu api

app.post("/registerMenu", async (req,res) =>{
    const { item_name, price,restaurant_id} = req.body;
    console.log(item_name , price,restaurant_id);

    try{

    const newMenu = await Menu.create({
        restaurant_id,
        item_name,
        price,
       
        
    });
    if(newMenu)
    {
        res.status(201).send("Item added successfully....");
    }
    console.log(newMenu);

    
}
catch(err){
    console.error("Error adding new Item"+err);
    res.status(404).send("Error while adding Item....");
}
});
    

app.post("/newOrder", async (req,res) =>{
    const { UserId, order_total,item_name,restaurant_id,delivery_status} = req.body;
    console.log(UserId , order_total,item_name,restaurant_id,delivery_status);

    try{

    const Orders = await Order.create({
        restaurant_id,
        UserId,
        item_name,
        order_total,
        delivery_status,
       
        
    });
    if(Orders)
    {
        res.status(201).send("Item added successfully....");
    }
    console.log(Orders);

    
}
catch(err){
    console.error("Error adding new Item"+err);
    res.status(404).send("Error while adding Item....");
}
});










// (nodemon zomato_api.js) ----- to run the program in the terminal
//(select * from "NewUser";).....always use " " to specify changes in table.