// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Typing effect for hero section
const heroText = " Passionate developer and innovator.";
let i = 0;
const speed = 50;

function typeWriter() {
    if (i < heroText.length) {
        document.querySelector('.hero p').innerHTML += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing effect when page loads
window.addEventListener('load', function() {
    document.querySelector('.hero p').innerHTML = '';
    typeWriter();
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Form validation and submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (name === '' || email === '' || message === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('.contact-form button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Prepare email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Shyam'
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your EmailJS service and template IDs
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Thank you for your message! I will get back to you soon.', 'success');
            document.querySelector('.contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;

    // Insert after form
    const form = document.querySelector('.contact-form');
    form.parentNode.insertBefore(messageEl, form.nextSibling);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 5000);
}

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    skillItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 50) {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}

window.addEventListener('scroll', animateSkills);

// Initialize skill items as hidden
skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Projects hover effect
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Download resume function
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    link.click();
}

// Mobile menu toggle (if needed for smaller screens)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add mobile menu button if screen is small
if (window.innerWidth <= 768) {
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '☰';
    menuBtn.className = 'menu-btn';
    menuBtn.onclick = toggleMenu;
    document.querySelector('.navbar .container').appendChild(menuBtn);

    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        .menu-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
        }
        .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 20px 0;
        }
        .nav-links.active {
            display: flex;
        }
        .nav-links li {
            margin: 10px 0;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}
