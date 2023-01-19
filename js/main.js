        
        let step1Poster = document.getElementById('step1-poster');
        let step2Poster = document.getElementById('step2-poster');
        let step3Poster = document.getElementById('step3-poster');
        let smileFace = document.querySelector('.smile-face');

        let step1Video = document.getElementById('step1-video');
        let step2Video = document.getElementById('step2-video');
        let step3Video = document.getElementById('step3-video');

        let sec01=document.querySelector('.scroll-bicycle .step-1');
        let sec02=document.querySelector('.scroll-bicycle .step-2');
        let sec03=document.querySelector('.scroll-bicycle .step-3');

        let section1 = sec01.getBoundingClientRect().top + window.scrollY;
        let section2 = sec02.getBoundingClientRect().top + window.scrollY;
        let section3 = sec03.getBoundingClientRect().top + window.scrollY - 250 ;
        let sec1H3 = document.querySelector('h3.step-caption1').getBoundingClientRect().top + window.scrollY - 180;

        let header = document.querySelector('.header');
        let presentSscooter = document.querySelector('.present-scooter');
        let headerTop = presentSscooter.getBoundingClientRect().top + window.scrollY;

        window.addEventListener('scroll',function () {
            let value = window.scrollY;
            if ( value > headerTop ){
                header.style.opacity = 1;
            }else{
                header.style.opacity = 0;
            }

            if( value > section1){
                step1Poster.style.opacity = 0;
                step1Video.style.opacity = 1;
                step2Poster.style.opacity = 0;
                step2Video.style.opacity = 0;
                step3Poster.style.opacity = 0;
                step3Video.style.opacity = 0;
                smileFace.style.opacity=0;
                $('.smile-face').css( 'transform', 'translateX(0%)');
                
                // step1
                $('.step-number1').animate({opacity: 0.2})
                .animate({ "top": "-10px" }, 300 );

                // step1 h3
                $('h3.step-caption1').delay(300).animate({opacity: 1})
                .animate({ "top": "-10px" }, 300 );

                // step1 content
                $('.step-content1').delay(600).animate({opacity: 1})
                .animate({ "top": "-10px" }, 300 );


                if( value > section2 ){
                    step2Poster.style.opacity = 1
                    step2Video.style.opacity = 1;
                    $('.smile-face').css('opacity','1');
                    $('.smile-face').css( 'transform', 'translateX(-30%)');
                    // step2
                    $('.step-number2').animate({opacity: 0.2})
                    .animate({ "top": "-10px" }, 300 );

                    // step2 h3
                    $('h3.step-caption2').delay(300).animate({opacity: 1})
                    .animate({ "top": "-10px" }, 300 );

                    // step2 content
                    $('.step-content2').delay(600).animate({opacity: 1})
                    .animate({ "top": "-10px" }, 300 );
                } 
                if( value > section3 ){
                    step3Poster.style.opacity = 1
                    step3Video.style.opacity = 1;
                    $('.smile-face').css('opacity','0');

                    // step3
                    $('.step-number3').animate({opacity: 0.2})
                    .animate({ "top": "-10px" }, 300 );                    
                    // step3 h3
                    $('h3.step-caption3').animate({opacity: 1})
                    .animate({ "top": "-10px" }, 300 );

                    // step2 content
                    $('.step-content3').delay(300).animate({opacity: 1})
                    .animate({ "top": "-10px" }, 300 );
                }
            }
            else if(value <  section1){
                step1Poster.style.opacity = 1;
                step1Video.style.opacity = 0;
            }
        })
        //Banner換文字
        function changeTitleText() {
            $("section.promotion .banner01 h2").delay(4000).animate({opacity:0, color: "#06f3f9"},function(){
                    $(this).text("推薦好友，享 $100 騎乘金！").animate({opacity:1},function(){
                        $(this).delay(4000).animate({opacity:0},function(){
                            $(this).text("搶先體驗 - 首次騎乘免費！ ").animate({opacity:1, color: "#fff"},function(){
                                changeTitleText();                           
                            });
                            
                        });
                    });
                });
        };
        changeTitleText();

        //Banner換底色
        function changeBGCOlor() {
            $("section.promotion").delay(4000).animate({backgroundColor: '#06f3f9'},function(){
                    $(this).animate({backgroundColor:"#0074ff"},function(){
                        $(this).delay(4000).animate({backgroundColor:"#06f3f9"},function(){
                            $(this).animate({backgroundColor:"#06f3f9"},function(){
                                changeBGCOlor();                           
                            });
                            
                        });
                    });
                });            
        };
        changeBGCOlor();

        //Banner換副標
        function changeSubTitle() {
            $(".banner01 p.subtitle").delay(4000).animate({opacity:0, color: "#fff9"},function(){
                    $(this).text("* 推薦次數無上限，邀請越多好友騎乘，就能得到越多騎乘金！詳見 GoShare App 說明。").animate({opacity:0.3},function(){
                        $(this).delay(4000).animate({opacity:0},function(){
                            $(this).text("* 限前 30 分鐘").animate({opacity:0.6},function(){
                                changeSubTitle();                           
                            });
                            
                        });
                    });
                });           
        };
        changeSubTitle();
