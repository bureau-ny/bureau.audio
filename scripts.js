document.addEventListener('DOMContentLoaded', function() {
    prependTextToAudioSrc("https://res.cloudinary.com/bureauaudio/video/upload/");
});

function prependTextToAudioSrc(textToPrepend) {
    // Regular expression to find src attributes ending with .mp3 or .m4a
    var regex = /src="([^"]+\.(mp3|m4a))"/ig;

    // Find all audio elements on the page
    var audioElements = document.querySelectorAll('audio');

    // Loop through each audio element
    audioElements.forEach(function(audio) {
        var src = audio.getAttribute('src');
        if (src) {
            // Replace the source attribute with the modified version
            console.log(src)
            audio.setAttribute('src', textToPrepend + src);
        }
    });
}