---
title: "Point-Free"
slug: "point-free"
tags: ["Functional", "JavaScript"]
---

Fixed function is the idea of if you have more than 1 input, you fix an input to a “fixed” value (i.e function(x,y){ return x + y}, we would be fixing x to be a fixed value like 3)

Point free essentially means defining a function without having to declare its inputs or points

```
// person is the point/input
// onPerson and renderPerson have the same shape
// since they have the same shape their interchangeable
getPerson(function onPerson(person){
    return renderPerson(person)
})

// This is the same result, with no points or inputs
getPerson(renderPerson)
```

Why write point free style? Because it is moving us more closer to declarative programming. When we have points it is more imperative because we are mapping inputs to inputs. Imperative code is generally more explicit, declarative code is generally more implicit. Some would argue being explicit about your code is best, because it makes things obvious, but writing in a more implicit or declarative way allows for existing pieces to handle the unnecessary details (i.e points are unnecessary details that can be taken away to be more implicit / declarative)

```
function not(fn){
    // The imperative details are hidden inside of ths declartive not() function
    return function(...args){
        return !fn(...args)
    }
}

function isOdd(v){
    return v % 2 == 1;
}


// Because the not function callback and isOdd have the same argument "shape" we can use point free style
const isEvenPoints = not((val) => {
        val
        return isOdd(val)
    }
)


const isEvenNoPoints = not(isOdd)


isEvenPoints(4)   // true
isEvenNoPoints(4) // true
```
