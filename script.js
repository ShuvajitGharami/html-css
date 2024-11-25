let isOpen = false;

function toggleDoor() {
    const door = document.getElementById("door");
    //  const lock = document.getElementById("");
    // lock.transform = "rotateX(90deg)";

    // lock.addEventListener("click", function () {

    //     lock.classList.toggle("lock");
    
    // });

        if (isOpen) {
         
            door.style.transform = "rotateY(0deg)";
            isOpen = false;
        } else {
            
             door.style.transform = "rotateY(120deg)";
            isOpen = true;
            
        }

}
// toggleDoor();