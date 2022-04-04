// searching  data in mongo
use AMitKart

// This query will give all the objects with ratings   equal to 3.6
db.items.find({rating:3.6})
//This wil give the object whose rating will be greater or equal to 3.6
db.items.find({rating: {$gte: 3.6}})
//This wil give the object whose rating will be greater to 3.6
db.items.find({rating: {$gt: 3.6}})

//And operator 
db.items.find({rating: {$gt: 3.6},price:{$gt: 4000}})  //greater than operator 

db.items.find({rating: {$lt: 5},price:{$gt: 100000}})   // less than operator 

db.items.find({$or:[{rating: {$lt: 5}}, {price:{$gt: 100000}}]})

//projection 
db.items.find({rating: {$gt: 3.6}},{rating: 1})