# JavaScript学习笔记

## JavaScript介绍

JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”，指的是它==不具备开发操作系统==的能力，而是只用来编写控制其他大型应用程序的“脚本”。

JavaScript 是一种嵌入式（embedded）语言。目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器(嵌入在html中)，另外还有服务器环境，也就是 Node 项目。

> Node项目是基于Node.js开发的应用程序或网站。==Node.js是一个运行在服务器端的JavaScript运行环境，它允许我们使用JavaScript语言来编写后端应用程序==，而不仅仅局限于在浏览器中运行。因此，Node项目是使用Node.js构建的应用程序或网站。它们可以处理用户请求、存储和获取数据、进行计算和逻辑处理等操作，使得开发人员能够使用统一的语言来开发前后端应用，提高开发效率。



## 标识符的命名规则

1. 第一个字符可用：所有大小写字母；美元符号$；下划线_；
2. 第二个字符及后面的字符：所有大小写字母；美元符号$；下划线_；数字0-9。



## 变量提升

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是==所有的变量的声明语句，都会被提升到代码的头部==，这就叫做变量提升（hoisting）。

> 结果为undefined表示：该变量声明了，但是没有被赋值。



## JavaScript引入到HTML文件中

一共有三种引入方式：

①嵌入到HTML文件中

```javascript
<script>
    var num = 10;
</script>
```

②引入本地独立js文件

```javascript
<script type="text/javascript" src="./Number.js"></script>
```

③引入网络来源文件，也被称为CDN(Content Delivery Network,即内容分发网络)

```javascript
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```



## JavaScript的打印方式

一共有三种打印方式：

①在浏览器中弹出一个对话框,然后把要输出的内容展示出来,alert都是把要输出的内容首先转换为字符串然后在输出的

```javascript
alert("要输出的内容");
```

②直接的在页面中展示输出的内容,如果在文档已经完成加载后执行document.write()将覆盖整个HTml页面

```javascript
document.write("要输出的内容");
```

③在控制台输出内容（平常使用得最多的方式）

```javascript
console.log("要输出的内容");
```



## JavaScript的数据类型

一共有六种数据类型。（ES6 又新增了第七种 Symbol 类型的值）

1. 数值（number）：整数和小数（比如1和3.14）
2. 字符串（string）：文本（比如Hello World）。
3. 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
4. undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
5. null：表示空值，即此处的值为空。
6. 对象（object）：各种值组成的集合。



## JavaScript的类型转换

强制转换：主要指使用Number、String和Boolean三个函数，手动将各种类型的值，分布转换成数字、字符串或者布尔值。

① Number

```javascript
// 使用Number函数，可以将任意类型的值转化成数值。
Number('324');
```

② String

```javascript
// String函数可以将任意类型的值转化成字符串
String(123);
```

③ Boolean

```javascript
// Boolean函数可以将任意类型的值转为布尔值。
Boolean('');
```

> Boolean() 的转换规则：除了以下五个值的转换结果为false，其他的值全部为true。
> undefined
> null
> -0或+0
> NaN
> ''（空字符串）