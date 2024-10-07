// //Infer Types (Implicit Types)
// let userName = 'Habeeb Rahman' //typescript infer it that was a "string"
// let age = 22 //it is a "number"


// //Define Types (Explicit Types)
// let userName: String = "Habeeb"
// let age: Number = 22
// let isStudent: Boolean = true
// let skills: String[] = ['HTML', 'CSS', 'JS', 'REACT', 'TS'] //Array of string
// let count: Number[] = [1,2,3,4,5] //Array of numbers
// let userDetail: {name:string; age:Number} = { //object
//     name: 'Habeeb',
//     age: 22
// }
// userDetail.name // Output: Habeeb


// // Interface
// interface Details {
//     name: string;
//     age: number;
//     getName: () => void; //declare type of function
// }

// let userDetail: Details = {
//         name: 'Habeeb',
//         age: 22,
//         getName() {
//             console.log(userDetail.name)
//         },
//     }

// //we can also re-open the interface
// interface User {
//     name: string,
//     age: number,
//     isStudent: boolean
// }

// interface User{
//     studentId: number
// }


// // Type
// type Details = {
//     name: string;
//     age: number;
//     getName: () => void;
// }

// let userDetail: Details = {
//     name: 'Habeeb',
//     age: 22,
//     getName() {
//         console.log(userDetail.name)
//     },
// }


// // Union / Optional
// type Details = {
//     name: string;
//     age: number | string; // we can add multiple types
//     getName?: () => void; // adding '?' make it optional (when it is not compulsory )
//     //if i not added this function when making the object there is no error.
// }

// let skills: (string | number | boolean)[] = ['HTML', 'CSS', 10, 20, false] //here i used multiple types


// //Functions
// type Details = {
//     name: string;
//     age: number;
//     getName?: () => void;
// }
// let userDetail: Details = {
//     name: 'Habeeb',
//     age: 22
// }

// function getName(userDetail:Details){ //we have to define the types
//     return userDetail.name
// }

// getName(userDetail)


// //if we not needed the reusability (it only use when there is one or two variable)
// function getName({name, age} : {name:string; age:number}){  //inline method
//     return name
// }

// getName({name: "habeeb", age: 20})


// //passing the parameter types
// type Details = {
//     name: string;
//     age: number;
//     getName?: () => void;
// }
// let userDetail: Details = {
//         name: 'Habeeb',
//         age: 22
//     }

// function getName(userDetail:Details):string{
//     return userDetail.name
// }

// const newVal = getName(userDetail)

// newVal.toLowerCase //we can use string methods here bcz of we pass the string


// //if we pass 'void' that means we are not returning anything
// type Details = {
//     name: string;
//     age: number;
//     getName?: () => void;
// }
// let userDetail: Details = {
//     name: 'Habeeb',
//     age: 22
// }

// function getName(userDetail: Details): void {
//     console.log(userDetail.name)
// }
// getName(userDetail)


// //we can also pass the custom type that we created
// type Details = {
//     name: string;
//     age: number;
//     getName?: () => void;
// }
// let userDetail: Details = {
//     name: 'Habeeb',
//     age: 22
// }

// function getName(userDetail:Details): Details {
//     return userDetail
// }
// getName(userDetail)


// //Named Types
// type StatusType = "pending" | "completed" | "failed"
// type ToggleType = "on" | "off"

// let currentStatus: StatusType = "pending"
// let toggleSwitch :ToggleType = "off"

// if (currentStatus = "completed"){
//     toggleSwitch = "on"
// }


// //Function Overloading
// //in normal way we have to do this much when adding string
// function add(num1: number | string, num2: number | string): number | string {
//     if (typeof num1 === "string" || typeof num2 === "string") {
//         return num1 + "" + num2
//     }
//     return num1 + num2
// }

// //so we use function overloading in this case
// function add1(num1: string, num2: string): string
// function add1(num1: number, num2: number): number
// function add1(num1: any, num2: any): any {
//     return num1 + num2;
// }

// add1(2, 2) // 4
// add1("2", "2") // 22
// add1([],[]) //we cant check array becoz there is 2 overload function string and number


//// Generic (generic infer the type)
// function getAge<T>(age: T): T {
//     return age
// }

// getAge(20) //when we pass 20 it automatically change to number
// getAge<string>("20") //we can pass the type too.


