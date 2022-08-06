// Using the querySelectorAll method I gathered all the
// divs with the panel class
const panels = document.querySelectorAll('.panel');

// Defining the arrow function removeActiveClass
// which when called will remove the active class
// from all the panel divs if they contain it
const removeActiveClass = () => {
    for(const panel of panels)
    {
        if(panel.classList.contains('active'))
        {
            panel.classList.remove('active');
        }
    }
}

// Calling the forEach method on the list of elements for
// which the identifier is panels
// Inside this forEach method every member will be given an
// event listener for the click event
// When clicked all the divs will have the active class removed
// from them and then added to the clicked div
panels.forEach( panel => {
    panel.addEventListener('click' , () => {
        removeActiveClass();
        panel.classList.add('active');
    });
});