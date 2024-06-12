function getRandomPlaylist() {
    // Get a random index within the range of the playlists array
    var randomIndex = Math.floor(Math.random() * data.playlists.length);
    return data.playlists[randomIndex];
}

// Function to display details of a playlist on the Featured page
function displayFeaturedPlaylist() {
    var playlist = getRandomPlaylist();

    var featuredPlaylist = document.querySelector('.featured-playlist');

    // Clear previous content
    featuredPlaylist.innerHTML = '';

    // Create playlist details container
    var playlistDetails = document.createElement("div");
    playlistDetails.classList.add("playlist-details");

    // Add playlist image
    var playlistImage = document.createElement("img");
    playlistImage.src = playlist.playlist_art;
    playlistImage.alt = "Playlist Cover";

    // Add playlist name
    var playlistNameElem = document.createElement("h2");
    playlistNameElem.textContent = "Playlist Name: " + playlist.playlist_name;

    // Add playlist creator
    var playlistCreatorElem = document.createElement("p");
    playlistCreatorElem.textContent = "Playlist Creator: " + playlist.playlist_creator;

    // Append playlist details elements
    playlistDetails.appendChild(playlistImage);
    playlistDetails.appendChild(playlistNameElem);
    playlistDetails.appendChild(playlistCreatorElem);

    // Append playlist details to featured playlist container
    featuredPlaylist.appendChild(playlistDetails);

    // Create song list container
    var songList = document.createElement("div");
    songList.classList.add("song-list");

    // Add songs
    var songsList = document.createElement("ul");
    playlist.songs.forEach(function(song) {
        var songItem = document.createElement("a"); //li

        // Create song details container
        var songDetails = document.createElement("div");
        songDetails.classList.add("song-details");

        // Add song image
        var songImage = document.createElement("img");
        songImage.src = song.cover_art;
        songImage.alt = "Song Cover";
        songImage.classList.add("song-image");

        // Add song information
        var songInfo = document.createElement("a");
        songInfo.classList.add("song-info");
        songInfo.innerHTML = "<p>" + song.title + "</p>" +
                             

        // Append song details to song item
        songDetails.appendChild(songInfo);
        songDetails.appendChild(songImage);
        songItem.appendChild(songDetails);

        // Append song item to songs list
        songsList.appendChild(songItem);
    });

    // Append song list to song list container
    songList.appendChild(songsList);

    // Append song list container to featured playlist container
    featuredPlaylist.appendChild(songList);
}

// Call the function to display the featured playlist when the page loads
window.addEventListener('load', displayFeaturedPlaylist);
