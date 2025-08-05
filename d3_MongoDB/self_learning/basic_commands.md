# 📚 MongoDB Shell (mongosh) – Top 50 Most Used Commands

## 🔹 1. Basics
```javascript
mongosh                                // Start Mongo Shell
show dbs                               // List all databases
use myDatabase                         // Switch to / create a database
db                                     // Show current database
show collections                       // List all collections in current DB
exit                                   // Exit the shell


// 🔹 insert data
db.myCol.insertOne({ name: "Alice", age: 25 })   
db.myCol.insertMany([{ name: "Bob" }, { name: "Charlie" }])

// 🔹 query data
db.myCol.find()                         
db.myCol.find().pretty()                
db.myCol.find({ age: 25 })              
db.myCol.findOne({ name: "Alice" })     
db.myCol.find({ age: { $gt: 20 } })     
db.myCol.find({ age: { $lt: 30 } })     
db.myCol.find({ age: { $gte: 25, $lte: 30 } })
db.myCol.find({ $or: [ { name: "Alice" }, { age: 30 } ] })
db.myCol.find({}, { name: 1, age: 1, _id: 0 }) // Projection
db.myCol.find().limit(5)                
db.myCol.find().skip(5)                 
db.myCol.find().sort({ age: 1 })        
db.myCol.find().sort({ age: -1 })       

// 🔹 update data
db.myCol.updateOne({ name: "Alice" }, { $set: { age: 26 } })
db.myCol.updateMany({ age: { $lt: 25 } }, { $set: { status: "Young" } })
db.myCol.replaceOne({ name: "Bob" }, { name: "Bobby", age: 35 })

// 🔹 delete data
db.myCol.deleteOne({ name: "Alice" })
db.myCol.deleteMany({ age: { $gt: 30 } })

// Drop collection and database
db.myCol.drop()
db.dropDatabase()

// indexes
db.myCol.createIndex({ name: 1 })
db.myCol.getIndexes()
db.myCol.dropIndex({ name: 1 })
// aggregation

db.myCol.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { _id: "$status", total: { $sum: 1 } } }
])
//counting documents

db.myCol.countDocuments()
db.myCol.countDocuments({ age: { $gt: 25 } })
// distinct values

db.myCol.distinct("name")

//  rename 

db.myCol.renameCollection("newName")
db.stats()
db.myCol.stats()
db.myCol.validate()

// special names

db["Notes-App"].find()
db["weird name with spaces"].find()



```
