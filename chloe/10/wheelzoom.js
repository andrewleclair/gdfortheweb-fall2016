window.wheelzoom = (function(){
	var defaults = {
		zoom: 0.10
	};

	var canvas = document.createElement('canvas');

	var main = function(img, options){
		if (!img || !img.nodeName || img.nodeName !== 'IMG') { return; }

		var settings = {};
		var width;
		var height;
		var bgWidth;
		var bgHeight;
		var bgPosX;
		var bgPosY;
		var previousEvent;
		var cachedDataUrl;

		function setSrcToBackground(img) {
			img.style.backgroundImage = 'url("'+img.src+'")';
			img.style.backgroundRepeat = 'no-repeat';
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			cachedDataUrl = canvas.toDataURL();
			img.src = cachedDataUrl;
		}

		function updateBgStyle() {
			if (bgPosX > 0) {
				bgPosX = 0;
			} else if (bgPosX < width - bgWidth) {
				bgPosX = width - bgWidth;
			}

			if (bgPosY > 0) {
				bgPosY = 0;
			} else if (bgPosY < height - bgHeight) {
				bgPosY = height - bgHeight;
			}

			img.style.backgroundSize = bgWidth+'px '+bgHeight+'px';
			img.style.backgroundPosition = bgPosX+'px '+bgPosY+'px';
		}

		function reset() {
			bgWidth = width;
			bgHeight = height;
			bgPosX = bgPosY = 0;
			updateBgStyle();
		}

		function onwheel(e) {
			var deltaY = 0;

			e.preventDefault();

			if (e.deltaY) { 
				deltaY = e.deltaY;
			} else if (e.wheelDelta) {
				deltaY = -e.wheelDelta;
			}

			var rect = img.getBoundingClientRect();
			var offsetX = e.pageX - rect.left - window.pageXOffset;
			var offsetY = e.pageY - rect.top - window.pageYOffset;

			var bgCursorX = offsetX - bgPosX;
			var bgCursorY = offsetY - bgPosY;
			
			var bgRatioX = bgCursorX/bgWidth;
			var bgRatioY = bgCursorY/bgHeight;

			if (deltaY < 0) {
				bgWidth += bgWidth*settings.zoom;
				bgHeight += bgHeight*settings.zoom;
			} else {
				bgWidth -= bgWidth*settings.zoom;
				bgHeight -= bgHeight*settings.zoom;
			}

			bgPosX = offsetX - (bgWidth * bgRatioX);
			bgPosY = offsetY - (bgHeight * bgRatioY);

			if (bgWidth <= width || bgHeight <= height) {
				reset();
			} else {
				updateBgStyle();
			}
		}

		function drag(e) {
			e.preventDefault();
			bgPosX += (e.pageX - previousEvent.pageX);
			bgPosY += (e.pageY - previousEvent.pageY);
			previousEvent = e;
			updateBgStyle();
		}

		function removeDrag() {
			document.removeEventListener('mouseup', removeDrag);
			document.removeEventListener('mousemove', drag);
		}

		function draggable(e) {
			e.preventDefault();
			previousEvent = e;
			document.addEventListener('mousemove', drag);
			document.addEventListener('mouseup', removeDrag);
		}

		function load() {
			if (img.src === cachedDataUrl) return;

			var computedStyle = window.getComputedStyle(img, null);

			width = parseInt(computedStyle.width, 10);
			height = parseInt(computedStyle.height, 10);
			bgWidth = width;
			bgHeight = height;
			bgPosX = 0;
			bgPosY = 0;

			setSrcToBackground(img);

			img.style.backgroundSize =  width+'px '+height+'px';
			img.style.backgroundPosition = '0 0';
			img.addEventListener('wheelzoom.reset', reset);

			img.addEventListener('wheel', onwheel);
			img.addEventListener('mousedown', draggable);
		}

		var destroy = function (originalProperties) {
			img.removeEventListener('wheelzoom.destroy', destroy);
			img.removeEventListener('wheelzoom.reset', reset);
			img.removeEventListener('load', load);
			img.removeEventListener('mouseup', removeDrag);
			img.removeEventListener('mousemove', drag);
			img.removeEventListener('mousedown', draggable);
			img.removeEventListener('wheel', onwheel);

			img.style.backgroundImage = originalProperties.backgroundImage;
			img.style.backgroundRepeat = originalProperties.backgroundRepeat;
			img.src = originalProperties.src;
		}.bind(null, {
			backgroundImage: img.style.backgroundImage,
			backgroundRepeat: img.style.backgroundRepeat,
			src: img.src
		});

		img.addEventListener('wheelzoom.destroy', destroy);

		options = options || {};

		Object.keys(defaults).forEach(function(key){
			settings[key] = options[key] !== undefined ? options[key] : defaults[key];
		});

		if (img.complete) {
			load();
		}

		img.addEventListener('load', load);
	};

	if (typeof window.getComputedStyle !== 'function') {
		return function(elements) {
			return elements;
		};
	} else {
		return function(elements, options) {
			if (elements && elements.length) {
				Array.prototype.forEach.call(elements, main, options);
			} else if (elements && elements.nodeName) {
				main(elements, options);
			}
			return elements;
		};
	}
}());