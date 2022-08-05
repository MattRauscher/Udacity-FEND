/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewPort(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >=0 &&
        rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)  
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navFragment = document.createDocumentFragment();
const sections = document.getElementsByTagName('section')
const navBar = document.getElementById('navbar__list');

function buildNav(){
    
    for(let i = 0; i<sections.length; i++){
        let sectionText = sections[i].firstElementChild.firstElementChild.innerText;
        let li = document.createElement("li");
        li.innerHTML = sectionText;
        li.classList.add('menu__link');
        li.classList.add(sections[i].id);

        navFragment.appendChild(li);

    }
    
    navBar.appendChild(navFragment);

}

// Add class 'active' to section when near top of viewport

function activeNavBarSection(section, navS){
    console.log('sections send to ActiveNavBarSection Funciton include '+section.id)
    console.log('activeNavBarNavSection contains section 2 '+navS.item(0).classList.contains("section2"));
    for(i=0; i<navS.length; i++) {
        console.log(navS.item(i).className);
       if(navS.item(i).classList.contains(section.id)){
            navS.item(i).classList.add('your-active-class');
            console.log('ADDED');
        } else {
            if(navS.item(i).classList.contains('your-active-class') == true){
                navS.item(i).classList.remove('your-active-class');
        }
    }}

}

function addActiveWhenViewport(navSections){
    for (const section of sections){
        console.log(`section ${section.id} is in viewport ${isInViewPort(section)}`)
        if(isInViewPort(section)==true){
            section.classList.add('your-active-class');
            activeNavBarSection(section, navSections);
        } else {
            section.classList.remove('your-active-class');
        }
        
    };
};

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
const navSections = document.getElementById("navbar__list").getElementsByTagName("li");

for (i=0; i<navSections.length; i++){
    let section = "section"+(i+1);
    console.log(section);
    const navSection =  navSections[i];
    console.log("nav Section: "+navSection.className);
    let targetSection = document.getElementById(section);
    navSections[i].addEventListener("click", () => {
            
            console.log("target Section "+targetSection.id);

            targetSection.scrollIntoView({
            behavior: 'smooth',
            alignToTop: true
           });

        })
}


// Set sections as active

document.addEventListener("scroll", function(){
    console.log("final scroll log "+navSections.item(1).className)
    addActiveWhenViewport(navSections)
});
