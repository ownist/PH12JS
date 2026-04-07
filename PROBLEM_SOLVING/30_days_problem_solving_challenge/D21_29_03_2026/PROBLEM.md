## Day 21 Problem

**Problem:** একটা function লিখতে হবে। Funtion Name `countActiveAdults()`, এই function একটি array of objects নিবে। প্রতিটি object `{ name: string, age: number, isActive: boolean }`

#

**তোমার কাজ:** তোমাকে count করতে হবে

```txt
যেসব user:
- isActive === true
- age >= 18

এবং সেই count return করতে হবে (number)
```

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "A", age: 17, isActive: true },
>   { name: "B", age: 20, isActive: true },
>   { name: "C", age: 25, isActive: false },
> ];
> ```
>
> **Output:** 1
>
> _শুধু B valid_

**Example 2**

> **Input:**
>
> ```js
> [
>   { name: "X", age: 30, isActive: true },
>   { name: "Y", age: 40, isActive: true },
> ];
> ```
>
> **Output:** 2

**Example 3**

> **Input:** []
>
> **Output:** 0

#

**Important Edge Case**

> **invalid data skip করবে**
>
> ```js
> [
>   { name: "A", age: 20, isActive: true },
>   { name: "B", age: "30", isActive: true },
>   { name: "C", age: 25 },
>   { name: "D", age: 40, isActive: "true" },
> ];
> ```
>
> **Output:** 1
>
> _শুধু A valid_

#

**Function structure:**

```js
function countActiveAdults(users) {
  // body
}
```

**Direction:** `loop → validate → condition check → count++`
