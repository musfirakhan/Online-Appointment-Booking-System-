# Online Appointment Booking System 
 Noor Beauty Salon Website


A modern, responsive website for Noor Beauty Salon located in Model Town B, Bahawalpur. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean and professional UI with responsive layout
- **Online Booking**: Integrated appointment booking system
- **Service Showcase**: Detailed presentation of beauty services
- **Image Gallery**: Visual showcase of salon work
- **Contact Form**: Easy communication channel for customers

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: Vite

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   ├── ServiceCard.tsx
│   ├── GalleryItem.tsx
│   ├── ContactInfo.tsx
│   └── Navbar.tsx
├── pages/             # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Book.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── data/              # Static data
│   ├── services.ts
│   └── gallery.ts
├── types/             # TypeScript interfaces
│   └── index.ts
├── hooks/             # Custom React hooks
│   └── useBookingForm.ts
├── utils/             # Utility functions and constants
│   └── constants.ts
├── App.tsx            # Root component
└── main.tsx          # Entry point
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
cd noor-beauty-salon
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📱 Features by Page

### Home Page
- Hero section with booking CTA
- Featured services overview
- Quick contact information
- Salon highlights

### Services Page
- Service cards with images
- Pricing information
- Service descriptions
- Quick booking buttons

### Booking Page
- Interactive booking form
- Service selection
- Date and time picker
- Contact information collection

### Gallery Page
- Image grid layout
- Hover effects
- Image captions
- Responsive design


## 🎨 Design System

### Colors
- Primary: Rose (Tailwind rose-600)
- Background: Rose light (rose-50)
- Text: Gray scale
- Accents: White and dark variants

### Components
- **Button**: Primary and secondary variants
- **Input**: Form inputs with labels
- **Select**: Dropdown selections
- **Cards**: Service and gallery items
- **Navigation**: Responsive navbar

## 🔧 Development

### Code Organization
- Components follow single responsibility principle
- Shared UI components in `components/ui`
- Page-specific components in respective page files
- Types and interfaces centralized in `types` directory
- Constants and utilities separated for maintainability

### Best Practices
- TypeScript for type safety
- Component composition for reusability
- Responsive design patterns
- Performance optimizations
- Clean code principles


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


