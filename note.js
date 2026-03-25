let notes=JSON.parse(localStorage.getItem("notes"))||[]
let notesGrid=document.querySelector("#notesGrid")
let i=1;
let timestamp="";
document.querySelector("#added").addEventListener("click",()=>{
    title.value=""
    content.value=""
})
document.querySelector("#search").addEventListener("input",(data)=>{
    notesGrid.innerHTML="";
    notes.forEach((note)=>{
        if (note.title.toLowerCase().startsWith(data.target.value.toLowerCase()))
            notesMaking(note)
    }) 
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
        title.value=note.title
        content.value=note.content
        timestamp=note.timestamp
        console.log(data);
        
    })
};
function rerender(){
    i=1
    notesGrid.innerHTML="";
    notes.forEach(note=>notesMaking(note))
}
document.querySelector("#deleted").addEventListener("click",(data)=>{
    notes=notes.filter(note=>note.timestamp!==timestamp)
    title.value="";
    content.value="";
    rerender();
    localStorage.setItem("notes",JSON.stringify(notes))
})
document.querySelector("#saved").addEventListener("click",(data)=>{
    let i=0;
    let final=0
    let n={
        title:title.value,
        content:content.value,
        date:"",
        timestamp:""
    }
    notes.forEach((note)=>{
        if(note.timestamp===timestamp)
        {
            note.title=title.value;
            note.content=content.value;
            final=1;
        }
        i++
    })
    if(final===0){
        n.timestamp=new Date().toISOString()
        n.date=new Date().toLocaleDateString();
        let newN = JSON.parse(JSON.stringify(n))
        notes=[...notes,newN]
    }
    rerender();
    title.value=""
    content.value=""
    localStorage.setItem("notes",JSON.stringify(notes))
})
document.querySelector("#addNote").addEventListener("click",()=>{
    title.value=""
    content.value=""
})