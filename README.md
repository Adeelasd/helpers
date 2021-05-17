# NodeJs Helper

# basic set of helpers to make coding a bit easier 

## Installation

### npm i js-easify

## Usage

### exceptObj ```Js Function ```
 return an object without specified properties 
 e.g 
``` exceptObj({} as an Object , [] as list of Strings ) ```

### returnAsInt ```Js Function ```
 return anything as number useful when you dont know the return type and you want out put to be number
 e.g 
``` returnAsInt("44")   //44 returnAsInt(44)  //44 returnAsInt({})  //1 ```


## ESM and CJS support
This package supports TreeShanking for esm as well as seprate files for each function so you can use it in backend without bloating your application as well as chose between cjs and esm.

```e.g import { exceptObj, returnAsInt } from "js-easify" ``` or ``` const { returnAsInt } = require( "js-easify" ) ```
### //Or 
``` e.g import { returnAsInt } from "js-easify/esm/returnAsInt.js" ```
or 
``` const { returnAsInt } =require("js-easify/cjs/returnAsInt.js") ```