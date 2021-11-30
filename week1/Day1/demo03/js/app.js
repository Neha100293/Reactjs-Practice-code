//Default import class
import Nokia from "./mobile.js";
const n =new Nokia();
n.valumeUp();

//named import
import { show } from "./mobile.js";
show();

import { a } from "./mobile.js";
console.log(a);