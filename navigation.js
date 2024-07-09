document.addEventListener("DOMContentLoaded", () => {
	const previous = document.querySelector("a.navigation.prev");
	const next = document.querySelector("a.navigation.next");
	document.addEventListener("keydown", (event) => {
		if (event.code === "ArrowLeft" && previous)
			previous.click();
		if (event.code === "ArrowRight" && next)
			next.click();
	});
});
