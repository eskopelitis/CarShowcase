// Data - Updated for GT Style
const DATA_CARS = [
    {
        brand: "NISSAN",
        model: "SKYLINE GT-R R34",
        sub_model: "2F2F Edition",
        price: "PRICELESS",
        rating: 5,
        mods: [
            "C-West Body Kit",
            "Blue Underglow",
            "HRE 446R Wheels",
            "Turbonetics Intercooler"
        ],
        stats: {
            hp: 450,
            torque: 390,
            zeroSixty: 4.2,
            handling: 85
        },
        tech: {
            engine: "2.6L RB26DETT Twin-Turbo",
            trans: "6-Speed Getrag Manual"
        },
        file_path: "assets/Nissan/1999_nissan_skyline_gtr_r34_c-west__2f2f.glb",
        cam_orbit: "45deg 75deg 8m",
        color_theme: "#00f0ff", // Electric Blue
        audioPath: "assets/Nissan/audio/audio.mp3",
        image: "assets/thumbnails/nissan.png"
    },
    {
        brand: "PORSCHE",
        model: "911 GT3 TOURING",
        sub_model: "992 Generation",
        price: "$161,100",
        rating: 5,
        mods: [
            "Weissach Package",
            "PCCB Brakes",
            "Carbon Bucket Seats",
            "Satin Black Wheels"
        ],
        stats: {
            hp: 502,
            torque: 346,
            zeroSixty: 3.2,
            handling: 98
        },
        tech: {
            engine: "4.0L Flat-6 NA",
            trans: "6-Speed GT Sport Manual"
        },
        file_path: "assets/Porsche/2022_porsche_911_gt3_touring_992.glb",
        cam_orbit: "-45deg 75deg 6m",
        color_theme: "#9eff00", // Acid Green
        audioPath: "assets/Porsche/audio/audio.mp3",
        image: "assets/thumbnails/porsche.png"
    },
    {
        brand: "BMW",
        model: "M4 COMPETITION",
        sub_model: "G82 xDrive",
        price: "$85,000",
        rating: 5,
        mods: [
            "ADRO Widebody Kit",
            "Swan Neck Wing",
            "Carbon Ceramic Brakes",
            "Vorsteiner Wheels"
        ],
        stats: {
            hp: 503,
            torque: 479,
            zeroSixty: 3.4,
            handling: 92
        },
        tech: {
            engine: "3.0L S58 Twin-Turbo I6",
            trans: "8-Speed M Steptronic"
        },
        file_path: "assets/BMW/2022_bmw_g82_m4_adro_carbon_fiber_widebody_kit.glb",
        cam_orbit: "30deg 75deg 7m",
        color_theme: "#00f0ff",
        audioPath: "assets/BMW/audio/audio.mp3",
        image: "assets/thumbnails/bmw.png"
    },
    {
        brand: "TOYOTA",
        model: "GR SUPRA",
        sub_model: "A90 Widebody",
        price: "$55,000",
        rating: 4,
        mods: [
            "Rocket Bunny V2 Kit",
            "Air Lift Performance",
            "Work Meister S1",
            "Titanium Exhaust"
        ],
        stats: {
            hp: 382,
            torque: 368,
            zeroSixty: 3.9,
            handling: 88
        },
        tech: {
            engine: "3.0L B58 Twin-Turbo I6",
            trans: "8-Speed ZF Auto"
        },
        file_path: "assets/Toyota/2020_lbworks_toyota_supra_a90_ver.2.glb",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#ff3b3b", // Red
        audioPath: "assets/Toyota/audio/audio.mp3",
        image: "assets/thumbnails/toyota.png"
    },
    // --- NEW CARS ---

    {
        brand: "CHEVROLET",
        model: "Corvette ZR1 ZTK (C8)",
        sub_model: "2025",
        price: "$190,000+ (Est)",
        rating: 5,
        mods: ["ZTK Track Pkg", "Carbon Aero", "Michelin Pilot Sport Cup 2R"],
        stats: {
            hp: 1064,
            torque: 828,
            zeroSixty: 2.5,
            handling: 92
        },
        tech: {
            engine: "LT7 5.5L Twin-Turbo V8",
            trans: "8-Speed DCT"
        },
        file_path: "assets/Chevrolet/2025_chevrolet_corvette_zr1_ztk_track_c8.glb",
        audioPath: "assets/Chevrolet/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#ffe600",
        image: "assets/thumbnails/chevrolet.png",
        paint_materials: ["cChevrolet_CorvetteC8ZR1_2024Paint_Material1"]
    },
    {
        brand: "LAMBORGHINI",
        model: "Huracán EVO",
        sub_model: "LP 640-4",
        price: "$261,274",
        rating: 5,
        mods: ["LDVI Dynamics System", "Titanium Exhaust", "Forged Rims"],
        stats: {
            hp: 640,
            torque: 443,
            zeroSixty: 2.9,
            handling: 90
        },
        tech: {
            engine: "5.2L NA V10",
            trans: "7-Speed LDF Dual-Clutch"
        },
        file_path: "assets/Lamborghini/2019_lamborghini_huracan_evo.glb",
        audioPath: "assets/Lamborghini/audio/audio.mp3",
        cam_orbit: "-35deg 80deg 6.5m",
        color_theme: "#45ff00",
        image: "assets/thumbnails/lamborghini.png",
        paint_materials: ["Huracan_EVO_Paint"]
    },
    {
        brand: "SHELBY",
        model: "Super Snake S650",
        sub_model: "Widebody Edition",
        price: "$160,000+",
        rating: 5,
        mods: ["Super Snake Widebody", "Borla Exhaust", "Shelby Forged Wheels", "Brembo Brakes"],
        stats: {
            hp: 830,
            torque: 625,
            zeroSixty: 3.2,
            handling: 88
        },
        tech: {
            engine: "830+ HP Supercharged V8",
            trans: "Manual/Auto"
        },
        file_path: "assets/Ford/2024_ford_shelby_super_snake_s650.glb",
        audioPath: "assets/Ford/audio/audio.mp3",
        cam_orbit: "30deg 75deg 5m",
        color_theme: "#C0C0C0",
        image: "assets/thumbnails/shelby.png",
        paint_materials: ["SSSShelby_SuperSnakes650RewardRecycled_2024Paint_Material1"]
    },
    {
        brand: "BIKINI BOTTOM",
        model: "Krabby Patty Wagon 2.0",
        sub_model: "Secret Formula Edition",
        price: "One Krabby Patty",
        rating: 6,
        mods: ["Sesame Seed Finish", "Pickle Wheels", "Extra Cheese Interior", "Spatula Spoiler"],
        stats: {
            hp: 10000,
            torque: 5000,
            zeroSixty: 0.1,
            handling: 100
        },
        tech: {
            engine: "Deep Fryer V12",
            trans: "Fry Grease Auto"
        },
        file_path: "assets/Krusty Krabs/spongebobs_krabby_patty_wagon.glb",
        audioPath: "assets/Krusty Krabs/audio/audio.mp3",
        cam_orbit: "0deg 80deg 3m",
        color_theme: "#ff9900",
        image: "assets/thumbnails/krabby.png",
        paint_materials: []
    },
    // --- 1. NISSAN GT-R R35 ---
    {
        brand: "NISSAN",
        model: "GT-R R35",
        sub_model: "2017",
        price: "$120,000+",
        rating: 5,
        mods: ["Nismo Aero Pkg", "Titanium Exhaust", "Rays Engineering Wheels"],
        stats: { hp: 565, torque: 467, zeroSixty: 2.9, handling: 90 },
        tech: { engine: "3.8L TT V6", trans: "6-Speed Dual Clutch" },
        file_path: "assets/Nissan/nissan_skyline_gtr_r35.glb",
        audioPath: "assets/Nissan/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#2E1A47",
        image: "assets/thumbnails/nissan_r35.png",
        paint_materials: ["r35_paint"]
    },
    // --- 2. CAMARO EXORCIST ---
    {
        brand: "CHEVROLET",
        model: "Camaro Exorcist ZL1",
        sub_model: "The Exorcist",
        price: "$135,000",
        rating: 5,
        mods: ["High-Flow Supercharger", "Hennessey Calibration", "Drag Radials"],
        stats: { hp: 1000, torque: 883, zeroSixty: 2.1, handling: 85 },
        tech: { engine: "6.2L Supercharged V8", trans: "10-Speed Auto" },
        file_path: "assets/Chevrolet/2018_hennessey_the_exorcist_camaro_zl1.glb",
        audioPath: "assets/Chevrolet/audio/audio.mp3",
        cam_orbit: "35deg 80deg 5m",
        color_theme: "#FF2400",
        image: "assets/thumbnails/camaro_exorcist.png",
        paint_materials: ["Hennessey_CamaroExorcistRewardRecycled_2017Paint_Material"]
    },
    // --- 3. LEXUS LFA ---
    {
        brand: "LEXUS",
        model: "LFA",
        sub_model: "Nurburgring Pkg",
        price: "$375,000 (Orig)",
        rating: 5,
        mods: ["Carbon Monocoque", "Titanium Valves", "BBS Forged Wheels"],
        stats: { hp: 552, torque: 354, zeroSixty: 3.6, handling: 95 },
        tech: { engine: "4.8L V10", trans: "6-Speed ASG" },
        file_path: "assets/Lexus/2011_lexus_lfa.glb",
        audioPath: "assets/Lexus/audio/audio.mp3",
        cam_orbit: "40deg 75deg 5m",
        color_theme: "#ffffff",
        image: "assets/thumbnails/Lexus LFA.png",
        paint_materials: ["Lexus_LFAGold_2011Paint_Material"]
    },
    // --- 4. BMW M3 TOURING (G81) ---
    {
        brand: "BMW",
        model: "M3 Touring (G81)",
        sub_model: "Competition xDrive",
        price: "€100,000+",
        rating: 5,
        mods: ["M-Performance Parts", "Carbon Buckets", "Eventuri Intake"],
        stats: { hp: 503, torque: 479, zeroSixty: 3.6, handling: 92 },
        tech: { engine: "3.0L TT Inline-6", trans: "8-Speed M Steptronic" },
        file_path: "assets/BMW/2023_bmw_m3_g81_touring.glb",
        audioPath: "assets/BMW/audio/audio.mp3",
        cam_orbit: "-45deg 80deg 5.5m",
        color_theme: "#004225",
        image: "assets/thumbnails/BMW M3 Touring (G81).png",

        paint_materials: ["Paint", "Material.001"]
    },
    // --- 5. BMW M3 (E92) ---
    {
        brand: "BMW",
        model: "M3 Coupe (E92)",
        sub_model: "Competition",
        price: "$60,000 (Orig)",
        rating: 5,
        mods: ["Competition Pkg", "Carbon Roof", "Akrapovic Exhaust"],
        stats: { hp: 414, torque: 295, zeroSixty: 4.5, handling: 90 },
        tech: { engine: "4.0L NA V8 (S65)", trans: "7-Speed DCT" },
        file_path: "assets/BMW/2010_bmw_m3_e92.glb",
        audioPath: "assets/BMW/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#ff9900",
        image: "assets/thumbnails/BMW M3 Coupe (E92).png",

        paint_materials: ["BMWM_CarPaint_Max1"]
    },
    // --- 6. BMW M5 TOURING (G99) ---
    {
        brand: "BMW",
        model: "M5 Touring (G99)",
        sub_model: "2025 Hybrid",
        price: "$140,000+ (Est)",
        rating: 5,
        mods: ["M Hybrid System", "Carbon Ceramic Brakes", "M Performance Aero"],
        stats: { hp: 717, torque: 738, zeroSixty: 3.4, handling: 88 },
        tech: { engine: "4.4L V8 Hybrid", trans: "8-Speed M Steptronic" },
        file_path: "assets/BMW/2025_bmw_m5_g99_touring.glb",
        audioPath: "assets/BMW/audio/audio.mp3",
        cam_orbit: "-30deg 80deg 6m",
        color_theme: "#00f0ff",
        image: "assets/thumbnails/BMW M5 Touring (G99).png",

        paint_materials: ["bBMW_M5G99Touring_2024Paint_Material"]
    },
    // --- 7. BMW X3 M (G01) ---
    {
        brand: "BMW",
        model: "X3 M Competition",
        sub_model: "G01",
        price: "$70,000+",
        rating: 4,
        mods: ["Competition Pkg", "21-inch M Wheels", "Sport Exhaust"],
        stats: { hp: 503, torque: 442, zeroSixty: 3.3, handling: 85 },
        tech: { engine: "3.0L TT Inline-6", trans: "8-Speed M Steptronic" },
        file_path: "assets/BMW/2018_bmw_x3_g01_model_m.glb",
        audioPath: "assets/BMW/audio/audio.mp3",
        cam_orbit: "45deg 80deg 6m",
        color_theme: "#ff3b3b",
        image: "assets/thumbnails/BMW X3 M (G01).png",

        paint_materials: ["CarPaint"]
    },
    // --- 8. BMW M2 (G87) ---
    {
        brand: "BMW",
        model: "M2 M-Performance",
        sub_model: "G87",
        price: "$63,000+",
        rating: 5,
        mods: ["M-Performance Wing", "Center Exhaust", "Carbon Inlets"],
        stats: { hp: 453, torque: 406, zeroSixty: 3.9, handling: 92 },
        tech: { engine: "3.0L TT Inline-6", trans: "6-Speed Manual" },
        file_path: "assets/BMW/2023_bmw_m2_m-performance_parts_g87.glb",
        audioPath: "assets/BMW/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#00f0ff",
        image: "assets/thumbnails/BMW M2 (G87).png",

        paint_materials: ["m2BMW_M2G87MPerformance_2023Paint_Material"]
    },
    // --- 9. FORD GT ---
    {
        brand: "FORD",
        model: "GT",
        sub_model: "2017",
        price: "$450,000+",
        rating: 5,
        mods: ["Carbon Monocoque", "Active Aero", "Gorilla Glass Windshield"],
        stats: { hp: 647, torque: 550, zeroSixty: 3.0, handling: 98 },
        tech: { engine: "3.5L TT V6 EcoBoost", trans: "7-Speed DCT" },
        file_path: "assets/Ford/2017_ford_gt.glb",
        audioPath: "assets/Ford/audio/audio.mp3",
        cam_orbit: "30deg 70deg 5m",
        color_theme: "#00f0ff",
        image: "assets/thumbnails/Ford GT (2017).png",

        paint_materials: ["Ford_GTRewardRecycled66_2017Paint_Material"]
    },
    // --- 10. MUSTANG GT ---
    {
        brand: "FORD",
        model: "Mustang GT (S650)",
        sub_model: "2024",
        price: "$45,000+",
        rating: 4,
        mods: ["Performance Pack", "MagnaRide", "Active Exhaust"],
        stats: { hp: 480, torque: 415, zeroSixty: 4.3, handling: 85 },
        tech: { engine: "5.0L Coyote V8", trans: "10-Speed Auto" },
        file_path: "assets/Ford/2024_ford_mustang_gt.glb",
        audioPath: "assets/Ford/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#ff3b3b",
        image: "assets/thumbnails/Mustang GT (2024).png",

        paint_materials: ["Ford_MustangGT_2024PaintA_Material"]
    },
    // --- 11. PORSCHE 911 GT3 RS (SNOW EDITION) ---
    {
        brand: "PORSCHE",
        model: "911 GT3 RS (Snow Ed.)",
        sub_model: "Weissach",
        price: "$300,000+",
        rating: 5,
        mods: ["Weissach Package", "Snow Camo Livery", "Magnesium Wheels"],
        stats: { hp: 518, torque: 342, zeroSixty: 3.0, handling: 99 },
        tech: { engine: "4.0L NA Flat-6", trans: "7-Speed PDK" },
        file_path: "assets/Porsche/porsche_911_gt3_rs_snow_edition.glb",
        audioPath: "assets/Porsche/audio/audio.mp3",
        cam_orbit: "-45deg 80deg 5m",
        color_theme: "#ffffff",
        image: "assets/thumbnails/Porsche 911 GT3 RS Snow Edition.png",

        paint_materials: ["lens"]
    },
    // --- 12. MAZDA RX-7 FD ---
    {
        brand: "MAZDA",
        model: "RX-7 FD",
        sub_model: "Spirit R",
        price: "$60,000+ (JDM)",
        rating: 5,
        mods: ["Spirit R Recaros", "Pop-up Headlights", "Bose Acoustic Wave"],
        stats: { hp: 276, torque: 231, zeroSixty: 4.8, handling: 94 },
        tech: { engine: "1.3L 13B-REW Rotary", trans: "5-Speed Manual" },
        file_path: "assets/Mazda/1999_mazda_rx-7_fd.glb",
        audioPath: "assets/Mazda/audio/audio.mp3",
        cam_orbit: "45deg 75deg 4.5m",
        color_theme: "#ff3b3b",
        image: "assets/thumbnails/1999 Mazda RX-7 FD.png",

        paint_materials: ["Material.002", "Material.006"]
    }
];

