window.onload = function () {
    let videoButton = document.querySelector('.video-button'); 
    videoButton.onclick = function () {
        $('.vidio-youtube').css('display','flex');
        $('.video-button').addClass('hidden');
        $('.video-description').addClass('hidden');
    }  
}


