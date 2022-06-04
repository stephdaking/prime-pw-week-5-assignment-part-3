console.log('***** Music Collection *****');

let collection = []; //! Empty array to store data
let album = {}; //! empty object to store data

const addToCollection = (title, artist, yearPublished) => {
	album = {
		title: title,
		artist: artist,
		yearPublished: yearPublished
	}; //! End of the album object
	collection.push(album); //! Adds an album to the empty collection array
	return album;
}; //! End of addToCollection function

console.log(album);
console.log(collection);
addToCollection('TitleName', 'FakeArtist', 1997); //! Adds an album to the collection with title: TitleName, artist: FakeArtist, yearPublished: 1997
console.log(album);
console.log(collection);
addToCollection('Album2', 'Akon', 2025); //! Adds an album to the collection with title: Album2, artist: Akon, yearPublished: 2025
console.log(album);
console.log(collection);
addToCollection('CoolestAlbum', 'Drake', 2016); //! Adds an album to the collection with title: CoolestAlbum, artist: Drake, yearPublished: 2016
console.log(album);
console.log(collection);
addToCollection('WorstAlbum', 'Lady Gaga', 2065); //! Adds an album to the collection with title: WorstAlbum, artist: Lady Gaga, yearPublished: 2065
console.log(album);
console.log(collection);
addToCollection('CrazyAlbum3', 'Drake', 2008); //! Adds an album to the collection with title: CrazyAlbum3, artist: Drake, yearPublished: 2008
console.log(album);
console.log(collection);
addToCollection('OldAlbum', 'Prince', 1980); //! Adds an album to the collection with title: OldAlbum, artist: Prince, yearPublished: 1980
console.log(album);
console.log(collection);

const showCollection = (array) => {
	console.log(array.length); //! Show length of the array parameter
	let i = 0; //! Define i variable for the while loop
	while (i < array.length) {
		console.log(
			`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`
		); //! console logs title by artist published in yearPublished
		i++; //! increments the loop
	}
};

showCollection(collection);

const findByArtist = (artist) => {
	let storageArray = []; //! empty array to store our data or to return empty if no results are found
	for (let i = 0; i < collection.length; i++) {
		if (collection[i].artist === artist) {
			//! Checks if the artist in the collection array and artist property is equal to our parameter artist
			storageArray.push(collection[i]); //! If it is equal it will push that album to our storage array
		}
	}
	return storageArray; //! Returns the data in our storageArray. If the artist was found we will have the albums from that artist. If not it will be an empty array.
};

console.log(findByArtist('Drake')); // ! Should return 2 different album objects
console.log(findByArtist('Nelly')); // ! Should return an empty array
console.log(findByArtist('Prince')); // ! Should return 1 album
