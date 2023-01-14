/*button clicks in nav*/

let bio = document.querySelector("#bio") //match the specific button -> biography button
bio.addEventListener('click', () =>{ // when button click
    document.querySelector('#message').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#message1').style.visibility = 'hidden'; //hide the other (photos,works,links,managment)
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let foto = document.querySelector("#foto") // ->photos button
foto.addEventListener('click', () =>{
    document.querySelector('#message1').style.visibility = 'visible';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let works = document.querySelector("#works") // ->works button
works.addEventListener('click', () =>{
    document.querySelector('#message2').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let links = document.querySelector("#links") // ->links button
links.addEventListener('click', () =>{
    document.querySelector('#message3').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let managment = document.querySelector("#managment") // ->managment button
managment.addEventListener('click', () =>{
    document.querySelector('#message4').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
})

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*buttons in side menu*/

let info = document.querySelector("#info")  // match with general info button
info.addEventListener('click', () =>{ // when button click:
    document.querySelector('#info1').style.visibility = 'visible'; //reveal the right message in main and hide the rest of the texts
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let life = document.querySelector("#life")    // life button
life.addEventListener('click', () =>{
    document.querySelector('#life1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let plays = document.querySelector("#plays")    // plays button
plays.addEventListener('click', () =>{
    document.querySelector('#plays1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let poems = document.querySelector("#poems")    // poems button
poems.addEventListener('click', () =>{
    document.querySelector('#poems1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let comedy = document.querySelector("#comedy")    // comedies button
comedy.addEventListener('click', () =>{
    document.querySelector('#comedy1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let tragedy = document.querySelector("#tragedy")    // tragedies button
tragedy.addEventListener('click', () =>{
    document.querySelector('#tragedy1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let romance = document.querySelector("#romance")    // romances button
romance.addEventListener('click', () =>{
    document.querySelector('#romance1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let Shakespeare = document.querySelector("#Shakespeare")    //Shakespeare photos button
Shakespeare.addEventListener('click', () =>{
    document.querySelector('#Shakespeare1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let romeo = document.querySelector("#romeo")    // romeo and juliet photos button
romeo.addEventListener('click', () =>{
    document.querySelector('#romeo1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden'; 
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let login = document.querySelector("#login")    // login button
login.addEventListener('click', () =>{
    document.querySelector('#login1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let biography = document.querySelector("#biography")    // biography link button
biography.addEventListener('click', () =>{
    document.querySelector('#biography1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let about_plays = document.querySelector("#about_plays")    // plays and theater links button
about_plays.addEventListener('click', () =>{
    document.querySelector('#about_plays1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#romeo_and_juliet1').style.visibility = 'hidden';
})

let romeo_and_juliet = document.querySelector("#romeo_and_juliet")    // romeo and juliet links button
romeo_and_juliet.addEventListener('click', () =>{
    document.querySelector('#romeo_and_juliet1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#plays1').style.visibility = 'hidden';
    document.querySelector('#poems1').style.visibility = 'hidden';
    document.querySelector('#comedy1').style.visibility = 'hidden';
    document.querySelector('#tragedy1').style.visibility = 'hidden';
    document.querySelector('#romance1').style.visibility = 'hidden';
    document.querySelector('#Shakespeare1').style.visibility = 'hidden';
    document.querySelector('#romeo1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#about_plays1').style.visibility = 'hidden';

})