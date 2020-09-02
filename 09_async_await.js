async function fetchFiles(files) {
	var prs = files.map( getFiles );

	prs.forEach( function each(pr) {
		console.log( await pr );
	} );
}



// github.com/getify/fasy
async function fetchFiles(files) {
	var prs = await FA.concurrrent.map( getFiles, files );

	await FA.serial.forEach( async function each(pr) {
		console.log( await pr );
	}, prs );
}