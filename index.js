const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = 600; //window.innerHeight

const ctx = c.getContext('2d');


ctx.fillRect(20, 20, 20, 20);
ctx.fillStyle = "#800080";
ctx.fillRect(40, 40, 20, 20);

ctx.fillStyle = "#000000";
ctx.fillRect(60, 20, 20, 20);

ctx.fillStyle = "#000000";
ctx.fillRect = 