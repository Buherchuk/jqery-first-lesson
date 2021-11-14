$(document).ready(function () {    
    function loading(count =3 ) {
        if(count > 0){
            let minutes = count;
            $('.minutes').text(minutes-1);
            minutes--;        
            for(i = count; i > 0; i--){ 
                $('.screen').slideToggle(6000, function(){
                    minutes --;
                    if(minutes>=0){
                        $('.minutes').text(minutes);
                        if(minutes<=1){
                        $('.minutes + span').text('minute');
                        $('.minutes').text(minutes);
                        }
                        
                    }                
                });
            }
        }
    }
    loading();
})