// //another example for Generic
// type UserDetail = {
//     name: string;
//     age: number;
// }

// type AdminDetail = {
//     firstName: string;
//     role: string;
// }

// const userDetail = {
//     name: 'Habeeb',
//     age: 22
// }

// const adminDetail = {
//     firstName: 'Ansaf',
//     role: 'Developer'
// }

// function getDetail<T>(detail: T): T {
//     return detail
// }

// const user = getDetail<UserDetail>(userDetail)
// const admin = getDetail<AdminDetail>(adminDetail)

// user.name
// admin.firstName


// //we can also merge the two types
// type UserDetail = {
//     name: string;
//     age: number;
// }

// type AdminDetail = UserDetail & { //pulled the UserDetail into the AdminDetail
//     role: string;
// }

// const adminDetail:AdminDetail = {
//     name: "habeeb",
//     age: 20,
//     role: "developer"
// }


// // we can also merge the two interface
// interface UserDetail {
//     name: string;
//     age: number;
// }

// interface AdminDetail extends UserDetail { //pulled the UserDetail into the AdminDetail
//     role: string;
// }

// const adminDetail:AdminDetail = {
//     name: "habeeb",
//     age: 20,
//     role: "developer"
// }


//Enums (define a set of named constant)
// enum StatusType {
//     PENDING = "pending",
//     COMPLETED = "completed",
//     FAILED = "failed",
// }

// function getStatus(orderId:string, status:StatusType){
//     console.log(orderId, "==", status)
// }

// getStatus('636321', StatusType.COMPLETED)


// // as const
// let userName = "Habeeb" as const; //make it read only

// userName = 'Habeeb'


// //keyof typeof
// const StatusType = {
//     PENDING : "pending",
//     COMPLETED : "completed",
//     FAILED : "failed"
// }

// function getStatus(orderId: string, status: keyof typeof StatusType){
//     // console.log(orderId, StatusType[status]) // we can get the key from the status type
//     console.log(orderId, status) //this can get the type from the status type
// }

// getStatus("1235", "COMPLETED")


// //Utility Type
// //Readonly Utility
// type users = {
//     name: string;
//     age: number;
// }

// const userDetail: Readonly<users> = {
//     name: "Habeeb",
//     age: 22
// }

// userDetail.name = "ansaf"

// //Partial Utility
// type users = {
//     name: string;
//     age: number;
// }

// const userDetail: Partial<users> = {
//     name: "Habeeb",
//     age: 22
// }

// userDetail.name = "ansaf"

// //Required Utility
// type users = {
//     name?: string;
//     age?: number;
// }

// const userDetail: Required<users> = {
//     name: "Habeeb",
//     age: 22
// }

// userDetail.age = 20

// //Pick utility
// type users = {
//     name: string;
//     age: number;
//     salary: number;
//     role: string;
//     isMarried: boolean;
// }
// //i only want 'name', 'age' and 'role' so,
// const userDetail: Pick<users, "name" | "age" | "role"> = {
//     name: "Habeeb",
//     age: 22,
//     role: "developer"
// }

// //Omit utility
// type users = {
//     name: string;
//     age: number;
//     salary: number;
//     role: string;
//     isMarried: boolean;
// }
// //i want to remove 'isMarried' so,
// const userDetail: Omit<users, "isMarried"> = {
//     name: "Habeeb",
//     age: 22,
//     role: "developer",
//     salary: 25_000
// }

// //Exclude Utility
// type StatusType = "pending" | "completed" | "failed"
// const status: Exclude<StatusType, "pending"> = "completed"

// //Record Utility
// const foods: Record<string, any> = {
//     Chicken: "Alfaham",
//     Beef: 10,
//     Meals: false
// }


// //Any
// let username:any = 10

// username.toLowerCase //using a string property to a number still no error


// //Unknown
// let username: unknown

// const newValue = username as string

// newValue.


// // Never
// function throwError(message: string) : never {
//     throw new Error(message)
// }


// //Void
// type UserDetail = {
//     name: string,
//     getUserName : (message:string) => void
// }

// const user1 : UserDetail = {
//     name : "Habeeb Rahman",
//     getUserName(message) {
//         console.log(message);
//     },
// }


// //Null
// let username: null = null

// function change(){
//     if (username === null) {
//         return 'username is null'
//     }
// }


//commented all for use only we wanted and run safely
//that double commented is the heading.