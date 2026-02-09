# TechFlow Jordan - IT Solutions Website

A modern, fully functional website for TechFlow Jordan - an IT company based in Amman, Jordan specializing in computer networks, maintenance, CCTV, and alarm systems.

## Features

- **Animated Hero Slider** - Auto-rotating slides with smooth transitions
- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Working Contact Form** - Sends emails using EmailJS
- **Smooth Scroll Navigation** - One-page scrolling experience
- **Interactive Elements** - Hover effects, animations, and transitions
- **Google Maps Integration** - Shows company location
- **Social Media Links** - Connect with customers

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite
- EmailJS (for contact form)
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Configuring the Contact Form (EmailJS)

The contact form uses EmailJS to send emails without a backend. To make it work:

### Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create an Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template using these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{service}}` - Service interested in
   - `{{message}}` - The message content
4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Copy your **Public Key**

### Step 5: Update the Configuration

Open `src/sections/Contact.tsx` and update the `EMAILJS_CONFIG` object:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',  // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id', // Replace with your Template ID
  PUBLIC_KEY: 'your_actual_public_key',   // Replace with your Public Key
};
```

### Step 6: Rebuild and Deploy

```bash
npm run build
```

Then deploy the `dist` folder to your hosting provider.

## Customization

### Changing Contact Information

Edit the following files to update contact details:

- `src/sections/Navigation.tsx` - Phone number in navbar
- `src/sections/Contact.tsx` - Contact info cards
- `src/sections/Footer.tsx` - Footer contact info

### Changing Colors

The primary color (turquoise) is defined in:
- `tailwind.config.js` - Under `colors.turquoise`
- `src/index.css` - CSS variables

### Adding/Removing Services

Edit `src/sections/Services.tsx` to modify the services list.

## File Structure

```
src/
├── sections/
│   ├── Navigation.tsx    # Navbar component
│   ├── Hero.tsx          # Hero slider section
│   ├── About.tsx         # About us section
│   ├── Services.tsx      # Services showcase
│   ├── Process.tsx       # How we work section
│   ├── Contact.tsx       # Contact form & info
│   └── Footer.tsx        # Footer component
├── App.tsx               # Main app component
├── App.css               # App-specific styles
├── index.css             # Global styles & Tailwind
└── main.tsx              # Entry point

public/
└── images/               # All website images
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for TechFlow Jordan. All rights reserved.

## Support

For questions or support, contact:
- Email: info@techflow.jo
- Phone: +962 79 000 0000
