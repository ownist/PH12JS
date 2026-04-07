## Day 29 Problem

**Problem:** একটা function লিখতে হবে। Function name `getMostFrequentCategory()`

**Data Structure:**

```js
[
  { name: string, category: string },
  ...
]
```

**তোমার কাজ:** সব items এর মধ্যে যে category সবচেয়ে বেশি বার এসেছে, সেটার নাম return করতে হবে, return type `string`

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "A", category: "Fruit" },
>   { name: "B", category: "Fruit" },
>   { name: "C", category: "Vegetable" },
> ];
> ```
>
> **Output:** "Fruit"

**Example 2**

> **Input:**
>
> ```js
> [
>   { name: "A", category: "Fruit" },
>   { name: "B", category: "Vegetable" },
>   { name: "C", category: "Vegetable" },
>   { name: "D", category: "Fruit" },
> ];
> ```
>
> **Output:** "Fruit"
>
> **_tie হলে → first occurring category return করবে_**

**Example 3**

> **Input:** []
>
> **Output:** null

#

**Important Edge Case**

- invalid data skip করবে

> ```js
> [
>   { name: "A", category: "Fruit" },
>   { name: "B" },
>   { name: "C", category: 123 },
>   { name: "D", category: "Fruit" },
> ];
> ```
>
> **Output:** "Fruit"

**Direction:** `loop → count (object) → track max → return category`

**অনেকেই ভুল করে:** `for (const key in obj)` এবং পরে order lose করে

**Hint:**

- তুমি 2টা variable use করতে পারো
- `maxCount`
- `resultCategory`

#

**Function structure**

```js
function getMostFrequentCategory(items) {
  // body
}
```
