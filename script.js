const modal = document.getElementById("imgModal"); // Get the modal
const img = document.getElementById("profileImg"); // Get the image and insert it inside the modal
const modalImg = document.getElementById("modalImg"); // Get the modal image element
const close = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

/* When the user clicks on the image, open the modal */
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

/* When the user clicks on <span> (x), close the modal */
close.onclick = function() {
  modal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal image, close it */
modal.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none";
  }
}