#pragma strict

function Start () {
	Camera.main.SendMessage("fadeIn");
	yield WaitForSeconds(30);
	Camera.main.SendMessage("fadeOut");
	yield WaitForSeconds(5);
	Application.LoadLevel("Scene_01");
}

function Update () {
	
	
}