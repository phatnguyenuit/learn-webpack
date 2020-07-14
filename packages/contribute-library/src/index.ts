import { Student } from './typings/common';

export const printStudent = (student: Student) =>
  console.log(JSON.stringify(student, null, 2));