// MATERIAL MAPPING (EXACT NAMES)
const paintMaterials = {
    "BMW": ["bBMW_M4Competition", "untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008"],
    "NISSAN": [
        "rNissan_SkylineGTR34F2_1999Base_Material1",
        "rNissan_SkylineGTR34F2_1999Paint_Material1",
        "rNissan_SkylineGTR34F2_1999Coloured_Material1"
    ],
    "PORSCHE": ["Porsche_911GT3TouringRewardRecycled_2022Paint_Material"],
    "TOYOTA": ["tToyota_GRSupraTNR6_2020PaintTNR_Material1"],
    "CHEVROLET": ["cChevrolet_CorvetteC8ZR1_2024Paint_Material1"],
    "LAMBORGHINI": ["Huracan_EVO_Paint"],
    "SHELBY": ["SSSShelby_SuperSnakeS650RewardRecycled_2024Paint_Material1"],
    "BIKINI BOTTOM MOTORS": [],
    "NissanR35": ["r35_paint"],
    "Camaro": ["Hennessey_CamaroExorcistRewardRecycled_2017Paint_Material"],
    "Lexus": ["Lexus_LFAGold_2011Paint_Material"],
    "BMW_M3_G81": ["Paint", "Material.001"],
    "BMW_M3_E92": ["BMWM_CarPaint_Max1"],
    "BMW_M5_G99": ["bBMW_M5G99Touring_2024Paint_Material"],
    "BMW_X3": ["CarPaint"],
    "BMW_M2": ["m2BMW_M2G87MPerformance_2023Paint_Material"],
    "FordGT": ["Ford_GTRewardRecycled66_2017Paint_Material"],
    "MustangGT": ["Ford_MustangGT_2024PaintA_Material"],
    "PorscheSnow": ["lens"],
    "MazdaRX7": ["Material.002", "Material.006"]
};

