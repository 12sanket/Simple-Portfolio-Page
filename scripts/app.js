const tags = ['creating things', 'coding', 'design', 'minimalism', 'sunsets', 'photography', 'colors', 'aesthetics', 'making art']

let index = 0

setInterval(() => {
    if (index === tags.length) {
        index = 0
    }
    document.getElementById('tag').innerText = tags[index];
    index++
}, 3000)

function toggleBottomBar() {
    document.getElementById('bottom-bar').classList.toggle('active')
    document.getElementById('name-box').classList.toggle('active')
}

var upButton = document.getElementById('up-button');
var rotate = 180;

upButton.addEventListener('click', ()=> {
    upButton.style = 'transform: rotate(' + rotate + 'deg); transition-duration: 500ms';
    rotate +=180;
})

