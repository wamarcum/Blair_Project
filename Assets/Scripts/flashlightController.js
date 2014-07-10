#pragma strict

var energy = 100;
var isOn: boolean = false;
var theLight:Light;
var lightText:GUIText;

function Start () {
	theLight.enabled = false;
	lightText.text = "Flashlight: " + energy.ToString();
}

function Update () {
	if (Input.GetKeyDown("f")){
		if (!isOn){
			isOn = true;
			theLight.enabled = true;
			Battery();
		}
		else if (isOn){
			isOn = false;
			theLight.enabled = false;
		}
	}
	
	//Changes text
	lightText.text = "Flashlight: " + energy.ToString();

}

function Battery(){
	while (energy > 0 && isOn){
		yield WaitForSeconds(5);
		energy = energy-1;
	}
	if (energy<=0){
		Destroy (theLight);
	}
	if (theLight == null){
		return;
	}
}