// Colors to pick from - OEM LEGENDS
const paintColors = [
    { name: "Snow White", hex: "#F8F9FA" },
    { name: "Cavalry Blue", hex: "#617D99" },      // Toyota TRD Classic
    { name: "Midnight Purple", hex: "#2E1A47" },   // Nissan Legend
    { name: "Isle of Man Green", hex: "#004225" }, // BMW M Classic
    { name: "Chalk Grey", hex: "#D4D4D2" },        // Porsche Classic
    { name: "Rosso Corsa", hex: "#D40000" },       // Racing Red
    { name: "Speed Yellow", hex: "#FFD700" },
    { name: "Obsidian Black", hex: "#0B0B0B" }
];

// State
let audioContext = null;
let currentCarIndex = 0;
let isRotationPaused = false;
let isSunsetMode = false;
let hasOpenedGift = false;
// Audio State
let currentAudio = null;
let audioTimer = null;

// Elements
const screens = {
    gift: document.getElementById('gift-screen'),
    intro: document.getElementById('intro-screen'),
    menu: document.getElementById('menu-screen'),
    showroom: document.getElementById('showroom-screen')
};

// ... (UI Components omitted for brevity if unchanged) ...

// ... (Inside setupEventListeners) ...
// (I need to be careful with context here. I'll just target the listener area)

// --- (Using a multi-chunk or separate call might be safer, but let's try to target the State area first)


// UI Components
const brandList = document.getElementById('brand-list');
const modelViewer = document.getElementById('car-viewer');

// Info Panel Elements
const infoBrand = document.getElementById('info-brand');
const infoModel = document.getElementById('info-model');
const infoPrice = document.getElementById('info-price');
const infoRating = document.getElementById('info-rating');
const modList = document.getElementById('mod-list');
const colorPickerContainer = document.getElementById('color-picker');

// Stats Elements
const barHP = document.getElementById('bar-hp');
const valHP = document.getElementById('val-hp');
const barTQ = document.getElementById('bar-tq');
const valTQ = document.getElementById('val-tq');
const bar060 = document.getElementById('bar-060');
const val060 = document.getElementById('val-060');
const barHandle = document.getElementById('bar-handling');
const valHandle = document.getElementById('val-handling');
const specEngine = document.getElementById('spec-engine');
const specTrans = document.getElementById('spec-trans');

