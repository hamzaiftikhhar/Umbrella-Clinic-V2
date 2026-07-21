// Curated imagery for Umbrella Health — local WebP + Unsplash WebP delivery.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Clinical
  consult: u("photo-1631815588090-d4bfec5b1ccb", 1800),
  /** @deprecated Use consult, reception, or specialty-specific imagery instead. */
  doctorPatient: u("photo-1631815588090-d4bfec5b1ccb", 1800),
  reception: u("photo-1629909613654-28e377c37b09", 2000),
  examRoom: u("photo-1666214280557-f1b5022eb634", 1600),
  ekg: u("photo-1576091160550-2173dba999ef", 1400),
  lab: u("photo-1579154204601-01588f351e67", 1400),
  ultrasound: u("photo-1579154204601-01588f351e67", 1400),
  sleepStudy: u("photo-1520206183501-b80df61043c2", 1400),
  /** Premium sleep outcome — peaceful rest (Sleep Medicine hero) */
  sleepMedicineHero: "/images/sleep-medicine-hero.webp",
  /** Premium sleep consult — female clinician with patient & iPad in clinic */
  sleepMedicineConsultation: "/images/sleep-medicine-consultation.webp",
  /** Cardiology NYC hero */
  cardiologyHero: "/images/cardiology/hero.webp",
  /** Professional cardiology consultation hero */
  cardiologyProfessionalHero: "/images/cardiology/hero-professional.webp",
  /** Cardiologist reviewing ECG results with a patient */
  cardiologyServicesEcg: "/images/cardiology/services-ecg.webp",
  /** Soft-gradient outcome cards (Sword-inspired) */
  cardiologyOutcomeOnboarding: "/images/cardiology/outcome-onboarding.webp",
  cardiologyOutcomeResults: "/images/cardiology/outcome-results.webp",
  /** Homepage Siri-style sphere video poster */
  siriSpherePoster: "/images/siri-sphere-poster.webp",
  microscope: u("photo-1582719471384-894fbb16e074", 1400),

  /** Clinical service cards — homepage grid */
  primaryCareHero: u("photo-1559839734-2b71ea197ec2", 1800),
  /** Brain imaging & clinical neuroscience — neurology hero & homepage grid */
  neurologyHero: u("photo-1530026405186-ed1f139313f8", 1800),
  /** 3D brain model — conditions feature */
  neurologyBrainModel: u("photo-1559757175-0eb30cd8c063", 1600),
  /** Advanced lab diagnostics */
  neurologyDiagnostics: u("photo-1579154204601-01588f351e67", 1600),
  /** EEG / neural waveform lab aesthetic */
  neurologyEegLab: u("photo-1576091160550-2173dba999ef", 1600),
  /** MRI suite environment */
  neurologyImagingSuite: u("photo-1582719471384-894fbb16e074", 1600),
  /** Cognitive assessment & memory care */
  neurologyMemoryCare: u("photo-1454165804606-c3d57bc86b40", 1600),
  /** @deprecated Prefer specialty-local pain imagery below. */
  painManagementHero: u("photo-1544367567-0f2fcb009e0b", 1600),
  /** Pain Management NYC — physician consultation hero */
  painManagementProfessionalHero: "/images/pain-management/physio.webp",
  /** Interventional / procedure suite */
  painManagementProcedure: "/images/pain-management/spine.webp",
  /** Modern interventional care environment */
  painManagementClinicCare: "/images/pain-management/clinic-care.webp",
  /** Exam / evaluation context */
  painManagementExam: "/images/pain-management/exam.webp",
  medicalSpaHero: u("photo-1515377905703-c4788e51af15", 1800),

  // Local WebP assets (public/images)
  drRajat: "/images/dr-rajat.webp",
  premiumDoctorPortrait: "/images/dr-rajat.webp",
  clinicExterior: "/images/street-view.webp",
  clinicInterior:
    "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.webp",

  // People — founding physician photo stands in for placeholder portraits
  founder: "/images/dr-rajat.webp",
  founderAlt: "/images/dr-rajat.webp",
  doctorWoman1: "/images/dr-rajat.webp",
  doctorMan1: "/images/dr-rajat.webp",
  doctorWoman2: "/images/dr-rajat.webp",
  doctorMan2: "/images/dr-rajat.webp",
  doctorWoman3: "/images/dr-rajat.webp",
  doctorMan3: "/images/dr-rajat.webp",

  /** Audience-specific primary care imagery */
  womensHealth: u("photo-1573497019940-1c28c88b4f3e", 1800),
  mensHealth: "/images/premium-doctor-portrait.webp",
  inclusiveCare: u("photo-1582719508461-905c673771fd", 1800),
  transgenderCare:
    "/images/APNQkAFOczQSQGPfH60lyTslmZBtZS0FORi3PpPqefEzCy0rafeDlr1WtadgUpPDgQLDBYTpu_fsIF7J0xfmK1rBpLbTIVvqlr4bMDIdleffPWPsFhTPFAm57JFQdgpaB6R4K4DeLYlkw3627-h3024-k-no.webp",
  conciergeCare: u("photo-1521119989659-a83eee488004", 1800),
  glp1Hero: u("photo-1571019613454-1cb2f99b2d8b", 1600),
  longevityHero: u("photo-1571902943202-507ec2618e8f", 1600),
  patientHappy: u("photo-1582719508461-905c673771fd", 1600),
  patientReading: u("photo-1573497019940-1c28c88b4f3e", 1600),
  patientDog: u("photo-1583337130417-3346a1be7dee", 1800),
  busyPro: u("photo-1573496359142-b8d87734a5a2", 1600),
  exec: u("photo-1521119989659-a83eee488004", 1600),

  // NYC
  nyc: u("photo-1543716091-a840c05249ec", 2000),
  brooklyn: u("photo-1518391846015-55a9cc003b25", 1800),
  soho: u("photo-1499781350541-7783f6c6a0c8", 1800),
  unionSquare: u("photo-1496442226666-8d4d0e62e6e9", 1800),
  tribeca: u("photo-1485871981521-5b1fd3805eee", 1800),

  /** Homepage / brand assets */
  homepageHero:
    "/images/APNQkAGh3YEm92Qa-kUP3rKYhHDg5OzGaYziM48tRLgdof1x00Y-d0vwEyzQbry2Kni-1HP7-tQc87_fmoHP9Pu6gMXqzJvCAqxysq6rXF-kA6F8QbNSvfnUSzoTbK1dwMauOVrQNo_w1600-h1200-k-no.webp",
  logoMark: "/images/logo-mark.webp",
  combinationMark: "/images/combination-mark.webp",
  galleryInterior1:
    "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.webp",
  galleryInterior2:
    "/images/APNQkAFOczQSQGPfH60lyTslmZBtZS0FORi3PpPqefEzCy0rafeDlr1WtadgUpPDgQLDBYTpu_fsIF7J0xfmK1rBpLbTIVvqlr4bMDIdleffPWPsFhTPFAm57JFQdgpaB6R4K4DeLYlkw3627-h3024-k-no.webp",
  galleryInterior3:
    "/images/APNQkAE3aRckid3msJlKgTpj6ZemfukqgTeRybAw3fyQR3cHS302IFTaomOuHAdO04rb2vYv4VC1f5jtD-5X-ny4QmQzzbjDk_ajwNTKfMjgc0l1wHpeiEOdRT_DNZ0i46xFhzUqu6ipw4032-h3024-k-no.webp",
} as const;

export type ImgKey = keyof typeof IMG;
