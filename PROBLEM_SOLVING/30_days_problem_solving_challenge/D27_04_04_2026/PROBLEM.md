## Day 27 Problem

**Problem:** একটা function লিখতে হবে। Function name `getTopScorer()`

Data Structure:

```js
[
  { name: string, score: number },
  ...
]
```

**তোমার কাজ:** array থেকে highest score যেই user এর, তাকে return করতে হবে, return করবে পুরো object

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "A", score: 50 },
>   { name: "B", score: 80 },
>   { name: "C", score: 70 },
> ];
> ```
>
> **Output:**
>
> ```js
> { name: "B", score: 80 }
> ```

**Example 2**

> **Input:**
>
> ```js
> [
>   { name: "A", score: 90 },
>   { name: "B", score: 90 },
> ];
> ```
>
> **Output:**
>
> ```js
> { name: "A", score: 90 } // যদি tie হয় → first occurrence return করবে
> ```

**Example 3**

> **Input:** []
>
> **Output:** null

#

**Important Edge Case**

- invalid data skip করবে

```js
[
  { name: "A", score: 50 },
  { name: "B" },
  { name: "C", score: "80" },
  { name: "D", score: 70 },
];
```

**Output:** `{ name: "D", score: 70 }`

#

**Function structure**

```js
function getTopScorer(users) {
  // body
}
```

**Direction:** `loop → validate → compare → update top`
