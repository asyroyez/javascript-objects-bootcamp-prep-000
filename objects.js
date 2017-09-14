var playlist = new Object({"Stavroz": "The Finishing"});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.songTitle;
  return playlist;
}
