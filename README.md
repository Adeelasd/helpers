# NodeJs Helper

### basic set of helpers to make coding a bit easier 

## Installation

### npm i js-easify

## Usage




## Array

### isDistinct
checks if the value in array is distinct or not. if left empty will validate the entire array for distinct values.
``` isDistinct(any[],string?) ```

#### e.g
``` isDistinct(["foo","bar"]) //true isDistinct(["foo","bar","foo"]) //false isDistinct(["foo","bar","foo"],"bar") //true ```

### removeDuplicate  
 removes dublicate values from array.
 ``` removeDuplicate(Array<string>) ```
#### e.g 
``` removeDuplicate([1,2,3,2,3,1]) // [1,2,3]    ```

### pluck 
gets specific values from Array of objects.
``` pluck(Array<Object>,String)  ```

#### e.g
``` let data =[ { name:"foo" , id:1},{name:"bar" , id:2 } ]  ```
``` console.log(pluck(data,"name")) // ["foo","bar"]  ```

## Object

### sort 
 converts array of objects into an object based on key provided.
 ``` sort(Array<Object>,String) ```
#### e.g 
``` let data=[{ name:"foo" , id:1 },{ name:"bar" , id:2 }] ```

``` sort(data,"name") // { foo:{ id:1 , name:"foo" }, bar:{ id:2 , name:"bar" } }   ```

### mergeUp 
 merges child object with the parent object.
 ``` mergeUp(Object,String) ```
#### e.g 
``` let data ={ test:22 , foo:"aas" , val:{ foo:"aa" , bar:"bb" } } ```

``` mergeUp(data,"val") // { test: 22, foo: 'aa', bar: 'bb' }    ```

``` mergeUp(data,"val",false) // { test: 22, foo: 'aas', bar: 'bb' } ```


### exceptObj 
 return an object without specified properties.
``` exceptObj(Object ,Array<strings> ) ```

#### e.g
``` let data = { val1 : "22", val2 : "44" } ```

``` console,log( exceptObj( data , [ "val1" ] ) )  // { val2 : "44" } ```

## Int

### returnAsInt 
 return anything as number useful when you dont know the return type and you want out put to be number.
``` returnAsInt(any) ```

#### e.g
``` returnAsInt("44")   //44 returnAsInt(44)  //44 returnAsInt({})  //1 ```

## Url
### getParams 
 Get params from url provided and if left empty will get params from if in dom. used (query-string under the hood)
 ``` getParams(String) ```
### e.g 
``` let data='example.com?foo=bar' ```

``` getParams(data) // { foo : "bar" }   ```



## ESM and CJS support
This package supports TreeShanking for esm as well as seprate files for each function so you can use it in backend without bloating your application as well as chose between cjs and esm.

```e.g import { exceptObj, returnAsInt } from "js-easify" ```  or  ``` const { returnAsInt } = require( "js-easify" ) ```
### //Or 
``` e.g import  returnAsInt  from "js-easify/esm/Int/returnAsInt.js" ```
or 
``` const returnAsInt =require("js-easify/cjs/Int/returnAsInt.js") ```