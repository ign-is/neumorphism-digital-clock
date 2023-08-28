const clock = document.querySelector(".clock");
const body = document.querySelector("body");
const lightButton = document.querySelector(".light-button");
const darkButton = document.querySelector(".dark-button");

setInterval(function(){
	let time = new Date();
	let sec = time.getSeconds();
	let min = time.getMinutes();
	let hr = time.getHours();
	let day = 'AM';
	if(hr > 12){
		day = 'PM';
		hr = hr -12;
	}
	if(hr == 0){
		hr = 12;
	}
	if(sec < 10){
		sec = '0' + sec;
	}
	if(min < 10){
		min = '0' + min;
	}
	if(hr < 10){
		hr = '0' + hr;
	}
	clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});

function darkMode() {
    body.style.backgroundColor = "#131419";
	clock.classList.add("dark-mode");
	darkButton.style.color = "#5ab9ea";
	lightButton.style.color = "#595959";
	darkButton.classList.add("neumorphic-dark-pressed");
	lightButton.classList.remove('neumorphic');
	lightButton.classList.add("dark-mode");
}

function lightMode() {
    body.style.backgroundColor = "#dde1e7";
	clock.classList.remove("dark-mode");
	darkButton.style.color = "#595959";
	lightButton.style.color = "#5ab9ea";
	darkButton.classList.remove("neumorphic-dark-pressed");
	lightButton.classList.remove("dark-mode");
	lightButton.classList.add("neumorphic");
}