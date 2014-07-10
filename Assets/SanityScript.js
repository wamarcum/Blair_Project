#pragma strict

var sanityText:GUIText;
var currentSanity = 100;

function Start () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	deplete();
}

function Update () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	//add suicide ending.
}

function deplete(){
	while (currentSanity > 0){
		yield WaitForSeconds(20);
		currentSanity -= 3;
	}
}