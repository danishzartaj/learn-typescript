
/// Question 40
// Function to create an album object
function makeAlbum(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album: { artist: string; title: string; tracks?: number } = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three different albums
const album1 = makeAlbum("Elton John", "Goodbye Yellow Brick Road");
const album2 = makeAlbum("The Beatles", "Abbey Road", 17);
const album3 = makeAlbum("Pink Floyd", "The Dark Side of the Moon", 10);

// Print album information
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3)