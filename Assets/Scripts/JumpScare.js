#pragma strict
var witch:GameObject;
var player:GameObject;
function OnTriggerExit (o:Collider) {
	witch.SetActive(true);	
	audio.Play();
	yield WaitForSeconds(10);
	player.audio.volume = player.audio.volume +0.3;
	Destroy(gameObject);
}