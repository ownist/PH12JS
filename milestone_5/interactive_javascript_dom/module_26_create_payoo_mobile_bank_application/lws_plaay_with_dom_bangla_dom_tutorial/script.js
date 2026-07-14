// console.log(typeof document);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);

console.log(typeof document.head); // document er head tag er type: eita ekta object
console.log(document.head); // documnet er moddhe thaka head tag pabp
console.dir(document.head); // dekhte parbo je eita ekta object
console.log(document.body); // body tag ta pabo

console.log(document.all); // document er moddhe joto tag ache sokol kichu eksathe kore ekta HTMLAllCollections array like special type object er moddhe pabo

for (const element of document.all) {
  // loop through korte parbo
  console.log(element);
}

console.log("\n");

console.log(document.all[10]); // array er moto indexing kore tag pabo

/**
 * document er moddhe joto image, links, form etc etc ache sokol image ke pawer jonno ei code ta follow kora lagbe
 * eita abr ekta html collection er moto kore pabo but eita array na
 */
console.log(document.images);

console.log(document.links);
console.log(document.forms);