// Buttons
const giftBox = document.getElementById('gift-box');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const soundBtn = document.getElementById('sound-btn');
const rotateBtn = document.getElementById('rotate-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const envBtn = document.getElementById('env-btn');
const fsBtn = document.getElementById('fs-toggle-btn');
const iconExpand = document.getElementById('icon-expand');
const iconCompress = document.getElementById('icon-compress');
const fsInfoBrand = document.getElementById('fs-brand');
const fsInfoModel = document.getElementById('fs-model');
const deliverBtn = document.getElementById('deliver-btn');

// --- Initialization ---

function init() {
    renderMenu();
    setupEventListeners();
    setupModelViewer();
    setupIdleTimer();
    setupMobileTabs();

    // Start at Gift Screen
    switchScreen('gift');
}

function setupIdleTimer() {
    const controls = document.querySelector('.control-bar');
    let idleTimer = null;

    function resetIdle() {
        if (controls.classList.contains('idle')) {
            controls.classList.remove('idle');
        }

        clearTimeout(idleTimer);

        // Only hide if we are in showroom
        const showroom = document.getElementById('showroom-screen');
        if (showroom.classList.contains('active')) {
            idleTimer = setTimeout(() => {
                controls.classList.add('idle');
            }, 2000);
        }
    }

    // Activity listeners
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('touchstart', resetIdle);
    window.addEventListener('click', resetIdle);
    window.addEventListener('keydown', resetIdle);

    // Initial check
    resetIdle();
}

function renderMenu() {
    brandList.innerHTML = '';
    DATA_CARS.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        // Create slug ID: e.g. "lexus-lfa"
        const cardId = `${car.brand}-${car.model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        card.id = cardId;

        card.innerHTML = `
            <img src="${car.image}" alt="${car.brand} ${car.model}" style="${car.img_style || ''}">
            <div class="brand-name" style="color: ${car.color_theme}">${car.brand}</div>
            <div class="brand-model">${car.model}</div>
        `;
        card.addEventListener('click', () => loadCar(index));
        brandList.appendChild(card);
    });
}

function setupEventListeners() {
    // Gift Box
    giftBox.addEventListener('click', () => {
        if (hasOpenedGift) return;
        hasOpenedGift = true;

        // Play Open Sound (Optional, mocked)
        playEngineSound(100, 800, 0.5); // Whoosh

        giftBox.classList.add('opening');

        setTimeout(() => {
            switchScreen('intro');
            initAudio(); // Warm up audio context on interaction
        }, 1500);
    });

    startBtn.addEventListener('click', () => {
        goToTab('garage');
    });

    // Extra intro entry points
    const gameBtn = document.getElementById('game-btn');
    const pingasIntroBtn = document.getElementById('pingas-intro-btn');
    if (gameBtn) gameBtn.addEventListener('click', () => goToTab('geo'));
    if (pingasIntroBtn) pingasIntroBtn.addEventListener('click', () => goToTab('pingas'));

    backBtn.addEventListener('click', () => {
        if (history.state && history.state.view === 'showroom') {
            history.back();
        } else {
            switchScreen('menu');
            resetBars();
        }
    });

    rotateBtn.addEventListener('click', toggleRotation);
    soundBtn.addEventListener('click', toggleAudio);
    envBtn.addEventListener('click', toggleEnvironment);
    fsBtn.addEventListener('click', toggleFullscreen);

    // Delivery Button
    deliverBtn.addEventListener('click', generateCertificate);

    // Fullscreen Change Listener
    document.addEventListener('fullscreenchange', updateFullscreenUI);

    // History API: Handle Back Button
    window.addEventListener('popstate', (event) => {
        if (!event.state || event.state.view !== 'showroom') {
            switchScreen('menu');
            resetBars();
        }
    });
}

function setupModelViewer() {
    const loader = document.getElementById('loader');

    modelViewer.addEventListener('load', () => {
        loader.classList.remove('active');
        // Re-apply paint if needed (persistence not required but good practice)
    });
}

// --- Logic ---

function switchScreen(screenName) {
    Object.values(screens).forEach(el => {
        if (!el) return;
        el.classList.remove('active');
        el.classList.add('hidden');
    });

    const target = screens[screenName];
    if (target) {
        target.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            target.classList.add('active');
        });
    }
}

function loadCar(index) {
    currentCarIndex = index;
    const car = DATA_CARS[index];

    // Store car ref on viewer for paint logic
    modelViewer.currentCar = car;

    // Show Loader
    const loader = document.getElementById('loader');
    loader.classList.add('active');

    // History API
    history.pushState({ view: 'showroom', carId: index }, '', '#showroom');

    // Apply Theme Color TO CSS VARS
    document.documentElement.style.setProperty('--accent-active', car.color_theme);

    // Update Viewer
    modelViewer.src = car.file_path;
    modelViewer.cameraOrbit = car.cam_orbit;

    // Update Left Panel
    infoBrand.innerText = car.brand;
    infoModel.innerText = car.model;
    infoPrice.innerText = car.price;

    // Rating
    infoRating.innerHTML = '★'.repeat(car.rating);

    // Mods
    modList.innerHTML = car.mods.map(mod => `<li>${mod}</li>`).join('');

    // Update Right Panel (Tech)
    specEngine.innerText = car.tech.engine;
    specTrans.innerText = car.tech.trans;

    // Render Color Picker
    renderColorPicker(car.brand);

    // Populate Mobile Data
    updateMobileView(car);

    // Show Screen
    switchScreen('showroom');

    // Trigger Stat Animations
    setTimeout(() => {
        animateStats(car.stats);
    }, 500);
}

function updateMobileView(car) {
    const mobSpecs = document.getElementById('mobile-specs');
    const mobStats = document.getElementById('mobile-stats');

    if (!mobSpecs || !mobStats) return;

    // 1. Mobile Specs (Left Panel Equivalent)
    let modsHtml = car.mods.map(mod => `<li>${mod}</li>`).join('');

    // 0. Render Mobile Color Picker (if applicable)
    let colorPickerHtml = '';
    const validBrand = Object.keys(paintMaterials).find(k => k.toUpperCase() === car.brand.toUpperCase());

    if (validBrand && paintMaterials[validBrand].length > 0) {
        // Generate buttons
        const buttons = paintColors.map(color => `
            <div class="color-btn" style="background-color: ${color.hex}" 
                 onclick="applyPaint('${color.hex}', '${validBrand}')"></div>
        `).join('');

        colorPickerHtml = `
            <div class="mob-section">
                <h3>MAGIC PAINT</h3>
                <div class="mobile-colors">
                    ${buttons}
                </div>
            </div>
        `;
    }

    mobSpecs.innerHTML = `
        <div class="mob-header">
            <div class="mob-brand" style="color: ${car.color_theme}">${car.brand}</div>
            <h1 class="mob-model">${car.model}</h1>
            <div class="mob-price">${car.price}</div>
        </div>
        ${colorPickerHtml}
        <div class="mob-section">
            <h3>MODIFICATIONS</h3>
            <ul id="mod-list">${modsHtml}</ul>
        </div>
    `;

    // 2. Mobile Stats (Right Panel Equivalent + Delivery Button)
    const MAX_HP = 800;
    const MAX_TQ = 700;

    const hpPct = Math.min((car.stats.hp / MAX_HP) * 100, 100);
    const tqPct = Math.min((car.stats.torque / MAX_TQ) * 100, 100);
    const zero60Pct = Math.min(Math.max(0, (5 - car.stats.zeroSixty) / 3 * 100), 100);

    mobStats.innerHTML = `
        <div class="mob-section">
            <div class="mob-stat-row">
                <label>HORSEPOWER</label>
                <div class="mob-bar-bg"><div class="mob-bar-fill" style="width:${hpPct}%"></div></div>
                <span class="mob-stat-val">${car.stats.hp} HP</span>
            </div>
            <div class="mob-stat-row">
                <label>TORQUE</label>
                <div class="mob-bar-bg"><div class="mob-bar-fill" style="width:${tqPct}%"></div></div>
                <span class="mob-stat-val">${car.stats.torque} LB-FT</span>
            </div>
            <div class="mob-stat-row">
                <label>0-60 MPH</label>
                <div class="mob-bar-bg"><div class="mob-bar-fill" style="width:${zero60Pct}%"></div></div>
                <span class="mob-stat-val">${car.stats.zeroSixty}s</span>
            </div>
            <div class="mob-stat-row">
                <label>HANDLING</label>
                <div class="mob-bar-bg"><div class="mob-bar-fill" style="width:${car.stats.handling}%"></div></div>
                <span class="mob-stat-val">${car.stats.handling}/100</span>
            </div>
        </div>
        <div class="mob-section">
            <h3>POWERTRAIN</h3>
            <p>${car.tech.engine}</p>
            <p>${car.tech.trans}</p>
        </div>
        <!-- Duplicate Delivery Button logic for mobile -->
        <button class="delivery-btn" onclick="generateCertificate()">
            VERIFY & ACCEPT DELIVERY
        </button>
    `;
}

function renderColorPicker(brand) {
    colorPickerContainer.innerHTML = '';
    const car = DATA_CARS[currentCarIndex];

    // Priority: Per-car materials -> Brand Materials -> Empty
    let targetMats = car.paint_materials;

    if (!targetMats && paintMaterials[brand]) {
        targetMats = paintMaterials[brand];
    }

    if (!targetMats || targetMats.length === 0) {
        colorPickerContainer.innerHTML = '<span style="color:var(--text-grey); font-size:0.8rem;">Factory Paint Only</span>';
        return;
    }

    paintColors.forEach(color => {
        const btn = document.createElement('div');
        btn.className = 'color-btn';
        btn.style.backgroundColor = color.hex;
        // Store name for tooltip
        btn.setAttribute('data-name', color.name);
        btn.onclick = () => {
            // Remove active from others
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPaint(color.hex, brand);
        };
        colorPickerContainer.appendChild(btn);
    });
}

function applyPaint(hexColor, brandKey) {
    if (!modelViewer.model) return;

    // Convert Hex to RGB 0-1 array
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;
    const baseColorFactor = [r, g, b, 1.0];

    // Get Target Material Names
    let targetMats = modelViewer.currentCar.paint_materials;
    if (!targetMats && paintMaterials[brandKey]) {
        targetMats = paintMaterials[brandKey];
    }
    if (!targetMats) return;

    modelViewer.model.materials.forEach(mat => {
        if (targetMats.includes(mat.name)) {
            mat.pbrMetallicRoughness.setBaseColorFactor(baseColorFactor);
            // DO NOT change Metallic/Roughness as per requirements
        }
    });
}

function animateStats(stats) {
    const MAX_HP = 800;
    const MAX_TQ = 700;

    // HP - Handle Krabby Patty "Snail Power" case
    // If stats.hp > 2000, assume it's the joke car or hypercar
    if (stats.hp > 2000) {
        valHP.innerText = "10,000 Snail Power";
        barHP.style.width = '100%'; // Max out bar
    } else {
        const hpPct = (stats.hp / MAX_HP) * 100;
        valHP.innerText = stats.hp + " HP";
        barHP.style.width = `${Math.min(hpPct, 100)}%`;
    }

    // Torque
    const tqPct = (stats.torque / MAX_TQ) * 100;
    valTQ.innerText = stats.torque + " LB-FT";
    barTQ.style.width = `${Math.min(tqPct, 100)}%`;

    // 0-60 (Inverse) 
    // Handle super fast meme stats
    if (stats.zeroSixty < 1.0) {
        val060.innerText = "Faster than Hasselhoff";
        bar060.style.width = '100%';
    } else {
        const quicknessPct = Math.max(0, (5 - stats.zeroSixty) / 3 * 100);
        val060.innerText = stats.zeroSixty + "s";
        bar060.style.width = `${Math.min(quicknessPct, 100)}%`;
    }

    // Handling
    valHandle.innerText = stats.handling + "/100";
    barHandle.style.width = `${stats.handling}%`;
}

function resetBars() {
    barHP.style.width = '0%';
    barTQ.style.width = '0%';
    bar060.style.width = '0%';
    barHandle.style.width = '0%';
}

function toggleRotation() {
    isRotationPaused = !isRotationPaused;
    if (isRotationPaused) {
        modelViewer.removeAttribute('auto-rotate');
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        modelViewer.setAttribute('auto-rotate', '');
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }
}

function toggleEnvironment() {
    isSunsetMode = !isSunsetMode;
    // Fix: re-query just to be safe or use global var
    // const mv = document.getElementById('car-viewer'); 

    if (isSunsetMode) {
        modelViewer.setAttribute('skybox-image', 'assets/sunset_road.hdr');
        modelViewer.setAttribute('environment-image', 'assets/sunset_road.hdr');
        envBtn.classList.add('active');
        document.body.classList.add('light-mode');
    } else {
        modelViewer.removeAttribute('skybox-image');
        modelViewer.setAttribute('environment-image', 'neutral');
        envBtn.classList.remove('active');
        document.body.classList.remove('light-mode');
    }
}

function toggleFullscreen() {
    const stage = document.querySelector('.stage-center');
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || stage.classList.contains('fullscreen-active');

    if (!isFullscreen) {
        if (stage.requestFullscreen) {
            stage.requestFullscreen().catch(err => {
                console.warn("Fullscreen API failed, using CSS fallback:", err);
                toggleCssFullscreen(true);
            });
        } else if (stage.webkitRequestFullscreen) {
            stage.webkitRequestFullscreen();
        } else {
            toggleCssFullscreen(true);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => toggleCssFullscreen(false));
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        toggleCssFullscreen(false);
    }
}

function toggleCssFullscreen(active) {
    const stage = document.querySelector('.stage-center');
    if (active) {
        stage.classList.add('fullscreen-active');
    } else {
        stage.classList.remove('fullscreen-active');
    }
    updateFullscreenUI();
}

function updateFullscreenUI() {
    const stage = document.querySelector('.stage-center');
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || stage.classList.contains('fullscreen-active');

    if (isFullscreen) {
        fsBtn.classList.add('active');
        iconExpand.classList.add('hidden');
        iconCompress.classList.remove('hidden');
        const car = DATA_CARS[currentCarIndex];
        fsInfoBrand.innerText = car.brand;
        fsInfoModel.innerText = car.model;
        stage.style.backgroundColor = '#000';

        // Hide Mobile UI
        document.querySelector('.mobile-tabs').classList.add('hidden');
        document.getElementById('mobile-view-container').classList.add('hidden');
    } else {
        fsBtn.classList.remove('active');
        iconExpand.classList.remove('hidden');
        iconCompress.classList.add('hidden');
        stage.style.backgroundColor = 'transparent';

        // Show Mobile UI
        document.querySelector('.mobile-tabs').classList.remove('hidden');
        document.getElementById('mobile-view-container').classList.remove('hidden');
    }
}

// --- Certificate ---

function generateCertificate() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const car = DATA_CARS[currentCarIndex];

    // Background - Parchment
    ctx.fillStyle = '#fdfbf7'; // Creamy white
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = '#c5a059'; // Gold
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, 1120, 720);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(55, 55, 1090, 690);

    // Text Config
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';

    // Header
    ctx.font = 'bold 60px "Rajdhani", sans-serif';
    ctx.fillText("CERTIFICATE OF DELIVERY", canvas.width / 2, 150);

    ctx.font = '30px "Rajdhani", sans-serif';
    ctx.fillStyle = '#555';
    ctx.fillText("OFFICIAL SANTA'S WORKSHOP AUTHENTICATION", canvas.width / 2, 200);

    // Separator
    ctx.beginPath();
    ctx.moveTo(300, 230);
    ctx.lineTo(900, 230);
    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Owner
    ctx.font = 'italic 40px serif';
    ctx.fillStyle = '#000';
    ctx.fillText("This certifies that", canvas.width / 2, 300);

    ctx.font = 'bold 80px serif';
    ctx.fillStyle = '#c5a059'; // Gold name
    ctx.fillText("Hailey Komninos", canvas.width / 2, 390);

    ctx.font = 'italic 40px serif';
    ctx.fillStyle = '#000';
    ctx.fillText("is the proud owner of a new", canvas.width / 2, 470);

    // Car Name
    ctx.font = 'bold 50px "Rajdhani", sans-serif';
    ctx.fillText(`${car.brand} ${car.model}`, canvas.width / 2, 540);

    // Details
    ctx.font = '30px "Rajdhani", sans-serif';
    ctx.fillStyle = '#444';
    ctx.fillText(`VIN: XMAS-2025-HK  |  DATE: December 25, 2025`, canvas.width / 2, 620);

    // Footer / Signature
    ctx.font = 'italic 25px serif';
    ctx.fillStyle = '#888';
    ctx.fillText("Verified by Santa Claus", canvas.width / 2, 720);

    // Download
    const link = document.createElement('a');
    link.download = `Hailey_Komninos_${car.brand}_Title.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}


// --- Audio ---

// --- Audio ---

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// Synthesized sound for Gift Box effect
function playEngineSound(startFreq = 80, endFreq = 400, duration = 1.5) {
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(startFreq, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, audioContext.currentTime + 0.3);
    osc.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + duration);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + duration);
}

