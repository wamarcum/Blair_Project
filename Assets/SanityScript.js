#pragma strict

var sanityText:GUIText;
var currentSanity : int = 100;

// Something isn't working here. I'm not sure what I'm doing wrong, but this variable timeScript is throwing intense errors.
var timeScript : TOD;

function Start () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	deplete();
}

function Update () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	
	//add suicide ending. <- Lol.
}

//timeScript seems to be having its problems here. Any ideas to implement this better?
function deplete(){
	if (timeScript.Hour > 5f && timeScript.Hour < 20f){
		while (currentSanity > 0 && currentSanity < 98){
			yield WaitForSeconds(20);
			currentSanity += 3;
		}
	}
	else {
		while (currentSanity > 0){
			yield WaitForSeconds(20);
			currentSanity -= 3;
		}
	}
}