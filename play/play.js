// /* eslint-disable indent */
// var pusheen = document.getElementById('pusheen')
// pusheen.jumping = true
// pusheen.x_velocity = 0
// pusheen.y_velocity = 0
// pusheen.x = 1

// var controller
// var loop
// var index = 0

// controller = {
//     left: false,
//     right: false,
//     up: false,

//     keyListener: function(event) {
//         var key_state = event.type == 'keydown'

//         switch (event.keyCode) {
//             case 37: // left key
//                 controller.left = key_state
//                 break
//             case 38: // up key
//                 controller.up = key_state
//                 break
//             case 39: // right key
//                 controller.right = key_state
//                 break
//         }
//     }
// }

// loop = function() {
//     //window.requestAnimationFrame(loop)
// }

// window.addEventListener('keydown', controller.keyListener)
// window.addEventListener('keyup', controller.keyListener)
// window.requestAnimationFrame(loop)


var ctx = document.querySelector('canvas').getContext('2d')

var data = '<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" stroke="none" fill="#dcccc4" fill-rule="evenodd"></path></g></svg> '


var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {
    type: 'image/svg+xml;charset=utf-8'
});
var url = DOMURL.createObjectURL(svg);

img.onload = function() {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
}

img.src = url;