// var context, controller, loop
// var innerHeight = window.innerHeight / 2
// var innerWidth = window.innerWidth

// context = document.querySelector('canvas').getContext('2d')

// context.canvas.height = innerHeight
// context.canvas.width = innerWidth

// // var rectangle = document.getElementById('pusheen')
// // rectangle.jumping = true
// // rectangle.x_velocity = 0
// // rectangle.y_velocity = 0
// // rectangle.x = innerWidth / 2
// // rectangle.y = 0
// // rectangle.height = 120
// // rectangle.width = 120
// // rectangle.jumping = true
// make_base()

// function make_base() {
//     base_image = new Image()
//     base_image.src = 'https://ui-ex.com/images/transparent-pusheen-sticker-1.png'
//     base_image.onload = function() {
//         context.drawImage(base_image, innerWidth/2, 0, 120, 120)
//     }
// }

// rectangle = {
//     height: 32,
//     jumping: true,
//     width: 32,
//     x: innerWidth / 2, // center of the canvas
//     x_velocity: 0,
//     y: 0,
//     y_velocity: 0
// }

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
//         if (controller.up && rectangle.jumping == false) {
//             rectangle.y_velocity -= 20
//             rectangle.jumping = true
//         }

//         if (controller.left) {
//             rectangle.x_velocity -= 0.5
//         }

//         if (controller.right) {
//             rectangle.x_velocity += 0.5
//         }

//         rectangle.y_velocity += 1.5 // gravity
//         rectangle.x += rectangle.x_velocity
//         rectangle.y += rectangle.y_velocity
//         rectangle.x_velocity *= 0.9 // friction
//         rectangle.y_velocity *= 0.9 // friction

//         // if rectangle is falling below floor line
//         if (rectangle.y > innerHeight - 120) {
//             rectangle.jumping = false
//             rectangle.y = innerHeight - 120
//             rectangle.y_velocity = 0
//         }

//         // if rectangle is going off the left of the screen
//         if (rectangle.x < -32) {
//             rectangle.x = innerWidth
//         } else if (rectangle.x > innerWidth) {
//             // if rectangle goes past right boundary

//             rectangle.x = -32
//         }

//          context.fillStyle = '#202020'
//          context.fillRect(0, 0, innerWidth, innerHeight) // x, y, width, height
//          context.fillStyle = '#ff0000' // hex for red
//          context.beginPath()
//          context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
//          context.fill()
//          context.strokeStyle = '#000'
//          context.lineWidth = 4
//          context.beginPath()
//          context.moveTo(0, 400)
//          context.lineTo(innerWidth, 400)
//          context.stroke()

//         // call update when the browser is ready to draw again
//              window.requestAnimationFrame(loop)
//          }

//          window.addEventListener('keydown', controller.keyListener)
//          window.addEventListener('keyup', controller.keyListener)
//          window.requestAnimationFrame(loop)