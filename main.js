function myPasswordValidator(){
	let password1 = document.querySelector("#input1").value;
	let password2 = document.querySelector("#input2").value;

	if(password1.length < 8 || password2.length < 8){
		alert("Passwords must be atleast 8 characters long");
	}
	else if(password1 == password2){
		alert("Both passwords match!");
	}
	else if(password1 != password2){
		alert("Passwords don't match!");
	}
}

function nextPicture(){
	let imageSlideshow = document.getElementById("myPicture").src;
	for(let i = imageSlideshow.length; i > 1; i--){
		if(document.getElementById("myPicture").src.charAt(i) == 1){
			document.getElementById("myPicture").src = "Images/Picture2.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 2){
			document.getElementById("myPicture").src = "Images/Picture3.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 3){
			document.getElementById("myPicture").src = "Images/Picture4.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 4){
			document.getElementById("myPicture").src = "Images/Picture5.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 5){
			document.getElementById("myPicture").src = "Images/Picture1.jpg";
			break;
		}
	}
}

function previousPicture(){
	let imageSlideshow2 = document.getElementById("myPicture").src;
	for(let i = imageSlideshow2.length; i > 1; i--){
		if(document.getElementById("myPicture").src.charAt(i) == 1){
			document.getElementById("myPicture").src = "Images/Picture5.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 2){
			document.getElementById("myPicture").src = "Images/Picture1.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 3){
			document.getElementById("myPicture").src = "Images/Picture2.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 4){
			document.getElementById("myPicture").src = "Images/Picture3.jpg";
			break;
		}
		else if(document.getElementById("myPicture").src.charAt(i) == 5){
			document.getElementById("myPicture").src = "Images/Picture4.jpg";
			break;
		}
	}
}

function editParagraph(){
    let borderValue = parseInt(document.getElementById("borderWidth").value);
    let borderRed = parseInt(document.getElementById("redBorder").value);
    let borderGreen = parseInt(document.getElementById("greenBorder").value);
    let borderBlue = parseInt(document.getElementById("blueBorder").value);

    let backgroundRed = parseInt(document.getElementById("redBackground").value);
    let backgroundGreen = parseInt(document.getElementById("greenBackground").value);
    let backgroundBlue = parseInt(document.getElementById("blueBackground").value);

    let paragraph = document.getElementById("textEditor");
    if( isNaN(borderValue) || isNaN(borderRed) || isNaN(borderGreen) || isNaN(borderBlue) || isNaN(backgroundRed) || isNaN(backgroundGreen) || isNaN(backgroundBlue)){
        alert("Please enter a valid number!");
    }
    else if(borderRed < 0 || borderGreen < 0 || borderBlue < 0 || backgroundRed < 0 || backgroundGreen < 0 || backgroundBlue < 0){
        alert("Please enter a number greater than 0");
    }
    else if(borderRed > 255 || borderGreen > 255 || borderBlue > 255 || backgroundRed > 255 || backgroundGreen > 255 || backgroundBlue > 255){
        alert("Please enter a number lower than 255");
    }
    else{
        paragraph.style.borderWidth = borderValue + "px";
        paragraph.style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")";
        paragraph.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";
    }
}