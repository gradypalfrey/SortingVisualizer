
let values = [];

let n = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(0);

  if (n < (values.length * 2)) {
    for (let j = 0; j < values.length - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } 
  
  else {
    noLoop();
  }

  n++;

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}