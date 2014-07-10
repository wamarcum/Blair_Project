#pragma strict
var player:GameObject;
var object:GameObject;
var distance = Vector3.Distance(player.transform.position, object.transform.position);

function Start () {

}

function Update () {
	distance = Vector3.Distance(player.transform.position, object.transform.position);
	if (distance < 20){
		audio.Play();
		
	}
}