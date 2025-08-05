# Use MongoDB to do the following assignments:
1. Create database named: FacultySystemDB.
2. Create collection (student) that has: 
- FirstName: string
- LastName: string
- Age: Number
- Faculty: An object that has Name and Address
- Grades: An array of objects, each object has: CourseName, Grade, Pass (Boolean).
- IsFired: Boolean
 3. Insert 3 (at least) documents in Student collection with different values.
- Try inserting one document.
- Try inserting many documents using one insert statement.
- Retrieve the following data:
- All Students.
- Student with specific First Name.
- Students who his First Name=Ahmed, or Last Name= Ahmed.
- Students that their First name isn't "Ahmed".
- Students with Age less than 21.
- All fired students.
- Students with Age more than or equal to 21, and their faculty isn't NULL.
- Display student with specific First Name, and display his First Name, Last name, IsFired fields only.
5. Update the student with specific FirstName, and change his LastName.
6. Delete Fired students.
7. Delete all students collection.
8. Delete the whole DB.
9. Create new database named: FacultySystemV2.
- Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade).
- Create Faculty collection that has (Faculty Name, Address).
- Create Course collection, which has (Course Name, Final Mark).
- Insert some data in previous collections.

