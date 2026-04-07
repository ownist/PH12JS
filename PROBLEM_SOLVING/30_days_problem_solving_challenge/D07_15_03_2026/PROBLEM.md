## Day 7 Problem

একটা function লিখতে হবে। Function name `getTotalPrice()`. এই function একটি array of objects parameter হিসেবে নিবে। প্রতিটি object একটি product represent করবে। তোমাকে সব product এর total price যোগ করে return করতে হবে।

**Example 1**

```md
input:
[
{ name: "Shirt", price: 500 },
{ name: "Pant", price: 1200 },
{ name: "Shoes", price: 2000 }
]

output: 3700
explanation: 500 + 1200 + 2000 = 3700
```

**Example 2**

```md
input:
[
{ name: "Book", price: 300 },
{ name: "Pen", price: 50 }
]

output: 350
```

**তুমি ব্যবহার করতে পারবে না:** `reduce()`. নিজের loop + logic ব্যবহার করতে হবে।

**Function structure**

```js
function getTotalPrice(products) {
  // body
}
```

**Edge Case**: Input যদি হয় `[]`, তাহলে return করবে: `0`

##

> [!TIP]
> **Bonus Challenge (optional)**
>
> যদি কোনো `object` এ `price` না থাকে: `{ name: "Bag" }`, তাহলে সেটা ignore করবে।
>
> **Example:**
>
> ```js
> [{ name: "Bag" }, { name: "Shoes", price: 2000 }];
> ```
>
> Output: `2000`
