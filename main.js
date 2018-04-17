$( document ).ready(function() {
    $('#btnstart').click(function() {
        $('#loading-isi').animate({width: '100%'}, 10000, 'swing', function() {
            window.location = 'https://itk.ac.id';
        });
    });
});
