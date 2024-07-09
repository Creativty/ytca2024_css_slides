document.addEventListener("DOMContentLoaded", () => {
	const showcase = document.getElementById("showcase");
	document.addEventListener("keypress", (event) => {
		if (event.code === "Enter" && showcase)
			showcase.classList.add("active");
	});
});
