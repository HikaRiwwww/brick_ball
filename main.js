var pause = false
var blocks = loadlevel(1)
var enableDebugMode = function(enable) {
  if (!enable) {
    return
  }
  document.querySelector("#spdSlider").removeAttribute("hidden")
  window.addEventListener('keydown', function(event) {
    var k = event.key
    if (k == 'p') {
      pause = !pause
    }
    if ("12345689".search(k) != -1) {
      blocks = loadlevel(Number(k))
    }
  })
}


var __main = function() {

  enableDebugMode(true)


  var score = 0

  var paddle = Paddle()

  var ball = Ball()

  var game = Game()

  var dragEnabled = false
  game.canvas.addEventListener('mousedown', function(event) {
    var mouseX = event.offsetX
    var mouseY = event.offsetY
    if (ball.hasPoint(mouseX, mouseY)) {
      dragEnabled = true
    }
  })
  game.canvas.addEventListener('mousemove', function(event) {
    var mouseX = event.offsetX
    var mouseY = event.offsetY

    if (dragEnabled){
      ball.x = mouseX
      ball.y = mouseY
    }
  })
  game.canvas.addEventListener('mouseup', function(event) {
    dragEnabled = false
  })


  g.registerKeyEvent("a", function() {
    paddle.moveLeft()
  })
  g.registerKeyEvent("d", function() {
    paddle.moveRight()
  })
  g.registerKeyEvent("f", function() {
    ball.fire()
  })

  g.update = function() {
    if (pause) {
      return
    }
    var f = document.querySelector("#spdSlider").value
    window.fps = Number(f)
    ball.move()
    if (paddle.collide(ball)) {
      ball.speedX *= -1
      ball.speedY *= -1
    }
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].collide(ball)) {
        blocks[i].kill()
        ball.speedY *= -1
        score += 100
      }
    }
  }
  g.draw = function() {
    g.drawImg(paddle)
    g.drawImg(ball)
    g.context.fillStyle = "rgb(0, 0, 119)"
    g.context.fillText("分数：" + score, 15, 380)
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].alive) {
        g.drawImg(blocks[i])
      }
    }
  }
}
