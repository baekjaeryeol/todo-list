const images = [
    "배경_01.jpg",
    "배경_02.jpg",
    "배경_03.jpg",
    "배경_04.jpg",
    "배경_05.jpg",
    "배경_06.jpg",
    "배경_07.jpg",
    "배경_08.jpg",
    "배경_09.jpg",
    "배경_10.jpg"
]
const choiceImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${choiceImg}`;

document.body.appendChild(bgImg);

/* 
<body>
    <img src="img/choiceImg">
</body>
*/

