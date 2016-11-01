/**
 * Created by nima on 29.10.16.
 */


$(document).ready(function(){


/*

    for(var i = 1; i <= 14; i++) {


        (function(i) {
			if (i==1) var brImage='url(images/bgimages/swa_intro-animation-1-test.jpg)';
            if (i==2) var brImage='url(images/bgimages/swa_intro-animation-2-test.jpg)';
            if (i==3) var brImage='url(images/bgimages/swa_intro-animation-3-test.jpg)';
            if (i==4) var brImage='url(images/bgimages/swa_intro-animation-4-test.jpg)';
            if (i==5) var brImage='url(images/bgimages/swa_intro-animation-5-test.jpg)';
            if (i==6) var brImage='url(images/bgimages/swa_intro-animation-6-test.jpg)';
            if (i==7) var brImage='url(images/bgimages/swa-scroll-down-btn-animation-1-test.jpg)';
            if (i==8) var brImage='url(images/bgimages/swa-scroll-down-btn-animation-2-test.jpg)';
            if (i==9) var brImage='url(images/bgimages/swa-scroll-down-btn-animation-3-test.jpg)';
            if (i==10) var brImage='url(images/bgimages/swa-scroll-down-btn-animation-4-test.jpg)';
            if (i==11) var brImage='url(images/bgimages/swa-tail-animation-1-test.jpg)';
            if (i==12) var brImage='url(images/bgimages/swa-tail-animation-2-test.jpg)';
            if (i==13) var brImage='url(images/bgimages/swa-tail-animation-3-test.jpg)';
            if (i==14) var brImage='url(images/bgimages/background_finish.PNG)';
            


       setTimeout(function() {
               $("#secure").css('background-image',brImage) }, 300*i);

        })(i);
        //$("#secure").css({'background-image':'url(/images/bgimages/swa-tail-animation-3-test-FINISH.jpg)'});
    }



	*/
	
	
var imgAll = [
             
			'images/bgimages/swa_intro-animation-1-test.jpg', 
            'images/bgimages/swa_intro-animation-2-test.jpg',

            'images/bgimages/swa_intro-animation-3-test.jpg',

            'images/bgimages/swa_intro-animation-4-test.jpg',

            'images/bgimages/swa_intro-animation-5-test.jpg',
			'images/bgimages/swa_intro-animation-6-test.jpg',
            'images/bgimages/swa-scroll-down-btn-animation-1-test.jpg',
            'images/bgimages/swa-scroll-down-btn-animation-2-test.jpg',
            'images/bgimages/swa-scroll-down-btn-animation-3-test.jpg',
            'images/bgimages/swa-scroll-down-btn-animation-4-test.jpg',
            'images/bgimages/swa-tail-animation-1-test.jpg',
            'images/bgimages/swa-tail-animation-2-test.jpg',
            'images/bgimages/swa-tail-animation-3-test.jpg',
             'images/bgimages/background_finish.png'
			], i=1;

    function createAnimation(){

 
        if(i > (imgAll.length-1)){

            clearInterval(intervalGo); 

        }else{
			
			
            $('#secure').animate({'opacity':'0'},20,function(){

                $('#secure').css({'background':'url('+imgHead[i]+')'});

                i++;

            });
            
            $('#secure').animate({'opacity':'1'},50);
        }

         

    }

    var intervalGo = setInterval(createAnimation,1000);
	
	





});


