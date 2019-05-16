var fa = document.getElementsByClassName("contain-mi-ipone")[0];
var a = document.getElementsByClassName("main-nav");
// document.getElementsByTagName
// document.getElementsByClassName

var far = document.getElementsByClassName("xiaomishouji5")[0];
zk_id = 0;
far.addEventListener("mouseover", function (ev) {
	if (lq_id != 0) {
		clearInterval(lq_id);
		lq_id = 0;
	}

	zk_a = setInterval(function (ev) {
		var f = getComputedStyle(fa).height;
		f = parseInt(f);
		f += 10;
		if (f >= 230) {
			f = 230;
			clearInterval(zk_a);
			zk_id = 0;
		}
		fa.style.height = f + "px";
	}, 20);
})
lq_id = 0;
far.addEventListener("mouseout", function (ev) {
	if (zk_id != 0) {
		clearInterval(zk_id);
		zk_id = 0;
	}
	lq_a = setInterval(function (ev) {
		var d = getComputedStyle(fa).display;
		d = "block";
		var f = getComputedStyle(fa).height;
		f = parseInt(f);
		f -= 10;
		if (f <= 0) {
			f = 0;
			clearInterval(lq_a);
			lq_id = 0;
		}
		fa.style.height = f + "px";
	}, 20);
})
// 图片轮播
var imgmi5 = document.getElementById("mi5");
var wmi5 = getComputedStyle(imgmi5).width;
wmi5 = parseFloat(wmi5)
var imgmi51 = document.getElementById("mi51");
var wmi51 = getComputedStyle(imgmi51).width;
wmi51 = parseFloat(wmi51)
var imgmi52 = document.getElementById("mi52");
var wmi52 = getComputedStyle(imgmi52).width;
wmi52 = parseFloat(wmi52)
var imgmi53 = document.getElementById("mi53");
var wmi53 = getComputedStyle(imgmi53).width;
wmi53 = parseFloat(wmi53)
var imgmi54 = document.getElementById("mi54");
var wmi54 = getComputedStyle(imgmi54).width;
wmi54 = parseFloat(wmi54)
var i61 = document.getElementsByClassName("i-6-1")[0];
var i62 = document.getElementsByClassName("i-6-2")[0];
var lbarr =[wmi5,wmi51,wmi52,wmi53,wmi54];
var len = 0;
function lbt() {
	for (let index = 0; index < lbarr.length; index++) {
		lbarr[index] += 153.25;
		if (lbarr[index]>=1226) {
			clearInterval(lb)
		}
	}
}
var lb = setInterval(lbt,2000)
