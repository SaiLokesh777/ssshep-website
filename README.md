# SSSHEP — Sri Sathya Sai Prema Seva Sadan Website

A full-featured responsive React website for the SSSHEP social service organization.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## 🔐 Admin Login
- **URL:** `/admin`
- **Username:** `admin`
- **Password:** `admin123`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar
│   ├── Footer.jsx        # Site footer
│   ├── PersonCard.jsx    # Student/Alumni card
│   └── ImageUpload.jsx   # Reusable image uploader
├── pages/
│   ├── Home.jsx          # Homepage with carousel
│   ├── Students.jsx      # Students grid
│   ├── StudentProfile.jsx # Profile + PDF/Word download
│   ├── Alumni.jsx        # Alumni grid
│   ├── AlumniProfile.jsx # Alumni profile + downloads
│   ├── Services.jsx      # Services cards
│   ├── Contact.jsx       # Contact + map
│   └── Admin.jsx         # Full admin panel
├── data/
│   ├── students.json
│   ├── alumni.json
│   ├── services.json
│   ├── impact.json
│   └── contact.json
├── AppContext.jsx         # Global state management
├── App.jsx               # Routes
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## ✨ Features
- **8 Pages:** Home, Students, Alumni, Profiles, Services, Contact, Admin
- **Admin Panel:** Full CRUD for Students, Alumni, Services, Impact, Contact
- **PDF & Word Download:** Passport-size image preserved
- **Impact Carousel:** Auto-sliding, pauses on hover
- **Image Upload:** Base64 in-browser, persisted in localStorage
- **Responsive:** Mobile-first, works on all screens
- **Modern UI:** Playfair Display + Source Sans 3, saffron/navy palette

## 🛠 Tech Stack
- React 18 + Vite
- Tailwind CSS
- React Router DOM v6
- jsPDF (PDF generation)
- docx (Word generation)
- file-saver
- lucide-react (icons)
