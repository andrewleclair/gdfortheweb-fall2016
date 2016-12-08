window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function youknownothingjonsnow(){
  var canvas = document.getElementById("💸");
  var ctx = canvas.getContext("2d");
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  var quantity = 500;
  var particles = [];
  for (var i = 0; i < quantity; i++) {
     particles.push({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        r: Math.random() * 4 + 1,
        d: Math.random() * quantity
     })
  }
  function draw() {
     ctx.clearRect(0, 0, WIDTH, HEIGHT);
     ctx.fillStyle = "rgba(255, 255, 255, 1)";
     for (var i = 0; i < quantity; i++) {
        var p = particles[i];
        ctx.font= p.r * 7 + "px sans-serif";
        ctx.fillText("💸",p.x, p.y);
     }
     update();
  }
  var angle = 0.005;
  function update() {
     angle += 0.005;
     for (var i = 0; i < quantity; i++) {
        var p = particles[i];
        p.y += Math.cos(angle + p.d) + p.r / 2;
        p.x += Math.sin(angle) / 3;
        if (p.x > WIDTH + 10 || p.x < -30 || p.y > HEIGHT + 30) {
           if (i % 9 > 0) {
              particles[i] = {
                 x: Math.random() * WIDTH,
                 y: -30,
                 r: p.r,
                 d: p.d
              };
           } else {
              if (Math.sin(angle) > 0) {
                 particles[i] = {
                    x: -30,
                    y: Math.random() * HEIGHT,
                    r: p.r,
                    d: p.d
                 };
              } else {
                 particles[i] = {
                    x: WIDTH + 10,
                    y: Math.random() * HEIGHT,
                    r: p.r,
                    d: p.d
                 };
              }
           }
        }
     }
  }
  function resizeCanvas() {
    WIDTH = canvas.width = window.innerWidth;
    HEIGHT = canvas.height = window.innerHeight;
  }
  (function runtime() {
    requestAnimFrame(runtime);
    draw();
  })();
  window.addEventListener('resize', resizeCanvas, false);
}

document.addEventListener("DOMContentLoaded", youknownothingjonsnow, false);