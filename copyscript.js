function myFunction() {
    /* Get the text field
  
    /* Select the text field */
    document.getElementById("output").select();
    document.getElementById("output").setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
  }