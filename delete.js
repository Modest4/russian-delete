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

/*
	Here are the differents levels available :
		- pussy (potentially delete a random file in a specific folder) + Required path to folder
		- russian-pussy (delete a random file or folder in a specific fodler) + Required path to folder
		- cow-boy (potentially delete a random file somewhere)
		- russian (delete a file)
		- drunk-russian (delete a folder HELL YEA)
*/

const fs = require('fs-extra')


let Player = {
	play : this.isFire() || return "You lucky bastard, not this time...",
	levels : ["pussy", "russian-pussy", "cow-boy", "russian", "drunk-russian"],
	level : this.levels[process.argv[2]],
	dirPath : process.argv[3] || "./tmp",
	isFire : () =>  {return Math.floor(Math.random() * 6) === 0},
	delete : filePath => {
		fs.remove(filePath, (err) => {
			if (err) return console.log(err)
			console.log(`${filePath} has been deleted`)
		})
	},
	pickInFolder : (this.dirPath, (err, files) => {
		if (err) return console.log(err)
		let theFile = Math.floor(Math.random() * files.length)
		console.log(`On va supprimer le fichier ${files[theFile]}`)
		files.forEach((file, position) => {	
			let fullPath = dir + "/" + file
			if(position === theFile) {		
				if (fs.lstatSync(fullPath).isFile()) {		/* check if each of the content is a file */
					deleteFile(fullPath, (err) => {
						if (err) throw err
					})
				} else {
					deleteFolder(fullPath)
				}
			}
		})
	})
}

if (Player.lvl === undefined) throw "What kind of game do you wanna play? Are you a pussy, a russian-pussy, a cow-boy, a russian or a drunk-russian ? How stupid are you dude?"
if (folderPath === undefined && lvl === levels[0] || folderPath === undefined && lvl === levels[1]) throw `You, ${lvl}, have to tell me in which folder I have to work`




let deleteFile = function(filePath) {
	fs.remove(filePath, (err) => {
		if (err) return err
	})
	console.log(`The file ${filePath} is now gone so far...`)
}

let deleteFolder = function(folderPath) {
	fs.remove(folderPath, err => {
		if (err) return console.log(err)
	})
	console.log(`The folder ${folderPath} is now gone so far...`)
}

fs.readdir(dir, (err, files) => {
	if (err) throw err

	let theFile = Math.floor(Math.random() * files.length)
	console.log(`On va supprimer le fichier ${files[theFile]}`)

	files.forEach((file, position) => {	
		let fullPath = dir + "/" + file
		if(position === theFile) {		
			if (fs.lstatSync(fullPath).isFile()) {		/* check if each of the content is a file */
				
				deleteFile(fullPath, (err) => {
					if (err) throw err
				})
			} else {
				deleteFolder(fullPath)
			}
		}
	})
})



/*
	TODO

	✓ Function for deleting files ✓
	✓ Function for deleting folder ✓
	✘ Move this into a module ✘
	✘ Function randomize isShot ? (1/6) ✘
	✘ Function to find a random folder from C ✘
	❄ Create a module which recursively search a random place on the disk ❄

*/