var colors=['#dc4437','#549b20','#38cedc','#9738dc'];
var last;
window.onload=function(){
	last=document.querySelector('.current-page');
	var menuItems=document.querySelectorAll('#header ul li');
	var l=menuItems.length;
	for(var i=0;i<l;i++){
		menuItems[i].addEventListener('click',click);
	}
};
function click(evt){
	var target=evt.currentTarget;
	var index=target.getAttribute('index');
	var styleSheet=document.styleSheets[0];
	document.body.style.background=colors[index];
	var logo=document.querySelector('#logo h2');
	logo.style.color=colors[index];
	last.classList.remove('current-page');
	last.style.borderBottom="2px solid #fff";
	target.classList.add('current-page');
	target.style.borderBottom="2px solid "+colors[index];
	last=target;		
};
