var h=false;
var colors=['#e06f60','#35a942','#309397','#783766'];
var last;
var currentColor= '#e06f60';
var currentIndex='0';
window.onload=function(){
	last=document.querySelector('.current-page');
	var menuItems=document.querySelectorAll('#header ul li');
	var l=menuItems.length;
	for(var i=0;i<l;i++){
		menuItems[i].addEventListener('click',click);
		menuItems[i].addEventListener('mouseenter',hover);
		menuItems[i].addEventListener('mouseleave',leave);
	}
};
function click(evt){
	var target=evt.currentTarget;
	var index=target.getAttribute('index');
	currentColor=colors[index];
	if (h){
		target.style.background=currentColor;
	}
	document.body.style.background=currentColor;
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
