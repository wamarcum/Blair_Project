#pragma strict

var tentCondition = 100;
var showGUI: boolean = false;
var Player: GameObject;
var campText:GUIText;


function Start () {
	campText.text = "Tent: " + tentCondition.ToString();
	
}

function Update () {
	if (Input.GetKeyDown("r")){
		if (showGUI==false){
			showGUI = true;
			Screen.showCursor = true;
			Camera.main.GetComponent.<MouseLook>().enabled = false;
			Player.GetComponent.<MouseLook>().enabled = false;
			
		}
		else{
			showGUI = false;
			Screen.showCursor = false;
			Player.active = true;
			Camera.main.GetComponent.<MouseLook>().enabled = true;
			Player.GetComponent.<MouseLook>().enabled = true;
		}
	}
	
	campText.text = "Tent: " + tentCondition.ToString();
}

function OnGUI(){
	if (showGUI){
		if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 + 10, 100, 50),"Rest Here")){
			showGUI = false;
			Screen.showCursor = false;
			if (tentCondition > 0){
			Sleep();
			}
		}
		else{
			
		}
	}
}

function Sleep(){
	var healthup = Player.GetComponent(GUIStats);
	Camera.main.SendMessage("fadeOut");
	yield WaitForSeconds(10);
	if(healthup.currentHealth < 96){
		healthup.currentHealth += 5;
	}
	tentCondition -= 10;
	
	Camera.main.SendMessage("fadeIn");
	Camera.main.GetComponent.<MouseLook>().enabled = true;
	Player.GetComponent.<MouseLook>().enabled = true;
	
	
	
}


