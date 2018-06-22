const fs = require('fs')
let dir = "./tmp"

fs.readdir(dir, (err, files) => {
	if (err) throw err
	files.forEach((file) => {
		if(fs.lstatSync(dir + "/" + file).isFile()) {
			fs.unlink(dir + "/" + file, (err) => {
				if (err){
					console.log(err)
				} else {
					console.log(`${file} a été supprimé !`);
				}
			})
		} else {
			console.log("c'est un dossier, non un fichier", file)
		}
	})
})