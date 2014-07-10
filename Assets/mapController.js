#pragma strict

var theMap:GameObject;
function Start () {
	
	theMap.guiTexture.enabled = false;
	
}

function Update () {
	if (Input.GetKeyDown("m")){
		audio.Play();
		if(theMap.guiTexture.enabled == false){
			theMap.guiTexture.enabled = true;
		}
		else if (theMap.guiTexture.enabled == true){
			theMap.guiTexture.enabled = false;
		}
	}
}