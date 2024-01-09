// const User = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "archit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vinit",
            lastname: "yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course // destructuring

// console.log(courseInstructor);
console.log(instructor);

