#pragma strict

var showGUI: boolean = false;
var Player:GameObject;

function Update () {
	if (Input.GetKeyDown("escape")){
		if (showGUI==false){
			showGUI = true;
			Screen.showCursor = true;
			Camera.main.GetComponent.<MouseLook>().enabled = false;
			Player.GetComponent.<MouseLook>().enabled = false;
			
			
		}
		else{
			showGUI = false;
			Screen.showCursor = false;
			Camera.main.GetComponent.<MouseLook>().enabled = true;
			Player.GetComponent.<MouseLook>().enabled = true;
		}
	}
}

function OnGUI(){
	if (showGUI){
		if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 + 10, 100, 50),"Exit.")){
			showGUI = false;
			Application.LoadLevel("main_Menu");
			}
			
		}
}
