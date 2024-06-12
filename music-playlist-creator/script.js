/*function openModal(playlistID, playlistName, playlistCreator, playlistArt) {
    var modal = document.getElementById("musicModal");
    var span = modal.getElementsByClassName("close")[0];
    var playlist = data.playlists.find(item => item.playlistID === playlistID);

    var playlistNameElement = document.getElementById("playlistName");
    var musicImageElement = document.getElementById("musicImage");
    var likeCountElement = document.getElementById("likeCount");

    playlistNameElement.textContent = playlistName;
    musicImageElement.src = playlistArt;
    likeCountElement.textContent = "Likes: " + playlist.likeCount;

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}*/

function openModal(playlistID, playlistName, playlistCreator, playlistArt, songs) {
    // Get modal elements
    var modal = document.getElementById("musicModal");
    var modalContent = document.querySelector(".modal-content");

    // Clear previous content
    modalContent.innerHTML = "";

    // Create close button
    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Create playlist details container
    var playlistDetails = document.createElement("div");
    playlistDetails.classList.add("playlist-details");

    // Add playlist image
    var playlistImage = document.createElement("img");
    playlistImage.src = playlistArt;
    playlistImage.alt = "Playlist Cover";

    // Add playlist name
    var playlistNameElem = document.createElement("h2");
    playlistNameElem.textContent = playlistName;

    // Add playlist creator
    var playlistCreatorElem = document.createElement("p");
    playlistCreatorElem.textContent = "Creator: " + playlistCreator;

    // Append playlist details elements
    playlistDetails.appendChild(playlistImage);
    playlistDetails.appendChild(playlistNameElem);
    playlistDetails.appendChild(playlistCreatorElem);

    // Append close button and playlist details to modal content
    
    modalContent.appendChild(closeButton);
    modalContent.appendChild(playlistDetails);

    // Create song list container
    var songList = document.createElement("div");
    songList.classList.add("song-list");

    // Add songs
    var songsList = document.createElement("ul");
    songs.forEach(function(song) {
        var songItem = document.createElement("li");
        var songCover = document.createElement("img");
        songCover.src = song.cover_art;
        songCover.alt = "Song Cover";
        var songDetails = document.createElement("div");
        songDetails.classList.add("song-details");
        songDetails.innerHTML = "<p>Title: " + song.title + "</p>" +
                                "<p>Artist: " + song.artist + "</p>" +
                                "<p>Album: " + song.album + "</p>" +
                                "<p>Duration: " + song.duration + "</p>";
        songItem.appendChild(songCover);
        songItem.appendChild(songDetails);
        songsList.appendChild(songItem);
    });

    // Append song list to song list container
    songList.appendChild(songsList);

    // Append song list container to modal content
    modalContent.appendChild(songList);

    var shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle";
    shuffleButton.id = "shuffle-button"; // Assign an ID for easier targeting
    shuffleButton.addEventListener("click", shuffleSongs); // Assign an ID for easier targeting

    // Append shuffle button to modal content
    modalContent.appendChild(shuffleButton);

    // Display modal
    modal.style.display = "block";
}
/*
//var playlists = data.playlists;

// Display playlists
var playlistCards = document.querySelector(".playlist-cards");
playlists.forEach(function(playlist) {
    var playlistCard = document.createElement("div");
    playlistCard.classList.add("playlist-card");

    playlistCard.setAttribute("data-playlist-id", playlist.playlistID);

    playlistCard.onclick = function() {
        openModal(playlist.playlistID, playlist.playlist_name, playlist.playlist_creator, playlist.playlist_art, playlist.songs);
    };

    var playlistImage = document.createElement("img");
    playlistImage.src = playlist.playlist_art;
    playlistImage.alt = "Playlist Cover";

    var playlistName = document.createElement("h2");
    playlistName.textContent = playlist.playlist_name;

    var playlistCreator = document.createElement("p");
    playlistCreator.textContent = "Creator: " + playlist.playlist_creator;

    var likeContainer = document.createElement("div");
    likeContainer.classList.add("like-container");

    var likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.innerHTML = "<img src='assets/img/heart.png' alt='Like'>";

    var likeCount = document.createElement("p");
    likeCount.classList.add("like-count");
    likeCount.textContent = playlist.likeCount;

    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);

    playlistCard.appendChild(playlistImage);
    playlistCard.appendChild(playlistName);
    playlistCard.appendChild(playlistCreator);
    playlistCard.appendChild(likeContainer);

    playlistCards.appendChild(playlistCard);
});

// Add event listener to handle like button clicks
playlistCards.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('like-btn')) {
        var playlistID = event.target.closest('.playlist-card').getAttribute('data-playlist-id');
        likePlaylist(playlistID);
    }
});*/





