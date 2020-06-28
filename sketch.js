var balls = [];

function setup() 
{
	createCanvas(400 , 400);
}

function mousePressed()
{
	balls.push(new Ball(mouseX , mouseY));
}

function draw() 
{
	background(0);
	for (var i = 0; i < balls.length; i++)
	{
		balls[i].show();
		balls[i].move();
	}

	/*if(balls.length > 150)
	{
		balls.splice(0 , 1)
	}*/
}

function Ball(x , y)
{
	this.x = x;
	this.y = y;
	this.xspeed = random(1 , -1)
	this.yspeed = 3
	this.d = random(5 , 40);

	this.show = function()
	{
		stroke(255 , 151);
		strokeWeight(4);
		noFill();
		ellipse(this.x , this.y , this.d);
	}
		this.move = function()
		{
			this.x = this.x + this.xspeed;
			this.y = this.y + this.yspeed;

			if (this.y > 400) 
				{
					this.yspeed  = -3;
				}
			if (this.y < 0) 
				{
					this.yspeed  = 3;
				}
			if (this.x > 400) 
				{
					this.xspeed  = 3;
				}
			if (this.x < 0) 
				{
					this.xspeed  = -3;
				}
		}
		
	}