$(document).ready(function () {
	$('.carouselTicker').carouselTicker({
		speed: 1,
		delay: 50,
		reverse: true
	});


	function date() {
		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();
		let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		let string = yyyy + "/" + mm + "/" + dd + " " + hours + ":" + minutes + ":" + seconds;
		$('.time').html(string);
	}
	setInterval(date, 1000);
	function datetime() {
		let date = new Date();
		let hours = (23 - date.getHours()) < 10 ? '0' + (23 - date.getHours()) : (23 - date.getHours());
		let minutes = (59 - date.getMinutes()) < 10 ? '0' + (59 - date.getMinutes()) : (59 - date.getMinutes());
		let seconds = (60 - date.getSeconds()) < 10 ? '0' + (60 - date.getSeconds()) : (60 - date.getSeconds());
		let Value = "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + (7 - date.getDay()) + "</span>" + "<span>  Дней  </span>" + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + hours + "</span>" + " : " + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + minutes + "</span>" + " : " + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + seconds + "</span>";
		$('#timee').html(Value);
	}
	setInterval(datetime, 1000);
});

