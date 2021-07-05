const startbtn = document.querySelector('#start');
const finishbtn = document.querySelector('#finish');
const content = document.querySelector('#content');
const blocks = document.querySelectorAll('.block');

startbtn.onclick = function(){
    location.href = 'mouse.html';
}
finishbtn.onclick = function(){
    location.href='main.html';
    alert('성공!');
}
content.onmouseleave = function(){
    alert('정해진 영역에서만 진행해주세요');
}
blocks.forEach(function(element){
    element.addEventListener('mouseover', function(){
        location.href='main.html';
        alert('게임오버!');
    });
})