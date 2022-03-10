
let oh = document.getElementById("ohoh");
let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}
function toggleNavbarr(e) {

	if (isnt) {
		oh.classList.remove("fa-times");
		oh.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		
		
		isnt = true;
	}

}

document.onkeydown=function(e)
{
	if(event.keyCode == 123)
	{
		return false;
	}
	
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
	{
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
	{
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0))
	{
		return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
{
	return false;
}
}
