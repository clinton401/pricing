const other = document.getElementById('other-side');
const firstH5 = document.getElementById('first-h5');
const secondH5 = document.getElementById('second-h5');
const section = document.getElementById('section');
other.hidden = true;
section.hidden = false;




secondH5.onclick = function secondSide () {

    other.hidden = false;
    section.style.display = 'none';
    firstH5.style.backgroundColor = 'transparent';
    firstH5.style.border = 'transparent';
    secondH5.style.backgroundColor = 'white';
    secondH5.style.borderRadius = '10px';
    other.style.border = '3px solid black';
    other.style.borderRadius = '20px';
    other.style.width = ' 80%'
    other.style.display = 'flex';
    other.style.justifyContent = 'center';
    other.style.alignItems = 'center';
    other.style.margin = '0 auto'
    other.style.padding = '150px 100px';
    other.style.textDecoration = 'upperscore';

}

firstH5.onclick = function firstSide() {
    firstH5.style.backgroundColor = 'white';
    firstH5.style.border = '3px solid white';
    firstH5.style.borderRadius = '10px';
    firstH5.style.color = 'black';
    secondH5.style.border = 'transparent';
    secondH5.style.backgroundColor = 'transparent';
    other.style.display = 'none';
    section.style.display = 'flex';

}
