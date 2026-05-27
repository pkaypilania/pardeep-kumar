export const portfolioData = {
  personal: {
    name: "Pardeep Kumar (Pardeep Pilania)",
    title: "Senior / Sr. React Native Developer",
    location: "Mohali, Punjab, India",
    email: "pilaniapkay@gmail.com",
    phone: "+91 8570007739",
    github: "github.com/pkaypilania",
    bio: "Senior React Native Developer (often known as Pardeep Pilania) with 5+ years of experience and 30+ shipped applications across fintech, AI, hardware, wellness, and media domains. Deeply specialized as a Sr. React Native Developer in bridging cross-platform mobile apps with native platforms via custom native modules, TurboModules, and JSI. Shipped apps with 500,000+ combined downloads, integrated PAX POS payments, built on-device ML audio pipelines, and implemented AR video filters."
  },
  
  highlights: [
    {
      id: 1,
      number: "30+",
      label: "Apps Shipped",
      description: "Production applications delivered"
    },
    {
      id: 2,
      number: "500K+",
      label: "Downloads",
      description: "Combined app downloads"
    },
    {
      id: 3,
      number: "5+",
      label: "Years",
      description: "Professional experience"
    },
    {
      id: 4,
      number: "4",
      label: "Companies",
      description: "Organizations worked with"
    }
  ],

  skills: [
    {
      category: "Mobile Development",
      items: ["React Native", "Android (Kotlin/Java)", "iOS (Swift/Objective-C)", "Custom Native Modules", "TurboModules", "JSI"]
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Kotlin", "Java", "Swift", "Objective-C"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Redux", "Redux Toolkit", "Performance Optimization", "Hermes", "Metro"]
    },
    {
      category: "Backend & Cloud",
      items: ["Node.js", "Firebase Auth", "Firestore", "REST APIs", "WebSockets"]
    },
    {
      category: "AI, Audio & Maps",
      items: ["ML Model Integration", "On-device Inference", "ElevenLabs", "PCM Audio Processing", "Mapbox Navigation SDK", "react-native-track-player"]
    },
    {
      category: "Hardware & POS",
      items: ["PAX POS SDK", "RFID SDK", "Barcode Scanners", "Receipt Printers", "Tap/Card/EBT", "Bluetooth Integration"]
    },
    {
      category: "AR & Media",
      items: ["Banuba SDK", "AR Filters", "Video Effects", "In-App Purchases", "Stripe Payments"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "CI/CD", "Xcode", "Android Studio", "Firebase Crashlytics", "Bugsnag", "Sentry"]
    }
  ],

  experience: [
    {
      id: 1,
      company: "DigiMantra Labs",
      role: "Senior React Native Developer",
      duration: "Jun 2025 – Present",
      location: "Mohali, India (Service-based agency)",
      responsibilities: [
        "Implemented Banuba AR SDK into Neemo video-creation app entirely via custom native modules, enabling real-time facial filters and template-based video generation on both iOS and Android (live on stores)",
        "Built QYTENITE snoring detection app integrating on-device ML model for real-time audio classification, with full PCM audio preprocessing pipeline and Bluetooth-connected smart pillow control bridge",
        "Architecting scalable React Native applications with modular component design, reducing feature delivery turnaround to under 4 weeks per module",
        "Establishing CI/CD pipelines and mobile code standards adopted across the team for consistent release quality"
      ]
    },
    {
      id: 2,
      company: "Zapbuild Technologies",
      role: "Senior React Native Developer",
      duration: "Apr 2023 – Jun 2025",
      location: "Mohali, India (Service-based agency)",
      responsibilities: [
        "Sole React Native developer for BottlePOS: integrated PAX SDK into POS app for tap/card/EBT payments, refunds, barcode scanning, and receipt printing on PAX hardware terminals in live US liquor stores",
        "Resolved critical WebView communication bug in BottlePOS React Native app that was blocking hardware transactions; built a robust WebView-to-native bridge for real-time POS-to-device communication",
        "Maintained and shipped features for BottleZoo (companion marketplace app, live on App Store & Play Store), resolving production bugs and delivering new functionality in parallel",
        "Built RFID TurboModule demo for Android team enabling RFID hardware scanner integration into React Native as a working reference implementation",
        "Delivered 10+ production mobile applications across clients, consistently within 1–2 month MVP timelines"
      ]
    },
    {
      id: 3,
      company: "Beyond Root Technologies",
      role: "Junior React Native Developer",
      duration: "Oct 2021 – Apr 2023",
      location: "Mohali, India (Service-based agency)",
      responsibilities: [
        "Built OjasEnergyWatch (Crystal Power) from mid-project: smart electricity meter monitoring app with live balance, real-time consumption charts, bill PDF downloads, and push alerts (10,000+ Play Store downloads)",
        "Developed Sheen Magazine app features: implemented In-App Purchase subscription, PDF download functionality, and multiple interactive UI sections (live on Play Store & App Store)",
        "Shipped 5+ cross-platform React Native applications end-to-end within tight agency timelines across diverse client domains",
        "Contributed to Node.js backend services for internal client projects, extending full-stack delivery capability"
      ]
    },
    {
      id: 4,
      company: "Tech Rush Global",
      role: "React Native Developer (Intern → Junior)",
      duration: "Apr 2021 – Oct 2021",
      location: "Mohali, India",
      responsibilities: [
        "Built Neend — Sleep, Relax & Meditate app from scratch: Firebase Auth, Firestore real-time DB, and react-native-track-player for audio playback (app grew to 500,000+ downloads on Play Store)",
        "Sole developer responsible for initial architecture, feature implementation, and Play Store / App Store store submission"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Neend - Sleep & Meditate",
      category: "Wellness",
      image: "assets/neend.png",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.neend",
        appStore: "https://apps.apple.com/in/app/neend-relax-sleep-meditate/id6444904431"
      },
      description: "Sleep, relax, and meditation app featuring custom audio player pipelines, Firebase Auth, and Firestore real-time database.",
      downloads: "500,000+ Downloads",
      tech: ["React Native", "Firebase", "react-native-track-player", "iOS", "Android"],
      highlights: ["500K+ downloads on Google Play Store", "Built from scratch as sole developer", "High-retention audio meditation flows"]
    },
    {
      id: 2,
      name: "BottlePOS",
      category: "Fintech",
      image: "assets/bottlepos.png",
      links: {
        website: "https://bottlepos.com",
        paxStore: "https://paxstore.us"
      },
      description: "Liquor Store Point of Sale (POS) system integrated with PAX hardware SDK for secure tap/card/EBT payments, refunds, and thermal receipt printing.",
      downloads: "Enterprise Deployed",
      tech: ["React Native", "PAX SDK", "WebView Bridge", "Node.js", "Docker"],
      highlights: ["Deployed in live US liquor stores", "Custom native bridge for hardware communication", "Tap, card, swipe, and EBT payments support"]
    },
    {
      id: 3,
      name: "QYTENITE",
      category: "AI/ML",
      image: "assets/qytenite.png",
      links: {
        github: "https://github.com/pkaypilania/SnoringDemo"
      },
      description: "AI-powered sleep wellness application running an on-device machine learning model for real-time snoring detection and pillow adjustment.",
      downloads: "GitHub Demo",
      tech: ["React Native", "ML Models", "PCM Audio", "Bluetooth", "TurboModules"],
      highlights: ["On-device audio feature extraction and inference", "Real-time acoustic snoring classification", "Bluetooth control for connected smart pillow hardware"]
    },
    {
      id: 4,
      name: "Neemo",
      category: "AR/Media",
      image: "assets/neemo.png",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.neemo.dom",
        appStore: "https://apps.apple.com/us/app/neemo/id6480101826"
      },
      description: "AR video creation app embedding the Banuba AR SDK via custom native modules to support real-time facial filters and template-driven video compilation.",
      downloads: "Production Shipped",
      tech: ["React Native", "Banuba AR SDK", "Native Modules", "iOS", "Android"],
      highlights: ["Real-time AR face filters and lenses", "Fully optimized native modules for video processing", "Active on Play Store and App Store"]
    },
    {
      id: 5,
      name: "OjasEnergyWatch",
      category: "IoT",
      image: "assets/ojas.png",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.crystalpower.app",
        appStore: "https://apps.apple.com/in/app/ojasenergywatch/id1546644155"
      },
      description: "Smart electricity meter companion app displaying live credit balances, real-time consumption charts, bill PDFs, and push alerts.",
      downloads: "10,000+ Downloads",
      tech: ["React Native", "Sentry", "react-native-charts-wrapper", "rn-fetch-blob"],
      highlights: ["10K+ downloads on Play Store", "Real-time electric consumption tracking", "Automatic overload and low-balance warnings"]
    },
    {
      id: 6,
      name: "Sheen Magazine",
      category: "Media",
      image: "assets/sheen.png",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.magazine.sheen",
        appStore: "https://apps.apple.com/in/app/sheen-magazine/id1623812336"
      },
      description: "Official media app for Sheen Magazine incorporating In-App Purchase subscriptions, PDF downloads, and premium content sections.",
      downloads: "1,000+ Downloads",
      tech: ["React Native", "In-App Purchases", "PDF Downloader", "iOS", "Android"],
      highlights: ["Live on Apple App Store & Google Play Store", "Secured monthly/annual subscription logic", "Offline PDF reading support"]
    },
    {
      id: 7,
      name: "BottleZoo",
      category: "Fintech",
      image: "assets/bottlezoo.png",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.app.bottlezoo",
        appStore: "https://apps.apple.com/in/app/bottlezoo/id1585803701"
      },
      description: "Companion consumer marketplace application for the BottlePOS platform, facilitating online catalog browsing, ordering, and liquor delivery.",
      downloads: "Production Shipped",
      tech: ["React Native", "iOS", "Android", "API Integration", "Secure Checkout"],
      highlights: ["Full catalog search and category filtering", "Seamless e-commerce shopping cart flows", "Synchronized in real-time with physical POS stocks"]
    },
    {
      id: 8,
      name: "RFID Integration Module",
      category: "IoT",
      image: "assets/rfid.png",
      links: {
        github: "https://github.com/pkaypilania/RFIDDemo"
      },
      description: "Native Android TurboModule bridging professional warehouse RFID scanner hardware to React Native to support high-throughput real-time barcode tags scanning.",
      downloads: "GitHub Reference",
      tech: ["Kotlin", "RFID SDK", "TurboModules", "React Native", "Android"],
      highlights: ["TurboModule architecture for near-zero latency", "Shaped as reusable SDK for Android development teams", "High-frequency warehouse tags parsing"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Chandigarh University",
      mode: "Online Mode (UGC Recognised)",
      duration: "2025 - Present",
      status: "Pursuing"
    }
  ]
};
