var weights = [12, 40, 56, 16] ;

function weight_avg() {

  var sum = weights[0] + weights[1] + weights[2] + weights[3]
  var average = sum/weights.length 
  console.log ("Average is " + average);
}

function setup() 
{
   weight_avg()

  createCanvas(400,400);
}

function draw() 
{
background(51);

}

