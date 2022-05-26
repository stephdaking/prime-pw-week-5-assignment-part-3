console.log('***** Music Collection *****');

let collection = [];
let album = {};

const addToCollection = (title, artist, yearPublished) => {
	album = {
		title: title,
		artist: artist,
		yearPublished: yearPublished
	};
	collection.push(album);
	return album;
};

console.log(album);
console.log(collection);
addToCollection('TitleName', 'FakeArtist', 1997);
console.log(album);
console.log(collection);
addToCollection('Album2', 'Akon', 2025);
console.log(album);
console.log(collection);
