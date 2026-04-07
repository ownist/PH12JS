## Day 22 Problem

**Problem:** একটা function লিখতে হবে। Function name `groupCharacters()`. এই function একটি string parameter নিবে। তোমাকে characters গুলোকে group করতে হবে count সহ, return করবে একটি object: `{ a: 2, b: 1, c: 3 }`

#

**Example 1**

> **Input:** "aabccc"
>
> **Output:**
>
> ```js
> {
>   a: 2,
>   b: 1,
>   c: 3
> }
> ```

**Example 2**

> **Input:** "Hello"
>
> **Output:**
>
> ```js
> {
>   h: 1,
>   e: 1,
>   l: 2,
>   o: 1
> }
> ```
>
> **_case insensitive (সব small letter ধরো)_**

**Example 3**

> **Input:** ""
>
> **Output:** {}

#

**Important Rules**

**ignore করতে হবে:**

```txt
space (" ")
non-letter character (number, symbol)
```

#

**Example**

> **Input:** "a1 b!a"
>
> **Output:** `{ a: 2, b: 1}`

#

**Function structure**

```js
function groupCharacters(str) {
  // body
}
```

**Direction:** `loop → toLowerCase → validate → count`
