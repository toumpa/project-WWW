// fetch functions for all the .json files


fetch("comedy.json") // connect with the specific .json file 
.then(function(response){ 
	return response.json(); //read all the info from the json file
})
.then(function(products){
	let placeholder = document.querySelector("#com"); // match the right id
	let out = "";
	for(let product of products){ //for all the elements that exists
		//put every data in a table
		//when we write in `...` in a .js file we can write html command
		out += ` 
			<tr> 
				<td>${product.name_com}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out; //get the result and print it
})

//do it for the rest of the json files 
fetch("tragedy.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#trag");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.name_trag}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("romance.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#rom");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.name_rom}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("bio.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url");
	let out = "";
	for(let product of products){
		out += `
			<tr>
			<td>
			<a href= ${product.url1}> Tap me </a>
			</td>
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("plays.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url2");
	let out = "";
	for(let product of products){
		out += `
			<tr>
			<td>
			<a href= ${product.url2}> Tap me </a>
			</td>
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("rom-ju.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url3");
	let out = "";
	for(let product of products){
		out += `
			<tr>
			<td>
			<a href= ${product.url3}> Tap me </a>
			</td>
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})