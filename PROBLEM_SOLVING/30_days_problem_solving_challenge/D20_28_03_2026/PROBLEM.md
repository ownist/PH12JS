## Day 20 Problem

**Problem:** একটা function লিখতে হবে। Function Name `getUserSummary()`. এই function একটি array of objects নিবে। প্রতিটি object: `{ name: string, age: number }`

**তোমার কাজ:** তোমাকে একটি নতুন array return করতে হবে, যেখানে প্রতিটি user object transform হয়ে হবে: `{ name: string, isAdult: boolean }`

#

**Rule:**

> ```txt
> age >= 18 → isAdult = true
> age < 18 → isAdult = false
> ```

#

**Example 1:**

> **Input:**
>
> ```js
> [
>   { name: "A", age: 17 },
>   { name: "B", age: 20 },
> ];
> ```
>
> **Output:**
>
> ```js
> [
>   { name: "A", isAdult: false },
>   { name: "B", isAdult: true },
> ];
> ```

**Example 2:**

> **Input:** []
>
> **Output:** []

#

**Important Edge Case:** invalid data skip করবে

> **Input:**
>
> ```js
> [
>   { name: "A", age: 17 },
>   { name: "B" },
>   { name: "C", age: "20" },
>   { name: "D", age: 25 },
> ];
> ```
>
> **Output:**
>
> ```js
> [
>   { name: "A", isAdult: false },
>   { name: "D", isAdult: true },
> ];
> ```

#

**Function structure:**

```js
function getUserSummary(users) {
  // body
}
```

**Direction:** `loop → validate → transform → push`
