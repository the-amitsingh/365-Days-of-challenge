// This cdoes are not javascrips code this is just a code for Mongodpb

show dbs
use AmitKart
show collections

// to insert another new collection 
db.anothercollection.insertOne({a:89})

db.items.find()
//To update an object in the list 
db.items.updateOne ({name:"iphone 20+"},{$set: {price:2}})
db.items.find()
db.items.updateMany ({name:"iphone 20+"},{$set: {price:4,rating: 1}})