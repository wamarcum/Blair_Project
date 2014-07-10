#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown("c")){
		audio.Play();
	}
}