// Random Snippet Logic
// Random Snippet Logic
// Random Snippet Logic
function toggleAudio() {
    // RAPID FIRE: Always start a new snippet
    const car = DATA_CARS[currentCarIndex];

    // Debug: Check if path exists in data
    if (!car.audioPath) {
        alert("Audio Path missing for this car!");
        return;
    }

    // Reset UI Animation (Force Reflow for restart)
    soundBtn.classList.remove('active-pulse');
    void soundBtn.offsetWidth;
    soundBtn.classList.add('active-pulse');

    // Stop previous audio/timers
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    clearTimeout(audioTimer);

    // Create new Audio
    // iOS Fix: Ensure volume is set immediately
    currentAudio = new Audio(car.audioPath);
    currentAudio.volume = 1.0;

    // Add Error Listener for explicit path errors
    currentAudio.addEventListener('error', (e) => {
        const errorMsg = e.target.error.message || "Unknown Error";
        const code = e.target.error.code;
        alert(`Error: Could not play audio.\nTarget Path: ${car.audioPath}\nError Code: ${code}\nMessage: ${errorMsg}`);
        soundBtn.classList.remove('active-pulse');
    });

    currentAudio.addEventListener('loadedmetadata', () => {
        // Random Start: (Duration - 5s margin)
        const safeDuration = Math.max(0, currentAudio.duration - 5);
        const randomStart = Math.random() * safeDuration;

        currentAudio.currentTime = randomStart;
        currentAudio.play().catch(e => {
            console.error("Audio play failed", e);
            alert(`Playback Failed: ${e.message}`);
        });

        // Schedule Fade Out
        audioTimer = setTimeout(() => {
            fadeOutAudio();
        }, 4500);
    });
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    soundBtn.classList.remove('active-pulse');
    clearTimeout(audioTimer);
}

function fadeOutAudio() {
    if (!currentAudio) return;

    // Simple Interval Fade
    const fadeInterval = setInterval(() => {
        if (!currentAudio) {
            clearInterval(fadeInterval);
            return;
        }
        if (currentAudio.volume > 0.1) {
            currentAudio.volume -= 0.1;
        } else {
            clearInterval(fadeInterval);
            stopAudio();
        }
    }, 50); // 10 steps of 50ms = 0.5s fade
}



// --- Mobile Tabs (Robust) ---
function setupMobileTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = {
        'mobile-specs': document.getElementById('mobile-specs'),
        'mobile-stats': document.getElementById('mobile-stats')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Clean Active States
            tabs.forEach(t => t.classList.remove('active'));
            Object.values(sections).forEach(s => {
                if (s) s.classList.remove('active');
            });

            // 2. Set Active
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            if (sections[targetId]) {
                sections[targetId].classList.add('active');
            }
        });
    });
}

// Init
init();

/* ============================================================
   MENU TABS + GEO GAME + PINGAS  (added feature module)
   ============================================================ */

setupMainTabs();
setupPingas();
setupSoundboard();

// ---- Tab navigation ----
function getMenuPanels() {
    return {
        garage: document.getElementById('panel-garage'),
        geo: document.getElementById('panel-geo'),
        pingas: document.getElementById('panel-pingas')
    };
}

function activateMainTab(key) {
    const tabs = document.querySelectorAll('.main-tab');
    const panels = getMenuPanels();
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === key));
    Object.entries(panels).forEach(([k, p]) => {
        if (p) p.classList.toggle('active', k === key);
    });
    if (key === 'geo') initGeoGame();
}

// Used by intro buttons + tab bar
function goToTab(key) {
    initAudio();
    switchScreen('menu');
    activateMainTab(key);
}

function setupMainTabs() {
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', () => activateMainTab(tab.dataset.tab));
    });
}

