var range = document.getElementById("myExperience");
var result = document.getElementById("result");

result.innerHTML = range.value;
range.oninput = function(){
    result.innerHTML = this.value;
}
