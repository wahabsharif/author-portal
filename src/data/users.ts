import md5 from "md5";

interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  penName: string;
  telNo: string;
  signupDate: Date;
  lastLoggedIn: Date;
  status: "Active" | "Inactive";
}

const users: User[] = [
  {
    id: 1,
    email: "author1@example.com",
    password: md5("password1"),
    firstName: "John",
    middleName: "A.",
    lastName: "Doe",
    penName: "JDoeWrites",
    telNo: "123-456-7890",
    signupDate: new Date("2023-01-01"),
    lastLoggedIn: new Date("2023-09-01"),
    status: "Active",
  },
  {
    id: 2,
    email: "author2@example.com",
    password: md5("password2"),
    firstName: "Jane",
    middleName: "B.",
    lastName: "Smith",
    penName: "JSmithStories",
    telNo: "098-765-4321",
    signupDate: new Date("2023-03-15"),
    lastLoggedIn: new Date("2023-09-05"),
    status: "Inactive",
  },
  {
    id: 3,
    email: "author3@example.com",
    password: md5("password3"),
    firstName: "Alice",
    middleName: "C.",
    lastName: "Johnson",
    penName: "AJohnsonTales",
    telNo: "555-123-4567",
    signupDate: new Date("2023-05-10"),
    lastLoggedIn: new Date("2023-08-20"),
    status: "Active",
  },
  {
    id: 4,
    email: "admin@admin.com",
    password: md5("admin1122"),
    firstName: "Alice",
    middleName: "C.",
    lastName: "Johnson",
    penName: "AJohnsonTales",
    telNo: "555-123-4567",
    signupDate: new Date("2023-05-10"),
    lastLoggedIn: new Date("2023-08-20"),
    status: "Active",
  },
];

export default users;
