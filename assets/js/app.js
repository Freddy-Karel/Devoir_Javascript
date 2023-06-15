
function rotateImage() {
    var image = document.getElementById("image");
    var currentRotation = getRotationAngle(image);

    // Ajoute 45 degrés à l'angle actuel
    var newRotation = currentRotation + 45;

    // Applique la rotation à l'image
    image.style.transform = "rotate(" + newRotation + "deg)";
  }

  function getRotationAngle(element) {
    var st = window.getComputedStyle(element, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform");

    var angle = 0;
    if (tr && tr !== "none") {
      var values = tr.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }

    return angle;
  }