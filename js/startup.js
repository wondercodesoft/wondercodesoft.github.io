var h=false;
var colors=['#e06f60','#35a942','#309397','#783766'];
var sec=['home','view-works','skills','opinions'];
var last;
var currentColor= '#e06f60';
var currentIndex='0';
var myVar;
var slide=[];
var currentSlide=0;
var sections=[];
var sectionsAmount=0;
var slideAmount;
window.onload=function(){
	last=document.querySelector('.current-page');
	document.getElementById('body').style.background=currentColor;
	var menuItems=document.querySelectorAll('#header ul li');
	var l=menuItems.length;
	for(var i=0;i<l;i++){
		menuItems[i].addEventListener('click',click);
		menuItems[i].addEventListener('mouseenter',hover);
		menuItems[i].addEventListener('mouseleave',leave);
	}
	slide=document.querySelectorAll('#home div');
	slideAmount=slide.length;
	for(var i=0;i<slideAmount;i++){
		slide[i].addEventListener('animationend',reposition);
	}
	sections=document.querySelectorAll('#body > div');
	sectionsAmount=sections.length;
	myVar= setInterval(moveSlide, 6000);
};
function click(evt){
	var target=evt.currentTarget;
	var index=target.getAttribute('index');
	currentColor=colors[index];
	if (index!==currentIndex){
		if(currentIndex==='0'){
			window.clearInterval(myVar);
		}
		movement(index);
		if(index==='0'){
			restartSlide();
		}
		document.getElementById('body').style.background=currentColor;
	}
	if (h){
	target.style.background=currentColor;
	}
	var logo=document.querySelector('#logo h2');
	logo.style.color=currentColor;
	last.classList.remove('current-page');
	target.classList.add('current-page');
	var menuItems=document.querySelectorAll('#header ul li');var l=menuItems.length;
	for(var i=0;i<l;i++){
		menuItems[i].style.borderBottom='2px solid #ffffff';
	}
	target.style.borderBottom="2px solid "+currentColor;
	last=target;
	currentIndex=index;	
};
function hover(evt){
	var target=evt.currentTarget;
	target.style.background=currentColor;
	target.style.borderBottom='2px solid '+currentColor;
	h=true; 
};
function leave(evt){
	h=false;
	var target=evt.currentTarget;
	var index=target.getAttribute('index');
	target.style.background='#ffffff';
	if(currentIndex!==index){
		target.style.borderBottom='2px solid #ffffff';
	}	
};
function moveSlide(){
	var ls=currentSlide;
	currentSlide=(currentSlide+1)%slideAmount;
	slide[ls].style.animation='hideLeft 0.5s ease-in';
	slide[currentSlide].style.transition="left 0.5s ease-in";
	slide[currentSlide].style.left='0%';
};
function reposition(evt){
	var target=evt.currentTarget;
	target.style.transition='none';
	target.style.left="100%";
	target.style.animation='none';
};
function restartSlide(){
	slide=document.querySelectorAll('#home div');
	slideAmount=slide.length;
	for(var i=0;i<slideAmount;i++){
		slide[i].addEventListener('animationend',reposition);
	}
	for(var i=0;i<slideAmount;i++){
		if(i===0){
			slide[i].style.left='0%';
		}else{
			slide[i].style.left='100%';
		}
	}
	currentSlide=0;
	myVar=setInterval(moveSlide,6000);
};
function movement(index){
	var target=document.getElementById(sec[currentIndex]);
	var clone=target.cloneNode(true);
	var parent=document.getElementById('body');
	var nuevo = parent.replaceChild(clone,target);
	target=document.getElementById(sec[index]);
	var clone2=target.cloneNode(true);
	parent.replaceChild(clone2,target);
	clone2.style.opacity='1';
	clone.addEventListener('animationend',parar);
	clone2.addEventListener('animationend',parar);
	if(currentIndex<index){
		clone2.style.animation="showLeft 0.5s ease-in";
		clone.style.animation='hideLeft 0.5s ease-in';
	}else{
		clone2.style.animation="showRight 0.5s ease-in";
		clone.style.animation='hideRight 0.5s ease-in';
	}
};
function parar(evt){
	var name=evt.animationName;
	var target=evt.currentTarget;
	target.style.transition='none';
	switch(name){
		case 'hideLeft':
			target.style.left='-100%';
			target.style.opacity='0';
		break;
		case 'hideRight':
			target.style.left="100%";
			target.style.opacity='0';
		break;
		case 'showRight':
		case 'showLeft':
			target.style.left="0%";
		break;
	}
	target.removeEventListener('animationend',parar);
};