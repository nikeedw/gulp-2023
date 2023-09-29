export function isWebp() {
	function testWebP(callback) {
			let webP = new Image();
			webP.onload = function () {
					callback(true); // Поддерживает WebP
			};
			webP.onerror = function () {
					callback(false); // Не поддерживает WebP
			};

			// Проверяем поддержку формата WebP
			webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
	}

	testWebP(function (support) {
			const className = support ? 'webp' : 'no-webp';
			document.documentElement.classList.add(className);
	});
}
