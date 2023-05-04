const root = document.querySelector('html');


const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);


const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);


root.addEventListener('mousemove', e => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function update(value) {
    var stretch = ['ultra-condensed','extra-condensed','condensed','semi-condensed','normal','semi-expanded','expanded','extra-expanded  ','ultra-expanded'];
    document.getElementById("work").style.fontWeight=value*100;
    document.getElementById("work").style.fontStretch=stretch[value-1];
    document.getElementById("life").style.fontWeight=(1000-value*100);
    document.getElementById("life").style.fontStretch=stretch[9-value];
}
  
function updateColor() {
  var redValue = document.getElementById("red-slider").value;
  var greenValue = document.getElementById("green-slider").value;
  var blueValue = document.getElementById("blue-slider").value;
  var colorString = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

  // Todo: Update the text color
  document.getElementById('wrapper').style.color = colorString;

}
  