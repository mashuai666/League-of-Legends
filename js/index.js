window.addEventListener('load', function() {
    //获取元素
    var left = document.querySelector('.content').querySelector('.left');
    var ul = document.querySelector('.content').querySelector('ul');
    var ol = document.querySelector('.content').querySelector('ol');
    var olli = document.querySelector('.content').querySelector('ol').querySelectorAll('li');
    var leftWidth = left.offsetWidth;
    console.log(leftWidth);
    // 轮播图区域
    // 先克隆第一张照片添加到ul最后做无缝切换
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //拿到当前鼠标位置的索引号
    var num = 0;
    //轮播图下方标题  鼠标进入切换图片
    for (var i = 0; i < olli.length; i++) {
        // 设置索引号
        olli[i].setAttribute('index', i);
        olli[i].addEventListener('mousemove', function() {
            var index = this.getAttribute('index');
            num = index;
            tit = index;
            animate(ul, -leftWidth * index);
            for (var i = 0; i < olli.length; i++) {
                ol.children[i].className = 'normal'
            }
            this.className = 'select';
        })
    }
    // 控制下方标题随自动播放切换
    var tit = 0;
    //自动播放  添加定时器，通过索引号判定初始值
    setInterval(function() {
        // 无缝切换
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;

        }
        // 控制切换
        num++;
        animate(ul, -num * leftWidth);
        // 控制标题
        tit++;
        // 如果到了最后一张照片就把tit置为0
        if (tit == ol.children.length) {
            tit = 0;
        }
        //再写一个控制下方标题样式的函数
        titChange();
    }, 3000)

    function titChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = 'normal';
        }
        //留下其他的小圆圈类型
        ol.children[tit].className = 'select';
    }

    // tab切换栏
    var tab_list = document.querySelector('.tabList');
    var lis = document.querySelector('.tabList').querySelector('ul').querySelectorAll('li');
    var items = document.querySelector('.tab_con').querySelectorAll('.item');
    var tabBottom = document.querySelectorAll('.bottom');
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].onmousemove = function() {
            // 1.设置鼠标进入时的样式
            var index = this.getAttribute('index');
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = 'ncurrent';
                tabBottom[i].style.display = 'none';
            }
            this.className = 'current';
            // 2.设置div内容切换
            for (var j = 0; j < items.length; j++) {
                items[j].style.display = 'none';
            }
            tabBottom[index].style.display = 'block';
            items[index].style.display = 'block';
        }

    }

    var moreNews = document.querySelector('.moreNews');
    var jiantou = document.querySelector('.moreNews').querySelector('i');
    moreNews.addEventListener('mouseover', function() {
        jiantou.style.animation = 'jiantou .8s linear infinite';
    })
    moreNews.addEventListener('mouseout', function() {
        jiantou.style.animation = '';
    })

    var img1 = document.querySelector('.img1').querySelector('.maskbg');
    var detail = document.querySelector('.img1').querySelector('.detail');
    console.log(img1);
    img1.addEventListener('mouseenter', function() {
        detail.style.display = 'block';
    })
    detail.addEventListener('mouseenter', function() {
        detail.style.display = 'block';
    })

    img1.addEventListener('mouseleave', function() {
        detail.style.display = 'none';
    })
    detail.addEventListener('mouseleave', function() {
        detail.style.display = 'none';
    })
})