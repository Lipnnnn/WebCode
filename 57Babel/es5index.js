"use strict";

/*
    以下内容全部是通过babel将es6index.js文件转码得到的。
    居然连 注释 都会直接转过来！！！
    下面代码是es5的内容，不要被注释误导了，这个注释是因为从es6index.js文件中转过来的，没有修改！
 */

// 这是一段es6的代码，给他转码成es5的代码，放到es5index.js文件中
input.map(function (item) {
  return item + 1;
});

// 在控制台输入`npx babel es6index.js -o es5index.js`就可以转码成功
