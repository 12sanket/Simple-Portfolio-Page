const tags = ['creating things','coding','design','minimalism','sunsets','photography','colors','aesthetics','art']

let index = 0

setInterval(()=>{
    if(index === tags.length){
        index = 0
    }
    document.getElementById('tag').innerText = tags[index];
    index++
}, 3000)

function toggleBottomBar(){
    document.getElementById('bottom-bar').classList.toggle('active')
    document.getElementById('name-box').classList.toggle('active')
}
