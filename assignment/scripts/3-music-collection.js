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
addToCollection('CoolestAlbum', 'Drake', 2016);
console.log(album);
console.log(collection);
addToCollection('WorstAlbum', 'Lady Gaga', 2065);
console.log(album);
console.log(collection);
addToCollection('CrazyAlbum3', 'Kevin Hart', 2008);
console.log(album);
console.log(collection);
addToCollection('OldAlbum', 'Prince', 1980);
console.log(album);
console.log(collection);
