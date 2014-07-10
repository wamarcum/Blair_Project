#pragma strict

function Start () {
	gameObject.SetActive(false);
}

function Update () {
	if (gameObject.active){
		SwitchOff();
	}
}

function SwitchOff(){
	yield WaitForSeconds(.2);
	gameObject.SetActive(false);
}