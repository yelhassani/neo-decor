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
    items: { title: string; description: string }[];
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
      title: 'Neo-Decor Nador | Magasin de tapis premium, salon & chambre',
      description:
        'Boutique de tapis à Nador : salon, chambre, couloir, berbère et moderne. Conseils en magasin + WhatsApp.',
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
      headline: 'Tapis premium, prix justes, accueil chaleureux à Nador',
      subheadline:
        'Neo-Decor sélectionne des tapis salon, chambre et couloir avec un excellent rapport qualité/prix et des conseils en magasin.',
      primaryCta: 'WhatsApp',
      secondaryCta: 'Itinéraire',
      trustBullets: ['Qualité', 'Prix', 'Conseil'],
    },
    categories: {
      title: 'Choisissez votre univers',
      items: [
        { title: 'Salon', description: 'Tapis doux et résistants pour vivre et recevoir.' },
        { title: 'Chambre', description: 'Confort feutré et ambiance cosy pour le repos.' },
        { title: 'Couloir', description: 'Formats allongés et anti-dérapants pour les passages.' },
        { title: 'Berbère / Traditionnel', description: 'Motifs authentiques, laine sélectionnée et finitions soignées.' },
        { title: 'Moderne', description: 'Designs épurés, couleurs actuelles et textures élégantes.' },
        { title: 'Sur mesure / Grand format', description: 'Solutions personnalisées pour grands salons, hôtels ou bureaux.' },
      ],
    },
    trust: {
      title: 'Pourquoi nos clients reviennent',
      blocks: [
        { title: 'Clients satisfaits', description: 'Accompagnement personnalisé et recommandations adaptées à chaque espace.' },
        { title: 'Large choix', description: 'Sélection renouvelée de tapis premium au meilleur rapport qualité/prix.' },
        { title: 'Conseils en magasin', description: 'Une équipe locale qui vous guide sur la taille, la matière et l’entretien.' },
      ],
      ratingLabel: 'Placeholder avis Google 4,8/5',
    },
    gallery: {
      title: 'Inspiration & textures',
      description: 'Aperçu de styles disponibles en magasin. Remplacez ces images par vos photos réelles.',
      alts: [
        'Tapis moderne en salon lumineux à Nador',
        'Tapis de chambre cosy, style doux',
        'Tapis berbère texturé pour salon',
        'Tapis élégant pour espace détente',
        'Tapis contemporain avec teintes naturelles',
        'Tapis décoratif pour pièce de vie',
      ],
    },
    why: {
      title: 'Neo-Decor, votre maison à Nador',
      story:
        'Boutique locale spécialisée dans le tapis premium. Nous sélectionnons chaque pièce pour allier confort, durabilité et esthétique, avec des conseils personnalisés pour votre intérieur à Nador et environs.',
      localNote:
        'Vous cherchez un tapis à Nador ? Notre showroom propose des modèles pour salon, chambre et couloir, avec des conseils rapides sur place ou via WhatsApp.',
      highlights: [
        'Sélection curatée : modèles premium et tendances',
        'Valeur sûre : qualité au prix juste',
        'Accompagnement : choix, installation, entretien',
        'Disponible rapidement à Nador',
      ],
    },
    location: {
      title: 'Venez voir et toucher en magasin',
      description: 'Passez au showroom Neo-Decor à Nador pour comparer textures, couleurs et formats.',
      addressLabel: 'Adresse',
      hoursLabel: 'Horaires',
      directions: 'Itinéraire',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { question: 'Livrez-vous à Nador et alentours ?', answer: 'Oui, livraison possible à Nador et villes proches. Demandez les options sur WhatsApp.' },
        { question: 'Livrez-vous à Beni Ansar ou Al Aroui ?', answer: 'Oui, nous pouvons livrer dans les zones proches de Nador. Contactez-nous pour les délais.' },
        { question: 'Quels moyens de paiement acceptez-vous ?', answer: 'Espèces, carte bancaire en magasin et virement. Paiement sécurisé sur place.' },
        { question: 'Faites-vous des tailles sur mesure ?', answer: 'Oui, selon modèles. Partagez vos dimensions sur WhatsApp pour une estimation.' },
        { question: 'Aidez-vous pour l’installation ?', answer: 'Nous conseillons sur la pose et l’entretien. Solutions d’installation disponibles sur demande.' },
        { question: 'Quel est le niveau de prix ?', answer: 'Gamme premium à prix raisonnables, avec options adaptées à chaque budget.' },
        { question: 'Comment vous contacter rapidement ?', answer: 'Cliquez sur le bouton WhatsApp, nous répondons vite aux demandes.' },
        { question: 'Proposez-vous des tapis pour grands salons ?', answer: 'Oui, nous avons des formats larges et des options sur mesure selon le besoin.' },
      ],
    },
    finalCta: {
      title: 'Envie de voir les tapis en vrai ?',
      description: 'Écrivez-nous sur WhatsApp ou venez directement au showroom Neo-Decor à Nador.',
      cta: 'Parler sur WhatsApp',
    },
    footer: {
      tagline: 'Tapis premium, conseils personnalisés à Nador',
      rights: '© Neo-Decor. Tous droits réservés.',
      socials: 'Suivez-nous',
    },
  },
  ar: {
    seo: {
      title: 'نيو ديكور الناظور | متجر سجاد فاخر للصالون وغرف النوم',
      description:
        'متجر سجاد في الناظور: صالون، غرفة نوم، ممرات، بربري وعصري. نصائح في المتجر وواتساب سريع.',
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
      headline: 'سجاد فاخر بأسعار عادلة واستقبال دافئ في الناظور',
      subheadline:
        'نيو ديكور يقدم سجاد صالون وغرف نوم وممرات بجودة عالية وأسعار مناسبة مع نصائح في المتجر.',
      primaryCta: 'واتساب',
      secondaryCta: 'الاتجاهات',
      trustBullets: ['جودة', 'سعر', 'نصيحة'],
    },
    categories: {
      title: 'اختر المجموعة المناسبة',
      items: [
        { title: 'الصالون', description: 'سجاد ناعم ومتين للحياة والاستقبال.' },
        { title: 'غرفة النوم', description: 'راحة دافئة وأجواء هادئة للنوم.' },
        { title: 'الممر', description: 'مقاسات طويلة ومضادة للانزلاق للممرات.' },
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
      description: 'لمحة عن الأنماط المتوفرة. استبدل هذه الصور بصورك الحقيقية.',
      alts: [
        'سجاد عصري لصالون مشرق في الناظور',
        'سجاد غرفة نوم بأجواء هادئة',
        'سجاد بربري بخامة واضحة للصالون',
        'سجاد أنيق لركن الاسترخاء',
        'سجاد حديث بألوان طبيعية',
        'سجاد ديكور لفضاء المعيشة',
      ],
    },
    why: {
      title: 'نيو ديكور، منزلك في الناظور',
      story:
        'متجر محلي متخصص في السجاد الفاخر. نختار كل قطعة لنجمع بين الراحة والمتانة والجمال، مع نصائح شخصية لمنزلك في الناظور والمناطق القريبة.',
      localNote:
        'تبحث عن سجاد في الناظور؟ صالة العرض لدينا تضم موديلات للصالون وغرف النوم والممرات، مع نصائح سريعة في المتجر أو عبر واتساب.',
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
      tagline: 'سجاد فاخر ونصائح شخصية في الناظور',
      rights: '© نيو ديكور. جميع الحقوق محفوظة.',
      socials: 'تابعنا',
    },
  },
};
