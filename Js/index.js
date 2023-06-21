function Personajes(done){
    
    const results=fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response=>response.json())
    .then(data=>{
        done(data)
    });

}

Personajes(data=>{
    console.log(data)
    data.results.forEach(el=>
        {
            const article=document.createRange().createContextualFragment(/*html*/`
            <article>
            <div class="image-container">
                <img src="${el.image}" alt="">
            </div>

            <h2>${el.name}</h2>
            <span>${el.status}</span>
        </article>
            `);

        const main= document.querySelector("main");
        main.append(article) ;   
        })
})

function cambio()
{
    document.body.classList.toggle("morty")
    document.body.classList.toggle("rick")
    const boton=document.getElementById("boton")
    let t="";
    console.log(boton.textContent);
    if(boton.textContent=="RICK")
    t="MORTY";
    else
    {
        t="RICK";
    }
    boton.textContent=t;
}