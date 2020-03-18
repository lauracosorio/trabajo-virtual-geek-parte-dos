document.getElementById('texto').addEventListener('mouseover', mouseOver);
document.getElementById('texto').addEventListener('mouseout', mouseOut);

function mouseOver(){
    document.getElementById('texto').innerHTML = 'lorem ipsum';
}

function mouseOut (){
    document.getElementById('texto').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni error velit ipsam minima sapiente praesentium totam nam debitis, exercitationem commodi molestiae recusandae laborum, soluta porro quam alias aspernatur dicta.';
}