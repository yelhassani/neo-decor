export type CategoryPageKey =
  | 'tapis-salon-nador'
  | 'tapis-chambre-nador'
  | 'tapis-berbere-nador'
  | 'moquette-nador';

type CategoryPage = {
  slug: CategoryPageKey;
  title: string;
  description: string;
  h1: string;
  intro: string;
  explanation: string;
  cta: string;
  faqs: { question: string; answer: string }[];
  internalLinks: { href: string; label: string }[];
};

export const seoContent: {
  serviceAreas: { name: string; description: string }[];
  homepageFaq: { question: string; answer: string }[];
  categoryPages: Record<CategoryPageKey, CategoryPage>;
} = {
  serviceAreas: [
    {
      name: 'Nador',
      description: 'Visite showroom, retrait rapide et conseils sur place pour choisir tapis salon, chambre ou moquette.',
    },
    {
      name: 'Beni Ansar',
      description: 'Livraison et accompagnement pour les foyers qui cherchent un magasin de tapis proche de Beni Ansar.',
    },
    {
      name: 'Al Aroui / Selouane',
      description: 'Solutions pour maisons, appartements et projets deco avec dimensions standards ou sur mesure.',
    },
  ],
  homepageFaq: [
    {
      question: 'Ou acheter un tapis a Nador avec du choix en magasin ?',
      answer: 'Neo-Decor a Nador propose un showroom avec tapis salon, chambre, berbere et moquette a voir sur place.',
    },
    {
      question: 'Quel magasin de tapis conseille pour un salon a Nador ?',
      answer: 'Nous aidons a choisir la bonne dimension, la texture et la couleur selon la circulation, la lumiere et votre budget.',
    },
    {
      question: 'Avez-vous des tapis marocains et berberes a Nador ?',
      answer: 'Oui, nous proposons des tapis berberes et des modeles d inspiration marocaine pour salon et chambre.',
    },
    {
      question: 'Peut-on commander un tapis par WhatsApp avant de venir ?',
      answer: 'Oui. Envoyez vos dimensions, une photo de la piece et vos preferences pour recevoir une selection rapide.',
    },
    {
      question: 'Livrez-vous les tapis a Beni Ansar ?',
      answer: 'Oui, la livraison peut etre organisee a Beni Ansar et dans les zones proches de Nador selon le produit choisi.',
    },
    {
      question: 'Faites-vous la moquette pour maison ou bureau a Nador ?',
      answer: 'Oui, nous proposons des solutions de moquette pour chambres, couloirs, espaces pro et projets sur mesure.',
    },
    {
      question: 'Quels sont les delais pour recevoir un tapis a Nador ?',
      answer: 'Les delais dependent du stock et du format. Le plus rapide est de nous contacter sur WhatsApp ou de visiter le showroom.',
    },
    {
      question: 'Comment trouver le magasin Neo-Decor sur Google Maps ?',
      answer: 'Le lien Google Maps est disponible sur le site pour ouvrir directement l itineraire vers le showroom Neo-Decor a Nador.',
    },
    {
      question: 'Quel type de tapis choisir pour une chambre a Nador ?',
      answer: 'Les modeles doux, confortables et faciles d entretien sont les plus adaptes pour une chambre adulte ou enfant.',
    },
    {
      question: 'Proposez-vous des tapis pour grand salon marocain ?',
      answer: 'Oui, nous avons des grands formats et des options sur mesure pour les salons marocains et les espaces de reception.',
    },
  ],
  categoryPages: {
    'tapis-salon-nador': {
      slug: 'tapis-salon-nador',
      title: 'Tapis Salon Nador | Magasin de tapis de salon chez Neo-Decor',
      description:
        'Tapis salon a Nador : grands formats, tapis modernes et tapis marocains pour salon. Visitez Neo-Decor ou demandez une selection sur WhatsApp.',
      h1: 'Tapis salon a Nador pour salon marocain, moderne ou familial',
      intro:
        'Vous cherchez un tapis salon a Nador qui structure la piece, resiste au passage et valorise votre decoration ? Neo-Decor vous accueille en magasin pour comparer matieres, couleurs et dimensions.',
      explanation:
        'Notre selection comprend des tapis pour grand salon marocain, salon moderne, coin TV et espaces de reception. Nous vous aidons a choisir le bon format selon la taille du canape, la circulation et l effet visuel souhaite.',
      cta: 'Recevoir des idees de tapis salon sur WhatsApp',
      faqs: [
        {
          question: 'Quel tapis choisir pour un grand salon a Nador ?',
          answer: 'Un grand format bien centre sous le salon apporte une meilleure harmonie et limite l effet de vide.',
        },
        {
          question: 'Avez-vous des tapis salon faciles a entretenir ?',
          answer: 'Oui, nous proposons des modeles adaptes a un usage quotidien avec textures resistantes et entretien simple.',
        },
      ],
      internalLinks: [
        { href: '/', label: 'Retour au magasin de tapis a Nador' },
        { href: '/tapis-berbere-nador', label: 'Voir nos tapis berberes a Nador' },
        { href: '/moquette-nador', label: 'Decouvrir la moquette a Nador' },
      ],
    },
    'tapis-chambre-nador': {
      slug: 'tapis-chambre-nador',
      title: 'Tapis Chambre Nador | Tapis doux et confortables chez Neo-Decor',
      description:
        'Tapis chambre a Nador : tapis doux, chaleureux et adaptes aux chambres adultes et enfants. Conseils en magasin et commande rapide par WhatsApp.',
      h1: 'Tapis chambre a Nador pour plus de confort au quotidien',
      intro:
        'Pour une chambre cosy, le bon tapis apporte chaleur, confort au reveil et finition decorative. Neo-Decor propose a Nador des tapis chambre dans plusieurs textures et dimensions.',
      explanation:
        'Nous recommandons des modeles faciles d entretien, agreables pieds nus et coherents avec la surface libre autour du lit. En magasin, vous pouvez comparer les epaisseurs, les coloris et les formats pour chaque configuration.',
      cta: 'Demander une selection de tapis chambre',
      faqs: [
        {
          question: 'Quel format de tapis choisir pour une chambre ?',
          answer: 'Le format depend de la taille du lit et de l espace libre. Nous vous orientons selon vos dimensions.',
        },
        {
          question: 'Avez-vous des tapis chambre pour enfant ?',
          answer: 'Oui, plusieurs modeles conviennent aux chambres enfant grace a des textures confortables et un entretien pratique.',
        },
      ],
      internalLinks: [
        { href: '/', label: 'Voir la page d accueil Neo-Decor' },
        { href: '/tapis-salon-nador', label: 'Explorer les tapis salon a Nador' },
        { href: '/moquette-nador', label: 'Comparer avec la moquette a Nador' },
      ],
    },
    'tapis-berbere-nador': {
      slug: 'tapis-berbere-nador',
      title: 'Tapis Berbere Nador | Tapis marocains et style authentique',
      description:
        'Tapis berbere a Nador : tapis marocains, motifs authentiques et finitions soignees. Venez voir la collection Neo-Decor en magasin.',
      h1: 'Tapis berbere et tapis marocain a Nador',
      intro:
        'Neo-Decor selectionne a Nador des tapis berberes qui allient texture, authenticite et impact decoratif pour salon, chambre ou coin reception.',
      explanation:
        'Si vous cherchez un tapis marocain a Nador, nous vous aidons a choisir un modele qui respecte votre ambiance interieur, qu elle soit traditionnelle, minimaliste ou contemporaine. Les tapis berberes apportent du relief, de la chaleur et une identite visuelle forte.',
      cta: 'Voir des tapis berberes disponibles',
      faqs: [
        {
          question: 'Le tapis berbere convient-il a un interieur moderne ?',
          answer: 'Oui, ses motifs et sa texture se marient tres bien avec une decoration moderne ou naturelle.',
        },
        {
          question: 'Avez-vous des tapis marocains pour salon a Nador ?',
          answer: 'Oui, nous proposons des tapis d inspiration marocaine et berbere pour plusieurs tailles de salon.',
        },
      ],
      internalLinks: [
        { href: '/', label: 'Retour a Neo-Decor Nador' },
        { href: '/tapis-salon-nador', label: 'Associer avec un tapis salon a Nador' },
        { href: '/tapis-chambre-nador', label: 'Voir aussi les tapis chambre' },
      ],
    },
    'moquette-nador': {
      slug: 'moquette-nador',
      title: 'Moquette Nador | Showroom moquette maison et bureau',
      description:
        'Moquette a Nador pour maison, chambre, couloir et bureau. Neo-Decor propose des solutions pratiques et esthetiques avec conseils sur mesure.',
      h1: 'Moquette a Nador pour chambre, couloir et espaces professionnels',
      intro:
        'Pour couvrir un espace avec confort et regularite, la moquette reste une solution efficace. Neo-Decor accompagne vos besoins en moquette a Nador pour l habitat comme pour les locaux professionnels.',
      explanation:
        'Nous orientons nos clients selon le niveau de passage, la facilite d entretien, l isolation recherchee et le rendu visuel attendu. La moquette convient aussi bien a une chambre qu a un couloir, un bureau ou un projet plus large.',
      cta: 'Parler de votre projet moquette sur WhatsApp',
      faqs: [
        {
          question: 'La moquette est-elle adaptee a un couloir ?',
          answer: 'Oui, avec la bonne qualite et la bonne pose, elle apporte confort et limite le bruit dans les passages.',
        },
        {
          question: 'Proposez-vous des solutions pour bureau a Nador ?',
          answer: 'Oui, nous pouvons orienter les projets de bureaux et espaces commerciaux selon l usage et la surface.',
        },
      ],
      internalLinks: [
        { href: '/', label: 'Revenir a la page d accueil Neo-Decor' },
        { href: '/tapis-salon-nador', label: 'Voir aussi les tapis salon' },
        { href: '/tapis-chambre-nador', label: 'Decouvrir les tapis chambre' },
      ],
    },
  },
};
