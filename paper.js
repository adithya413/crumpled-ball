class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.3,friction:0,density:1.2
			}
            this.image=loadImage("paper.png")

		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			
			imageMode(CENTER)
			image(this.image,paperPos.x,paperPos.y,this.w, this.h);
			pop()
			
	}

}