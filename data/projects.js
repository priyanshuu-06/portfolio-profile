/* ============================================================
   PROJECT DATA — PRIYANSHU PATIL
   Five engineering projects with full case study content.
   ============================================================ */

'use strict';

const PROJECTS = {

  'vanrakshak': {
    title: 'Vanrakshak',
    subtitle: 'Forest Fire Detection & Poaching Surveillance',
    category: 'Embedded Systems / Edge AI / Wireless Communication',
    filterCategories: ['hardware', 'edge-ai'],
    patent: '202621092299 A — September 2026',
    patent2: '202621012284 A — March 2026',
    githubUrl: 'https://github.com/priyanshuu-06/vanrakshak',
    demoUrl: 'https://vanrakshak-seven.vercel.app',
    coverImage: 'assets/vanrakshak/vanrakshak-main.jpg',
    coverAlt: 'Vanrakshak forest monitoring system hardware',
    tags: ['Raspberry Pi 5', 'YOLO', 'LoRa', 'Python', 'React'],
    shortDesc: 'An intelligent forest-monitoring system combining local sensing, edge-based visual analysis, long-range wireless communication, and centralized alert monitoring.',

    problem: 'Forest fires and poaching incidents in remote areas frequently go undetected until significant damage is done. Cellular network coverage in dense forest terrain is unreliable or absent, making conventional IoT alert systems ineffective.',

    objective: 'Build a self-contained, edge-intelligent monitoring system capable of detecting fire events and unusual activity in forest environments — communicating structured alerts over long-range wireless links without depending on cellular infrastructure.',

    overview: 'Vanrakshak combines on-device YOLO-based visual inference with IR flame sensing at an edge node, transmitting structured alerts over LoRa to a gateway node. The gateway feeds a React-based monitoring dashboard displaying alert history and event logs.',

    contribution: 'I designed the end-to-end system architecture from sensor integration through edge inference to LoRa communication and dashboard. I implemented the Python edge-processing pipeline, configured YOLO for on-device inference on the Raspberry Pi 5, and built the LoRa communication protocol.',

    hardware: [
      'Raspberry Pi 5 — edge node (inference + sensing)',
      'Raspberry Pi 5 — gateway node (alert reception + logging)',
      'LoRa transceiver modules — long-range wireless link',
      'Camera module — visual capture for YOLO inference',
      'Digital IR flame sensor — thermal event detection',
      'Power management components'
    ],

    software: [
      'YOLO — real-time object detection / fire recognition inference',
      'Python — edge processing, sensor reading, alert formatting',
      'LoRa protocol stack — structured low-bandwidth transmission',
      'React.js — monitoring dashboard',
      'Structured event logging and alert classification system'
    ],

    architecture: [
      { step: 'Camera + IR Flame Sensor', desc: 'Dual-input sensing layer' },
      { step: 'Raspberry Pi 5 Edge Node', desc: 'YOLO inference + sensor evaluation' },
      { step: 'Alert Classification', desc: 'Structured payload creation' },
      { step: 'LoRa Transmission', desc: 'Long-range wireless link' },
      { step: 'Gateway Node', desc: 'Alert reception + event logging' },
      { step: 'React Dashboard', desc: 'Alert history + monitoring interface' }
    ],

    results: 'The edge node successfully ran YOLO inference on captured frames while simultaneously reading IR flame sensor data. LoRa communication established reliable links during testing. Alert payloads were correctly received and logged at the gateway.',

    challenges: 'Running YOLO inference continuously on the Raspberry Pi 5 while maintaining low-latency sensor monitoring required careful process scheduling. Designing a compact LoRa alert payload format that communicated sufficient information within bandwidth constraints was a key protocol design challenge.',

    futureWork: [
      'Solar power integration for field deployment',
      'Multi-node mesh LoRa network',
      'Animal/poaching detection model fine-tuning',
      'Integration with forest department alert systems'
    ]
  },

  'vision-stick': {
    title: 'Vision Stick',
    subtitle: 'Smart Navigation Aid for Visually Impaired Persons',
    category: 'Assistive Technology / Hardware / IoT',
    filterCategories: ['hardware'],
    patent: '202521057223 A — July 2025',
    githubUrl: null,
    demoUrl: null,
    coverImage: 'assets/vision-stick/vision-stick-main.jpg',
    coverAlt: 'Vision Stick assistive navigation device hardware prototype',
    tags: ['Raspberry Pi', 'Ultrasonic', 'Computer Vision', 'Python'],
    shortDesc: 'An assistive device combining obstacle sensing and camera-based recognition with audio-haptic feedback for visually impaired navigation.',

    problem: 'Visually impaired individuals navigating unfamiliar environments face constant risk from unexpected obstacles. Existing white canes provide only direct-path tactile feedback and cannot identify objects before contact.',

    objective: 'Design and build a wearable assistive navigation device that detects obstacles in real time, identifies objects using camera-based recognition, and communicates hazard information through audio and haptic feedback.',

    overview: 'The Vision Stick integrates an ultrasonic sensor for proximity detection with a camera module for visual object recognition. Detected obstacles trigger audio alerts through a speaker and vibration patterns through a haptic actuator. All sensing is processed locally.',

    contribution: 'I designed the hardware integration architecture, wrote the sensor-fusion Python code handling simultaneous ultrasonic and camera inputs, implemented the object detection pipeline, and designed the feedback output logic.',

    hardware: [
      'Raspberry Pi / microcontroller — central processing',
      'Ultrasonic sensor — proximity detection',
      'Camera module — visual capture for object recognition',
      'Speaker / audio output module — audio alerts',
      'Vibration motor — haptic feedback',
      'Portable power supply'
    ],

    software: [
      'Python — sensor handling, integration logic',
      'Computer vision / object recognition pipeline',
      'Audio synthesis for alert generation',
      'Sensor-fusion logic combining proximity and visual data'
    ],

    architecture: [
      { step: 'Ultrasonic Sensor', desc: 'Proximity threshold evaluation' },
      { step: 'Camera Module', desc: 'Object recognition inference' },
      { step: 'Sensor Fusion Module', desc: 'Combined hazard assessment' },
      { step: 'Audio + Haptic Output', desc: 'User alert generation' }
    ],

    results: 'The device demonstrated reliable obstacle detection within operational range during prototype testing. Object recognition provided contextual identification beyond simple proximity alerts. Audio and haptic feedback operated simultaneously without latency issues.',

    challenges: 'Calibrating the sensor fusion so alerts do not overwhelm the user while still providing timely warnings required careful threshold tuning. Minimizing power consumption while maintaining real-time inference was a key engineering constraint.',

    futureWork: [
      'Reduce form factor for easier wearability',
      'Improve object recognition model for domain-specific categories',
      'Add GPS-assisted navigation context',
      'Battery life optimization'
    ]
  },

  'kisan-credit': {
    title: 'Kisan-Credit',
    subtitle: 'Zero-Trust Carbon Accounting in Agriculture',
    category: 'Satellite Analytics / Blockchain / Carbon Accounting',
    filterCategories: ['satellite'],
    achievement: 'National Summer Hackathon 2026 — Top 10, Best Performance Award',
    githubUrl: 'https://github.com/priyanshuu-06/kisanCredit',
    demoUrl: null,
    coverImage: 'assets/kisan-credit/kisan-credit-main.jpg',
    coverAlt: 'Kisan Credit agricultural carbon accounting system',
    tags: ['Blockchain', 'Google Earth Engine', 'NDVI', 'TypeScript', 'Smart Contracts'],
    shortDesc: 'An agricultural carbon-accounting framework combining land records, satellite-derived vegetation analysis, and blockchain-based settlement.',

    problem: 'Smallholder farmers in India lack access to formal carbon-credit markets. Verifying land ownership, measuring vegetation change across fragmented plots, and settling credits transparently are major barriers. Existing systems require expensive surveys.',

    objective: 'Design a distributed agricultural carbon-accounting framework that automates land-record validation, measures vegetation change using satellite-derived NDVI, and provides transparent carbon-credit settlement through a blockchain layer.',

    overview: 'Kisan-Credit integrates satellite-derived NDVI analytics from Google Earth Engine with blockchain-based land-record verification and smart-contract carbon-credit settlement. Farmers register plots, the system measures vegetation improvement, and validated credits are settled on-chain.',

    contribution: 'I contributed to the satellite analytics pipeline (NDVI computation and change quantification), the system architecture design, and the integration approach connecting satellite data outputs with the blockchain settlement layer.',

    hardware: [],

    software: [
      'Google Earth Engine — NDVI computation and crop monitoring',
      'Sentinel-2 / Landsat — agricultural plot imagery',
      'Blockchain — land-record validation and credit settlement',
      'Smart contracts — automated carbon-credit issuance',
      'Node.js / Express — backend API layer',
      'React.js — farmer-facing dashboard',
      'MongoDB — plot registration and record storage'
    ],

    architecture: [
      { step: 'Land Records', desc: 'Blockchain validation layer' },
      { step: 'Satellite Imagery', desc: 'NDVI baseline + measurement period' },
      { step: 'Vegetation Analysis', desc: 'Carbon improvement quantification' },
      { step: 'Carbon Estimation', desc: 'Equivalent credit calculation' },
      { step: 'Blockchain Settlement', desc: 'Smart contract credit issuance' }
    ],

    results: 'Prototype demonstrated end-to-end flow from plot registration through NDVI measurement to simulated blockchain-based credit issuance during hackathon demonstration. Achieved Top 10 recognition at National Summer Hackathon 2026.',

    challenges: 'Defining a manipulation-resistant NDVI measurement protocol that handles varied crop types, seasonal patterns, and data gaps was the primary technical challenge.',

    futureWork: [
      'Pilot with actual smallholder farmer community',
      'Integration with Indian land-record databases (DILRMP)',
      'Multi-season measurement for improved accuracy',
      'Mobile app for farmer registration'
    ]
  },

  'urban-lake': {
    title: 'Urban Lake Monitoring',
    subtitle: 'Satellite-Based Environmental Analysis — Nagpur',
    category: 'Satellite Remote Sensing / Environmental Analytics',
    filterCategories: ['satellite'],
    githubUrl: null,
    demoUrl: null,
    coverImage: 'assets/urban-lake/urban-lake-main.jpg',
    coverAlt: 'Satellite remote sensing analysis of urban lakes in Nagpur',
    tags: ['Google Earth Engine', 'Sentinel-2', 'NDVI', 'NDWI', 'Landsat'],
    shortDesc: 'A reproducible satellite pipeline tracking surface water, vegetation, and dry ground across five urban lakes in Nagpur from 2019 to 2025.',

    problem: 'Urban lakes face significant pressures from encroachment, pollution, and water loss. Ground-based monitoring is resource-intensive and cannot capture the full spatial extent of change over time.',

    objective: 'Build a satellite-based analytical pipeline that tracks changes in surface water extent, vegetation cover, and dry ground across five urban lakes in Nagpur from 2019 to 2025, using openly available imagery and cloud-based geospatial processing.',

    overview: 'The pipeline uses Google Earth Engine to process Sentinel-2 and Landsat imagery across a six-year period. NDVI and NDWI are computed at regular temporal intervals and thresholded to classify water, vegetation, and dry ground.',

    contribution: 'I designed the Earth Engine processing pipeline, selected appropriate spectral bands and indices, created the temporal analysis logic, and produced the output maps characterizing change across the five lake sites.',

    hardware: [],

    software: [
      'Google Earth Engine — cloud-based geospatial computation',
      'Sentinel-2 — 10m resolution multispectral imagery',
      'Landsat — historical imagery for longer time-series',
      'NDVI — Normalized Difference Vegetation Index',
      'NDWI — Normalized Difference Water Index',
      'JavaScript (Earth Engine API)',
      'REST APIs for data export'
    ],

    architecture: [
      { step: 'Sentinel-2 / Landsat Imagery', desc: 'Earth Engine ingestion' },
      { step: 'Cloud Masking', desc: 'Clean surface reflectance' },
      { step: 'NDVI + NDWI Computation', desc: 'Spectral index time-series' },
      { step: 'Threshold Classification', desc: 'Water / vegetation / dry ground masks' },
      { step: 'Temporal Analysis', desc: 'Change detection across 2019–2025' }
    ],

    results: 'The analysis produced quantitative change maps for five lakes across six years, documenting surface water area fluctuation, vegetation change around lake margins, and patterns consistent with encroachment and seasonal variation.',

    challenges: 'Cloud cover in monsoon-season imagery required careful masking to avoid misclassification. Selecting consistent spectral thresholds across Sentinel-2 and Landsat sensors required inter-sensor calibration consideration.',

    futureWork: [
      'Extend analysis to additional lakes across Maharashtra',
      'Integrate Sentinel-1 SAR for cloud-independent water detection',
      'Automated alert system for rapid water-extent change',
      'Web-based visualization dashboard'
    ]
  },

  'sanket-edge': {
    title: 'Sanket Edge',
    subtitle: 'Edge AI-Powered Multi-Hazard Disaster Monitoring System',
    category: 'Edge AI / Embedded Systems / Disaster Management',
    filterCategories: ['hardware', 'edge-ai', 'disaster'],
    githubUrl: 'https://github.com/kanak28T/Sanket_Edge-the-solution-for-Disaster-Management',
    demoUrl: null,
    coverImage: 'assets/sanket-edge/sanket-edge-main.jpg',
    coverAlt: 'Sanket Edge disaster monitoring system hardware',
    tags: ['ESP32', 'TinyML', 'LoRa', 'Edge Impulse', 'C++', 'Blynk IoT'],
    shortDesc: 'A low-cost, distributed disaster monitoring system bringing intelligence directly to the edge — detecting floods and droughts without requiring internet connectivity.',
    hackathon: 'HACKSAGON 2025 — ABV-IIITM Gwalior × IEEE MP Section',
    myRole: 'Hardware Integration · Frontend Dashboard',
    team: 'Team Naive Birds — Kanak Tembhurne & Priyanshu Patil',

    problem: 'Natural disasters such as floods and droughts require rapid local decision-making in areas with unreliable internet connectivity. Conventional monitoring systems send raw sensor data to the cloud, creating latency, bandwidth dependency, and failure points during emergencies.',

    objective: 'Build a distributed edge AI system that classifies flood and drought risk locally on embedded hardware, communicates only essential information over LoRa, and triggers local alerts without internet access — while also supporting cloud dashboard visualization.',

    overview: 'संकेतEdge uses three ESP32 nodes — a flood detection node running a TinyML model trained with Edge Impulse, a drought detection node using soil and atmospheric sensors, and a receiver edge fusion hub that combines hazard predictions, triggers local alerts via buzzer/LED, and sends processed data to a cloud dashboard.',

    contribution: 'My role in the team was hardware integration — assembling and wiring the ESP32 boards, LoRa modules, JSN-SR04T ultrasonic sensor, soil moisture sensor, and DHT11 sensor — and building the frontend dashboard for monitoring and explainability.',

    hardware: [
      'ESP32 Development Boards ×3',
      'SX1278 LoRa Modules ×3',
      'JSN-SR04T Waterproof Ultrasonic Sensor — water level measurement',
      'Soil Moisture Sensor — drought monitoring',
      'DHT11 Temperature & Humidity Sensor',
      'Buzzer and LED — local offline alerts',
      'Breadboards and jumper wires'
    ],

    software: [
      'Arduino IDE + ESP32 Arduino Framework',
      'Edge Impulse — TinyML flood classification model',
      'LoRa Library — inter-node wireless communication',
      'ArduinoJson — structured data serialization',
      'Blynk IoT — cloud dashboard and visualization',
      'GitHub — version control and collaboration'
    ],

    architecture: [
      { step: 'Flood Detection Node', desc: 'ESP32 + JSN-SR04T + TinyML → classifies NORMAL / WARNING / DANGER' },
      { step: 'Drought Detection Node', desc: 'ESP32 + Soil Moisture + DHT11 → estimates LOW / MEDIUM / HIGH risk' },
      { step: 'LoRa Communication', desc: 'Both nodes transmit over long-range LoRa' },
      { step: 'Receiver Edge Fusion Hub', desc: 'ESP32 + LoRa — multi-hazard risk analysis + local alerts' },
      { step: 'Cloud Dashboard', desc: 'Wi-Fi → Blynk IoT — visualization + explainability' }
    ],

    results: 'The system successfully demonstrated offline-first disaster monitoring at HACKSAGON 2025. The flood detection node ran TinyML inference directly on the ESP32 without cloud dependency. The receiver node triggered local buzzer/LED alerts and transmitted data to the cloud dashboard.',

    challenges: 'Training a TinyML model small enough to run on an ESP32 while maintaining meaningful classification accuracy required careful feature engineering with Edge Impulse. Designing reliable LoRa packet structures for multi-hazard data from two different sensing nodes required a compact serialization protocol.',

    futureWork: [
      'GPS-enabled emergency localization',
      'Additional hazard monitoring (wildfire, landslides)',
      'Solar-powered remote deployments',
      'Mobile application integration',
      'Adaptive AI models for seasonal changes'
    ]
  }
};
