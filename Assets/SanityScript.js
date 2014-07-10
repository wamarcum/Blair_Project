#pragma strict

var sanityText:GUIText;
var currentSanity = 100;
// Something isn't working here. I'm not sure what I'm doing wrong, but this variable timeScript is throwing intense errors.
private var timeScript = GameObject.Find("TOD").GetComponent(TOD);

function Start () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	deplete();
}

function Update () {
	sanityText.text = "Sanity: " + currentSanity.ToString();
	//add suicide ending.
}

//timeScript seems to be having its problems here. Any ideas to implement this better?
function deplete(){
	if (timeScript.Hour > 5 && timeScript.Hour < 20){
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