let notes=JSON.parse(localStorage.getItem("notes"))||[]
let deleted= document.querySelector("#delted")
let saved = document.querySelector("#saved")
let notesGrid=document.querySelector("#notesGrid")
let search=document.querySelector("#search")
let i=1;
console.dir(title);
console.dir(content);
let added = document.querySelector("#added")
let n={
    title:"",
    content:"",
    date:""
    }
added.addEventListener("click",()=>{
    title.value=""
    content.value=""
})
search.addEventListener("input",(data)=>{
    let cards = document.querySelectorAll(".card")
    notesGrid.innerHTML="";
    let i=0
    console.log(data.target.value);
    console.log(notes);
    
    cards.forEach((card)=>{
        if (notes[i].title.startsWith(data.target.value))
            notesMaking(notes[i])
        i++
    })
    console.log(notesGrid.innerHTML);
    
})
notes.forEach(note => {
    notesMaking(note)
})
function notesMaking(note){
    let div=document.createElement("div")
    if (i==1){
        div.classList.add("card")
        div.classList.add("yellow")
        i++
    }
    else if(i==2){
        div.classList.add("card")
        div.classList.add("blue")
        i++
    }
    else{
        div.classList.add("card")
        div.classList.add("pink")
        i=1
    }
    let h3=document.createElement("h3")
    h3.textContent=note.title
    let p=document.createElement("p")
    p.textContent=note.content
    let span=document.createElement("span")
    span.textContent=note.date
    div.append(h3)
    div.append(p)
    div.append(span)
    notesGrid.append(div)
    div.addEventListener("click",(data)=>{
        console.log(data);
        title.value=note.title
        content.value=note.content
    })
};
saved.addEventListener("click",()=>{
    console.log(title.value);
    n.title=title.value;
    n.content=content.value;
    n.date=new Date();
    notes=[...notes,n]
    notesMaking(n)
    title.value=""
    content.value=""
    console.log(notes);
    console.log("Is it added");
    console.log(n);
    console.log(notes);
    
    localStorage.setItem("notes",JSON.stringify(notes))
    n.title="";
    n.content="";
    n.date="";
    console.log(notes);
})