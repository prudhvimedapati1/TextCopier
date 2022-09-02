function func(){    
    var copyText=document.querySelector("#myInput");
    
    navigator.clipboard.writeText(copyText.value);
}
