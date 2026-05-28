# loops on arays 
 ## forEach — just run a function on each element

 <!-- nums.forEach((value, index, array) => {
    console.log(index, value);
}); -->



##  map — transform each element into something new


## filter — keep only elements that pass a condition 

##  reduce — boil the array down to a single value

- `acc` = accumulator (the running result)
- `n` = current element
- `0` = initial value of acc

**Step-by-step trace:**

- Start: acc = 0
- Step 1: acc = 0 + 1 = 1
- Step 2: acc = 1 + 2 = 3
- Step 3: acc = 3 + 3 = 6
- Step 4: acc = 6 + 4 = 10

`reduce` is the most powerful — and the most confusing at first. Give students lots of practice.



##  find — return the first matching element

## findIndex — return the index of the first match

## every — do ALL match?

## some — does AT LEAST ONE match?

#  Array Destructuring



# Spread and Rest with Arrays
- Spread — expand an array
- Rest — collect into an array

**Rule of thumb:**

- `...` on the **right side** of `=` or in a function call → **spread** (expands).
- `...` on the **left side** of `=` or in a parameter list → **rest** (collects).



