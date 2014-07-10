#pragma strict

function Update(){
	if ( ( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) ) && !audio.isPlaying ) 
	        audio.Play();
	    else if ( !Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) && audio.isPlaying )
	        audio.Stop(); // or Pause()
}