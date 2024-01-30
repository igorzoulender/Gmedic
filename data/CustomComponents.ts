/*--Navigation Links---*/
const headerMenu = [

  {
    title: 'Acceuil',
    href: '/'
  },

  {
    title: 'Nos produits',
    desc: [
      { title: "Apnée du sommeil", href: "/" },
      { title: "Oxygène", href: "/coming-soon" },
      { title: "Ronflement", href: "/basic-components" },
      { title: "Tensiomètre", href: "/404" },
    ]
  },

  {
    title: "Blog",
    href: "/blog"
  },

  {
    title: "Contact",
    href: "/contact"
  }

];

/*--Feature 1--*/
const feature1 = [
  {
    title: "Instant Solutions",
    icon: "mdi mdi-star",
    desc: "You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum.",
  },
  {
    title: "Powerful Techniques",
    icon: "mdi mdi-check-circle",
    desc: "You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum.",
  },
];

/*--Feature 2--*/
const feature2 = [
  {
    title: "Make your website in no-time with us.",
    img: "img1.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img2.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img3.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img4.jpg",
  },
];

/*--Portfolio--*/
const portfolio = [
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2023/05/1-PPC-AirMini-ResMed-N30-P10-batterie-pilot-24-lite-pack-voyage-complet_cpap-store.fr.png",
    title: "Kit repiratoire",
    subtext: "",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/1-resmed-airmini-sacoche-de-voyage-premium_cpap-store.fr.jpg",
    title: "Sac pour kit respiratoire",
    subtext: "",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/Couvercle-filtres-S10-cpap-store.fr.jpg",
    title: "Pack de voyage complet",
    subtext: "",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/PPC-AirMini-ResMed-F20-pack-facial_cpap-store.fr_.jpg",
    title: "Ventilateur",
    subtext: "",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/convertisseur-airmini-resmed-cable-allume-cigare_cpap-store.fr.jpg",
    title: "Humidificateur",
    subtext: "",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2023/06/pack-3-boites-de-lingettes-aloe-vera_cpap-store.fr.png",
    title: "Pommade",
    subtext: "",
  },
];

/*--Pricing Plan--*/
const pricePlan = [
  {
    title: "Qu'est ce que c'est ?",

    desc: `Le syndrome d'apnée du sommeil est une maladie qui se caractérise par l'arrêt momentané de la respiration au cours du sommeil, le plus
    souvent du fait de l'obstruction complète ou partielle des voies respiratoires supérieures.`,
  },

  {
    title: "Les signes de la maladie",
    desc: [
      { liste: `Ronflement` },
      { liste: `Somnolence exessice pendant la journée` },
      { liste: `Fatigue au réveil` },
      { liste: `Maux de tête matinaux` },
      { liste: `Difficulté de mémorisation et de concentration` },
      { liste: `Trouble érectiles` },
      { liste: `Pipis fréquents la nuit` }
    ],
  },

  {
    title: "Les complications",
    desc: [
      { liste: `Trouble du rythme cardiaque` },
      { liste: `Insuffisance cardiaque` },
      { liste: `AVC` },
      { liste: `Accident de la route dû à la somnolence` },
      { liste: `Diabete, Obésité` }
    ]
  },

  {
    title: 'Traitement PPC ',
    desc: `Taitement de référence actuel concernant l’apnée du sommeil : ventilation par pression positive continue (PPC). Il requiert le port d’un masque relié à un appareil. Cette machine envoie de l’air ambiant sous pression dans le pharynx. Les voies aériennes supérieures du patient sont maintenues ouvertes afin de rétablir une bonne circulation de l’air durant ses nuits.`
  }
];

/*--Team--*/
const team = [
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/swfit-fx-masque-narinaire-pillows-resmed_cpap-store.fr.jpg.webp",
    title: "Swift FX – Masque narinaire ResMed",
    subtitle: "Property Specialist",
    desc: "You can relay on our amazing features list and also our customer services will be great experience.",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/AirFit%20P30i%20cpap-store.fr-300x300.jpg",
    title: "Tuyau pour PPC",
    subtitle: "Property Specialist",
    desc: "You can relay on our amazing features list and also our customer services will be great experience.",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/masque%20swift%20fx%20for%20her%20cpap-store.fr%2061545-300x300.jpg",
    title: "Chaussette tube SlimLine – Housse isolante pour tuyau",
    subtitle: "Property Specialist",
    desc: "You can relay on our amazing features list and also our customer services will be great experience.",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/11/swfit-fx-masque-narinaire-pillows-resmed_cpap-store.fr.jpg.webp",
    title: "Tuyau chauffant Pour PPC Dreamstation",
    subtitle: "Property Specialist",
    desc: "You can relay on our amazing features list and also our customer services will be great experience.",
  },
];

/*--Testimonials--*/
const Testimonials = [
  {
    img: "1.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MICHELLE ANDERSON",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
  {
    img: "2.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MARK MESTY",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
  {
    img: "3.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "LIMPSY ADAM",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
];

/*--Blogs--*/
const Blog = [
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/10/saos-traitements-symptomes-causes_cpap-store.fr_.png.webp",
    title: "SAOS : symptômes, causes et traitements",
    desc: "Le syndrome d’apnées obstructives du sommeil (SAOS) compte parmi les troubles respiratoires",
    month: "Oct",
    date: "24",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/10/apnee-du-sommeil-traitements-symptomes-causes_cpap-store.fr_.png.webp",
    title: "L’apnée du sommeil : symptômes et traitements",
    desc: "Avec des symptômes tels que la fatigue ou le ronflement, l’apnée du...",
    month: "Sep",
    date: "23",
  },
  {
    img: "https://www.cpap-store.fr/wp-content/uploads/2022/10/Sommeil-bases-mecanisme-troubles_cpap-store.fr_-1.png.webp",
    title: "Le Sommeil : bases, mécanismes et troubles",
    desc: "Le sommeil est une fonction biologique vitale tout comme l’est la respiration ou la digestion. Nous",
    month: "Jan",
    date: "22",
  },
];

export { headerMenu, feature1, feature2, portfolio, pricePlan, team, Testimonials, Blog };
