## Day 18 Problem

**Problem:** একটা function লিখতে হবে। Function name `groupByCategory()`. এই function একটি array of objects নিবে। প্রতিটি object এর structure: `{ name: string, category: string }`. তোমাকে objects গুলোকে category অনুযায়ী group করতে হবে।

#

**Output structure:**

```js
{
  category1: [objects...],
  category2: [objects...]
}
```

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "Apple", category: "Fruit" },
>   { name: "Carrot", category: "Vegetable" },
>   { name: "Banana", category: "Fruit" },
> ];
> ```
>
> **Output:**
>
> ```js
> {
>  Fruit: [
>    { name: "Apple", category: "Fruit" },
>    { name: "Banana", category: "Fruit" }
>  ],
>  Vegetable: [
>    { name: "Carrot", category: "Vegetable" }
>  ]
> }
>
> ```

**Example 2**

> **Input:** []
>
> **Output:** {}

#

**Edge Case (খুব গুরুত্বপূর্ণ):**

> **invalid data skip করবে**
>
> ```js
> [
>   { name: "Apple", category: "Fruit" },
>   { name: "Carrot" },
>   { name: "Banana", category: 123 },
> ];
> ```
>
> **Output:**
>
> ```js
> {
>   Fruit: [{ name: "Apple", category: "Fruit" }];
> }
> ```

#

**Function structure:**

```js
function groupByCategory(items) {
  // body
}
```

#

**Direction**

**ভাবো:** `object[key] = array`

- যদি key না থাকে → create array
- থাকলে → push

**Example চিন্তা:**

```md
Fruit → create []
Fruit → push
Vegetable → create []
```
