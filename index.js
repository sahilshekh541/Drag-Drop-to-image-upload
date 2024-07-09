const dropArea = document.querySelector('.drop-area')
const imageInput = document.querySelector('#input-file')
const imageView = document.querySelector('.image-view')

imageInput.addEventListener('change',uploadImage)

function uploadImage(){
    let imglink = URL.createObjectURL(imageInput.files[0])
    imageView.style.backgroundImage = `url(${imglink})`
    imageView.textContent = ""
    imageView.style.border = "none"
}

dropArea.addEventListener('dragover',(e) =>{
    e.preventDefault();
})

dropArea.addEventListener('drop',(e) => {
    e.preventDefault();
    imageInput.files = e.dataTransfer.files;
    uploadImage();
})