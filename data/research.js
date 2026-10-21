/* ============================================================
   RESEARCH DATA — PRIYANSHU PATIL
   3 conference papers + 2 journal papers
   ============================================================ */
'use strict';

const RESEARCH = [
  /* ── CONFERENCE PAPERS ── */
  {
    id: 'kisan-credit-paper',
    title: 'Kisan-Credit: Zero-Trust Carbon Accounting in Agriculture',
    area: 'Satellite Analytics · Blockchain · Agriculture',
    type: 'conference',
    typeLabel: 'Conference Paper',
    venue: 'ICICSCS 2026',
    venueFull: '2026 International Conference on Intelligent Computing and Secure Communication Systems (ICICSCS)',
    venueUrl: null,
    status: 'Revision in Progress',
    authors: 'Priyanshu Patil et al.',
    abstract: 'This paper presents Kisan-Credit — a distributed agricultural carbon-accounting framework that automates land-record validation through blockchain verification, measures vegetation improvement using NDVI derived from Sentinel-2 via Google Earth Engine, and settles carbon credits through smart contracts without expensive on-ground surveys.',
    flowSteps: ['Land Records', 'Satellite NDVI', 'Carbon Estimation', 'Blockchain Settlement'],
    metrics: [],
    limitations: 'NDVI alone is an imperfect carbon proxy. Prototype used simulated blockchain, not live mainnet.',
    projectId: 'kisan-credit',
    color: '#557765'
  },
  {
    id: 'emergency-triage',
    title: 'AI-Powered Emergency Triage System for Smart Ambulance Response',
    area: 'Artificial Intelligence · Healthcare Automation · Emergency Medical Services',
    type: 'conference',
    typeLabel: 'Conference Paper',
    venue: 'ICICSCS 2026',
    venueFull: '2026 International Conference on Intelligent Computing and Secure Communication Systems (ICICSCS)',
    venueUrl: null,
    status: 'Revision in Progress',
    authors: 'Priyanshu Patil et al.',
    abstract: 'This paper proposes a hybrid AI triage system that helps prioritize ambulance dispatch using machine learning. The model applies deterministic rule-based evaluation to critical symptoms and routes ambiguous cases to an auditable Decision Tree classifier. On a synthetic benchmark of 1,500 profiles the hybrid obtained 92.55% Critical-Case Recall with 78.33% accuracy and 0.12 ms average latency.',
    flowSteps: ['Symptom Input', 'Rule Engine', 'Decision Tree', 'Triage Priority', 'Dispatch'],
    metrics: [
      { label: 'Hybrid Recall', value: '92.55%', note: 'Critical cases' },
      { label: 'Accuracy', value: '78.33%', note: 'Overall' },
      { label: 'Latency', value: '0.12 ms', note: 'Per case' }
    ],
    limitations: 'Synthetic benchmark only — not clinical validation.',
    projectId: null,
    color: '#54758A'
  },
  {
    id: 'urban-lake-paper',
    title: 'A Reproducible Cloud-Based Pipeline for Monitoring Small Urban Lakes with Sentinel-1 and Sentinel-2: Five Lakes in Nagpur, 2019–2025',
    area: 'Satellite Remote Sensing · Google Earth Engine · Environmental Monitoring',
    type: 'conference',
    typeLabel: 'Conference Paper',
    venue: 'ICTCS',
    venueFull: 'International Conference on Technical Computing Sciences (ICTCS)',
    venueUrl: 'https://www.ictcs.in/author-guidelines-for-paper-submission.php',
    status: 'Revision in Progress',
    authors: 'Priyanshu Patil and Giridhar Urkude',
    abstract: 'This paper presents a reproducible cloud-based pipeline combining Sentinel-2 optical imagery and Sentinel-1 radar in Google Earth Engine to track wet surface, green vegetation, and dry ground for five lakes in Nagpur, India, from 2019 to 2025. A near-infrared rule cross-checked against radar and Landsat gave monthly correlations of 0.79–0.97 across all five lakes.',
    flowSteps: ['Sentinel-1 + Sentinel-2', 'Cloud Masking + NIR Rule', 'Radar Cross-Check', 'Classification', 'Change 2019–2025'],
    metrics: [
      { label: 'Radar Correlation', value: '0.79–0.97', note: 'Monthly, 5 lakes' },
      { label: 'Wet/Dry Validation', value: '23/23', note: 'Both rounds' }
    ],
    limitations: 'Single labeller, small validation sample, no field data.',
    projectId: 'urban-lake',
    color: '#557765'
  },

  /* ── JOURNAL PAPERS ── */
  {
    id: 'vanrakshak-journal',
    title: 'Vanrakshak — Hybrid Forest Monitoring Using Edge AI and Internet-Independent Communication',
    area: 'Edge AI · Forest Monitoring · LoRa · Internet-Independent Communication',
    type: 'journal',
    typeLabel: 'Journal Paper',
    venue: 'Springer Nature',
    venueFull: 'Springer Nature',
    venueUrl: null,
    status: 'Revision in Progress',
    authors: 'Priyanshu Patil et al.',
    researchFocus: 'Hybrid forest monitoring, edge-based fire detection, internet-independent wireless communication, dashboard-based alerts, and satellite-assisted monitoring.',
    abstract: 'This manuscript presents Vanrakshak, a hybrid forest-monitoring system combining on-device YOLO-based visual inference on Raspberry Pi 5 and long-range LoRa wireless communication for structured alert transmission without internet dependency. The system operates at any forest range — alerts are transmitted over LoRa to a gateway and displayed on a React dashboard. Satellite-based monitoring provides a complementary environmental context layer.',
    flowSteps: ['Sensors + Camera', 'Edge AI (YOLO, RPi5)', 'LoRa Transmission', 'Gateway + Dashboard', 'Satellite Context'],
    metrics: [],
    limitations: 'Tested in bench conditions. Field deployment pending.',
    projectId: 'vanrakshak',
    color: '#54758A'
  },
  {
    id: 'vanrakshak-methodsx',
    title: 'Vanrakshak — A Methods-Based Approach to Internet-Independent Forest Monitoring',
    area: 'Edge AI Methodology · Embedded Protocol · Reproducibility',
    type: 'journal',
    typeLabel: 'Journal Paper',
    venue: 'MethodsX',
    venueFull: 'MethodsX (Elsevier)',
    venueUrl: null,
    status: 'Revision in Progress',
    authors: 'Priyanshu Patil et al.',
    researchFocus: 'Technical methodology for forest monitoring using edge processing, wireless communication, fire detection, and dashboard-based reporting without relying on conventional internet connectivity.',
    abstract: 'This MethodsX submission documents the reproducible methodology of Vanrakshak — specifically the protocol for deploying YOLO-based edge AI on embedded hardware without internet dependency. It details sensor integration, inference pipeline configuration, LoRa alert payload design, and gateway architecture to enable replication in connectivity-constrained environments.',
    flowSteps: ['Sensor Integration', 'Inference Pipeline', 'LoRa Payload Design', 'Gateway Config', 'Reproducibility'],
    metrics: [],
    limitations: 'Methodology paper — empirical results are in the main Springer Nature manuscript.',
    projectId: 'vanrakshak',
    color: '#557765'
  }
];
