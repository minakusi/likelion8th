let movebugs = function(){
    document.querySelectorAll('.bug').forEach(function(item){
    let left = Math.random()*1000+100;
    let top = Math.random()*500+100;
    item.style.left = left + 'px';
    item.style.top = top + 'px';
});
}

let startmoving = setInterval(movebugs, 1000);