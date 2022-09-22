var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d");
var entitylist = [];
let keysPressed = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
resize();
window.addEventListener('resize', resize);

const loop = () => { 
  game();
  draw();
  window.requestAnimationFrame(() => {
     loop();
  })
}
loop();

function draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears the screen buffer
  for (const obj in entitylist) {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    
  }
}
//like this
let objectList = {"color": "red", "x": 25, "y": 25, "width": 50, "height": 50}
entitylist.push(objectList);
function game() {
  console.log(keysPressed)
}



document.addEventListener("keydown", (e) => {
  keysPressed.push(e.key);
  if (e?.which === 65) {objectList[0].x--}
  if (e?.which === 68) {objectList[0].x++}
  if (e?.which === 87) {objectList[0].y--}
  if (e?.which === 83) {objectList[0].y++}
});

document.addEventListener("keyup", (e) => {
  keysPressed.splice(keysPressed.indexOf(e.key), 1); //delete the key from the array that stores current key presses
})
