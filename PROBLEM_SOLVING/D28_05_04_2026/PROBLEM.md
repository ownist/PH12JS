## Day 28 Problem

**Problem:** একটা function লিখতে হবে। Function name `getLowestActiveScore()`

Data Structure:

```js
[
  { name: string, score: number, isActive: boolean },
  ...
]
```

**তোমার কাজ:** শুধু সেই user গুলো নিবে যাদের `isActive === true`. তারপর তাদের মধ্যে যাদের score সবচেয়ে কম, সেই user return করবে. return করবে পুরো object

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "A", score: 50, isActive: true },
>   { name: "B", score: 30, isActive: true },
>   { name: "C", score: 70, isActive: false },
> ];
> ```
>
> **Output:** { name: "B", score: 30, isActive: true }

**Example 2**

> **Input:**
>
> ```js
> [
>   { name: "A", score: 20, isActive: true },
>   { name: "B", score: 20, isActive: true },
> ];
> ```
>
> **Output:** { name: "A", score: 20, isActive: true }
>
> **_tie হলে → first occurrence_**

**Example 3**

> **Input:** []
>
> **Output:** null

#

**Important Edge Case**

- invalid data skip করবে

> ```js
> [
>   { name: "A", score: 50, isActive: true },
>   { name: "B", isActive: true },
>   { name: "C", score: "30", isActive: true },
>   { name: "D", score: 10, isActive: false },
> ];
> ```
>
> **Output:** { name: "A", score: 50, isActive: true }

#

**Function structure**

```js
function getLowestActiveScore(users) {
  // body
}
```

**Direction:** `loop → validate → filter (active) → compare (min) → update`
