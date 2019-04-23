// 变量的解构赋值

// 1、数组的解构赋值
// 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
//
// let [a,b,c] = [1,2,3];
let [a,[[b],c]] = [1,[[2],3]]
console.log(a,b,c)
let [ , , third] = ["foo", "bar", "baz"];
console.log(third)
// let [x, , y] = [1, 2, 3];
// console.log(x,y)
let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail)
let [x, y, ...z] = ['a'];
console.log(x,y,z)

// let [foo] = [];
let [bar,foo] = [1]
console.log(bar,foo)

// let [m] = 1;// 等号左右两侧不是相同类型因此报错

// 解构赋值的默认值: 只有当一个数组中成员严格等于undefined时，默认值才会生效
let [a_foo = true] = [];
let [a_x,a_y = 'b'] = ['a'];
let [a_m,a_n = 2] = ['a',undefined]
console.log(a_foo)
console.log(a_x,a_y)
console.log(a_m,a_n)

let [a_j = 1] = [undefined]
console.log(a_j)
let [a_k = 1] = [null]
console.log(a_k)

let [b_x = 1,b_y = b_x] = []// 1 1
console.log(b_x,b_y)
let [c_x = 1,c_y = c_x] = [2]// 2 2
console.log(c_x,c_y)
let [d_x = 1,d_y = d_x] = [1,2]// 1 2 因为没有undefined所以默认值均不生效
console.log(d_x,d_y)
// let [e_x = e_y,e_y = 1] = [];// 报错


// 2、对象的解构赋值
// 对象的解构赋值与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let {obj_foo,obj_bar} = {obj_foo:'a',obj_bar:'b'}
console.log(obj_foo,obj_bar)

// 用途
let {sin,cos,tan} = Math;
console.log(sin,cos,tan)
const {log} = console;
log(123456)

// 以上写法实际是简写，全写如下
let {"obj_x":obj_y} = {a:"123",b:456,obj_x:'aaa'}// 等号左侧的属性值才是变量
console.log(obj_y)

// 对象解构的嵌套
{
    let obj = {p:['hello',{y:'world'}]};
    let {p:[x,{y}]} = obj;
    console.log(x,y)
}
{
    let obj = {p:['hello',{y:'world'}]};
    let {p,p:[x,{y}]} = obj;
    console.log(p,x,y)
}

// 对象解构的默认值
