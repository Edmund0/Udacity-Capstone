
const postData = async ( url = ' ', data = {} ) => {

	const response = await fetch (url, {

		method: 'POST' , 
		credentials: 'same-origin', 
		headers: {

			'content-Type': 'application/json' ,

		},
		body: JSON.stringify(data),  // Body data type must match "Content-Type" header
	}); 

	try {

		const newData = await response.json ();
		return newData;

	}catch (error) {

		console.log ("error", error); //appropriately handle the error
        
	}

}


async function handleSubmit(formData) {// This function would be used in the submitTrip() function to obtain 

	if (formData === "") {

		alert("Please Enter Location");
        return null;

	} else {
		  
		// const url = 'http://localhost:8081/' 
		const url = window.location.href; // returns 'http://localhost:8080/'
		// console.log(url);
		  
		let newData = await postData(`${url}api/sendData`, {formData: formData});
        return newData;

    }

}

export default handleSubmit