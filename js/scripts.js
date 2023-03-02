/*When opening the side navbar, set the width to 250px and the right margin of the main content to 250px */
function openNav() {
	document.getElementById("categorySidenav").style.width = "250px";
	document.getElementById("main").style.marginRight = "250px";
}

/*When closing the side navbar, set the width to 0 and the right margin of the main content back to 0 */
function closeNav() {
	document.getElementById("categorySidenav").style.width = "0";
	document.getElementById("main").style.marginRight = "0";
}