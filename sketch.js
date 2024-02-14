var yesButton;
var noButton;
var alertFlash = true;

function setup()
{
	createCanvas(800, 600);

	noButton = {
		x: width / 2 + 100,
		y: height / 2 + 100,
		dia: 100,
		activated: false
	}
    
    yesButton = {
		x: width / 2 - 100,
		y: height / 2 + 100,
		dia: 100,
		activated: false
	}

}

function draw()
{
	background(255);

	if (frameCount / 30 == parseInt(frameCount / 30))
	{
		if (alertFlash == false)
		{
			alertFlash = true;
		}
		else
		{
			alertFlash = false;
		}
	}

	if (noButton.activated == true)
	{
		background(250, 250, 0);

		if (alertFlash)
		{
			textSize(40);
			text("ERROR DETECTED", width / 2, height / 2 - noButton.dia);
		}

	}

    //no button
	fill(255, 0, 0);
	stroke(0);
	strokeWeight(1);
	ellipse(noButton.x, noButton.y, noButton.dia);
    noStroke();
    fill(0);
    text("NO", noButton.x, noButton.y + noButton.dia/8);

    //yes button
	fill(0, 255, 0);
	stroke(0);
	strokeWeight(1);
	ellipse(yesButton.x, yesButton.y, yesButton.dia);
    noStroke();
    fill(0);
    text("YES", yesButton.x, yesButton.y + yesButton.dia/8);

	//question
    textAlign(CENTER);
	textSize(40);
	strokeWeight(1);
	stroke(0);
	fill(0);
	text("WILL YOU BE MY VALENTINE?", width / 2, height / 2 - noButton.dia + 100);
    
    // yes screen
    if (yesButton.activated == true)
    {
        background(255,255,255);
        noStroke();
        fill(255,105,180);
        text("Yay!!!", width/2, height/2 - 50);
        text("Happy Valentines Day!", width/2, height/2);
        
        ellipse(width/2 - 25, height/2 + 50, 50);
        ellipse(width/2 + 25, height/2 + 50, 50);
        
        beginShape();
        vertex(width/2, height/2 + 120);
        vertex(width/2 - 47, height/2 + 61);
        vertex(width/2 - 50, height/2 + 50);
        vertex(width/2 + 50, height/2 + 50);
        vertex(width/2 + 47, height/2 + 61);
        endShape();
        
    }
    
    
}

function mousePressed()
{
	// no button clicked
    if (dist(mouseX, mouseY, noButton.x, noButton.y) < noButton.dia)
	{
		if (noButton.activated == true)
		{
			noButton.activated = false;
		}
		else
		{
			noButton.activated = true;
		}
	}
    
    
    //yes button clicked
    if (dist(mouseX, mouseY, yesButton.x, yesButton.y) < yesButton.dia)
	{
		if (yesButton.activated == true)
		{
			yesButton.activated = false;
		}
		else
		{
			yesButton.activated = true;
		}
	}
}