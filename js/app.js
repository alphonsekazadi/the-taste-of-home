const stage = document.querySelector(".art-stage");


stage.addEventListener("mousemove",(event)=>{


    const rect = stage.getBoundingClientRect();


    const x =
    event.clientX - rect.left;


    const y =
    event.clientY - rect.top;



    const moveX =
    (x / rect.width - .5) * 8;


    const moveY =
    (y / rect.height - .5) * 8;



    stage.style.setProperty(
        "--mouse-x",
        `${moveX}px`
    );


    stage.style.setProperty(
        "--mouse-y",
        `${moveY}px`
    );


});



stage.addEventListener("mouseleave",()=>{


    stage.style.setProperty(
        "--mouse-x",
        "0px"
    );


    stage.style.setProperty(
        "--mouse-y",
        "0px"
    );


});