import { sayHi, sayBye } from "./genarate.js";
import { addValue } from "./modules1/modules1.js";

sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John

console.log(addValue(10, 20));

/*const imported = require("./genarate.js");

console.log(imported);

imported.addValue(10, 20);
imported.subValue(200, 100);

console.log("Name " + imported.name);

console.log(imported.a);
*/
