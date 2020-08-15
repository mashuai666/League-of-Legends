window.addEventListener('load', function() {
    var menu = document.querySelector('.menu');
    var bg2 = document.querySelector('.bg2');
    var headMenu = document.querySelector('.headMenu')
    var headMenuUl = document.querySelector('.headMenu').querySelectorAll('ul');
    menu.addEventListener('mouseover', function() {
        bg2.style.display = 'block';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'block';
        }

    })
    menu.addEventListener('mouseout', function() {
        bg2.style.display = 'none';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'none';
        }

    })
    bg2.addEventListener('mouseover', function() {
        bg2.style.display = 'block';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'block';
        }

    })
    bg2.addEventListener('mouseout', function() {
        bg2.style.display = 'none';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'none';
        }

    })

    headMenu.addEventListener('mouseover', function() {
        bg2.style.display = 'block';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'block';
        }

    })
    headMenu.addEventListener('mouseout', function() {
        bg2.style.display = 'none';
        for (var i = 0; i < headMenuUl.length; i++) {
            headMenuUl[i].style.display = 'none';
        }

    })

    var searchBtn = document.querySelector('.search');
    var searchInput = document.querySelector('.searchInput');
    var closeSearchInput = document.querySelector('.searchInput').querySelector('a');
    searchBtn.addEventListener('click', function() {
        searchInput.style.display = 'block';
    })
    closeSearchInput.addEventListener('click', function() {
        searchInput.style.display = 'none';
    })

    var app = document.querySelector('.app');
    var zm = document.querySelector('.zm');
    app.addEventListener('mouseover', function() {
        zm.style.display = 'block';
    })
    app.addEventListener('mouseout', function() {
        zm.style.display = 'none';
    })



})