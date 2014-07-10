#pragma strict
private var buttonWidth = 300;
private var buttonHeight = 40;
private var rect1 = Rect(200,200,buttonWidth,buttonHeight);
private var rect2 = Rect(200,350,buttonWidth,buttonHeight);
private var rect3 = Rect(200,300,buttonWidth,buttonHeight);


function OnGUI(){
	if (GUI.Button(rect1,"Back")){
		Application.LoadLevel("main_Menu");
	}
}