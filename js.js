// evento click Off para descativar emergentes
function clickOff(){
	cartStatus = true;
	document.getElementById('down_cartmenu').className ='wppr_cartmenu';
}
// Buttom BG Transform
let xStatus = true
function bgButton(){
	if(xStatus == true){
		xStatus = false;
		document.getElementById('burguer_btn').className = 'brg_btn';
		document.getElementById('bar1').className = 'bar_1';
		document.getElementById('bar2').className = 'bar_2';
		document.getElementById('bar3').className = 'bar_3';
		document.getElementById('barNav').style.display = 'block';
	}else if(xStatus == false){
		xStatus =true;
		document.getElementById('burguer_btn').className = 'burguer_button';
		document.getElementById('bar1').className = 'bar_btn';
		document.getElementById('bar2').className = 'bar_btn';
		document.getElementById('bar3').className = 'bar_btn';
		document.getElementById('barNav').style.display = 'none';

	}
		
	
}
// Cart Menu
let cartStatus = true
function cartMenu(){
	if(cartStatus == true){
		cartStatus = false;
		document.getElementById('down_cartmenu').className ='cartmenu_show';

	}else if(cartStatus == false){
		cartStatus = true;
		document.getElementById('down_cartmenu').className ='wppr_cartmenu';
	}
	
}

/* SLIDER*/
let slideIndex = 1;// valor inicial que restando 1 dará el valor del indice y exibira la imagen correspondiente, en este caso será el indice 0, por lo tanto  exibira la primera imagen.
showSlides(slideIndex);//pasando slideIndex como parametro para function showSlides.

//Next/Previous controls
function plusSlides(n){//parametro n recivido en el html.
	showSlides(slideIndex += n)//en cada click se le suma el valor de n al indice del elemento, exibiendo la imagen correspondiente.
}

function showSlides(x) {
	let i;
	let slides = document.getElementsByClassName("shoes_img");//crea un array con la cantidad de elementos con essa classe.
	if(x > slides.length){slideIndex = 1}//cuando x mayor que la cantidad de elementos del array, index vuelve a valer 1 y se exibe la primera imagen.
	if(x < 1){slideIndex = slides.length}// cuando x  menor que 1,index tendra el valor de la cantidad de elementos,exibiendo la ultima imagen.
	for(i = 0; i < slides.length; i++){// encuanto i sea menor que la cantidad de elementos en el array, i sumara 1.
		slides[i].style.display = "none";//ocultara las imagenes que tengan como indice el valor de i.
	}
	slides[slideIndex-1].style.display ="block";//exibira la imagen que tenga como indice el valor de slideIndex -1.

	console.log(slideIndex)
}

