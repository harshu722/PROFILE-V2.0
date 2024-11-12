// Function to display the welcome message
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block'; // Show the welcome message bar
}

// Function to close the welcome message
function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'none'; // Hide the welcome message
}
// JavaScript for password-protected download
function checkPassword(event) {
    event.preventDefault();
    const inputPassword = document.getElementById('password').value;
    const correctPassword = "Saharsh-Harshu-2001-2024-2030";

    if (inputPassword === correctPassword) {
        document.getElementById('resume-link').style.display = 'block'; // Show the download link
    } else {
        alert("Incorrect password, please try again.");
    }
}

// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');
   lightboxImg.src = imageSrc; // Set the source of the image to display
   lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
   const lightbox = document.getElementById('lightbox');
   lightbox.style.display = 'none'; // Hide the lightbox
}

// Function to add animation when "About Me" section is in view
function animateAboutHeader() {
   const aboutHeader = document.querySelector('.about-header');
   const rect = aboutHeader.getBoundingClientRect();
   const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
   
   if (isVisible) {
       aboutHeader.classList.add('visible'); // Add class to trigger CSS animation
       window.removeEventListener('scroll', animateAboutHeader); // Remove event listener after animation
   }
}

// Listen for scroll to trigger the animation
window.addEventListener('scroll', animateAboutHeader);

// Toggle the chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '' ? 'block' : 'none';
}


//updated code
// Display message in the chatbot
function displayMessage(message, className) {
    const messageContainer = document.createElement('div');
    messageContainer.className = className;
    messageContainer.textContent = message;

    const chatbotMessages = document.getElementById('chatbot-messages');
    chatbotMessages.appendChild(messageContainer);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim(); // Trim whitespace
    if (userInput === '') return; // Ignore empty input

    // Display the user's message
    displayMessage(userInput, 'user-message');

    // Clear the input field after displaying the message
    document.getElementById('user-input').value = '';

    // Check for navigation or provide a response
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("about")) {
        displayMessage("Navigating to the About Me section...", 'bot-message');
        scrollToSection("about");
    } else if (lowerInput.includes("resume")) {
        displayMessage("Navigating to the Resume section...", 'bot-message');
        scrollToSection("resume");
    } else if (lowerInput.includes("social") || lowerInput.includes("projects")) {
        displayMessage("Navigating to the Social Media & Projects section...", 'bot-message');
        window.location.href = "social.html"; // Redirect to social page
    } else if (lowerInput.includes("hobbies")) {
        displayMessage("Navigating to the Hobbies section...", 'bot-message');
        window.location.href = "hobbies.html"; // Redirect to hobbies page
    } else if (lowerInput.includes("contact")) {
        displayMessage("Navigating to the Contact page...", 'bot-message');
        window.location.href = "contact.html"; // Redirect to contact page
    } else {
        displayMessage("I'm still learning! Ask me something simple or try navigating to a section.", 'bot-message');
    }
}
