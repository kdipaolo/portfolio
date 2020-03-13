---
title: "Composition"
slug: "composition"
tags: ["Functional", "JavaScript"]
---

# Composition
Composition is the idea of one functions output becoming the input to another function.


In the snippet below, a function call's output is getting routed to another variable that is getting used as a function's input.  This is a good use case for composition.  
```javascript
const minus2 = x => x - 2;
const triple = x => x * 3;
const increment = x => x + 1;
const basePrice = 4

let tmp = increment(4)
tmp = triple(tmp)
const = totalCost = basePrice + minus2(tmp)  // 17
```

Below is the first iterations of composition.  The order of operations here is right to left or inner to outer.  increment gets called, becomes the input ot triple, triple becomes the input to minus2.  However, this is hard to read and the functions are coupled together.
```javascript
const totalCost = basePrice + minus2(triple(increment(4))) // 17
```

## Abstraction
Abstraction is the idea of two or more things in a piece of code that are interwoven together.  In the snippet above, we're calculating the shipping rate and also adding the shipping rate to the base total.   Abstraction is the idea of "teasing" two things apart so that they are seperated.  This allows us not to hide, but seperate "chunks" of code, so that each "chunk" can be looked at seperatley without having to understand the other "chunk".  By seperating or abstracting our code is easier to understand/analyze. 

Using Abstraction below, we're seperating concernsm the shippingRate function is a semantic boundary that is seperating/abstracting from the program. 

```javascript
function shippingRate(x){
    return minus2(triple(increment(x)))
}
const totalCost = basePrice + shippingRate(4) // 17
```

## compose()
Compose() is a higher order function.  It takes in functions and outputs another function.  It executes right to left, passing the output of the last function into the input of the next function.  compose() works right to left because that is the order of execution if javascript.  i.e `one(two(3))` two gets exectued first and then one does. Composition is declarative data flow. 

```javascript
const internationalShippingRate = compose(minus2, triple, increment) 
const domesticShippingRate = compose(triple, minus2, increment) 
const inStateShippingRate = compose(increment, triple, minus2) 

const international = basePrice + internationalShippingRate(4) // 17
const domestic = basePrice + domesticShippingRate(4) // 13
const inState = basePrice + domesticShippingRate(4) // 11
``` 

pipe is similar to compose, except it operates from left to right.

### Pipe/Compose Implementation
```javascript
function compose(...fns){
    return pipe(...fns.reverse())
}

function pipe(...fns){
    return function piped(v){
        for(let fn of fns){
            v = fn(v)
        }
        return v
    }
}
```

## Composition with currying
Generally you only want to compose unary functions.  If you have a combination of unary and binary functions their shapes (input or outputs) will not match.  For example, in the snippet below, in order for the output of triple (unary) to compose into the input of sum (binary) you would need another argument.

```javascript
const sum = (x,y) => x + y // binary function
const triple = (x) => x * 3 // unary function
const divBy = (y, x) => x / y // binary function

divBy(2, triple( sum(3,5) ) ) // 12
```

In order to make the binary functions (sum, divBy) compose correctly you can curry the functions first.
```javascript
const sum2 = curry(2, sum) // Now a unary function
const divBy3 = curry(3, divBy) // Now a unary function
compose(divBy3(2), triple, sum2(3))
```
