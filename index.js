window.addEventListener('load', function() {
    var audioPlayer = document.getElementById('audio-player');
    var songList = document.getElementById('song-list');
    var playlistItems = songList.getElementsByTagName('li');

    // Play the selected song
    function playSong(songUrl) {
    audioPlayer.src = songUrl;
    audioPlayer.play();
    }

    // Add click event listeners to the playlist items
    for (var i = 0; i < playlistItems.length; i++) {
    playlistItems[i].addEventListener('click', function() {
        var songUrl = this.getAttribute('data-src');
        playSong(songUrl);
    });
    }
});
