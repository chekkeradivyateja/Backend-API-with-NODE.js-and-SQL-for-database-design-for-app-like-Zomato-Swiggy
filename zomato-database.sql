create table NewUser (
UserId int primary key,
username varchar(255) not null,
email varchar(255) not null,
phoneNumber bigint not null,
password varchar(50)
);

select * from "NewUser";
CREATE TABLE newRestaurants (
    restaurant_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);
select * from "newRestaurants";

CREATE TABLE Menu (
    menu_id INT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (restaurant_id) references newRestaurants(restaurant_id)
	);
	select * from "Menu";

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    UserId INT NOT NULL,
    restaurant_id INT NOT NULL,
    item_name varchar(50) NOT NULL,
    order_total DECIMAL(10,2) NOT NULL,
    delivery_status VARCHAR(20) NOT NULL,
    FOREIGN KEY (item_name) REFERENCES "Menu"(item_name),
    FOREIGN KEY (UserId) REFERENCES "NewUser"("UserId"),
    FOREIGN KEY (restaurant_id) REFERENCES "newRestaurants"(restaurant_id)
);

select * from "Orders";

CREATE TABLE Payment (
    payment_id INT PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method VARCHAR(20) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES "Orders"(order_id)
);
select * from Payment;




	
