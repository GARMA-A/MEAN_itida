```js
// use the facultySystem DB
use FacultySystemDB

// create a collection named student
db.student.insertOne({
  FirstName: "Ahmed",
  LastName: "Ali",
  Age: 20,
  Faculty: { Name: "Engineering", Address: "123 Main St" },
  Grades: [
    { CourseName: "Math", Grade: 85, Pass: true },
    { CourseName: "Physics", Grade: 70, Pass: true }
  ],
  IsFired: false
});

db.student.insertMany([
  {
    FirstName: "Mona",
    LastName: "Hassan",
    Age: 22,
    Faculty: { Name: "Science", Address: "456 Science Ave" },
    Grades: [
      { CourseName: "Biology", Grade: 90, Pass: true },
      { CourseName: "Chemistry", Grade: 65, Pass: true }
    ],
    IsFired: false
  },
  {
    FirstName: "Khaled",
    LastName: "Ahmed",
    Age: 19,
    Faculty: { Name: "Arts", Address: "789 Arts St" },
    Grades: [
      { CourseName: "History", Grade: 55, Pass: false },
      { CourseName: "Geography", Grade: 75, Pass: true }
    ],
    IsFired: true
  }
]);

// return all the student collection
db.student.find();

// return students with FirstName "Ahmed"
db.student.find({ FirstName: "Ahmed" });

// return students with LastName "Ahmed" or FirstName "Ahmed"
db.student.find({ $or: [{ FirstName: "Ahmed" }, { LastName: "Ahmed" }] });

// return students with firstname not equal "Ahmed" 
db.student.find({ FirstName: { $ne: "Ahmed" } });

// return students with Age less than 21
db.student.find({ Age: { $lt: 21 } });

// return students with isFired true
db.student.find({ IsFired: true });

// return students with Age greater than or equal to 21 and Faculty not null
db.student.find({ Age: { $gte: 21 }, Faculty: { $ne: null } });

// return students with firstname "Ahmed" and lastname "Ali"
db.student.find(
  { FirstName: "Ahmed" },
  { _id: 0, FirstName: 1, LastName: 1, IsFired: 1 }
);

// return students with firstname "Ahmed" and update lastname for all of them to "Mahmoud"
db.student.updateOne(
  { FirstName: "Ahmed" },
  { $set: { LastName: "Mahmoud" } }
);

// delete all the students with IsFired true
db.student.deleteMany({ IsFired: true });

// drop the student collection
db.student.drop();

// create a new database named FacultySystemDB
use FacultySystemDB
// drop the database if it exists
db.dropDatabase();
// create a new database named FacultySystemV2
use FacultySystemV2
// create a collection named Faculty
db.Faculty.insertOne({
  Name: "Engineering",
  Address: "123 Main St"
});
// create a collection named Course
db.Course.insertOne({
  Name: "Math",
  FinalMark: 100
});
// find the faculty ID for "Engineering" 
let facultyId = db.Faculty.findOne({ Name: "Engineering" })._id;
// find the course ID for "Math"
let courseId = db.Course.findOne({ Name: "Math" })._id;
// create a collection named student
db.student.insertOne({
  FirstName: "Sara",
  LastName: "Hany",
  IsFired: false,
  FacultyID: facultyId,
  Courses: [
    { CourseID: courseId, Grade: 88 }
  ]
});
```
