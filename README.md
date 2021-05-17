# NodeJs Helper

``` basic set of helpers to make coding a bit easier ```
## Usage

### exceptObj ```Js Function ```
 return an object without specified properties 
 e,g exceptObj({} as an Object,[] as list of Strings )

### returnAsInt ```Js Function ```
 return anything as number useful when you dont know the return type and you want out put to be number
 e.g ``` returnAsInt("44")   //44 returnAsInt(44)  //44 returnAsInt({})  //1 ```


## ESM and CJS support
This package supports TreeShanking for esm as well as seprate files for each function so you can use it in backend without bloating your application as well as chose between cjs and esm.

e.g import {exceptObj,returnAsInt} from "js-easify" or  const 
