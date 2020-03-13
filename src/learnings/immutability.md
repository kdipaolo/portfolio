---
title: "Immutability"
slug: "immutability"
tags: ["Functional", "JavaScript"]
---

# Immutability
Immutability is not just the idea that something isn't going to change.  Its the idea that things in our program don't change unexpectantly.  There is no program our there that is completley immutable.  We need state changes in our applications.  The point of immutability is that change that needs to occur, needs to be intentional.  It allows us to control change in our applications.  

## Two types of immutability 
### Assignment immutability 
The idea that when you assign something to a variable or property that it is no longer allowed to be reassigned to another value. 

An example of this is `const`.  `const` cannot be reassigned.  One thing to note is that when we change variables, that are not getting "changed" they are getting reassigned.  A whole new value is created in that memory space.  For example, when `basePrice` is getting "changed" we are actually computing 89.99 + 5.00 and then reassigning 94.99 as the new value of `basePrice`. 

```javascript
var basePrice = 89.99;
const shippingCost = 6.50;

basePrice += 5.00 // allowed
shippingCost += 1.04 // not allowed!
```
## Value immutability