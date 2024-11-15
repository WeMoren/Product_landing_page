let menu = document.getElementById('menu');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');


openMenu.onclick = function(){
    menu.style.display = 'flex';
}

closeMenu.onclick = function(){
    menu.style.display = 'none';
}

window.onclick = function(e){
    if(e.target == menu){
        menu.style.display = 'none';
    }
}

