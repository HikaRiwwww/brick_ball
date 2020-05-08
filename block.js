var Block = function(position) {
  var p = position
  var img = loadImgFromPath("block.png")
  var o = {
    img: img,
    x: p[0],
    y: p[1],
    width: img.width,
    height: img.height,
    alive: true,
    lives: p[2] || 1,
  }
  o.kill = function() {
    o.lives -= 1
    if (o.lives < 1) {
      o.alive = false
    }
  }

  o.collide = function(ball) {
    return o.alive && (isIntersect(o, ball) || isIntersect(ball, o))
  }

  return o
}