function shuffleSongs() {
    // Select all songs
    var songsList = document.querySelectorAll('.song-list li');

    // Convert NodeList to an array for easier manipulation
    var songsArray = Array.from(songsList);

    // Shuffle the array
    for (var i = songsArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [songsArray[i], songsArray[j]] = [songsArray[j], songsArray[i]];
    }

    // Remove existing songs from the DOM
    var songListContainer = document.querySelector('.song-list ul');
    songListContainer.innerHTML = '';

    // Append shuffled songs to the DOM
    songsArray.forEach(function(song) {
        songListContainer.appendChild(song);
    });
}










// Load playlists
var playlists = data.playlists;

// Display playlists
var playlistCards = document.querySelector(".playlist-cards");
playlists.forEach(function(playlist) {
    var playlistCard = document.createElement("div");
    playlistCard.classList.add("playlist-card");
    //
    playlistCard.setAttribute("data-playlist-id", playlist.playlistID);
    //playlistCard.setAttribute('data-playlist-id', playlist.playlistID); // Add this line
    //console.log("Playlist ID attribute:", playlistCard.getAttribute('data-playlist-id'));
    //playlistCard.setAttribute('data-playlist-id', playlist.playlistID);
    playlistCard.onclick = function() {
        openModal(playlist.playlistID, playlist.playlist_name, playlist.playlist_creator, playlist.playlist_art, playlist.songs);
    };
    var playlistImage = document.createElement("img");
    playlistImage.src = playlist.playlist_art;
    playlistImage.alt = "Playlist Cover";
    var playlistName = document.createElement("h2");
    playlistName.textContent = playlist.playlist_name;
    var playlistCreator = document.createElement("p");
    playlistCreator.textContent = "Creator: " + playlist.playlist_creator;
    var likeContainer = document.createElement("div");
    likeContainer.classList.add("like-container");
    var likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.innerHTML = "<img src='assets/img/heart.png' alt='Like'>";
    var likeCount = document.createElement("p");
    likeCount.classList.add("like-count");
    likeCount.textContent = playlist.likeCount;
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);
    playlistCard.appendChild(playlistImage);
    playlistCard.appendChild(playlistName);
    playlistCard.appendChild(playlistCreator);
    playlistCard.appendChild(likeContainer);
    playlistCards.appendChild(playlistCard);
});


document.querySelectorAll('.like-btn').forEach(function(likeButton) {
    likeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event propagation to parent elements
        var playlistID = event.target.closest('.playlist-card').getAttribute('data-playlist-id');
        likePlaylist(playlistID);
    });
});




function likePlaylist(playlistID) {
    console.log("Playlist ID:", playlistID); 
    // Find the playlist in the data model
    var playlist = playlists.find(function(item) {
        return item.playlistID === playlistID;
    });

    if (playlist) {
        // Increment the like count
        playlist.likeCount++;

        // Update the like count in the DOM
        var likeCountElement = document.querySelector(`[data-playlist-id="${playlistID}"] .like-count`);
        if (likeCountElement) {
            likeCountElement.textContent = playlist.likeCount;
        } else {
            console.error("Like count element not found for playlist ID:", playlistID);
            
        }

        // Update the like button appearance
        var likeButton = document.querySelector(`[data-playlist-id="${playlistID}"] .like-btn`);
        if (likeButton) {
            likeButton.classList.add('clicked');
        } else {
            console.error("Like button not found for playlist ID:", playlistID);
        }

        // Update the data model (optional if you're not persisting data)
        // This step will depend on how you're managing your data
    } else {
        console.error("Playlist not found for ID:", playlistID);
    }
}


    // Increment the like count
   /* playlist.likeCount++;

    // Update the like count in the DOM
    var likeCountElement = document.querySelector(`[data-playlist-id="${playlistID}"] .like-count`);
    likeCountElement.textContent = playlist.likeCount;

    // Update the like button appearance
    var likeButton = document.querySelector(`[data-playlist-id="${playlistID}"] .like-btn`);
    likeButton.classList.add('clicked');

    // Update the data model (optional if you're not persisting data)
    // This step will depend on how you're managing your data
}


*/

// Add event listeners to each like button
document.querySelectorAll('.like-btn').forEach(function(likeButton) {
    likeButton.addEventListener('click', function(event) {
        var playlistID = event.target.closest('.playlist-card').getAttribute('data-playlist-id');
        likePlaylist(playlistID);
    });
});




//document.getElementById('shuffleButton').addEventListener('click', function() {
 //   shuffleSongs();
//});

// Function to shuffle songs
