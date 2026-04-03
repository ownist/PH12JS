## Day 26 Problem

**Problem:** একটা function লিখতে হবে। Function name `getCleanUsernames()`

**Data Structure:** এই function একটি array নিবে

```js
[
  { username: string, isActive: boolean },
  ...
]
```

**তোমার কাজ:** শুধু সেই user গুলো নিবে যাদের `isActive === true`, তারপর return করবে একটি array of usernames `সব username → lowercase → unique`

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { username: "Shahed", isActive: true },
>   { username: "RAHIM", isActive: true },
>   { username: "karim", isActive: false },
> ];
> ```
>
> **Output:** ["shahed", "rahim"]

**Example 2**

> **Input:**
>
> ```js
> [
>   { username: "A", isActive: true },
>   { username: "a", isActive: true },
>   { username: "B", isActive: true },
> ];
> ```
>
> **Output:** ["a", "b"]
>
> - **_duplicate remove করতে হবে (case-insensitive)_**

**Example 3**

> **Input:** []
>
> **Output:** []

#

**Important Edge Case**

- invalid data skip করবে

```js
[
  { username: "A", isActive: true },
  { username: 123, isActive: true },
  { username: "B", isActive: "true" },
  { isActive: true },
];
```

**Output:** `["a"]`

#

**Function structure**

```js
function getCleanUsernames(users) {
  // body
}
```

#

**Direction:** `loop → validate → toLowerCase → check duplicate → push`

**অনেকেই ভুল করে:** `if (user.username)`

**Correct validation:**

```js
typeof user.username === "string";
user.isActive === true;
```

**Goal:** `filter + transform + unique`
