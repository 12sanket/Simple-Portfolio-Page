const tags = ['building things','coding','design','sunsets','art','photography','color','minimalism','aesthetics']

let index = 0

setInterval(()=>{
    if(index === tags.length){
        index = 0
    }
    document.getElementById('tag').innerText = tags[index];
    index++
}, 2000)