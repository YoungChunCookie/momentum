const images = ["5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  // js 에서 html 태그를 생성 

bgImage.src = `img/${chosenImage}`;
bgImage.id = 'bgImage';


document.body.appendChild(bgImage);