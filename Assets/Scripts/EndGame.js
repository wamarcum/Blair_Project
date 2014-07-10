#pragma strict

var witch:GameObject;

function OnTriggerEnter (o: Collider) {
	witch.SetActive(true);
	Camera.main.SendMessage("fadeOut");
	
	audio.Play();
	yield WaitForSeconds(5);
	Application.LoadLevel("main_Menu");
}