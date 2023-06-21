$(document).ready(function(){
    $('#showPass').click(function(){
        if($('.pass').attr('type') === 'password'){
            $('.pass').attr('type','text');
            console.log($('#showPass'));
            $('#showPass').hide('span:eq(0)');
            $('#hidePass').show('span:eq(1)');
            $('#hidePass').css({
                'color': 'red'
            });

        }
        
        //  else{
        //     ($('.pass').attr('type', 'password'));
        //     console.log($('.pass'));
        //     $('#hidePass').hide('span:eq(1)');
        //     $('#showPass').show('span:eq(0)');

        //  }
    });
    $('#hidePass').click(function(){
        ($('.pass').attr('type', 'password'));
        console.log($('.pass'));
        $('#hidePass').hide('span:eq(1)');
        $('#showPass').show('span:eq(0)');});
});