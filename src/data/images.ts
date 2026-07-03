// Curated Unsplash imagery for Umbrella Health.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Clinical
  consult: u("photo-1631815588090-d4bfec5b1ccb", 1800),
  doctorPatient: u("photo-1559757148-5c350d0d3c56", 1600),
  reception: u("photo-1629909613654-28e377c37b09", 2000),
  examRoom: u("photo-1666214280557-f1b5022eb634", 1600),
  ekg: u("photo-1576091160550-2173dba999ef", 1400),
  lab: u("photo-1579154204601-01588f351e67", 1400),
  ultrasound: u("photo-1666214277657-50d76b1d0d6f", 1400),
  sleepStudy: u("photo-1520206183501-b80df61043c2", 1400),
  microscope: u("photo-1582719471384-894fbb16e074", 1400),

  /** Clinical service cards — homepage grid (URLs verified on Unsplash CDN) */
  primaryCareHero: u("photo-1559839734-2b71ea197ec2", 1800),
  neurologyHero: u("photo-1612349317150-e413f6a5b16d", 1600),
  painManagementHero: u("photo-1544367567-0f2fcb009e0b", 1600),
  medicalSpaHero: u("photo-1515377905703-c4788e51af15", 1800),

  // Local assets (public/images)
  drRajat: "/images/dr-rajat.png",
  premiumDoctorPortrait: "/images/dr-rajat.png",
  clinicExterior: "/images/street-view.png",
  clinicInterior:
    "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.jpg",

  // People — real founding physician photo stands in for placeholder portraits
  founder: "/images/dr-rajat.png",
  founderAlt: "/images/dr-rajat.png",
  doctorWoman1: "/images/dr-rajat.png",
  doctorMan1: "/images/dr-rajat.png",
  doctorWoman2: "/images/dr-rajat.png",
  doctorMan2: "/images/dr-rajat.png",
  doctorWoman3: "/images/dr-rajat.png",
  doctorMan3: "/images/dr-rajat.png",

  // Lifestyle / patients
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
};
