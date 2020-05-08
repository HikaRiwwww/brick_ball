var Game = function() {
  var canvas = document.querySelector('#canvas')
  var context = canvas.getContext('2d')

  g = {
    canvas: canvas,
    context: context,
    keyFunctions: {},
    keyStatus: {},
  }

  window.addEventListener("keydown", function(event) {
    g.keyStatus[event.key] = true
  })
  window.addEventListener("keyup", function(event) {
    g.keyStatus[event.key] = false
  })

  g.drawImg = function(element) {
    g.context.drawImage(element.img, element.x, element.y)
  }

  g.registerKeyEvent = function(key, callback) {
    g.keyFunctions[key] = callback
  }

  window.fps = 30

  var runloop = function(){
    var functions = Object.keys(g.keyFunctions)
    for (var i = 0; i < functions.length; i++) {
      var key = functions[i]
      if (g.keyStatus[key]) {
        g.keyFunctions[key]()
      }
    }
    g.update()
    g.context.clearRect(0, 0, canvas.width, canvas.height)
    g.draw()

    // 递归调用，持续运行
    setTimeout(function() {
        runloop()
    }, 1000 / window.fps)

  }

  setTimeout(function() {
      runloop()
  }, 1000 / window.fps)

  return g
}
