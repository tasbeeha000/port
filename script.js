// let NavBarValue = document.getElementById('NavBar');
// let MenuSectionValue = document.getElementById("MenuSection");
// let navBtn = document.getElementById('NavButton');
// let ResponsiveNav = document.getElementById('navSectionReponsive');
// let LogoValue = document.getElementById('LogoImage');
// let ResponsiveLogo = document.getElementById('LogoResponsive');
// const breakpoint= 768;
// let ResponsiveMenuValue = document.getElementById('MenuSectionResponsive');

// let navbarBTNSection = document.getElementById('NavButtonSection');

// function ResizeNav(){
//     if (window.innerWidth <=breakpoint){
//         LogoValue.classList.add('hide');
//         MenuSectionValue.classList.add('hide');
//         ResponsiveNav.classList.remove('hide');
//         navBtn.classList.remove('hide');
//         ResponsiveLogo.classList.remove('hide');
//         navbarBTNSection.classList.remove('hide');

//     }
//     else{
//          ResponsiveLogo.classList.add('hide');
//          ResponsiveNav.classList.add('hide');
//          navBtn.classList.add('hide');
//         LogoValue.classList.remove('hide');
//         MenuSectionValue.classList.remove('hide');
//         navbarBTNSection.classList.add('hide');
//     }


// }
// function openResponsiveMenu(){
//     ResponsiveMenuValue.classList.toggle('hide');
    

// }



// navBtn.addEventListener('click' , openResponsiveMenu);

// window.addEventListener('resize' ,ResizeNav);
let NavBarValue = document.getElementById('NavBar');
let MenuSectionValue = document.getElementById("MenuSection");
let navBtn = document.getElementById('NavButton');
let ResponsiveNav = document.getElementById('navSectionReponsive');
let LogoValue = document.getElementById('LogoImage');
let ResponsiveLogo = document.getElementById('LogoResponsive');
const breakpoint = 768;
let ResponsiveMenuValue = document.getElementById('MenuSectionResponsive');

let navbarBTNSection = document.getElementById('NavButtonSection');

function ResizeNav() {
    if (window.innerWidth <= breakpoint) {
        LogoValue.classList.add('hide');
        MenuSectionValue.classList.add('hide');
        ResponsiveNav.classList.remove('hide');
        navBtn.classList.remove('hide');
        ResponsiveLogo.classList.remove('hide');
        navbarBTNSection.classList.remove('hide');
    } else {
        ResponsiveLogo.classList.add('hide');
        ResponsiveNav.classList.add('hide');
        navBtn.classList.add('hide');
        LogoValue.classList.remove('hide');
        MenuSectionValue.classList.remove('hide');
        navbarBTNSection.classList.add('hide');
    }
}

function openResponsiveMenu() {
    ResponsiveMenuValue.classList.toggle('hide');
}

// Call ResizeNav() when the page loads
window.addEventListener('load', ResizeNav);

// Call ResizeNav() when the window is resized
window.addEventListener('resize', ResizeNav);

// Add event listener for the button click
navBtn.addEventListener('click', openResponsiveMenu);

    // Define an array of links corresponding to each video
    const videoLinks = ['https://chat.openai.com/', 'https://chat.openai.com/', 'https://chat.openai.com/', 'https://chat.openai.com/'];

    // Get all video elements
    const videos = document.querySelectorAll('.Mini-slider video');

    // Add click event listener to each video
    videos.forEach((video, index) => {
        video.addEventListener('click', () => {
            // Get the link associated with the clicked video
            const link = videoLinks[index];

            // Redirect the user to the corresponding link
            window.location.href = link;
        });
    });
    VANTA.WAVES({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        waveSpeed: 1.15
      })
      VANTA.WAVES({
        el: "#contact",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        waveSpeed: 1.15
      })
      VANTA.WAVES({
        el: "#portfolio",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        waveSpeed: 1.15
      })
      VANTA.WAVES({
        el: "#about",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        waveSpeed: 1.15
      })

   

