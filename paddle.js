var Paddle = function() {
  var img = loadImgFromPath("paddle.png")
  var o = {
    img: img,
    x: 180,
    y: 350,
    speed: 6,
  }
  o.move = function(x) {
    if (x < 0) {
      x = 0
    }
    if (x > 500 - o.img.width) {
      x = 500 - o.img.width
    }
    o.x = x
  }
  o.moveLeft = function() {
    o.move(o.x - o.speed)
  }
  o.moveRight = function() {
    o.move(o.x + o.speed)
  }

  o.collide = function(ball) {
    return isIntersect(o, ball) || isIntersect(ball, o)
  }

  return o
}
