document.addEventListener("DOMContentLoaded", () => {
	const element = document.getElementById("show_me");
	const display = element.style.display;
	element.style.display = "none";
	document.addEventListener("keypress", (event) => {
		if (event.code === "Enter")
			element.style.display = display;
	});
});