// ---- PINGAS ----
function setupPingas() {
    const btn = document.getElementById('pingas-btn');
    const countEl = document.getElementById('pingas-count');
    if (!btn) return;

    const SRC = 'Pingas%20Sound%20Effect.mp3';
    // Warm up the file so the first click is snappy
    const preload = new Audio(SRC);
    preload.preload = 'auto';

    let count = 0;
    btn.addEventListener('click', () => {
        count++;
        if (countEl) countEl.textContent = count;

        // Fresh element every click so rapid clicks overlap (plays EVERY time)
        const a = new Audio(SRC);
        a.volume = 1.0;
        a.play().catch(() => { });

        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');
        spawnPingasFloat(btn);
    });
}

function spawnPingasFloat(btn) {
    const wrap = btn.parentElement;
    if (!wrap) return;
    const f = document.createElement('span');
    f.className = 'pingas-float';
    f.textContent = 'PINGAS';
    f.style.left = (25 + Math.random() * 50) + '%';
    wrap.appendChild(f);
    setTimeout(() => f.remove(), 1100);
}

// ---- SOUNDBOARD ----
function setupSoundboard() {
    const board = document.getElementById('soundboard');
    if (!board) return;

    // start/duration in seconds; omit for full-length playback
    const SOUNDS = {
        'pingas': { src: 'Pingas Sound Effect.mp3' },
        'pingas-song': { src: 'pingas song.mp3', start: 3, duration: 10 },
        'goku': { src: "Hey it's me Goku Sound Effect - Dragon Ball.mp3" }
    };

    // Warm up files so the first tap is snappy
    Object.values(SOUNDS).forEach(s => {
        const p = new Audio(encodeURI(s.src));
        p.preload = 'auto';
    });

    board.querySelectorAll('.sound-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cfg = SOUNDS[btn.getAttribute('data-sound')];
            if (!cfg) return;

            // Fresh element every click so rapid taps overlap
            const a = new Audio(encodeURI(cfg.src));
            a.volume = 1.0;
            const begin = cfg.start || 0;
            const end = cfg.duration ? begin + cfg.duration : null;

            if (end !== null) {
                a.addEventListener('timeupdate', () => {
                    if (a.currentTime >= end) a.pause();
                });
            }

            if (begin > 0) {
                // Seek once metadata is ready, then play from the clip point
                a.addEventListener('loadedmetadata', () => {
                    try { a.currentTime = begin; } catch (e) { }
                    a.play().catch(() => { });
                });
            } else {
                a.play().catch(() => { });
            }

            btn.classList.remove('pop');
            void btn.offsetWidth;
            btn.classList.add('pop');
        });
    });
}

/* ============================================================
   GEO GAME — Guess the Country (D3 + world-atlas TopoJSON)
   ============================================================ */

const GEO_W = 960, GEO_H = 500;

// Territories / non-sovereign entries excluded from the quiz pool
const GEO_EXCLUDE = new Set([
    "Antarctica", "Fr. S. Antarctic Lands", "Greenland", "New Caledonia",
    "Puerto Rico", "Falkland Is.", "W. Sahara", "N. Cyprus", "Somaliland"
]);

// continent of every Natural Earth name (for region filter + hints)
const GEO_CONTINENT = {
    "Afghanistan": "Asia", "Albania": "Europe", "Algeria": "Africa", "Angola": "Africa",
    "Antarctica": "Antarctica", "Argentina": "South America", "Armenia": "Asia",
    "Australia": "Oceania", "Austria": "Europe", "Azerbaijan": "Asia", "Bahamas": "North America",
    "Bangladesh": "Asia", "Belarus": "Europe", "Belgium": "Europe", "Belize": "North America",
    "Benin": "Africa", "Bhutan": "Asia", "Bolivia": "South America", "Bosnia and Herz.": "Europe",
    "Botswana": "Africa", "Brazil": "South America", "Brunei": "Asia", "Bulgaria": "Europe",
    "Burkina Faso": "Africa", "Burundi": "Africa", "Cambodia": "Asia", "Cameroon": "Africa",
    "Canada": "North America", "Central African Rep.": "Africa", "Chad": "Africa", "Chile": "South America",
    "China": "Asia", "Colombia": "South America", "Congo": "Africa", "Costa Rica": "North America",
    "Côte d'Ivoire": "Africa", "Croatia": "Europe", "Cuba": "North America", "Cyprus": "Europe",
    "Czechia": "Europe", "Dem. Rep. Congo": "Africa", "Denmark": "Europe", "Djibouti": "Africa",
    "Dominican Rep.": "North America", "Ecuador": "South America", "Egypt": "Africa",
    "El Salvador": "North America", "Eq. Guinea": "Africa", "Eritrea": "Africa", "Estonia": "Europe",
    "eSwatini": "Africa", "Ethiopia": "Africa", "Falkland Is.": "South America", "Fiji": "Oceania",
    "Finland": "Europe", "Fr. S. Antarctic Lands": "Antarctica", "France": "Europe", "Gabon": "Africa",
    "Gambia": "Africa", "Georgia": "Asia", "Germany": "Europe", "Ghana": "Africa", "Greece": "Europe",
    "Greenland": "North America", "Guatemala": "North America", "Guinea": "Africa", "Guinea-Bissau": "Africa",
    "Guyana": "South America", "Haiti": "North America", "Honduras": "North America", "Hungary": "Europe",
    "Iceland": "Europe", "India": "Asia", "Indonesia": "Asia", "Iran": "Asia", "Iraq": "Asia",
    "Ireland": "Europe", "Israel": "Asia", "Italy": "Europe", "Jamaica": "North America", "Japan": "Asia",
    "Jordan": "Asia", "Kazakhstan": "Asia", "Kenya": "Africa", "Kosovo": "Europe", "Kuwait": "Asia",
    "Kyrgyzstan": "Asia", "Laos": "Asia", "Latvia": "Europe", "Lebanon": "Asia", "Lesotho": "Africa",
    "Liberia": "Africa", "Libya": "Africa", "Lithuania": "Europe", "Luxembourg": "Europe",
    "Macedonia": "Europe", "Madagascar": "Africa", "Malawi": "Africa", "Malaysia": "Asia", "Mali": "Africa",
    "Mauritania": "Africa", "Mexico": "North America", "Moldova": "Europe", "Mongolia": "Asia",
    "Montenegro": "Europe", "Morocco": "Africa", "Mozambique": "Africa", "Myanmar": "Asia",
    "N. Cyprus": "Asia", "Namibia": "Africa", "Nepal": "Asia", "Netherlands": "Europe",
    "New Caledonia": "Oceania", "New Zealand": "Oceania", "Nicaragua": "North America", "Niger": "Africa",
    "Nigeria": "Africa", "North Korea": "Asia", "Norway": "Europe", "Oman": "Asia", "Pakistan": "Asia",
    "Palestine": "Asia", "Panama": "North America", "Papua New Guinea": "Oceania", "Paraguay": "South America",
    "Peru": "South America", "Philippines": "Asia", "Poland": "Europe", "Portugal": "Europe",
    "Puerto Rico": "North America", "Qatar": "Asia", "Romania": "Europe", "Russia": "Europe", "Rwanda": "Africa",
    "S. Sudan": "Africa", "Saudi Arabia": "Asia", "Senegal": "Africa", "Serbia": "Europe",
    "Sierra Leone": "Africa", "Slovakia": "Europe", "Slovenia": "Europe", "Solomon Is.": "Oceania",
    "Somalia": "Africa", "Somaliland": "Africa", "South Africa": "Africa", "South Korea": "Asia",
    "Spain": "Europe", "Sri Lanka": "Asia", "Sudan": "Africa", "Suriname": "South America", "Sweden": "Europe",
    "Switzerland": "Europe", "Syria": "Asia", "Taiwan": "Asia", "Tajikistan": "Asia", "Tanzania": "Africa",
    "Thailand": "Asia", "Timor-Leste": "Asia", "Togo": "Africa", "Trinidad and Tobago": "North America",
    "Tunisia": "Africa", "Turkey": "Asia", "Turkmenistan": "Asia", "Uganda": "Africa", "Ukraine": "Europe",
    "United Arab Emirates": "Asia", "United Kingdom": "Europe", "United States of America": "North America",
    "Uruguay": "South America", "Uzbekistan": "Asia", "Vanuatu": "Oceania", "Venezuela": "South America",
    "Vietnam": "Asia", "W. Sahara": "Africa", "Yemen": "Asia", "Zambia": "Africa", "Zimbabwe": "Africa"
};

