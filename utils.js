var log = function(){
  var logArea = document.querySelector("#log")
  console.log(arguments)
  for (var i = 0; i < arguments.length; i++) {
    logArea.value += arguments[i]
    if (i!= arguments.length-1){
      logArea.value+=","
    }
  }
  logArea.value += "\n"
}

var loadImgFromPath = function(path) {
  var img = new Image();
  img.src = path
  return img
}

var isIntersect = function(a, b) {
  if (a.x > b.x && a.x < b.x + b.img.width) {
    if (a.y > b.y && a.y < b.y + b.img.height) {
      return true
    }
  }
  return false
}


var loadlevel = function(levelNum) {
  var n = levelNum - 1
  if (n >= levels.length) {
    n = levels.length - 1
  }
  blocks = []
  for (var i = 0; i < levels[n].length; i++) {
    p = levels[n][i]
    block = Block(p)
    blocks.push(block)
  }
  return blocks
}
