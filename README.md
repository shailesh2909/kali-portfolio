# 🖥️ Shailesh Suryawanshi - Portfolio Website

An interactive Kali Linux-themed portfolio website built with Next.js and Tailwind CSS. This unique portfolio simulates a complete Linux desktop environment in the browser, showcasing skills, projects, and experience in an engaging and memorable way.

## ✨ Features

### 🎨 Interactive Desktop Environment
- **Full Desktop Simulation**: Complete Kali Linux-themed UI with working window manager
- **Draggable Windows**: Interactive application windows with minimize, maximize, and close functionality
- **Multiple Applications**: Pre-built apps including Terminal, VS Code, Text Editor, Calculator, and more
- **Context Menus**: Right-click context menus on desktop and folders
- **Booting Screen**: Realistic Linux boot sequence animation
- **Lock Screen**: Functional lock/unlock screen with custom backgrounds

### 📱 Built-in Applications
- **Terminal**: Interactive command-line interface
- **VS Code**: Code editor simulation
- **Chrome & Firefox**: Browser apps
- **Spotify**: Music player interface
- **Text Editor**: Document editing application
- **Calculator**: Functional calculator
- **File Manager**: Browse files and folders
- **Settings**: Customize desktop appearance
- **GitHub**: Portfolio project showcase
- **And many more**: Metasploit, Nmap, Wireshark, and other security tools simulation

### 🎯 Portfolio Features
- Skills and technology stack showcase
- Project gallery with live demos
- Education and experience timeline
- Downloadable resume
- Contact form with email integration
- Responsive design for all devices

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Latest)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: React (Latest)
- **Animations**: Typewriter Effect
- **Drag & Drop**: react-draggable
- **PDF Viewer**: @react-pdf-viewer
- **Analytics**: React GA
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/shailesh2909/kali-portfolio
cd kali-portfolio
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-reload when you make changes. You'll also see any lint errors in the console.

### Build for Production
```bash
npm run build
# or
yarn build
```

This builds the app for production, optimizing the build for best performance.

### Start Production Server
```bash
npm start
# or
yarn start
```

### Export Static Site
```bash
npm run export
# or
yarn export
```

### Deploy to GitHub Pages
```bash
npm run deploy
# or
yarn deploy
```

## 📁 Project Structure

```
shailesh-suryawanshi-portfolio/
├── components/
│   ├── apps/              # Individual application components
│   ├── base/              # Base components (window, app templates)
│   ├── context menus/     # Right-click menu components
│   ├── screen/            # Main screen components (desktop, navbar, etc.)
│   ├── SEO/               # SEO and meta tags
│   └── util components/   # Utility components (clock, status, etc.)
├── pages/
│   ├── _app.js           # Next.js app wrapper
│   ├── _document.js      # Custom document
│   └── index.js          # Home page
├── public/
│   ├── files/            # Public files
│   ├── images/           # Images and wallpapers
│   └── themes/           # UI themes and icons
├── styles/
│   └── index.css         # Global styles
├── apps.config.js        # Application configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Adding a New Application

1. Create a new component in `/components/apps/`
2. Add the app configuration in `apps.config.js`
3. Import and register the app in the appropriate files

### Changing Background Images

- Add new wallpapers to `/public/images/wallpapers/`
- Update the settings in the Settings app

### Modifying Theme

- Edit Tailwind configuration in `tailwind.config.js`
- Update theme icons in `/public/themes/`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Shailesh Suryawanshi - [shaileshsuryawanshi443103@gmail.com](mailto:shaileshsuryawanshi443103@gmail.com) | [LinkedIn](https://www.linkedin.com/in/shailesh-suryawanshi-6989492a1/)

Project Link: [https://github.com/shailesh2909/kali-portfolio](https://github.com/shailesh2909/kali-portfolio)

## 🙏 Acknowledgments

- Inspired by the Kali Linux desktop environment
- Icons from Flat-Remix-Blue-Dark theme
- Built with passion for creating unique web experiences

---

Made with ❤️ by Shailesh Suryawanshi
