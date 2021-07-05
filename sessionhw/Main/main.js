const a = document.querySelector('#secret');
const password = 1234;
let prom;
secret.onclick = () => {
    prom = prompt('비밀번호를 입력해주세요');
    if(prom != password) a.href = '#';
    else a.href='diary.html';
}

const whatnow = document.querySelector('#changeColor')
whatnow.onclick = () => {
    if(whatnow.textContent === '밤'){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    whatnow.textContent = '낮';
} else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    whatnow.textContent = '밤';  
}
}