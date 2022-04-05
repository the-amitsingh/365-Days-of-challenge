// This cdoes are not javascrips code thsi si just a code for Mongodpb

show dbs
use AmitKart
show collections

db.items.find({price:22000})
//Deleting items from mongo database
db.items.deleteOne({price:22000})    //deleteOne will delete the matching entry and will delete the first entry in case of multi document match 

db.items.deleteMany({price: 129000})  //this is used to delete many items form the document.