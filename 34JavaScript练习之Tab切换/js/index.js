window.onload=function (){

    // 先获取到所有的li
    var lis = document.getElementsByTagName("li");
    console.log(lis);
    // 获取到所有的p
    var ps = document.getElementsByTagName('p');
    console.log(ps);


    // 遍历li，给每一个li添加鼠标移到元素之上事件
    for(var i=0;i<lis.length;i++){
        // 给每一个li设置一个自定义属性index，记录li的下标
        lis[i].setAttribute("index",i);
        // 给每一个li添加鼠标事件
        lis[i].onmouseover = function (){
            // 清除所有li的样式 和  清除所有p的样式
            for(var j=0;j<lis.length;j++){
                lis[j].className = '';
                ps[j].className = '';
            }
            // 保留当前停留在的li的样式
            this.className = 'select_li';
            // 展示出对应的p
            // 先获取到鼠标停留在哪个元素上，获取到该元素的下标
            var index = this.getAttribute("index");
            // 然后让对应下标的p展示出来
            ps[index].className = 'select_p';

            // 至此就完美的完成了这个需求啦！
            // 还可以加一个定时器，实现一个延迟的效果，这个后面学习了BOM之后再回来添加！
        }
    }

}
