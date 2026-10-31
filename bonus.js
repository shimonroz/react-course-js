import { students } from "./data.js";
import withGrade from "./report.js";

const studentsWithStatus = withGrade(students)

for(const student of studentsWithStatus)
   console.log(`${student.name}: ${student.status}`)

console.log(students[0].status)