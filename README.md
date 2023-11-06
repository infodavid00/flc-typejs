# f-typejs

created by david flc

# about

typejs is a typechecker for javascript, when added in your project, it checks the value of your variables and ensures that it matches the type you defined for the variabe. it follows the syntax :

** let identifier = type(datatype, value); **

if the value of the variable does not match the type setted for the variable, then an error would be thrown :

\*\* type must be datatype got datatype

in javascript, arrays are threated as objects and float numbers are threated as numbers, in typejs things works diffrently, therefore arrays are threated as arrays and float numbers are threated as floats numbers.

# available datatypes

string,int,bool,null,undefined,empty,array,object, float.

note that empty returns an empty string and not an empty variable,

floats are not considered numbers but floats just like in python,

arrays are not considered objects (plain javascript) but are considered arrays.

# use cases

** npm i f-typejs **

import {type} from "f-typejs";

const str = type("string", "david flc");

const num = type("int", 50);

const bool = type("bool", true);

const nullt = type("null");

const undefinedt = type("undefined");

const empty = type("empty");

const array = type("array", ["david", "flc"]);

const object = type("object", { name: "DAVID" });

const float = type("float", 2.2);

console.log(str, num, bool, nullt, undefinedt, empty, array, object, float);

use values that doesnt match the types to playaround with typejs and see what errors are thrown.

# more

typejs also offeres typechecking for email, mobile, url and passwords.

** use cases **

import { test } from "f-typejs";

console.log(test("url", "https://github.com/infodavid00"));

console.log(test("email", "davidflc0@gmail.com"));

console.log(test("mobile", "+1234567890"));

console.log(test("password", "davidflc"));

note : typejs returns false if the values are not valid and <thevalues> if valid.

passwords does not validates the password but returns a message indicating if the password is ready (password length less than 6 greater than 26) or not.

# developer

davidflc da40au40@gmail.com, github.com/infodavid00
