// Arrays and mutability
// We want to avoid it to mutate the original array
// .map(), .filter() and .reduce() don't modify the original array, they create a new array
// If your method mutates the array, first create a copy of the original array and then work with the copy
// Check if an array method mutates the array: https://doesitmutate.xyz


// Array methods

// Map: Changes every element in the array
// The length of the array remains the same
let numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(function (number) {
    return number * 2
})

console.log(doubled)


// Challenge: Use map to prefix a name with "Mr. ":
const beatles = ["john", "paul", "george", "ringo"]

const beatlesPrefixed = beatles.map(function (member) {
    return "mr. " + member
})

console.log(beatlesPrefixed)


//--------------------------------------
// How map works:
// function callback(number) {
//     return number * 2
// }

// function myMap(arr, callback) {
//     const doubledNumbers = []
//     for (let number of arr) {
//         const doubled = callback(number)
//         doubledNumbers.push(doubled)
//     }
//     return doubledNumbers
// }

// const doubledAgain = myMap(numbers, callback)
// console.log(doubledAgain)
//--------------------------------------


// We have an array of students and their performance in two projects
// (1) Change the array of objects to an array containing only names
// (2) Change the array to [{name: <name of student>, total: <sum of projects>}]

const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95 
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72
    }
]

// (1)
const studentNames = students.map(function (student) {
    return student.name
})

console.log(studentNames)

// (2)
const totals = students.map(function (student) {
    return {
        name: student.name,
        total: student.firstProject + student.secondProject
    }
})

console.log(totals)


//----------------------------------------------------


// Reduce: It reduces the array to one value
// The first value is automatically assigned to the accumulator
numbers = [2, 5, 7, 9]

const sum = numbers.reduce(function (acc, val) {
    console.log("acc is: ", acc)
    return acc + val
})

console.log(sum)


// We can also define an initial value for the accumulator
// Sometimes this is necessary
const words = ["foo", "bar", "baz"]

const lengths = words.reduce(function (acc, val) {
    return acc + val.length
}, 0)

console.log(lengths)


// Use reduce to sum up the ages of all people
const people = [
    { name: "Candice", age: 25 },
    { name: "Tommy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
]

const ages = people.reduce(function (acc, val) {
    return acc + val.age
}, 0)

console.log(ages)


// Challenge: Use reduce to sum up the rates of all reviews
const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	company: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comment: "It was really useful, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comment: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comment: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comment: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comment: "It broke really fast",
				rate: 2
			}
		]
}

const rates = product.reviews.reduce(function (acc, val) {
    return acc + val.rate
}, 0)

console.log(rates)


//----------------------------------------------------


// Filter: Filters the array based on conditions that are
// provided in the callback and returns a new array

// Filter the even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evens = numbers.filter(function (number) {
    // if (number % 2 === 0) {
    //     return true
    // }
    // return false
    // shorter:
    return number % 2 === 0
})

console.log(evens)


// Challenge: Filter all numbers larger than three
const largerThanThree = numbers.filter(function (number) {
    // if (number > 3) {
    //     return true
    // }
    // return false
    // shorter:
    return number > 3
})

console.log(largerThanThree)


// (1) Filter all the places with a price > 300
// (2) Write a function getTitlesOfPlacesWithPool
// that gets an array and returns an array containing
// only the titles of the places that have a pool
const places = [
	{
		title: "Awesome Suite 20 away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelonas center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
]

// (1)
const above300 = places.filter(function (place) {
    return place.price > 300
})

console.log(above300)

// (2)
function getTitlesOfPlacesWithPool(arr) {
    const pools = arr.filter(function(place) {
        // if (place.pool === true) {
        //     return true
        // }
        // return false
        // shorter:
        return place.pool
    })

    const titles = pools.map(function (place) {
        return place.title
    })

    return titles
}

const placesWithPool = getTitlesOfPlacesWithPool(places)
console.log(placesWithPool)


//----------------------------------------------------


// Split(): Turns a string into an array
// Reverse(): Reverses an array
const message = "hello world"
const arr = message.split("")
console.log(arr)

arr.reverse()
console.log(arr)

const messageReversed = arr.join("")
console.log(messageReversed)

// Nice trick to get the number of occurences of a character in a string:
"Hello World".split("o").length - 1


//----------------------------------------------------


// Sort: Sorts an array "in place" - the array is mutated
// Problem: Numbers are not sorted correctly

const cities = ["berlin", "barcelona", "lissabon"]

cities.sort()

console.log(cities)

numbers = [23, 7, 12, 45]

numbers.sort()

console.log(numbers)

// To sort numbers, we add a sorting function
numbers.sort(function (a, b) {
    // console.log(b, a)

    // Sort ascending:
    // if (b < a) {
    //     return 1
    // }
    // if (b > a) {
    //     return -1
    // }
    // if (a === b) {
    //     return 0
    // }
    // this sorts ascending
    return a - b
    // this sorts descending
    // return b - a
})


// (1) Sort reviews ascending by their rates
// (2) Add a secondary sort criterion:
// If two rates are the same, we want to sort by score

const reviews = [
	{
		name: 'foo',
		rate: 9,
		score: 7
	},
	{
		name: 'bar',
		rate: 9,
		score: 5
	},
	{
		name: 'baz',
		rate: 5,
		score: 4
	}
]

reviews.sort(function(a, b) {
    if (a.rate === b.rate) {
        return a.score - b.score
    }

    return a.rate - b.rate
})

console.log(reviews)


//----------------------------------------------------


// forEach()
// You cannot return from a for each, for that you need a for loop

const array = [3, 6, 9]

array.forEach(function (el, i, arr) {
    console.log("index: ", i)
    console.log("el: ", el)
    console.log("arr: ", arr)
})
