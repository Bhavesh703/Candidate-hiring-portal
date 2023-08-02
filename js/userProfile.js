// JavaScript code for hiding the default profile picture
document.getElementById("profilePicture").addEventListener("load", function () {
  document.getElementById("defaultProfilePicture").style.display = "none";
});

// JavaScript code for handling file input change event
document.getElementById("fileInput").addEventListener("change", function (e) {
  let render = new FileReader();
  render.onload = function (event) {
    document.getElementById("profilePicture").src = event.target.result;
  };
  render.readAsDataURL(e.target.files[0]);
});

// JavaScript code for handling upload button click event
document.getElementById("uploadButton").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

//  rating js for software input and rating start

document.getElementById("addBtn").addEventListener("click", function () {
  // Get input text and range values
  let inputTextSR = document.getElementById("inputTextSR").value;
  let inputRangeSR = document.getElementById("inputRangeSR").value;

  // Check if input text is not empty
  if (inputTextSR !== "") {
    // Create new list item
    let listItem = document.createElement("li");

    // Create span for delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });

    // Create span for edit button
    let editBtn = document.createElement("span");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";
    editBtn.addEventListener("click", function () {
      document.getElementById("inputTextSR").value = inputTextSR;
      document.getElementById("inputRangeSR").value = inputRangeSR;
      listItem.remove();
    });
    
    // Set text for list item
    listItem.textContent = inputTextSR + " (Rate: " + inputRangeSR + ")";
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    
    // Append list item to the list
    document.getElementById("selectedValuesListSR").appendChild(listItem);
    
    // Clear input text and range values
    document.getElementById("inputTextSR").value = "";
    document.getElementById("inputRangeSR").value = 0;
  } else {
    alert("Please Enter Software Name First & Then Rate.");
  }
});
//  rating js for software input and rating end

//  rating js for language input and rating start
document.getElementById("addBtnLR").addEventListener("click", function () {
  // get input text and range value
  let inputTextLR = document.getElementById("inputTextLR").value;
  let inputRangeLR = document.getElementById("inputRangeLR").value;
  
  //check if input text in empty
  if (inputTextLR !== "") {
    // create new list item
    let listItemLR = document.createElement("li");
    
    // create span for delete button
    let deleteBtnLR = document.createElement("span");
    deleteBtnLR.textContent = "Delete";
    deleteBtnLR.className = "deleteBtnLR";
    deleteBtnLR.addEventListener("click", function () {
      listItemLR.remove();
    });
    
    // Create span for edit button
    let editBtnLR = document.createElement("span");
    editBtnLR.textContent = "Edit";
    editBtnLR.className = "editBtn";
    editBtnLR.addEventListener("click", function () {
      document.getElementById("inputTextLR").value = inputTextLR;
      document.getElementById("inputRangeLR").value = inputRangeLR;
      listItemLR.remove();
    });
    
    // Set text for list item
    listItemLR.textContent = inputTextLR + "(Rate: " + inputRangeLR + ")";
    listItemLR.appendChild(deleteBtnLR);
    listItemLR.appendChild(editBtnLR);
    
    // Append list item to the list
    document.getElementById("selectedValuesListLR").appendChild(listItemLR);
    
    // Clear input text and range values
    document.getElementById("inputTextLR").value = "";
    document.getElementById("inputRangeLR").value = 0;

  } else {
    alert("Please Enter Language Name First & Then Rate.");
  }
});
//  rating js for language input and rating end


// range js for language range
let range = document.getElementById("inputRangeLR"),
  rangeV = document.getElementById("rangeV"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 50) / (range.max - range.min)
      ),
      newPosition = 21 - newValue * 0.6;
    rangeV.innerHTML = `<span>${range.value} &#9733;</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);


// part 2

const
	range2 = document.getElementById('inputRangeSR'),
	rangeV2 = document.getElementById('rangeV2'),
	setValue2 = ()=>{
		const
			newValue2 = Number( (range2.value - range2.min) * 50 / (range2.max - range2.min) ),
			newPosition = 15 - (newValue2 * 0.6);
		rangeV2.innerHTML = `<span>${range2.value} &#9733;</span>`;
		rangeV2.style.left = `calc(${newValue2}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue2);
range2.addEventListener('input', setValue2);
