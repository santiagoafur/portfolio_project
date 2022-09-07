function changeColor() {
    leftCont = document.getElementById('left-cont');
    rightCont = document.getElementById('right-cont');

    leftStyle = window.getComputedStyle(leftCont, '').getPropertyValue('background-color');
    rightStyle = window.getComputedStyle(rightCont, '').getPropertyValue('background-color');

    if(rightStyle === 'rgb(240, 58, 71)') {
        leftCont.style.backgroundColor = '#F03A47';
        rightCont.style.backgroundColor = '#EBEBEB';
    }
    if(rightStyle !== 'rgb(240, 58, 71)') {
        leftCont.style.backgroundColor = '#EBEBEB';
        rightCont.style.backgroundColor = '#F03A47';
    }
}

objetive = document.getElementById('photo-obj');
objetive.addEventListener("click", changeColor);