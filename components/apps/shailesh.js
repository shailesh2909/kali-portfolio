// File refreshed
import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutShailesh extends Component {

    constructor() {
        super();
        this.state = {
            activeFolder: 'About Me',
            selectedFile: null,
            showPreview: false,
            previewContent: '',
            hoveredItem: null,
            breadcrumbs: ['home', 'shailesh', 'portfolio'],
            isMaximized: false
        }
    }

    componentDidMount() {
        ReactGA.pageview('/portfolio');
    }

    // File system structure
    fileSystem = {
        'About Me': [
            { 
                name: 'intro.txt', 
                type: 'file', 
                icon: 'text',
                content: `Hi! I'm Shailesh Suryawanshi

Hi! I'm Shailesh Suryawanshi.

A full-stack developer and software engineer passionate about building
intelligent, scalable, and user-focused systems. I love crafting clean, reliable
software that blends strong engineering with real-world impact.

🔹 Skilled in Python, JavaScript, React, Node.js, Flask, Firebase, MongoDB, SQL.
🔹 Experienced in backend APIs, authentication, cloud services, and deployment.
🔹 Passionate about ML/AI features in practical apps—telemedicine, automation
   dashboards, and real-time utility tools.
🔹 Strong foundation in DSA, system design, and problem solving.

I enjoy turning ideas into functional, efficient, and elegant digital
experiences—whether it’s a full-stack platform, a machine-learning feature, or
a system automation workflow.

Always exploring. Always building.
Let’s connect and create something impactful together!`
            },
            { 
                name: 'contact.txt', 
                type: 'file',
                icon: 'text',
                content: `Contact Information

Email: shaileshsuryawanshi443103@gmail.com
GitHub: https://www.github.com/shailesh2909
LinkedIn: https://www.linkedin.com/in/shailesh-suryawanshi-6989492a1/
Location: Pune, Maharashtra, India

Available for full-time opportunities and freelance projects.`
            }
        ],
        'Education': [
            { 
                name: 'BE.txt', 
                type: 'file',
                icon: 'text',
                content: `Bachelor of Technology — Electronics & Telecommunication Engineering

Institution: Pune Institute of Computer Technology
Location: Pune, Maharashtra, India
CGPA: 8.32
Expected Graduation: 2027

Summary:
• Strong academic performance with focus on software engineering and modern development practices.
• Applied engineering concepts in real-world projects including AI-powered telemedicine,
  NGO automation systems, and scalable full-stack applications.
• Experience across backend development, cloud platforms, automation, and ML-integrated systems.

`
            },
            { 
                name: 'diploma.txt', 
                type: 'file',
                icon: 'text',
                content: `Diploma in Computer Science and Engineering

Institution: Government Polytechnic Khamgaon
Location: Khamgaon, Maharashtra, India
Percentage: 91.94%
Graduated: 2024

Summary:
• Completed a strong foundation in computer science, programming, and core
  engineering concepts.
• Built practical software solutions during training, including web applications
  and backend modules.
• Strengthened fundamentals in logic building, problem solving, and system
  understanding, helping transition smoothly into advanced software development
  and full-stack engineering.`
            },
            { 
                name: 'achievements.txt', 
                type: 'file',
                icon: 'text',
                content: `Scholastic Achievements

🥇 Secured 1st Rank in a national Cybersecurity Workshop Quiz
   Event: Pursuit 2023, SSGMCE
   Competed against participants from across India

🧩 Solved 100+ DSA problems on LeetCode
   Improved algorithmic and coding proficiency
   Strong foundation in problem-solving

🏆 Active participant in hackathons and coding competitions
   Multiple project showcases and technical presentations`
            }
        ],
        'Skills': [
            { 
                name: 'programming-languages', 
                type: 'folder',
                icon: 'folder',
                items: ['Python', 'JavaScript', 'Java', 'TypeScript', 'C++', 'C', 'PHP', 'SQL']
            },
            { 
                name: 'frontend', 
                type: 'folder',
                icon: 'folder',
                items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Redux']
            },
            { 
                name: 'backend-apis', 
                type: 'folder',
                icon: 'folder',
                items: ['Node.js', 'Flask', 'Express.js', 'REST API', 'Authentication', 'JWT']
            },
            { 
                name: 'databases', 
                type: 'folder',
                icon: 'folder',
                items: ['MongoDB', 'Firebase', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis']
            },
            { 
                name: 'ml-data-science', 
                type: 'folder',
                icon: 'folder',
                items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib']
            },
            { 
                name: 'devops-tools', 
                type: 'folder',
                icon: 'folder',
                items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'Postman']
            }
        ],
        'Projects': [
            { 
                name: 'vitalnex.txt', 
                type: 'file',
                icon: 'text',
                content: `VitalNex — Student Needs Application

GitHub: https://github.com/shailesh2909/VitalNex-Students-Daily-Needs-Android-Application
Tech Stack: Java, XML, Firebase Realtime Database, Firebase Authentication

Description:
VitalNex is an Android application that centralizes essential services for
students and travelers, including room rentals, mess facilities, and nearby
medical assistance. It provides secure login, real-time updates, and an
intuitive mobile interface.

Key Features:
• Room rental listings with contact info and location-based filtering
• Mess service comparisons with structured menu and pricing
• Quick access to nearby medical facilities
• Secure authentication using Firebase Auth
• Real-time database updates via Firebase Realtime Database
• Clean, responsive XML-based UI

Impact:
• Improved accommodation search efficiency by 40%
• Supported 200+ active student users
• Reduced search time from hours to minutes
• Designed with a scalable structure for future enhancements

Team:
Vaibhav Bodade, Nitin Panzade, Varad Bodhekar,
Shailesh Suryawanshi, Anurag Deshmukh

Summary:
A practical, user-focused mobile solution built as a final-year diploma
project, emphasizing real-time data handling, UI/UX design, and teamwork.

`
            },
            { 
                name: 'mediplus.txt', 
                type: 'file',
                icon: 'text',
                content: `MediPlus — AI-Powered Telemedicine Platform

GitHub: https://github.com/sarveshh77/MEDIPLUS
Live Demo : https://mediplus-1-h3zu.onrender.com/
Tech Stack: Python, Flask, Firebase Firestore, Selenium, Random Forest, Pandas, NumPy

Description:
MediPlus is an AI-driven telemedicine system that predicts diseases from
symptoms, assigns severity scores, verifies doctor credentials, and connects
patients with suitable specialists through a clean, responsive web interface.

Key Features:
• Secure patient & doctor authentication with session handling
• Dedicated dashboards for managing appointments and profiles
• Real-time appointment scheduling via Firestore
• ML-based disease prediction using a Random Forest model
• Severity scoring for triage and prioritization
• Specialist recommendation based on ML outputs
• Selenium-based credential verification for doctor legitimacy
• Location-based nearest doctor search
• Fully responsive frontend

Machine Learning:
• Inputs: symptoms, duration, chronic illness indicators
• Outputs: predicted disease + recommended specialist
• Severity derived through weighted symptom mapping

Impact:
• Automated triage and specialist routing for faster decision-making
• Improved verification accuracy through automated registry checks
• Enhanced accessibility with a responsive, multi-device UI
• Delivered a complete end-to-end telemedicine workflow

Summary:
A full-stack healthcare automation platform combining machine learning,
real-time data, and secure authentication—built for efficiency, accuracy,
and practical medical use cases.


`
            },
            { 
                name: 'Gharman-foundation.txt', 
                type: 'file',
                icon: 'text',
                content: `Gharman Foundation - NGO Website

Duration: Aug 2024 - Nov 2024
Tech Stack: MongoDB, Node.js, React, Node.js, Tailwind CSS

Description:
Built a comprehensive website for an NGO to showcase their social initiatives and facilitate donations.

Key Features:
• Responsive MERN stack architecture
• Payment gateway integration (Razorpay)
• Admin dashboard for content management
• Volunteer registration system
• Real-time donation tracking
• Firebase authentication

Impact:
✓ Increased online donations by 35%
✓ Streamlined volunteer management
✓ Enhanced online presence`
            },
            { 
                name: 'EduMark.txt', 
                type: 'file',
                icon: 'text',
                content: `EduMark — Smart Attendance Management System

GitHub: https://github.com/shailesh2909/Smart-Attendance-Management-System-EduMark-
Tech Stack: Next.js 14, TypeScript, Firebase Firestore, Firebase Auth, Tailwind CSS

Description:
EduMark is a real-time attendance management system with separate dashboards
for admin, faculty, and students. It provides secure authentication, instant
Firestore updates, CSV-based data import, and a responsive UI optimized for
institutions.

Admin Features:
• Manage users and classes
• Import data via CSV
• View analytics and activity logs

Faculty Features:
• Mark attendance and generate reports
• Communicate schedule updates
• Access class analytics

Student Features:
• View attendance records and percentages
• Track daily/weekly trends

Key Highlights:
• Role-based access control for all user types
• Real-time Firestore synchronization
• Secure authentication and Firestore rules
• Scalable architecture with clean, responsive UI

Summary:
A fast, reliable attendance solution built with modern web technologies,
focusing on real-time performance, security, and usability.

`
            },
            { 
                name: 'Advanced_Semantic_PDF_Analyzer.txt', 
                type: 'file',
                icon: 'text',
                content: `Advanced Semantic PDF Analyzer

A high-performance Python tool that extracts, ranks, and summarizes the most
relevant sections across multiple PDF documents. Designed for speed,
accuracy, and CPU-only execution.

Key Features:
• Hybrid text extraction using PDFPlumber + EasyOCR for scanned and digital PDFs
• Parallel processing using multiprocessing to handle large collections quickly
• Semantic relevance ranking powered by Sentence-BERT (all-MiniLM-L6-v2)
• Automatic query generation from persona + task description
• Extractive summarization of the most important sections
• Fully containerized with Docker for portable deployment

Tech Stack:
Python, Sentence-Transformers, PyTorch, EasyOCR, NLTK,
PDFPlumber, pdf2image, multiprocessing, Docker

ML Models:
• all-MiniLM-L6-v2 for semantic similarity (86 MB, CPU-optimized)
• EasyOCR CRNN model for multilingual text extraction

Summary:
A complete document-intelligence pipeline capable of processing mixed-quality
PDFs, performing semantic search, and generating meaningful summaries—all
optimized for CPU environments without requiring GPUs.

`
            }
        ],
        'Experience': [
            { 
                name: 'sumago-infotech.txt', 
                type: 'file',
                icon: 'text',
                content: `Sumago Infotech Pvt. Ltd — Python Developer Intern
Duration: June 2024 – July 2024

Summary:
Worked as a Python Developer intern focusing on full-stack development and
building practical software solutions for the healthcare domain. Gained
hands-on experience in backend development, API design, and chatbot systems.

Key Contributions:
• Built a healthcare chatbot using Python and PHP to deliver basic
  health-related information to users.
• Developed and improved backend logic for faster response times and
  cleaner data flow across modules.
• Implemented comprehensive testing workflows to ensure reliability and
  reduce deployment issues.
• Learned full-stack development practices, working across frontend,
  backend, and database layers.

Tech Stack:
Python, PHP, MySQL, HTML, CSS, JavaScript

Impact:
Strengthened backend performance, improved code quality, and contributed to a
functional healthcare support tool used for real-time assistance.
`
            },
            { 
                name: 'gharpan-foundation-intern.txt', 
                type: 'file',
                icon: 'text',
                content: `Gharpan Foundation — Full Stack Intern
Duration: August 2025

Summary:
Contributed as a full-stack developer to build an Orphan Management System
designed to streamline data handling, automate workflows, and improve
operational efficiency across the organization. Worked on both frontend and
backend modules with a focus on performance, reliability, and clean API design.

Key Contributions:
• Built and maintained a secure, scalable backend using Node.js and MongoDB
  with structured APIs and optimized data flow.
• Integrated Firebase and Google Cloud for authentication, storage, and
  real-time operations.
• Developed a modern, responsive UI using React and Tailwind CSS to enhance
  usability and improve user engagement.
• Implemented features for orphan record management, dashboard analytics,
  and internal communication flows.
• Collaborated closely with the team to test, debug, and refine the system for
  seamless deployment.

Tech Stack:
Node.js, Express.js, MongoDB, React.js, Tailwind CSS,
Firebase, Google Cloud

Impact:
Delivered a production-ready system that improved operational visibility and
data accuracy, reduced manual workload, and enabled smoother coordination
across administrative processes.
`
            }
        ],
        'Resume': [
            { 
                name: 'Shailesh_Suryawanshi.pdf', 
                type: 'file',
                icon: 'pdf',
                content: 'PDF_DOWNLOAD'
            },
            { 
                name: 'cover-letter.txt', 
                type: 'file',
                icon: 'text',
                content: `COVER LETTER

Shailesh Suryawanshi
Email: shaileshsuryawanshi443103@gmail.com
GitHub: https://github.com/shailesh2909
LinkedIn: https://www.linkedin.com/in/shailesh-suryawanshi-6989492a1/

---

As a full-stack developer with experience in Python, JavaScript, React, Node.js, Flask, Firebase, MongoDB, SQL, and AWS, I focus on building scalable, reliable, and user-centric applications. My approach combines strong engineering fundamentals with hands-on experience in backend systems, cloud deployments, and real-world problem solving.

I enjoy working on projects that involve performance optimization, distributed systems, and automation. During my internship at Sumago Infotech, I improved API performance by 30% through backend refactoring and automated test suites. At Gharpan Foundation, I engineered a complete MERN application integrated with Firebase and Google Cloud, streamlining workflows and improving user engagement with a responsive modern UI.

My personal projects reflect my interest in impactful engineering. MediPlus, my AI-powered telemedicine platform, integrates ML-driven disease prediction, severity scoring, and automated doctor verification using Flask, Firestore, Selenium, and Random Forest models. VitalNex, an Android application built with Java and Firebase, delivers real-time essential services for students and travelers.

I actively strengthen my problem-solving skills by practicing DSA and have completed 100+ LeetCode challenges. I also secured 1st rank in a national cybersecurity competition, demonstrating strong analytical and technical reasoning.

I am driven by challenges involving scale, performance, and clean system design. My goal is to continue building meaningful software that is efficient, maintainable, and impactful.`
            }
        ]
    };

    handleFolderClick = (folder) => {
        const folderMap = {
            'About Me': 'about-me',
            'Education': 'education',
            'Skills': 'skills',
            'Projects': 'projects',
            'Experience': 'experience',
            'Resume': 'resume'
        };
        
        this.setState({
            activeFolder: folder,
            selectedFile: null,
            showPreview: false,
            breadcrumbs: ['home', 'shailesh', 'portfolio', folderMap[folder]]
        });
        ReactGA.pageview(`/${folder.toLowerCase().replace(/\s+/g, '-')}`);
    }

    handleFileClick = (file, e) => {
        if (e) {
            e.stopPropagation();
        }
        
        if (file.type === 'folder') {
            this.setState({
                selectedFile: file,
                showPreview: true,
                previewContent: `${file.name.toUpperCase().replace(/-/g, ' ')}\n\n${file.items.map(item => `• ${item}`).join('\n')}`
            });
        } else if (file.content === 'PDF_DOWNLOAD') {
            // Open PDF in Chrome app instead of external browser
            const pdfUrl = window.location.origin + '/files/Shailesh_Suryawanshi.pdf';
            localStorage.setItem("chrome-url", pdfUrl);
            localStorage.setItem("chrome-display-url", pdfUrl);
            if (this.props.openApp) {
                this.props.openApp('chrome');
            }
        } else if (file.type === 'file' && file.icon === 'text') {
            // Open text files in the text editor app
            localStorage.setItem("text-editor-filename", file.name);
            localStorage.setItem("text-editor-content", file.content);
            if (this.props.openApp) {
                this.props.openApp('editor');
            }
        } else {
            this.setState({
                selectedFile: file,
                showPreview: true,
                previewContent: file.content
            });
        }
    }

    closePreview = () => {
        this.setState({
            showPreview: false,
            selectedFile: null,
            previewContent: ''
        });
    }

    minimizeWindow = () => {
        if (this.props.minimizeApp) {
            this.props.minimizeApp(this.props.id);
        }
    }

    maximizeWindow = () => {
        this.setState({ isMaximized: !this.state.isMaximized });
        if (this.props.maximizeApp) {
            this.props.maximizeApp(this.props.id);
        }
    }

    closeWindow = () => {
        if (this.props.closeApp) {
            this.props.closeApp(this.props.id);
        }
    }

    render() {
        const { activeFolder, selectedFile, showPreview, previewContent, hoveredItem, breadcrumbs } = this.state;
        const folders = ['About Me', 'Education', 'Skills', 'Projects', 'Experience', 'Resume'];
        const currentFiles = this.fileSystem[activeFolder] || [];
        
        // Calculate statistics
        const folderCount = currentFiles.filter(f => f.type === 'folder').length;
        const fileCount = currentFiles.filter(f => f.type === 'file').length;

        return (
            <div className="w-full h-full flex flex-col" style={{
                backgroundColor: '#232629',
                fontFamily: '"Noto Sans", "Oxygen", "Ubuntu", sans-serif',
                color: '#eff0f1'
            }}>
                
                {/* KDE Dolphin Window */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    
                    {/* TOP WINDOW BAR */}
                    <div className="flex items-center justify-between px-4" style={{
                        height: '40px',
                        background: 'linear-gradient(to bottom, #31363b 0%, #2f3338 100%)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px 8px 0 0',
                        cursor: 'default'
                    }}>
                        <div style={{ width: '100px' }}></div>
                        
                        <div className="flex-1 text-center" style={{
                            fontSize: '13px',
                            color: '#eff0f1',
                            fontWeight: '500',
                            letterSpacing: '0.2px'
                        }}>
                            Portfolio — Dolphin
                        </div>

                        {/* KDE Window Controls */}
                        <div className="flex items-center space-x-2">
                            <button 
                                onClick={this.minimizeWindow}
                                className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors" 
                                style={{
                                    backgroundColor: 'transparent'
                                }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="2" y="7" width="12" height="2" fill="#eff0f1" rx="1"/>
                                </svg>
                            </button>
                            <button 
                                onClick={this.maximizeWindow}
                                className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                                {this.state.isMaximized ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <rect x="3" y="5" width="8" height="8" stroke="#eff0f1" strokeWidth="2" fill="none" rx="1"/>
                                        <rect x="5" y="3" width="8" height="8" stroke="#eff0f1" strokeWidth="2" fill="none" rx="1"/>
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <rect x="3" y="3" width="10" height="10" stroke="#eff0f1" strokeWidth="2" fill="none" rx="1"/>
                                    </svg>
                                )}
                            </button>
                            <button 
                                onClick={this.closeWindow}
                                className="w-8 h-8 rounded flex items-center justify-center transition-colors" 
                                style={{
                                    backgroundColor: 'transparent'
                                }} 
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 4L12 12M12 4L4 12" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* SECONDARY TOOLBAR */}
                    <div className="flex items-center px-3 space-x-2" style={{
                        height: '48px',
                        backgroundColor: '#2c2f33',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.15)'
                    }}>
                        {/* Navigation Buttons */}
                        <div className="flex items-center space-x-1">
                            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M10 12L6 8L10 4" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 4L10 8L6 12" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors ml-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 12V6M8 6L5 9M8 6L11 9" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        {/* Breadcrumb Bar */}
                        <div className="flex-1 flex items-center px-3 rounded" style={{
                            backgroundColor: '#232629',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '32px',
                            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
                        }}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#3daee9"/>
                            </svg>
                            <span style={{ fontSize: '13px', color: '#eff0f1' }}>
                                /{breadcrumbs.join('/')}
                            </span>
                        </div>

                        {/* Search Button */}
                        <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="7" cy="7" r="4" stroke="#eff0f1" strokeWidth="2" fill="none"/>
                                <path d="M10 10L13 13" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="flex flex-1" style={{ minHeight: 0 }}>
                        
                        {/* LEFT SIDEBAR (PLACES) */}
                        <div style={{
                            width: '220px',
                            backgroundColor: '#1d1f21',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            overflowY: 'auto'
                        }}>
                            <div className="px-2">
                                {/* Places Section */}
                                <div style={{
                                    fontSize: '11px',
                                    color: '#7f8c8d',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    fontWeight: '600',
                                    marginBottom: '6px',
                                    paddingLeft: '8px',
                                    marginTop: '4px'
                                }}>
                                    PLACES
                                </div>

                                <div className="space-y-0.5">
                                    {folders.map((folder) => {
                                        const isActive = activeFolder === folder;
                                        return (
                                            <div
                                                key={folder}
                                                onClick={() => this.handleFolderClick(folder)}
                                                className="flex items-center space-x-2 px-2 py-2 rounded cursor-pointer transition-all"
                                                style={{
                                                    backgroundColor: isActive ? '#3daee9' : 'transparent',
                                                    color: isActive ? '#ffffff' : '#eff0f1',
                                                    fontSize: '13px',
                                                    fontWeight: isActive ? '500' : '400'
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(61, 174, 233, 0.15)';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                    }
                                                }}
                                            >
                                                {/* KDE Blue Folder Icon */}
                                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2 5a1 1 0 011-1h4l1.5 1.5H14a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" 
                                                          fill={isActive ? '#ffffff' : '#3daee9'} 
                                                          opacity={isActive ? '1' : '0.9'}/>
                                                </svg>
                                                <span className="truncate">{folder}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Devices Section */}
                                <div style={{
                                    fontSize: '11px',
                                    color: '#7f8c8d',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    fontWeight: '600',
                                    marginBottom: '6px',
                                    paddingLeft: '8px',
                                    marginTop: '16px'
                                }}>
                                    DEVICES
                                </div>

                                <div className="space-y-0.5">
                                    <div className="flex items-center space-x-2 px-2 py-2 rounded" style={{
                                        color: '#eff0f1',
                                        fontSize: '13px',
                                        opacity: '0.6'
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                            <rect x="2" y="2" width="12" height="11" rx="1" stroke="#eff0f1" strokeWidth="1.5" fill="none"/>
                                            <rect x="4" y="13" width="8" height="1" fill="#eff0f1"/>
                                        </svg>
                                        <span>Computer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT - FILE GRID */}
                        <div className="flex-1 overflow-auto" style={{
                            backgroundColor: '#232629',
                            padding: '16px'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                                gap: '16px',
                                justifyItems: 'center'
                            }}>
                                {currentFiles.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center cursor-pointer group"
                                        style={{ 
                                            width: '90px',
                                            padding: '8px',
                                            borderRadius: '4px',
                                            backgroundColor: hoveredItem === index ? 'rgba(61, 174, 233, 0.1)' : 'transparent',
                                            border: hoveredItem === index ? '1px solid rgba(61, 174, 233, 0.4)' : '1px solid transparent',
                                            transition: 'all 0.15s ease'
                                        }}
                                        onClick={(e) => this.handleFileClick(file, e)}
                                        onMouseEnter={() => this.setState({ hoveredItem: index })}
                                        onMouseLeave={() => this.setState({ hoveredItem: null })}
                                    >
                                        {/* Icon */}
                                        <div className="w-12 h-12 flex items-center justify-center mb-2">
                                            {file.type === 'folder' ? (
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <path d="M6 12a3 3 0 013-3h12l4.5 4.5H39a3 3 0 013 3v18a3 3 0 01-3 3H9a3 3 0 01-3-3V12z" 
                                                          fill="#3daee9"/>
                                                    <path d="M6 16h36v18a3 3 0 01-3 3H9a3 3 0 01-3-3V16z" 
                                                          fill="#4db8ea" 
                                                          opacity="0.8"/>
                                                </svg>
                                            ) : file.icon === 'pdf' ? (
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <path d="M28 6H12a3 3 0 00-3 3v30a3 3 0 003 3h24a3 3 0 003-3V17L28 6z" 
                                                          fill="#e74c3c"/>
                                                    <path d="M28 6v11h11" fill="#c0392b"/>
                                                    <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PDF</text>
                                                </svg>
                                            ) : (
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <path d="M28 6H12a3 3 0 00-3 3v30a3 3 0 003 3h24a3 3 0 003-3V17L28 6z" 
                                                          fill="#bdc3c7"/>
                                                    <path d="M28 6v11h11" fill="#95a5a6"/>
                                                    <rect x="14" y="22" width="10" height="1" fill="#7f8c8d" rx="0.5"/>
                                                    <rect x="14" y="26" width="14" height="1" fill="#7f8c8d" rx="0.5"/>
                                                    <rect x="14" y="30" width="12" height="1" fill="#7f8c8d" rx="0.5"/>
                                                </svg>
                                            )}
                                        </div>

                                        {/* Filename */}
                                        <div className="text-center break-words w-full leading-tight" style={{
                                            fontSize: '12px',
                                            color: '#eff0f1',
                                            lineHeight: '1.3',
                                            fontWeight: '400'
                                        }}>
                                            {file.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* STATUS BAR */}
                    <div className="flex items-center justify-between px-4" style={{
                        height: '28px',
                        backgroundColor: '#3daee9',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                        fontSize: '12px',
                        color: '#ffffff',
                        fontWeight: '400'
                    }}>
                        <div>
                            {folderCount > 0 && `${folderCount} Folder${folderCount !== 1 ? 's' : ''}`}
                            {folderCount > 0 && fileCount > 0 && ', '}
                            {fileCount > 0 && `${fileCount} File${fileCount !== 1 ? 's' : ''}`}
                        </div>
                        <div>Free space: 256 GB</div>
                    </div>
                    
                    {/* FILE PREVIEW MODAL */}
                    {showPreview && (
                        <div className="fixed inset-0 flex items-center justify-center z-50" style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.75)'
                        }} onClick={this.closePreview}>
                            <div className="rounded-lg overflow-hidden" style={{ 
                                backgroundColor: '#232629',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                                maxHeight: '80vh',
                                width: '90%',
                                maxWidth: '700px',
                                border: '1px solid rgba(0, 0, 0, 0.3)'
                            }} onClick={(e) => e.stopPropagation()}>
                                
                                {/* Preview Header */}
                                <div className="flex items-center justify-between px-4" style={{ 
                                    backgroundColor: '#31363b',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                                    height: '40px'
                                }}>
                                    <div className="flex items-center space-x-2">
                                        {selectedFile?.icon === 'pdf' ? (
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M10 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6l-3-4z" fill="#e74c3c"/>
                                                <path d="M10 2v4h3" fill="#c0392b"/>
                                            </svg>
                                        ) : selectedFile?.type === 'folder' ? (
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2 5a1 1 0 011-1h4l1.5 1.5H14a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" fill="#3daee9"/>
                                            </svg>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M10 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6l-3-4z" fill="#bdc3c7"/>
                                                <path d="M10 2v4h3" fill="#95a5a6"/>
                                            </svg>
                                        )}
                                        <span style={{ fontSize: '13px', color: '#eff0f1', fontWeight: '500' }}>
                                            {selectedFile?.name}
                                        </span>
                                    </div>
                                    <button onClick={this.closePreview} className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M4 4L12 12M12 4L4 12" stroke="#eff0f1" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>

                                {/* Preview Content */}
                                <div className="p-6 overflow-y-auto" style={{ 
                                    maxHeight: 'calc(80vh - 40px)',
                                    fontFamily: '"Oxygen Mono", "Ubuntu Mono", "Courier New", monospace',
                                    fontSize: '13px',
                                    color: '#eff0f1',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-wrap',
                                    backgroundColor: '#232629'
                                }}>
                                    {previewContent}
                                </div>
                            </div>
                        </div>
                    )}
 
                </div>
            </div>
        );
    }
}

export default AboutShailesh;

export const displayAboutShailesh = (addFolder, openApp, id, minimizeApp, maximizeApp, closeApp) => {
    return <AboutShailesh id={id} minimizeApp={minimizeApp} maximizeApp={maximizeApp} closeApp={closeApp} openApp={openApp} />;
}
