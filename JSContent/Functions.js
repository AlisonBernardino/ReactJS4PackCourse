const anArray = [2,4,6,7,9,11,13,14,16,17,21,25]

// Map
// It will run a callback function to every array element
// It will return a execution result array from the callback

// Map callbacks can receive up to 03 parameters
function multiplyBy03(value){
    return value * 3
}

const mappedArray = anArray.map(multiplyBy03)

console.log(mappedArray)


// Another form
const secondMappedArray = anArray.map((currentItem) => {
  return currentItem * 4;
})

console.log(anArray)
console.log(secondMappedArray)


const reservatory = [
    {
        element: "Sand",
        limit: 1000
    },
    {
        element: "StoneA",
        limit: 3500
    },
    {
        element: "Glass",
        limit: 700
    },
    {
        element: "StoneB",
        limit: 3000
    },
    {
        element: "StoneC",
        limit: 3200
    },
    {
        element: "Iron3x5",
        limit: 400
    },
    {
        element: "Iron3x3",
        limit: 350
    },
    {
        element: "Iron3x1",
        limit: 320
    },
    {
        element: "BrickA",
        limit: 5000
    }
]

// Stopped: 14:38
// Returned: 14:58

