// inserting data in mongo
use AMitKart
db
db.items.insertOne({Name:"Samsung 30s",price:28000,rating:4.6,quantity:450,sold:103})

db.items.insertMany([{Name:"Samsung 30s",price:28000,rating:4.6,quantity:450,sold:103},{Name:"Moto 20+",price:22000,rating:3.6,quantity:450,sold:103},{Name:"iphone 20+",price:220000,rating:4.8,quantity:450,sold:206}])