// Nicer display names + accepted alternative spellings for the tricky ones
const GEO_EXTRA = {
    "United States of America": { display: "United States", alts: ["usa", "us", "united states", "america"] },
    "United Kingdom": { alts: ["uk", "britain", "great britain", "england"] },
    "United Arab Emirates": { alts: ["uae", "emirates"] },
    "Bosnia and Herz.": { display: "Bosnia and Herzegovina", alts: ["bosnia", "bosnia and herzegovina", "bosnia herzegovina"] },
    "Central African Rep.": { display: "Central African Republic", alts: ["central african republic", "car"] },
    "Dem. Rep. Congo": { display: "DR Congo", alts: ["democratic republic of the congo", "democratic republic of congo", "dr congo", "drc", "congo kinshasa", "zaire"] },
    "Congo": { display: "Republic of the Congo", alts: ["republic of the congo", "congo brazzaville", "congo", "congo republic"] },
    "Côte d'Ivoire": { display: "Côte d'Ivoire (Ivory Coast)", alts: ["ivory coast", "cote divoire", "cote d ivoire"] },
    "Czechia": { alts: ["czech republic", "czechia", "czech"] },
    "Dominican Rep.": { display: "Dominican Republic", alts: ["dominican republic"] },
    "Eq. Guinea": { display: "Equatorial Guinea", alts: ["equatorial guinea"] },
    "eSwatini": { display: "Eswatini", alts: ["eswatini", "swaziland"] },
    "Macedonia": { display: "North Macedonia", alts: ["north macedonia", "macedonia"] },
    "Myanmar": { alts: ["myanmar", "burma"] },
    "S. Sudan": { display: "South Sudan", alts: ["south sudan"] },
    "Solomon Is.": { display: "Solomon Islands", alts: ["solomon islands", "solomon"] },
    "Timor-Leste": { display: "Timor-Leste (East Timor)", alts: ["timor leste", "east timor", "timor"] },
    "Turkey": { alts: ["turkey", "turkiye"] },
    "Netherlands": { alts: ["netherlands", "holland"] },
    "Russia": { alts: ["russia", "russian federation"] },
    "North Korea": { alts: ["north korea", "dprk"] },
    "South Korea": { alts: ["south korea", "korea"] },
    "Laos": { alts: ["laos", "lao"] },
    "Iran": { alts: ["iran", "persia"] },
    "Vietnam": { alts: ["vietnam", "viet nam"] },
    "Brunei": { alts: ["brunei", "brunei darussalam"] },
    "Taiwan": { alts: ["taiwan", "chinese taipei", "republic of china"] },
    "Palestine": { alts: ["palestine", "palestinian territories"] },
    "Trinidad and Tobago": { alts: ["trinidad and tobago", "trinidad"] },
    "Cyprus": { alts: ["cyprus"] }
};

// Geo state
let geoInited = false, geoLoaded = false;
let geoFeatures = null, geoProjection = null, geoPath = null, geoSvg = null, geoG = null, geoZoom = null;
let geoAnswerMap = null, geoAllNames = null, geoState = null, geoTimerId = null;

function initGeoGame() {
    if (geoInited) return;
    geoInited = true;
    wireGeoControls();
    loadGeoMap();
}

function loadScriptOnce(src, check) {
    return new Promise((resolve, reject) => {
        if (check && check()) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load ' + src));
        document.head.appendChild(s);
    });
}

async function loadGeoMap() {
    const loadingEl = document.getElementById('geo-loading');
    try {
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js', () => window.d3);
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js', () => window.topojson);

        const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const topo = await res.json();
        geoFeatures = window.topojson.feature(topo, topo.objects.countries).features;

        buildGeoMap();
        buildGeoAnswers();
        geoLoaded = true;
        if (loadingEl) loadingEl.style.display = 'none';
        document.getElementById('geo-input').disabled = false;
        startGeoGame('World');
    } catch (err) {
        console.error('Geo load failed', err);
        if (loadingEl) {
            loadingEl.innerHTML =
                '<span style="color:#ff6b6b;text-align:center;padding:1rem;line-height:1.5">' +
                'Could not load the world map.<br>Check your internet connection,<br>then reopen this tab.</span>';
        }
    }
}

function buildGeoMap() {
    const d3 = window.d3;
    geoProjection = d3.geoNaturalEarth1()
        .fitExtent([[8, 8], [GEO_W - 8, GEO_H - 8]], { type: 'FeatureCollection', features: geoFeatures });
    geoPath = d3.geoPath(geoProjection);

    geoSvg = d3.select('#geo-map').append('svg')
        .attr('class', 'geo-svg')
        .attr('viewBox', `0 0 ${GEO_W} ${GEO_H}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    geoSvg.append('rect').attr('class', 'geo-ocean').attr('width', GEO_W).attr('height', GEO_H);

    geoG = geoSvg.append('g').attr('class', 'geo-layer');
    geoG.selectAll('path')
        .data(geoFeatures).enter().append('path')
        .attr('class', 'geo-country')
        .attr('d', geoPath);

    geoZoom = d3.zoom()
        .scaleExtent([1, 18])
        .translateExtent([[0, 0], [GEO_W, GEO_H]])
        .on('zoom', ev => geoG.attr('transform', ev.transform));
    geoSvg.call(geoZoom).on('dblclick.zoom', null);
}

function geoNorm(s) {
    const COMBINING = new RegExp('[' + String.fromCharCode(0x300) + '-' + String.fromCharCode(0x36f) + ']', 'g');
    return s.toLowerCase()
        .normalize('NFD').replace(COMBINING, '')
        .replace(/[.\-']/g, ' ')
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, ' ').trim()
        .replace(/^the /, '');
}

function geoDisplay(name) {
    const ex = GEO_EXTRA[name];
    return (ex && ex.display) ? ex.display : name;
}

// Primary clean name (no parenthetical) for letter hints
function geoPrimary(name) {
    const ex = GEO_EXTRA[name];
    if (ex && ex.display) return ex.display.replace(/\s*\(.*\)\s*/, '').trim();
    return name;
}

function buildGeoAnswers() {
    geoAnswerMap = {};
    geoFeatures.forEach(f => {
        const name = f.properties.name;
        const ex = GEO_EXTRA[name] || {};
        const accepted = new Set();
        accepted.add(name);
        if (ex.display) accepted.add(ex.display);
        (ex.alts || []).forEach(a => accepted.add(a));
        accepted.forEach(a => { geoAnswerMap[geoNorm(a)] = name; });
    });

    geoAllNames = geoFeatures
        .filter(f => !GEO_EXCLUDE.has(f.properties.name))
        .map(f => { const d = geoDisplay(f.properties.name); return { display: d, norm: geoNorm(d) }; })
        .sort((a, b) => a.display.localeCompare(b.display));
}

function geoBuildPool(region) {
    return geoFeatures
        .map(f => f.properties.name)
        .filter(n => !GEO_EXCLUDE.has(n))
        .filter(n => region === 'World' || GEO_CONTINENT[n] === region);
}

function geoShuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startGeoGame(region) {
    if (!geoLoaded) return;
    region = region || 'World';
    const pool = geoBuildPool(region);
    geoState = {
        region, pool,
        queue: geoShuffle(pool.slice()),
        guessed: new Set(),
        current: null,
        score: 0, streak: 0, best: 0, correct: 0, wrong: 0, hintLevel: 0,
        startTime: Date.now()
    };

    document.querySelectorAll('.geo-region').forEach(b => b.classList.toggle('active', b.dataset.region === region));
    geoG.selectAll('path.geo-country').classed('done', false).classed('target', false);
    document.getElementById('geo-win').classList.add('hidden');
    const inp = document.getElementById('geo-input');
    inp.disabled = false;
    inp.value = '';

    clearInterval(geoTimerId);
    geoTimerId = setInterval(geoTick, 1000);
    geoTick();

    updateGeoStats();
    updateGeoProgress();
    geoNext();
}

function geoNext() {
    geoFeedback('', '');
    geoState.hintLevel = 0;
    document.getElementById('geo-hint-list').innerHTML = '';
    const inp = document.getElementById('geo-input');
    inp.value = '';
    geoClearSuggest();

    if (geoState.queue.length === 0) { geoWin(); return; }

    geoState.current = geoState.queue[0];
    geoG.selectAll('path.geo-country').classed('target', d => d.properties.name === geoState.current);
    geoFocus(geoState.current);
    updateGeoProgress();
    inp.focus();
}

function geoSubmit() {
    if (!geoState || !geoState.current || !geoLoaded) return;
    const raw = document.getElementById('geo-input').value.trim();
    if (!raw) return;
    const matched = geoAnswerMap[geoNorm(raw)];
    if (matched === geoState.current) geoCorrect();
    else geoWrong(matched);
}

function geoCorrect() {
    const name = geoState.current;
    geoState.guessed.add(name);
    geoState.correct++;
    const pts = Math.max(20, 100 - geoState.hintLevel * 30);
    geoState.score += pts;
    geoState.streak++;
    if (geoState.streak > geoState.best) geoState.best = geoState.streak;

    geoG.selectAll('path.geo-country')
        .filter(d => d.properties.name === name)
        .classed('done', true).classed('target', false);

    geoFeedback(`✓ ${geoDisplay(name)}  +${pts}`, 'ok');
    geoBlip(true);

    geoState.queue.shift();
    document.getElementById('geo-input').value = '';
    geoClearSuggest();
    updateGeoStats();
    updateGeoProgress();
    setTimeout(() => { if (geoState) geoNext(); }, 750);
}

function geoWrong(matched) {
    geoState.wrong++;
    geoState.streak = 0;
    geoFeedback(
        (matched && matched !== geoState.current)
            ? `✗ That's ${geoDisplay(matched)} — not it. Try again!`
            : '✗ Nope, try again!',
        'bad'
    );
    const inp = document.getElementById('geo-input');
    inp.classList.remove('shake');
    void inp.offsetWidth;
    inp.classList.add('shake');
    geoBlip(false);
    updateGeoStats();
}

