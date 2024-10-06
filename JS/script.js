function scrollToElement() {
    const element = document.getElementById('carosel');
    const offset = 200; // Desired offset from the top

    // Get the element's position relative to the top of the document
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    // Calculate the position to scroll to, accounting for the offset
    const scrollPosition = elementPosition + offset;

    // Smooth scroll to the calculated position
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}

function smoothScrollToElement() {
    const elements = document.getElementsByClassName('foot');
    if (elements.length > 0) {
        const element = elements[0]; // Get the first element with the class 'foot'
        const offset = 50; // Desired offset from the top
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const scrollPosition = elementPosition - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
}

// Example usage: smoothScrollToElement('sectionId');


function handleSearchInput() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
    const query = input.value.toLowerCase();
    
    // Example suggestion data
    const suggestionData = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert'];
    suggestions.innerHTML = '';
    
    if (query.length > 2) {
        const filteredSuggestions = suggestionData.filter(item => item.toLowerCase().includes(query));
        filteredSuggestions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('p-2', 'border-bottom');
            li.onclick = () => {
                input.value = item;
                suggestions.innerHTML = '';
            };
            suggestions.appendChild(li);
        });
        suggestions.classList.remove('d-none');
    } else {
        suggestions.classList.add('d-none');
    }
}

// Call this function on input event
document.getElementById('searchInput').addEventListener('input', handleSearchInput);


function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + section.offsetHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Call this function on scroll event
window.addEventListener('scroll', updateActiveNavLink);

// CSS for active class
// .active {
//   font-weight: bold;
//   color: #007bff; /* Adjust as needed */
// }
