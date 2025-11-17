# Shyam's Professional Portfolio

A fully functional portfolio website built with HTML, CSS, and JavaScript featuring EmailJS integration for contact form functionality.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Interactive Animations**: Typing effect, scroll-triggered animations, hover effects
- **Contact Form**: Fully functional contact form with EmailJS integration
- **Modern UI**: Clean, professional design with smooth transitions
- **Social Links**: Integrated social media links with Font Awesome icons

## Setup Instructions

### 1. EmailJS Configuration

To make the contact form functional, you need to set up EmailJS:

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

### 2. Update JavaScript Configuration

In `script.js`, replace the placeholder values:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your EmailJS service and template IDs
```

### 3. Email Template Setup

Create an email template in EmailJS with the following variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Shyam)

### 4. Customize Content

Update the following sections in `index.html`:
- Personal information in the About section
- Skills and technologies
- Project descriptions and links
- Social media links in the footer

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **EmailJS**: Email service integration
- **Font Awesome**: Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

You can deploy this website to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out through the contact form on the website or connect via social media!
