window.onload = function (){

    var btnid = 0; //这个btnid表示当前展示哪一张图片，btnid=0展示第一张，以此类推
    var btnLeft = document.getElementById('icon_left');
    var btnRight = document.getElementById('icon_right');
    var imgs = document.querySelector('.box_img').querySelectorAll('li'); //拿到所有图片的li集合
    var circles = document.querySelector('.box_list').querySelectorAll('li'); //拿到所有的小圆点集合

    // 给左移和右移两个按钮添加点击事件
    btnLeft.onclick = function (){
        // 图片向左移一张
        btnid--;
        changeImg();
    }
    btnRight.onclick = function (){
        // 图片向右移一张
        btnid++;
        changeImg();
    }

    // 给底下五个小圆点添加鼠标事件
    for(var i=0;i<circles.length;i++){
        // 给每一个小圆点设置一个自定义属性
        circles[i].setAttribute('index',i);
        circles[i].onmouseover = function (e){
            // 设置btnid等于鼠标当前停留在的小圆点的位置，btnid变化就会引起轮播图的变化
            btnid = this.getAttribute('index');
            changeImg();
        }
    }

    // 定义一个函数：改变所要展示的图片
    function changeImg(){
        // btnid等于几，就展示哪张图片
        if(btnid > imgs.length-1){
            btnid = 0;
        }
        if(btnid < 0){
            btnid = imgs.length-1;
        }
        // 老规矩，先清除样式
        for(var i=0;i<imgs.length;i++){
            imgs[i].className = '';
        }
        // 展示当前图片
        imgs[btnid].className = 'current';

        // 设置底下小圆点高亮
        // 老规矩，先清除样式
        for(var j=0;j<circles.length;j++){
            circles[j].className = '';
        }
        // 设置当前的圆点高亮
        circles[btnid].className = 'current';
    }


}