function geoSkip() {
    if (!geoState || !geoState.current) return;
    if (geoState.queue.length <= 1) {
        geoFeedback('Last one — you have to name it!', '');
        return;
    }
    geoState.streak = 0;
    geoState.queue.push(geoState.queue.shift());
    geoNext();
    geoFeedback("↷ Skipped — we'll come back to it.", '');
}

function geoHint() {
    if (!geoState || !geoState.current || geoState.hintLevel >= 3) return;
    const name = geoState.current;
    const prim = geoPrimary(name);
    geoState.hintLevel++;
    let html = '';
    if (geoState.hintLevel === 1) {
        html = `🌍 Continent: <b>${GEO_CONTINENT[name] || '—'}</b>`;
    } else if (geoState.hintLevel === 2) {
        const letters = prim.replace(/[^a-zA-Z]/g, '').length;
        html = `🔤 Starts with <b>${prim[0].toUpperCase()}</b> · <b>${letters}</b> letters`;
    } else {
        html = `👁 <b style="letter-spacing:2px">${geoMask(prim)}</b>`;
    }
    const li = document.createElement('li');
    li.innerHTML = html;
    document.getElementById('geo-hint-list').appendChild(li);
}

function geoMask(s) {
    return s.split('').map((ch, i) => (/[a-zA-Z]/.test(ch) ? (i % 2 === 0 ? ch : '_') : ch)).join(' ');
}

function geoWin() {
    clearInterval(geoTimerId);
    document.getElementById('geo-input').disabled = true;
    geoG.selectAll('path.geo-country').classed('target', false);
    const label = geoState.region === 'World' ? 'countries' : (geoState.region + ' countries');
    document.getElementById('geo-win-text').innerHTML =
        `You named all <b>${geoState.pool.length}</b> ${label} in <b>${fmtTime(Date.now() - geoState.startTime)}</b>.<br>` +
        `Score <b>${geoState.score}</b> · Best streak <b>${geoState.best}</b>.`;
    document.getElementById('geo-win').classList.remove('hidden');
    geoBlip(true);
}

function geoFocus(name) {
    if (!geoSvg) return;
    const d3 = window.d3;
    const f = geoFeatures.find(x => x.properties.name === name);
    if (!f) return;
    const b = geoPath.bounds(f);
    const w = Math.max(1, b[1][0] - b[0][0]);
    const h = Math.max(1, b[1][1] - b[0][1]);
    const cx = (b[0][0] + b[1][0]) / 2;
    const cy = (b[0][1] + b[1][1]) / 2;
    let scale = 0.55 / Math.max(w / GEO_W, h / GEO_H);
    scale = Math.max(1.2, Math.min(12, scale));
    const tx = GEO_W / 2 - scale * cx;
    const ty = GEO_H / 2 - scale * cy;
    geoSvg.transition().duration(800).call(geoZoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

function geoWorldView() {
    if (!geoSvg) return;
    geoSvg.transition().duration(700).call(geoZoom.transform, window.d3.zoomIdentity);
}

function geoFeedback(msg, cls) {
    const f = document.getElementById('geo-feedback');
    f.textContent = msg;
    f.className = 'geo-feedback ' + (cls || '');
}

function updateGeoProgress() {
    const total = geoState.pool.length;
    const done = geoState.guessed.size;
    document.getElementById('geo-prog-fill').style.width = (total ? (done / total * 100) : 0) + '%';
    document.getElementById('geo-prog-text').textContent = `${done} / ${total}`;
}

function updateGeoStats() {
    document.getElementById('geo-score').textContent = geoState.score;
    document.getElementById('geo-streak').textContent = geoState.streak;
    const t = geoState.correct + geoState.wrong;
    document.getElementById('geo-acc').textContent = (t ? Math.round(geoState.correct / t * 100) : 100) + '%';
}

function geoTick() {
    if (!geoState) return;
    document.getElementById('geo-timer').textContent = fmtTime(Date.now() - geoState.startTime);
}

function fmtTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    return m + ':' + String(s % 60).padStart(2, '0');
}

function geoBlip(ok) {
    if (!audioContext) return;
    try {
        const o = audioContext.createOscillator();
        const g = audioContext.createGain();
        o.type = ok ? 'triangle' : 'sawtooth';
        const t0 = audioContext.currentTime;
        if (ok) {
            o.frequency.setValueAtTime(660, t0);
            o.frequency.exponentialRampToValueAtTime(990, t0 + 0.18);
        } else {
            o.frequency.setValueAtTime(160, t0);
        }
        g.gain.setValueAtTime(0.15, t0);
        g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.25);
        o.connect(g); g.connect(audioContext.destination);
        o.start(t0); o.stop(t0 + 0.26);
    } catch (e) { /* no-op */ }
}

function geoSuggestUpdate() {
    const ul = document.getElementById('geo-suggest');
    const v = geoNorm(document.getElementById('geo-input').value);
    if (!v || !geoAllNames) { geoClearSuggest(); return; }
    const matches = geoAllNames
        .filter(o => o.norm.includes(v))
        .sort((a, b) => (a.norm.startsWith(v) ? 0 : 1) - (b.norm.startsWith(v) ? 0 : 1) || a.display.localeCompare(b.display))
        .slice(0, 6);
    if (!matches.length) { geoClearSuggest(); return; }
    ul.innerHTML = matches.map(o => `<li data-name="${o.display.replace(/"/g, '&quot;')}">${o.display}</li>`).join('');
    ul.classList.add('open');
}

function geoClearSuggest() {
    const ul = document.getElementById('geo-suggest');
    if (!ul) return;
    ul.innerHTML = '';
    ul.classList.remove('open');
}

function wireGeoControls() {
    document.getElementById('geo-submit').addEventListener('click', geoSubmit);
    document.getElementById('geo-hint').addEventListener('click', geoHint);
    document.getElementById('geo-skip').addEventListener('click', geoSkip);
    document.getElementById('geo-restart').addEventListener('click', () => startGeoGame(geoState ? geoState.region : 'World'));

    const inp = document.getElementById('geo-input');
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); geoSubmit(); } });
    inp.addEventListener('input', geoSuggestUpdate);
    inp.addEventListener('blur', () => setTimeout(geoClearSuggest, 150));

    document.getElementById('geo-suggest').addEventListener('mousedown', e => {
        const li = e.target.closest('li');
        if (!li) return;
        e.preventDefault();
        inp.value = li.dataset.name;
        geoClearSuggest();
        geoSubmit();
    });

    document.querySelectorAll('.geo-region').forEach(b => {
        b.addEventListener('click', () => { if (geoLoaded) startGeoGame(b.dataset.region); });
    });

    document.getElementById('geo-zoom-in').addEventListener('click', () => { if (geoSvg) geoSvg.transition().duration(250).call(geoZoom.scaleBy, 1.6); });
    document.getElementById('geo-zoom-out').addEventListener('click', () => { if (geoSvg) geoSvg.transition().duration(250).call(geoZoom.scaleBy, 1 / 1.6); });
    document.getElementById('geo-world').addEventListener('click', geoWorldView);
    document.getElementById('geo-locate').addEventListener('click', () => { if (geoState && geoState.current) geoFocus(geoState.current); });
}
