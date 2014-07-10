#pragma strict

var maxHealth = 100;
var currentHealth = 100;
var currentFood = 20;
var healthText : GUIText;
var foodText : GUIText;


function Start(){
	Screen.showCursor = false;
	Camera.main.SendMessage("fadeIn");
	healthText.text = "Health: " + currentHealth.ToString();
	foodText.text = "Food: " + currentFood.ToString();
	Hunger();
}
function Update(){
	healthText.text = "Health: " + currentHealth.ToString();
	foodText.text = "Food: " + currentFood.ToString();
	
	if (currentHealth <= 0){
		Dead();
	}
	
	if (Input.GetKeyDown("e")){
		Eat();
	}
	
}

function Hunger(){
	while (currentHealth > 0){
		yield WaitForSeconds(20);
		currentHealth = currentHealth-2;
	}
}

function Eat(){
	if (currentFood > 0 && currentHealth < maxHealth){
		currentFood = currentFood-1;
		currentHealth = currentHealth+1;
	}
}

function Dead(){
	Camera.main.SendMessage("fadeOut");
	yield WaitForSeconds(5);
	Application.LoadLevel("main_Menu");
}