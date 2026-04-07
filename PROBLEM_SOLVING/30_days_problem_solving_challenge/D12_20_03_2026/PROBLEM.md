## Day 12 Problem

**Problem:** একটা function লিখতে হবে। Function name `groupEvenOdd()`. এই function একটি array of numbers parameter হিসেবে নিবে। তোমাকে numbers গুলোকে even এবং odd আলাদা করে group করতে হবে এবং একটি object return করতে হবে।

**Output structure:**

```js
{
  even: [...],
  odd: [...]
}
```

#

**Example 1:**

> **Input:** [1, 2, 3, 4, 5, 6]
>
> **Output:**
>
> ```js
> {
>   even: [2, 4, 6],
>   odd: [1, 3, 5]
> }
> ```

**Example 2:**

> **Input:** [7, 9, 11]
>
> **Output:**
>
> ```js
> {
>   even: [],
>   odd: [7, 9, 11]
> }
> ```

**Example 3:**

> **Input:** []
>
> **Output:**
>
> ```js
> {
>   even: [],
>   odd: []
> }
> ```

**Rules:** তুমি ব্যবহার করতে পারবে না `filter()`. নিজের loop + condition ব্যবহার করতে হবে।

#

**Function structure:**

```js
function groupEvenOdd(arr) {
  // body
}
```

**Edge Case:**

- Empty array → `{ even: [], odd: [] }`

##

**Bonus (optional):**

> **যদি array তে invalid value থাকে:** [1, "a", 2, null, 3], তাহলে শুধু valid number গুলোই consider করবে।
>
> **Output:**
>
> ```js
> {
>   even: [2],
>   odd: [1, 3]
> }
> ```
