(function (w, d) {
	d.querySelector('.check').addEventListener('onclik', function (e) {
		changeImg(e);
	})
	
	function changeImg(e) {
		var cke=d.getElementById('js')
		cke.style.backgroundPosition = '-95px 0';
		
	}
	
})(window, document)