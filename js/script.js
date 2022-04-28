// Within About Me page: create a program that moves a box around the screen within
// a container, call the box "cursor" maybe. Underneath each panel on the about
// me page, create boxes that are the exact same dimensions of the cursor, call
// them triggers. If the location of the cursor === the location of the trigger,
// activate the transition of the panel, displaying the various texts in each panel

const currentOpacity = document.querySelector('#aboutMeImageText');
        
function changeOpacity() {
    if (currentOpacity.style.opacity === 0) {
        currentOpacity.stlye.opacty = 1;
    } else {
        currentOpacity.style.opacity = 0;
    }
}