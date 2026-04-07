## Day 25 Problem

**Problem:** একটা function লিখতে হবে। Function name `getUserProductSummary()`. এই function একটি array of objects নিবে।

**Data Structure:**

```js
{
  name: string,
  isActive: boolean,
  products: [
    { name: string, category: string, price: number }
  ]
}
```

**তোমার কাজ**

> **শুধু সেই users গুলো নিবে যাদের:** `isActive === true`
>
> **তারপর তাদের সব products কে:** `category অনুযায়ী group করতে হবে`
>
> **এবং return করতে হবে:**
>
> ```js
> {
>  categoryName: {
>    totalItems: number,
>    totalPrice: number
>  }
> }
> ```

#

**Example**

**Input:**

```js
[
  {
    name: "A",
    isActive: true,
    products: [
      { name: "p1", category: "Fruit", price: 10 },
      { name: "p2", category: "Fruit", price: 20 },
      { name: "p3", category: "Vegetable", price: 15 },
    ],
  },
  {
    name: "B",
    isActive: false,
    products: [{ name: "p4", category: "Fruit", price: 50 }],
  },
];
```

**Output:**

```js
{
  Fruit: {
    totalItems: 2,
    totalPrice: 30
  },
  Vegetable: {
    totalItems: 1,
    totalPrice: 15
  }
}
```

#

**Important Edge Case**

**invalid data skip করবে:**

```js
[
  {
    name: "A",
    isActive: true,
    products: [
      { name: "p1", category: "Fruit", price: 10 },
      { name: "p2", category: 123, price: 20 },
      { name: "p3", category: "Vegetable" },
    ],
  },
  {
    name: "B",
    isActive: "true",
    products: [{ name: "p4", category: "Fruit", price: 50 }],
  },
];
```

**Output:**

```js
{
  Fruit: {
    totalItems: 1,
    totalPrice: 10
  }
}
```

#

**Function structure**

```js
function getUserProductSummary(users) {
  // body
}
```

#

**Direction:** `loop users → validate user → loop products → validate product → group + sum`

**অনেকেই ভুল করে:** `if (product.category && product.price)`

**Correct validation:**

```js
typeof product.category === "string";
typeof product.price === "number";
```

**Goal:** `nested loop + grouping + aggregation`
