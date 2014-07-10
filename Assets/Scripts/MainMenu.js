#pragma strict
private var buttonWidth = 300;
private var buttonHeight = 40;
private var rect1 = Rect(200,200,buttonWidth,buttonHeight);
private var rect2 = Rect(200,350,buttonWidth,buttonHeight);
private var rect3 = Rect(200,300,buttonWidth,buttonHeight);

function Start () {
	
}

function Update () {

}

function OnGUI(){
	if (GUI.Button(rect1,"Begin")){
		Application.LoadLevel("Opening Scene");
	}
	
	
	
	if (GUI.Button(rect2,"Exit")){
		Application.Quit();
	}
	
	if (GUI.Button(rect3,"How to Play")){
		Application.LoadLevel("howTo");
	}
}