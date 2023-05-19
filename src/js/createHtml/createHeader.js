export default function createHeader() {
   document.body.innerHTML += '<img src="./src/assets/left-body-image.png" class="left-background-image" alt="left background image"></img><img src="./src/assets/right-body-image.png" class="right-background-image" alt="right background image"></img>';

   const header = document.createElement('div');
   header.classList.add('header');
   document.body.append(header);

   header.innerHTML = '<div class="logo"></div>'
}