displaynews("trending");
const keyTopics = document.getElementsByClassName("keyTopic");
for(let i=0;i<keyTopics.length;i++){
    keyTopics[i].addEventListener('click', ()=>{
        displaynews(keyTopics[i].innerHTML);

    })
}
// const input=document.getElementById("myText");

const button=document.getElementById('searchbutton');
button.addEventListener('click', ()=>{
     let input=document.getElementById("myText");
    displaynews(input.value);
});

function displaynews(topic){
    
// const input=document.getElementById("myText");
// let topic = input.value;
    console.log(topic);
    const cards=document.getElementsByClassName("card");

    const ApiKey ='pub_355116beb840e8244d1e332dd636350c12f26';

let url = `https://newsdata.io/api/1/news?apikey=${ApiKey}&q=${topic}&language=en`;
fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    let i=0;
    data.results.forEach(result => {
         let title= result.title;
        // card[i].innerHTML=title;
        // let a =document.createElement('a');
        // let link = document.createTextNode(title);
        // a.appendChild(link);
        // a. href = result.link;
        // a.setAttribute("target", "blank");
        // a.setAttribute("class", "myLink");
        // cards[i].appendChild(a);
        // cards[i].innerHTML=result.title
        let h = document.createElement('h2');
        let heading = document.createTextNode(title);
        cards[i].innerHTML="";
        h.appendChild(heading);
        h.setAttribute("class", "myheading")
        cards[i].appendChild(h);

        let p = document.createElement('p');
        let text = document.createTextNode(result.description);
        if((result.description)==null){
            text =document.createTextNode("No preview available.Click to read more.");
        }
        p.setAttribute("class", "mytext");
        p.appendChild(text);
        cards[i].appendChild(p);



        // cards[i].innerHTML=result.description;
        cards[i].addEventListener('click',()=>{
            window.open(result.link);
        })


        i++;
    });
    
    
})
}


