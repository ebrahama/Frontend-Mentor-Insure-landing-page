
const hum = document.querySelector("#hum");
const close1 = document.querySelector("#close");
const meno = document.querySelector("#menu");

hum.addEventListener("click", () => {

    const visi = meno.getAttribute('data-visible')

    if(visi === "false"){

        hum.setAttribute("data-visible" , false )
        close1.setAttribute("data-visible" , true )
        meno.setAttribute("data-visible" , true )

    }
})

close1.addEventListener("click", () => {

    const visi = meno.getAttribute('data-visible')

    if(visi === "true"){

        hum.setAttribute("data-visible" , true )
        close1.setAttribute("data-visible" , false )
        meno.setAttribute("data-visible" , false )

    }
})