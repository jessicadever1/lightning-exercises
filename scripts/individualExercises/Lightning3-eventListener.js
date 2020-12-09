let btn = document.querySelector(".funBtn")

    btn.addEventListener("click", ()=> {
        console.log("Congradulations! Your button is working!")
        const imgDiv = document.querySelector(".msgbox")
        imgDiv.innerHTML = `
        <img class="jonah" src="./images/excited.jpg" alt="excited Jonah">
        <p>Told ya!</p>
        `
    })