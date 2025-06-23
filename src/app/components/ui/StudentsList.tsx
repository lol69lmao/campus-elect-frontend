import React from 'react';

export type StudentType = {
  studentId: string;
  department: string;
  email: string;
  name: string;
  role: "STUDENT" | "ADMIN";
}

const StudentsList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students`
  );
    const students: StudentType[] = await res.json();

  return (
    <div>
      {students.map((student, index) =>{
        return <p key={`${student}_${index}}`}>{student.name}</p>
      })}
    </div>
  )
}

export default StudentsList
