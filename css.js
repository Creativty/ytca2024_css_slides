document.addEventListener("DOMContentLoaded", () => {
	const showcase = document.getElementById("showcase");
	document.getElementById("checkbox_activator")?.addEventListener("change", (event) => {
		if (event.target.checked) showcase.classList.add("active");
		else showcase.classList.remove("active")
	});
});
