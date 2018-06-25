/*
	  THIS CODE WAS WRITTEN BY MODESTA THE GREAT
	  https://github.com/Modest4/russian-delete

		                     _           _        
		                    | |         | |       
		 _ __ ___   ___   __| | ___  ___| |_ __ _ 
		| '_ ` _ \ / _ \ / _` |/ _ \/ __| __/ _` |
		| | | | | | (_) | (_| |  __/\__ \ || (_| |
		|_| |_| |_|\___/ \__,_|\___||___/\__\__,_|

				    _               _
				   /.)    PRAY     (.\
				  /)\|   MODEST4   |/(\
				 //)/               \(\\
				/'"^"               "^"`\
*/


const fs = require('fs')

let levels = ["pussy", "russian-pussy", "cow-boy", "russian", "drunk-russian"]
let lvl = process.argv[2]
/*
	Here are the differents levels available :
		- pussy (potentially delete a random file in a specific folder) + Required path to folder
		- russian-pussy (delete a random file or folder in a specific fodler) + Required path to folder
		- cow-boy (potentially delete a random file somewhere)
		- russian (delete a file)
		- drunk-russian (delete a folder HELL YEA)
*/
let folderPath = process.argv[3]
let dir = "./tmp"

if (lvl === undefined) throw "What kind of game do you wanna play? Are you a pussy, a russian-pussy, a cow-boy, a russian or a drunk-russian ? How stupid are you dude?"
if (folderPath === undefined && lvl === levels[0] || folderPath === undefined && lvl === levels[1]) throw `You, ${lvl}, have to tell me in which folder I have to work`

let deleteFile = function(filePath) {
	fs.unlink(filePath, (err) => {
		if (err){
			return err
		}
	})
}

fs.readdir(dir, (err, files) => {
	if (err) throw err

	let theFile = Math.floor(Math.random() * files.length)
	console.log(`On va supprimer le fichier ${files[theFile]}`)

	files.forEach((file, position) => {		
		if(position === theFile) {		/* check if each of the content is a file */
			if (fs.lstatSync(dir + "/" + file).isFile()) {
				let fullPath = dir + "/" + file
				deleteFile(fullPath, (err) => {
					if (err) {
						throw err
					} else {
						console.log(`${file} a été supprimé`)
					}
				})
			} else {
				console.log("c'est un dossier, non un fichier", file)
			}
		}
	})
})



/*
	TODO

	✓ Function for deleting files ✓
	✘ Function for deleting folder ✘
	✘ Move this into a module ✘
	❄ Create a module which recursively search a random place on the disk ❄

*/