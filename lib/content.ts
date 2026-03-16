export type Locale = 'fr' | 'ar';

type FAQItem = {
  question: string;
  answer: string;
};

export type Content = {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    hero: string;
    categories: string;
    trust: string;
    gallery: string;
    location: string;
    faq: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBullets: string[];
  };
  categories: {
    title: string;
    items: { title: string; description: string; href?: string }[];
  };
  trust: {
    title: string;
    blocks: { title: string; description: string }[];
    ratingLabel: string;
  };
  gallery: {
    title: string;
    description: string;
    alts: string[];
  };
  why: {
    title: string;
    story: string;
    localNote: string;
    highlights: string[];
  };
  location: {
    title: string;
    description: string;
    addressLabel: string;
    hoursLabel: string;
    directions: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  finalCta: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    socials: string;
  };
};

export const content: Record<Locale, Content> = {
  fr: {
    seo: {
      title: 'Magasin de tapis a Nador | Tapis salon, chambre, berbere et moquette',
      description:
        'Magasin de tapis a Nador pour salon, chambre, tapis marocain et moquette. Showroom Neo-Decor, conseils locaux, WhatsApp et Google Maps.',
    },
    nav: {
      hero: 'Accueil',
      categories: 'Catégories',
      trust: 'Confiance',
      gallery: 'Galerie',
      location: 'Accès',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Magasin de tapis a Nador pour salon, chambre, berbere et moquette',
      subheadline:
        'Neo-Decor vous accueille a Nador avec un showroom de tapis salon, tapis chambre, tapis marocains et moquette, plus des conseils rapides en magasin ou sur WhatsApp.',
      primaryCta: 'Recevoir des photos sur WhatsApp',
      secondaryCta: 'Voir le magasin sur Google Maps',
      trustBullets: ['Showroom a Nador', 'Conseil local', 'Livraison autour de Nador'],
    },
    categories: {
      title: 'Categories recherchees a Nador',
      items: [
        { title: 'Tapis salon', description: 'Tapis de salon pour grand sejour, salon marocain ou espace TV.', href: '/tapis-salon-nador' },
        { title: 'Tapis chambre', description: 'Modeles doux et confortables pour chambre adulte ou enfant.', href: '/tapis-chambre-nador' },
        { title: 'Moquette', description: 'Moquette pour couloir, chambre, bureau et projets sur mesure.', href: '/moquette-nador' },
        { title: 'Tapis berbere', description: 'Tapis marocains et berberes avec relief, texture et style authentique.', href: '/tapis-berbere-nador' },
        { title: 'Tapis moderne', description: 'Designs actuels, tons naturels et finitions adaptees aux interieurs modernes.' },
        { title: 'Grand format', description: 'Solutions pour grands salons, espaces de reception et commandes sur mesure.' },
      ],
    },
    trust: {
      title: 'Pourquoi Neo-Decor attire les recherches locales',
      blocks: [
        { title: 'Selection showroom', description: 'Formats, textures et couleurs a comparer directement en magasin a Nador.' },
        { title: 'Conseil local', description: 'Aide concrete sur la taille, la matiere, le style et l entretien selon votre piece.' },
        { title: 'Contact rapide', description: 'WhatsApp, Instagram et Google Maps pour reserver une visite ou demander des photos.' },
      ],
      ratingLabel: 'Ajoutez ici votre vrai volume d avis Google et la note moyenne actuelle.',
    },
    gallery: {
      title: 'Inspiration & textures',
      description: 'Aperçu de styles disponibles en magasin à Nador. Remplacez ces images par vos photos réelles.',
      alts: [
        'Tapis moderne en salon lumineux à Nador',
        'Tapis de chambre cosy pour maison à Nador',
        'Tapis berbère texturé pour salon marocain',
        'Tapis élégant pour coin détente à Nador',
        'Tapis contemporain avec teintes naturelles',
        'Tapis décoratif pour pièce de vie à Nador',
      ],
    },
    why: {
      title: 'Showroom Neo-Decor a Nador',
      story:
        'Notre magasin de tapis a Nador permet de voir les matieres, comparer les couleurs et choisir le bon format avant achat. Nous accompagnons les projets deco pour salon, chambre, couloir et espaces professionnels.',
      localNote:
        'Si vous cherchez un tapis marocain a Nador ou une moquette adaptee a votre espace, le showroom Neo-Decor est pense pour une decision rapide et rassurante.',
      highlights: [
        'Tapis salon, chambre, berbere et moquette dans un seul showroom',
        'Aide sur la dimension ideale selon vos meubles et votre circulation',
        'Conseils pour entretien, installation et harmonisation des couleurs',
        'Acces rapide depuis Nador, Beni Ansar, Al Aroui et Selouane',
      ],
    },
    location: {
      title: 'Visiter le magasin',
      description: 'Passez au showroom Neo-Decor a Nador pour voir les tapis en vrai et ouvrir directement votre itineraire.',
      addressLabel: 'Adresse',
      hoursLabel: 'Horaires',
      directions: 'Ouvrir Google Maps',
    },
    faq: {
      title: 'FAQ magasin de tapis a Nador',
      items: [
        { question: 'Ou acheter un tapis a Nador ?', answer: 'Neo-Decor a Nador propose un showroom de tapis salon, chambre, berbere et moquette avec conseils sur place.' },
        { question: 'Avez-vous du stock en magasin a Nador ?', answer: 'Oui, plusieurs modeles sont visibles directement au showroom et la selection evolue regulierement.' },
        { question: 'Livrez-vous a Nador et alentours ?', answer: 'Oui, nous pouvons organiser la livraison selon le produit vers Nador et les zones proches.' },
        { question: 'Livrez-vous a Beni Ansar ou Al Aroui ?', answer: 'Oui, contactez-nous sur WhatsApp pour verifier le delai et la disponibilite selon votre zone.' },
        { question: 'Avez-vous des tapis marocains a Nador ?', answer: 'Oui, nous proposons des tapis berberes et d inspiration marocaine selon le style recherche.' },
        { question: 'Faites-vous des tailles sur mesure ?', answer: 'Oui, selon les collections et projets. Envoyez vos dimensions pour une orientation rapide.' },
        { question: 'Proposez-vous de la moquette a Nador ?', answer: 'Oui, nous avons des solutions pour chambre, couloir, bureaux et projets decoratifs.' },
        { question: 'Quel est le niveau de prix ?', answer: 'Nous proposons plusieurs gammes afin d adapter le choix a votre usage, votre style et votre budget.' },
        { question: 'Comment vous contacter rapidement ?', answer: 'Le plus simple est de cliquer sur WhatsApp ou d ouvrir Google Maps pour venir au magasin.' },
        { question: 'Proposez-vous des tapis pour grand salon marocain ?', answer: 'Oui, nous avons des grands formats et des options sur mesure pour les salons spacieux.' },
      ],
    },
    finalCta: {
      title: 'Besoin d un tapis salon, chambre ou d une moquette a Nador ?',
      description: 'Envoyez vos dimensions sur WhatsApp ou venez directement au showroom Neo-Decor pour comparer les modeles.',
      cta: 'Envoyer ma demande sur WhatsApp',
    },
    footer: {
      tagline: 'Magasin de tapis a Nador avec showroom, conseils et contact rapide',
      rights: '© Neo-Decor. Tous droits réservés.',
      socials: 'Suivez-nous',
    },
  },
  ar: {
    seo: {
      title: 'نيو ديكور الناظور | متجر سجاد للصالون وغرف النوم والممرات',
      description:
        'متجر سجاد في الناظور: صالون، غرفة نوم، ممرات، بربري، عصري وموكيت. نصائح في المتجر وواتساب سريع.',
    },
    nav: {
      hero: 'الرئيسية',
      categories: 'الفئات',
      trust: 'الثقة',
      gallery: 'المعرض',
      location: 'الموقع',
      faq: 'الأسئلة',
    },
    hero: {
      headline: 'متجر سجاد في الناظور للصالون وغرف النوم والممرات',
      subheadline:
        'نيو ديكور يقدم سجاد صالون وغرف نوم وممرات وموكيت بجودة عالية وأسعار مناسبة مع نصائح في المتجر.',
      primaryCta: 'واتساب',
      secondaryCta: 'الاتجاهات',
      trustBullets: ['جودة', 'سعر عادل', 'نصيحة محلية'],
    },
    categories: {
      title: 'اختر المجموعة المناسبة',
      items: [
        { title: 'الصالون', description: 'سجاد ناعم ومتين للحياة والاستقبال.' },
        { title: 'غرفة النوم', description: 'راحة دافئة وأجواء هادئة للنوم.' },
        { title: 'الممر', description: 'مقاسات طويلة وموكيت ومضادة للانزلاق للممرات.' },
        { title: 'بربري / تقليدي', description: 'رسومات أصلية وصوف مختار وتشطيبات متقنة.' },
        { title: 'عصري', description: 'تصاميم بسيطة بألوان حديثة وملمس أنيق.' },
        { title: 'مقاس خاص / كبير', description: 'حلول مخصصة للصالونات الكبيرة والفنادق والمكاتب.' },
      ],
    },
    trust: {
      title: 'لماذا يثق بنا الزبناء',
      blocks: [
        { title: 'زبناء راضون', description: 'مرافقة شخصية وتوصيات مناسبة لكل مساحة.' },
        { title: 'اختيار واسع', description: 'تشكيلة متجددة من السجاد الفاخر بأفضل قيمة.' },
        { title: 'نصائح في المتجر', description: 'فريق محلي يرشدك في المقاس والمادة والصيانة.' },
      ],
      ratingLabel: 'تقييم جوجل افتراضي 4.8/5',
    },
    gallery: {
      title: 'إلهام وخامات',
      description: 'لمحة عن الأنماط المتوفرة في الناظور. استبدل هذه الصور بصورك الحقيقية.',
      alts: [
        'سجاد عصري لصالون مشرق في الناظور',
        'سجاد غرفة نوم بأجواء هادئة في الناظور',
        'سجاد بربري بخامة واضحة للصالون المغربي',
        'سجاد أنيق لركن الاسترخاء في الناظور',
        'سجاد حديث بألوان طبيعية',
        'سجاد ديكور لفضاء المعيشة في الناظور',
      ],
    },
    why: {
      title: 'نيو ديكور، منزلك في الناظور',
      story:
        'متجر محلي متخصص في السجاد الفاخر. نختار كل قطعة لنجمع بين الراحة والمتانة والجمال، مع نصائح شخصية لمنزلك في الناظور والمناطق القريبة.',
      localNote:
        'تبحث عن سجاد في الناظور؟ صالة العرض لدينا تضم موديلات للصالون وغرف النوم والممرات والموكيت، مع نصائح سريعة في المتجر أو عبر واتساب.',
      highlights: [
        'اختيار منسق: موديلات فاخرة وعصرية',
        'قيمة مضمونة: جودة بسعر عادل',
        'مرافقة: اختيار، تركيب، عناية',
        'متوفر بسرعة في الناظور',
      ],
    },
    location: {
      title: 'زورونا لتلمس السجاد بنفسك',
      description: 'تعال إلى صالة عرض نيو ديكور في الناظور للمقارنة بين الخامات والألوان والمقاسات.',
      addressLabel: 'العنوان',
      hoursLabel: 'الساعات',
      directions: 'الاتجاهات',
    },
    faq: {
      title: 'أسئلة شائعة',
      items: [
        { question: 'أين أشتري سجادة في الناظور؟', answer: 'في متجر نيو ديكور بالناظور. تفضل بزيارة المعرض أو تواصل معنا عبر واتساب.' },
        { question: 'هل لديكم سجاد متوفر حالياً في الناظور؟', answer: 'نعم، مخزون متجدد لسجاد الصالون وغرف النوم والممرات.' },
        { question: 'هل تقومون بالتوصيل داخل الناظور والمناطق المجاورة؟', answer: 'نعم، التوصيل متاح في الناظور والمدن القريبة. اسأل عن الخيارات على واتساب.' },
        { question: 'هل توصلون إلى بني أنصار أو العروي؟', answer: 'نعم، يمكننا التوصيل للمناطق القريبة من الناظور. تواصل معنا للتفاصيل.' },
        { question: 'ما هي طرق الدفع المتوفرة؟', answer: 'نقبل الدفع نقداً وبالبطاقة في المتجر والتحويل البنكي. الدفع آمن في المتجر.' },
        { question: 'هل توفرون مقاسات خاصة؟', answer: 'نعم حسب الموديلات. شارك مقاساتك على واتساب للحصول على تقدير.' },
        { question: 'هل تساعدون في التركيب؟', answer: 'نقدم نصائح للتركيب والعناية، وحلول تركيب عند الطلب.' },
        { question: 'ما نطاق الأسعار؟', answer: 'تشكيلة فاخرة بأسعار معقولة مع خيارات لكل ميزانية.' },
        { question: 'كيف أتواصل معكم بسرعة؟', answer: 'اضغط زر واتساب، نجيب بسرعة على الاستفسارات.' },
        { question: 'هل تتوفرون على مقاسات كبيرة للصالون؟', answer: 'نعم، لدينا مقاسات كبيرة وخيارات حسب الطلب.' },
      ],
    },
    finalCta: {
      title: 'تريد رؤية السجاد على الطبيعة؟',
      description: 'راسلنا على واتساب أو زر صالة عرض نيو ديكور في الناظور.',
      cta: 'تحدث على واتساب',
    },
    footer: {
      tagline: 'متجر سجاد في الناظور مع نصائح شخصية',
      rights: '© نيو ديكور. جميع الحقوق محفوظة.',
      socials: 'تابعنا',
    },
  },
};
