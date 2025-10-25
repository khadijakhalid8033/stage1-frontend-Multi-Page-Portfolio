# Stage 1 Project — Multi-Page Portfolio

##  Project Structure

project/
├── index.html # Home page 
├── about.html # About Me page (reflections)
├── contact.html # Contact page (form validation)
├── style.css # Styles
├── script.js # JS for validation
└── README.md # Documentation



##  Pages Overview

###  index.html
- Serves as the homepage.
- Includes navigation to other pages.
- Displays a profile card.

###  about.html
- Contains reflective sections:
  - Bio (`data-testid="test-about-bio"`)
  - Goals (`data-testid="test-about-goals"`)
  - Areas of low confidence (`data-testid="test-about-confidence"`)
  - Note to future self (`data-testid="test-about-future-note"`)
  - Extra thoughts (`data-testid="test-about-extra"`)

###  contact.html
- Contact form with validation for:
  - Name, email, subject, and message.
- Shows error and success messages using proper `data-testid` attributes.


##  Accessibility & Responsiveness
- Semantic HTML (`<main>`, `<section>`, `<label>`, etc.)
- All form inputs linked with `<label for="">`
- `aria-describedby` used for errors
- Responsive with CSS media queries
- Fully keyboard navigable


##  Technologies
- HTML5  
- CSS3  
- JavaScript (form validation)


##  Deployment
- Hosted on []
- GitHub Repo: []
