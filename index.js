
let stars = 
	document.getElementsByClassName("star");

   let starPath =document.getElementsByClassName('star-path');

function rate(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className =  "star " + cls;
        starPath[i].style.fill = '#FFB400';
	}
    saveRating(n);
  

}
function saveRating(n) {
    sessionStorage.setItem('star', n);
}
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
        starPath[i].style.fill="#808080"
		i++;
	}
}

window.onload = function() {
    let savedRating = sessionStorage.getItem('star');
    if(savedRating) {
        rate(savedRating);
    }
}
