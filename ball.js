var Ball = function() {
  var img = loadImgFromPath('ball.png')
  var o = {
    img: img,
    x: 100,
    y: 200,
    fired: false,
    speedX: 8,
    speedY: 8,
  }
  o.fire = function() {
    o.fired = true
  }
  o.move = function() {
    if (o.fired) {
      if (o.x <= 0 || o.x >= 500) {
        o.speedX *= -1
      }
      if (o.y < 0 || o.y > 400) {
        o.speedY *= -1
      }

      o.x += o.speedX
      o.y += o.speedY
    }
  }

  o.rebound = function() {
    o.speedY *= -1
  }
  return o
}
