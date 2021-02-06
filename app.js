function smoothScroll(target,durattion){
    var target = document.querySelector(target);
    var targetPosiition= target.getboundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance= targetPosiition - startPosition;
    var startTime= null; 
 
 function animation(CurrentTime){
    if (startTime === null)startTime=CurrentTime;
    var timeElapsed= CurrentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0,run);
    if (timeElapsed<duration)    requestAnimationFrame(animation)
        
    }
    
Math.easeOutCubic = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
    }
    requestAnimationFrame(animation);
}



var section1 =document.querySelector('.section1')
var section2 =document.querySelector('.section2')

section1.addEventListener('click',function(){
    smoothScroll('.section2',1000)
});

section2.addEventListener('click',function(){
    smoothScroll('.section1',1000)
});