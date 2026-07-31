let courses = [
    {
        id: 101,
        title: "JavaScript Basics",
        instructor: "Rahul",
        students: 120,
        price: 2999,
        category: "Programming",
        rating: 4.8
    },
    {
        id: 102,
        title: "Python Masterclass",
        instructor: "Priya",
        students: 95,
        price: 3499,
        category: "Programming",
        rating: 4.6
    },
    {
        id: 103,
        title: "UI Design",
        instructor: "Amit",
        students: 60,
        price: 1999,
        category: "Design",
        rating: 4.2
    },
    {
        id: 104,
        title: "React Complete Guide",
        instructor: "Rahul",
        students: 150,
        price: 4999,
        category: "Programming",
        rating: 4.9
    },
    {
        id: 105,
        title: "Logo Design",
        instructor: "Sneha",
        students: 40,
        price: 1499,
        category: "Design",
        rating: 3.9
    }
];


// 1. displaying complete details of courses
courses.forEach(course=>
{
    console.log(course);
}
)

// 2. creating a new array that has ony course titles
let courseTitles = courses.map(course=>course.title);
console.log(courseTitles);

// Create another list where every course price has been increased by ₹500. The original course data must remain unchanged.

// 3. Creating an array to display the new course fees which is increased by 500
let courseNewFees = courses.map(course=>
{
    return {
        id: course.id,
        title: course.title,
        instructor: course.instructor,
        students: course.students,
        price: course.price + 500,
        category: course.category,
        rating: course.rating
    };
}
);

console.log(courseNewFees);

// 4. Creating a new array consisting of only course title and its instructor
let courseOverview = courses.map(course=>
{
    return {
        course: course.title,
        instructor: course.instructor
    }
}
)

console.log(courseOverview);

// 5. Creating a new field status for rating
let courseRating = courses.map(course=>
{
    let status;
    if(course.rating>=4.5)
    {
        status = "High Rated";
    }
    else 
    {
        status = "Average";
    }

    return{
        id: course.id,
        title: course.title,
        instructor: course.instructor,
        students: course.students,
        price: course.price,
        category: course.category,
        rating: course.rating,
        status: status
    }
}
)

console.log(courseRating);

// 6. Creating a simple string like statement
let courseStatement = courses.map(course=>
{
    return `${course.title} costs ₹${course.price}` 
}
)

console.log(courseStatement);

// 7. Creating a list for course titles to be displayed in uppercase
let courseCapital = courses.map(course=> course.title.toUpperCase());

console.log(courseCapital);

// 8. returning a list object with total earnings, students, and course title
let courseViewList = courses.map(course=>
{
    return {
        title: course.title,
        students: course.students,
        totalearnings: course.students*course.price
    }
}
)

console.log(courseViewList);

// 9. returning only courses with programming catgory
let courseProgramme = courses.filter(course=>course.category==="Programming");

console.log(courseProgramme);

// 10. displaying the courses costing less than or equal to 2999
let courseCost = courses.filter(course=>course.price<=2999);

console.log(courseCost);

// 11. Determing if every course has a rating grater than 4
let courseRatingCheck = courses.every(course=>course.rating>4);
if(courseRatingCheck)
{
    console.log("Yes, all courses have rating 4.")
}
else 
{
    console.log("No, not all courses have rating 4.");
}

// 12. Determing if every course belong to programming category
let courseCatCheck = courses.every(course=>course.category==="Programming");
if(courseCatCheck)
{
    console.log("Every Course belong to 'Programming' Category.");
}
else 
{
    console.log("Not Every Course belong to 'Programming' Category.");
}

// 13. Determing the last occurence of "Rahul"
let courseInst = courses.map(course=>course.instructor);

console.log(courseInst.lastIndexOf("Rahul"));

// 14. total revenue calculation from all courses
let courseTotal = courses.reduce((total, course)=>
{
    return total + (course.price*course.students);
}, 0);

console.log(courseTotal);