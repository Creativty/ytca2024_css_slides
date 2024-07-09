document.addEventListener("DOMContentLoaded", () => {
	const element = document.getElementById("show_me");
	element.style.display = "none";
	document.addEventListener("keypress", (event) => {
		if (event.code === "Enter")
			element.style.display = "block";
	});
});
