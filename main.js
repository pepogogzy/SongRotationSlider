var circle=document.getElementById('circle');
var nextBtn=document.getElementById('nextBtn');
var prevBtn=document.getElementById('prevBtn');
var likeBtn=document.querySelectorAll('[id=likeBtn]')
var likeImg=document.querySelectorAll('[name=likeImg]');

var rotateValue=circle.style.transform;
var rotateSum;

for (let i = 0; i <= 4; i++){
	var slika = new Image();
	slika.onload = function(){
		document.getElementById(i).src = "images/heart_hollow.png";
	}
	slika.src = "images/heart_hollow.png";
}

nextBtn.onclick=function(){
	rotateSum=rotateValue+'rotate(-90deg)';
	circle.style.transform=rotateSum;
	rotateValue=rotateSum;
}
prevBtn.onclick=function(){
	rotateSum=rotateValue+'rotate(90deg)';
	circle.style.transform=rotateSum;
	rotateValue=rotateSum;
}

function changeImage(id){
	var img = document.getElementById(id);
	console.log(img.src)
	if (img.src.includes("images/heart_hollow.png")){
		img.src = "images/heart_full.png";
		console.log("1")
	}
	else {
		img.src = "images/heart_hollow.png";
		console.log("2")

	}
	console.log(img, img.src)
}
