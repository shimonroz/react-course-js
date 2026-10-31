
const withStatus = (students) =>
{
    const newStudents = [];
    for (const student of students)
    {
        newStudents.push ({...student , status: (student.grade >= 56) ? "pass" : "fail"});
    }
    return newStudents
}

export default withStatus;