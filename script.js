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
        sub_model: "2025 Prototype",
        price: "$190,000+ (Est.)",
        rating: 5,
        mods: ["ZTK Track Performance Pkg", "Carbon Fiber Wheels", "High-Downforce Aero"],
        stats: {
            hp: 1064,
            torque: 850,
            zeroSixty: 2.5,
            handling: 95
        },
        tech: {
            engine: "LT7 5.5L Twin-Turbo V8",
            trans: "8-Speed DCT"
        },
        file_path: "assets/Chevrolet/2025_chevrolet_corvette_zr1_ztk_track_c8.glb",
        audioPath: "assets/Chevrolet/audio/audio.mp3",
        cam_orbit: "45deg 75deg 5m",
        color_theme: "#ffe600", // Yellow
        image: "assets/thumbnails/chevrolet.png"
    },
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
    }
];

// MATERIAL MAPPING (EXACT NAMES)
const paintMaterials = {
    "BMW": ["bBMW_M4Competition", "untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008"],
    // Target all 3 potential body materials for the Nissan
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
    "BIKINI BOTTOM MOTORS": [] // No paint changing allowed
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
        card.innerHTML = `
            <img src="${car.image}" alt="${car.brand} ${car.model}">
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
        initAudio();
        switchScreen('menu');
    });

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
