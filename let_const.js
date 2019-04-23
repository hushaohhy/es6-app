/*
* 1、let命令
* */

/*基本用法
* 1)用法类似于var，但是所声明的变量只在let命令所在代码块内有效。
* 2)for循环很适合使用let
* 3)for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
* */
{
    let a = 10;
    var b = 5;
}
// console.log(a,b)

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc

/* 不存在变量提升，因此let声明的变量必须在声明后再使用，否则报错。 */

/* 暂时性死区
 * 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
  * */

/* 不允许重复声明
 *let不允许在相同作用域内，重复声明同一个变量。
  * */

/* es6的块级作用域
* let为javascript新增了块级作用域
* let的作用域为声明该变量所在的{}中
* */


// 2、const命令
/* const声明一个只读的常量。一旦声明，常量的值不可改变
* const声明常量必须立即初始化
* */

// es6声明变量的6种方法
/* var function let const import class
*
* */

// 顶层对象的属性
/* 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。
*
* */

// global对象
global = {}
global.$ = {}
console.log(global)