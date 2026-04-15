// ─────────────────────────────────────────────────────────────
//  Qahwa House · Complete Translation Dictionary
//  All UI strings, content, and metadata in EN + AR
// ─────────────────────────────────────────────────────────────

import type {
  BilingualText,
  NavItem,
  CoffeeProduct,
  ServiceOffering,
  BrandValue,
  HeritageMilestone,
  Testimonial,
  LocationInfo,
  PageSEO,
} from '@/types';

// ── Navigation ───────────────────────────────────────────────

export const navItems: NavItem[] = [
  {
    label: { en: 'Home', ar: 'الرئيسية' },
    href: '/',
  },
  {
    label: { en: 'About', ar: 'من نحن' },
    href: '/about',
  },
  {
    label: { en: 'Services', ar: 'خدماتنا' },
    href: '/services',
  },
  {
    label: { en: 'Contact', ar: 'تواصل معنا' },
    href: '/contact',
  },
];

// ── Site-wide UI Strings ─────────────────────────────────────

export const ui = {
  brandName: { en: 'Qahwa House', ar: 'بيت القهوة' },
  brandTagline: {
    en: 'Where Tradition Meets Excellence',
    ar: 'حيث يلتقي التراث بالتميّز',
  },
  cta: {
    exploreMenu: { en: 'Explore Our Menu', ar: 'استكشف قائمتنا' },
    learnMore: { en: 'Learn More', ar: 'اعرف أكثر' },
    getInTouch: { en: 'Get in Touch', ar: 'تواصل معنا' },
    ourStory: { en: 'Our Story', ar: 'قصتنا' },
    viewAll: { en: 'View All', ar: 'عرض الكل' },
    bookExperience: { en: 'Book an Experience', ar: 'احجز تجربتك' },
    sendMessage: { en: 'Send Message', ar: 'أرسل رسالة' },
    sending: { en: 'Sending...', ar: 'جارٍ الإرسال...' },
    messageSent: { en: 'Message Sent!', ar: 'تم إرسال رسالتك!' },
  },
  nav: {
    openMenu: { en: 'Open menu', ar: 'فتح القائمة' },
    closeMenu: { en: 'Close menu', ar: 'إغلاق القائمة' },
  },
  language: {
    toggle: { en: 'العربية', ar: 'English' },
    current: { en: 'English', ar: 'العربية' },
  },
  form: {
    name: { en: 'Full Name', ar: 'الاسم الكامل' },
    email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    phone: { en: 'Phone Number (optional)', ar: 'رقم الهاتف (اختياري)' },
    subject: { en: 'Subject', ar: 'الموضوع' },
    message: { en: 'Your Message', ar: 'رسالتك' },
    namePlaceholder: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
    emailPlaceholder: { en: 'ahmed@example.com', ar: 'ahmed@example.com' },
    phonePlaceholder: { en: '+966 5X XXX XXXX', ar: '+966 5X XXX XXXX' },
    subjectPlaceholder: {
      en: 'How can we help you?',
      ar: 'كيف يمكننا مساعدتك؟',
    },
    messagePlaceholder: {
      en: 'Tell us more about your inquiry...',
      ar: 'أخبرنا المزيد عن استفساراتك...',
    },
    errors: {
      nameRequired: { en: 'Name is required', ar: 'الاسم مطلوب' },
      emailRequired: {
        en: 'Email is required',
        ar: 'البريد الإلكتروني مطلوب',
      },
      emailInvalid: {
        en: 'Please enter a valid email',
        ar: 'يرجى إدخال بريد إلكتروني صحيح',
      },
      subjectRequired: { en: 'Subject is required', ar: 'الموضوع مطلوب' },
      messageRequired: { en: 'Message is required', ar: 'الرسالة مطلوبة' },
      messageMinLength: {
        en: 'Message must be at least 10 characters',
        ar: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
      },
    },
    successMessage: {
      en: "Your message has been received. We'll get back to you within 24 hours.",
      ar: 'تم استلام رسالتك. سنرد عليك خلال 24 ساعة.',
    },
  },
  footer: {
    tagline: {
      en: 'Crafting exceptional coffee experiences since 2019',
      ar: 'نصنع تجارب قهوة استثنائية منذ عام ٢٠١٩',
    },
    copyright: {
      en: '© 2024 Qahwa House. All rights reserved.',
      ar: '© ٢٠٢٤ بيت القهوة. جميع الحقوق محفوظة.',
    },
    links: {
      privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
      terms: { en: 'Terms of Service', ar: 'شروط الخدمة' },
      instagram: { en: 'Instagram', ar: 'إنستغرام' },
      twitter: { en: 'X (Twitter)', ar: 'إكس (تويتر)' },
      snapchat: { en: 'Snapchat', ar: 'سناب شات' },
    },
    sections: {
      explore: { en: 'Explore', ar: 'استكشف' },
      connect: { en: 'Connect', ar: 'تواصل' },
      visit: { en: 'Visit Us', ar: 'زورنا' },
    },
  },
};

// ── Home Page ─────────────────────────────────────────────────

export const homePage = {
  seo: {
    title: {
      en: 'Qahwa House — Premium Saudi Coffee Experience in Riyadh',
      ar: 'بيت القهوة — تجربة القهوة السعودية الفاخرة في الرياض',
    },
    description: {
      en: 'Experience the finest Saudi coffee culture at Qahwa House, Riyadh. Premium arabica blends, traditional brewing, modern ambiance.',
      ar: 'اختبر أرقى ثقافة القهوة السعودية في بيت القهوة بالرياض. مزيج عربيكا فاخر، تحضير تقليدي، أجواء عصرية.',
    },
    keywords: {
      en: 'Saudi coffee, Qahwa, specialty coffee Riyadh, Arabic coffee, premium coffee Saudi Arabia',
      ar: 'قهوة سعودية، قهوة عربية، مقهى متخصص الرياض، قهوة فاخرة المملكة العربية السعودية',
    },
  },
  hero: {
    eyebrow: { en: 'Est. 2019 · Riyadh, Saudi Arabia', ar: 'تأسست ٢٠١٩ · الرياض، المملكة العربية السعودية' },
    headline: {
      en: 'Where Every Cup\nTells a Story',
      ar: 'حيث كلُّ فنجان\nيروي حكاية',
    },
    subheadline: {
      en: 'Rooted in Saudi heritage, elevated by modern craft. We source, roast, and serve exceptional coffee that honors the spirit of Arabian hospitality.',
      ar: 'متجذّرون في التراث السعودي، مرفوعون بالحرفية الحديثة. نختار ونحمّص ونقدّم قهوة استثنائية تكرّم روح الضيافة العربية.',
    },
    scrollCue: { en: 'Discover Our World', ar: 'اكتشف عالمنا' },
  },
  featured: {
    sectionLabel: { en: 'Signature Blends', ar: 'المزيج المميز' },
    headline: {
      en: 'Crafted for the Discerning Palate',
      ar: 'مُعدٌّ للذوق الرفيع',
    },
    subheadline: {
      en: 'Each blend is a journey — from remote highland farms to your cup.',
      ar: 'كل مزيج رحلة — من مزارع الهضاب البعيدة إلى فنجانك.',
    },
  },
  stats: {
    headline: { en: 'A Legacy Built on Quality', ar: 'إرث مبنيٌّ على الجودة' },
    items: [
      {
        value: { en: '50+', ar: '٥٠+' },
        label: { en: 'Single Origins', ar: 'أصل مفرد' },
      },
      {
        value: { en: '12K+', ar: '١٢ألف+' },
        label: { en: 'Guests Served', ar: 'ضيف تمّت خدمتهم' },
      },
      {
        value: { en: '5', ar: '٥' },
        label: { en: 'Years of Craft', ar: 'سنوات من الحرفية' },
      },
      {
        value: { en: '3', ar: '٣' },
        label: { en: 'Awards Won', ar: 'جوائز حُصِدت' },
      },
    ],
  },
  storyPreview: {
    eyebrow: { en: 'Our Heritage', ar: 'تراثنا' },
    headline: { en: 'Born from the Heart of Arabia', ar: 'وُلدنا من قلب الجزيرة العربية' },
    body: {
      en: 'Qahwa — قهوة — is more than coffee. It is a centuries-old ritual of welcome, a language of generosity spoken through cardamom-spiced cups. At Qahwa House, we carry this tradition into the 21st century with unwavering reverence and relentless innovation.',
      ar: 'القهوة أكثر من مجرد مشروب. إنها طقوس ترحيب عمرها قرون، لغة كرم تُنطق من خلال فناجين مُعطّرة بالهيل. في بيت القهوة، نحمل هذا التراث إلى القرن الحادي والعشرين بتبجيل راسخ وابتكار لا يهدأ.',
    },
  },
  testimonials: {
    sectionLabel: { en: 'Voices of Our Guests', ar: 'أصوات ضيوفنا' },
    headline: {
      en: 'What Our Community Says',
      ar: 'ماذا يقول مجتمعنا',
    },
  },
  marquee: {
    items: [
      { en: 'Specialty Coffee', ar: 'قهوة متخصصة' },
      { en: 'Arabian Heritage', ar: 'تراث عربي' },
      { en: 'Single Origin', ar: 'أصل مفرد' },
      { en: 'Master Roasters', ar: 'محمصو حرفيون' },
      { en: 'Saudi Craftsmanship', ar: 'حرفية سعودية' },
    ],
  },
};

// ── About Page ────────────────────────────────────────────────

export const aboutPage = {
  seo: {
    title: {
      en: 'About Qahwa House — Our Story & Heritage',
      ar: 'عن بيت القهوة — قصتنا وتراثنا',
    },
    description: {
      en: 'Learn the story behind Qahwa House — our passion for Saudi coffee heritage, our sourcing philosophy, and the team behind every exceptional cup.',
      ar: 'تعرّف على قصة بيت القهوة — شغفنا بتراث القهوة السعودية وفلسفة التوريد والفريق خلف كل فنجان استثنائي.',
    },
    keywords: {
      en: 'Qahwa House story, Saudi coffee heritage, specialty coffee brand Riyadh',
      ar: 'قصة بيت القهوة، تراث القهوة السعودية، ماركة قهوة متخصصة الرياض',
    },
  },
  hero: {
    eyebrow: { en: 'Our Story', ar: 'قصتنا' },
    headline: {
      en: 'A Love Letter to Arabian Coffee',
      ar: 'رسالة حبٍّ للقهوة العربية',
    },
    body: {
      en: 'From the ancient coffee gardens of the Asir highlands to the modern streets of Riyadh, our journey is one of passion, patience, and profound respect for a tradition older than memory.',
      ar: 'من حدائق القهوة القديمة في مرتفعات عسير إلى شوارع الرياض الحديثة، رحلتنا قائمة على الشغف والصبر والاحترام العميق لتقليد أعرق من الذاكرة.',
    },
  },
  values: {
    sectionLabel: { en: 'Our Principles', ar: 'مبادئنا' },
    headline: { en: 'What We Stand For', ar: 'ما نؤمن به' },
  },
  heritage: {
    sectionLabel: { en: 'The Journey', ar: 'الرحلة' },
    headline: { en: 'Five Years of Excellence', ar: 'خمس سنوات من التميز' },
  },
  mission: {
    eyebrow: { en: 'Our Mission', ar: 'رسالتنا' },
    headline: {
      en: 'To Elevate Every\nCoffee Moment',
      ar: 'لنرتقي بكل\nلحظة قهوة',
    },
    body: {
      en: 'We believe extraordinary coffee is not a luxury — it is a right. Our mission is to make every Saudi coffee experience worthy of the rich tradition it inherits, blending ancestral wisdom with world-class craft.',
      ar: 'نؤمن أن القهوة الاستثنائية ليست ترفاً — بل هي حق. مهمتنا هي جعل كل تجربة قهوة سعودية جديرة بالتراث الثري الذي ترثه، مزجاً بين الحكمة الأجدادية والحرفية العالمية المستوى.',
    },
  },
};

// ── Services Page ─────────────────────────────────────────────

export const servicesPage = {
  seo: {
    title: {
      en: 'Our Services — Coffee Experiences at Qahwa House',
      ar: 'خدماتنا — تجارب القهوة في بيت القهوة',
    },
    description: {
      en: 'Discover the full range of Qahwa House offerings — from specialty brews and cupping sessions to corporate catering and barista training.',
      ar: 'اكتشف التشكيلة الكاملة من عروض بيت القهوة — من المشروبات المتخصصة وجلسات التذوق إلى تقديم الطعام للشركات وتدريب الباريستا.',
    },
    keywords: {
      en: 'coffee services Riyadh, specialty coffee catering, barista training Saudi Arabia, coffee tasting',
      ar: 'خدمات القهوة الرياض، تقديم القهوة المتخصصة، تدريب باريستا السعودية، تذوق القهوة',
    },
  },
  hero: {
    eyebrow: { en: 'What We Offer', ar: 'ما نقدمه' },
    headline: {
      en: 'An Experience for\nEvery Occasion',
      ar: 'تجربة لكل\nمناسبة',
    },
    body: {
      en: 'From quiet morning rituals to grand corporate gatherings, we craft coffee experiences that leave lasting impressions.',
      ar: 'من طقوس الصباح الهادئة إلى التجمعات الشركاتية الكبرى، نصنع تجارب قهوة تترك انطباعات لا تُنسى.',
    },
  },
  process: {
    sectionLabel: { en: 'Our Process', ar: 'طريقتنا' },
    headline: { en: 'From Seed to Cup', ar: 'من البذرة إلى الفنجان' },
    steps: [
      {
        number: { en: '01', ar: '٠١' },
        title: { en: 'Sourcing', ar: 'التوريد' },
        description: {
          en: 'We travel directly to farms across Arabia, Ethiopia, and Yemen to hand-select the finest lots.',
          ar: 'نسافر مباشرةً إلى المزارع في جميع أنحاء الجزيرة العربية وإثيوبيا واليمن لاختيار أجود الأصناف.',
        },
      },
      {
        number: { en: '02', ar: '٠٢' },
        title: { en: 'Roasting', ar: 'التحميص' },
        description: {
          en: 'Our master roasters craft each batch with precision, developing profiles that honor the bean\'s origin.',
          ar: 'يصنع محمصونا الحرفيون كل دفعة بدقة متناهية، مطوّرين ملامح تكرّم أصل الحبة.',
        },
      },
      {
        number: { en: '03', ar: '٠٣' },
        title: { en: 'Brewing', ar: 'التحضير' },
        description: {
          en: 'From traditional dallah to precision pour-over, every brewing method is an art form.',
          ar: 'من الدلّة التقليدية إلى البور أوفر الدقيق، كل طريقة تحضير هي فن قائم بذاته.',
        },
      },
      {
        number: { en: '04', ar: '٠٤' },
        title: { en: 'Serving', ar: 'التقديم' },
        description: {
          en: 'Hospitality is paramount. Every cup is presented with the care and warmth of Saudi tradition.',
          ar: 'الضيافة هي الأسمى. كل فنجان يُقدَّم بالعناية ودفء التقاليد السعودية.',
        },
      },
    ],
  },
};

// ── Contact Page ──────────────────────────────────────────────

export const contactPage = {
  seo: {
    title: {
      en: 'Contact Qahwa House — Visit Us in Riyadh',
      ar: 'تواصل مع بيت القهوة — زورنا في الرياض',
    },
    description: {
      en: 'Find Qahwa House in the heart of Riyadh. Get directions, business hours, and send us a message. We\'d love to hear from you.',
      ar: 'اعثر على بيت القهوة في قلب الرياض. احصل على الاتجاهات وأوقات العمل وأرسل لنا رسالة. يسعدنا سماعك.',
    },
    keywords: {
      en: 'contact Qahwa House, coffee shop Riyadh location, Saudi coffee shop hours',
      ar: 'تواصل بيت القهوة، موقع مقهى الرياض، أوقات مقهى سعودي',
    },
  },
  hero: {
    eyebrow: { en: 'Find Us', ar: 'أين نحن' },
    headline: {
      en: 'Come Experience\nthe Magic',
      ar: 'تعال لتختبر\nالسحر',
    },
    body: {
      en: 'We are located in the heart of Riyadh\'s culinary district, where the old city soul meets modern sophistication. Your perfect cup awaits.',
      ar: 'نقع في قلب حي الطعام بالرياض، حيث روح المدينة القديمة تلتقي بالرقي الحديث. فنجانك المثالي في انتظارك.',
    },
  },
  faq: {
    sectionLabel: { en: 'Common Questions', ar: 'أسئلة شائعة' },
    headline: { en: "We've Got Answers", ar: 'لدينا إجابات' },
    items: [
      {
        question: {
          en: 'Do you offer wholesale beans?',
          ar: 'هل تقدمون بيع حبوب القهوة بالجملة؟',
        },
        answer: {
          en: 'Yes, we supply specialty-grade beans to restaurants, hotels, and offices across the GCC. Contact us for wholesale pricing.',
          ar: 'نعم، نورّد حبوب القهوة ذات الجودة المتخصصة للمطاعم والفنادق والمكاتب في جميع أنحاء دول الخليج. تواصل معنا للحصول على أسعار الجملة.',
        },
      },
      {
        question: {
          en: 'Can I book a private cupping event?',
          ar: 'هل يمكنني حجز حدث تذوق خاص؟',
        },
        answer: {
          en: 'Absolutely. We host private and corporate cupping events for groups of 6–30. Fill out our inquiry form and we\'ll create a custom experience.',
          ar: 'بالتأكيد. نستضيف فعاليات تذوق خاصة وشركاتية لمجموعات من ٦ إلى ٣٠ شخصًا. املأ نموذج الاستفسار وسنبتكر تجربة مخصصة لك.',
        },
      },
      {
        question: {
          en: 'Do you ship beans internationally?',
          ar: 'هل تشحنون حبوب القهوة دوليًا؟',
        },
        answer: {
          en: 'We currently ship within the GCC countries and are working to expand internationally. Join our newsletter to be notified.',
          ar: 'نشحن حاليًا داخل دول مجلس التعاون الخليجي ونعمل على التوسع دوليًا. اشترك في نشرتنا الإخبارية لتلقّي الإشعارات.',
        },
      },
      {
        question: {
          en: 'Is the café family-friendly?',
          ar: 'هل المقهى مناسب للعائلات؟',
        },
        answer: {
          en: 'Yes. We have dedicated family seating, a children\'s menu with non-caffeinated options, and a welcoming environment for all.',
          ar: 'نعم. لدينا جلسات مخصصة للعائلات وقائمة أطفال بخيارات خالية من الكافيين وبيئة ترحيبية للجميع.',
        },
      },
    ],
  },
};

// ── Products Data ─────────────────────────────────────────────

export const products: CoffeeProduct[] = [
  {
    id: 'asir-highland',
    name: { en: 'Asir Highland', ar: 'هضاب عسير' },
    description: {
      en: 'A rare Saudi single origin from the Asir mountains, with floral notes and a silky finish.',
      ar: 'أصل مفرد سعودي نادر من جبال عسير، بنكهات زهرية ونهاية حريرية.',
    },
    origin: 'Saudi Arabia',
    roastLevel: 'light',
    flavorNotes: [
      { en: 'Jasmine', ar: 'ياسمين' },
      { en: 'Honey', ar: 'عسل' },
      { en: 'Stone Fruit', ar: 'فواكه حجرية' },
    ],
    price: 95,
    currency: 'SAR',
    featured: true,
    inStock: true,
  },
  {
    id: 'yemeni-mocha',
    name: { en: 'Yemeni Mocha', ar: 'موكا يمني' },
    description: {
      en: 'The legendary Yemeni Mocha — wild and complex, with deep chocolate and wine-like acidity.',
      ar: 'الموكا اليمني الأسطوري — وحشي ومعقد، بشوكولاتة داكنة وحموضة تشبه النبيذ.',
    },
    origin: 'Yemen',
    roastLevel: 'medium',
    flavorNotes: [
      { en: 'Dark Chocolate', ar: 'شوكولاتة داكنة' },
      { en: 'Dried Apricot', ar: 'مشمش مجفف' },
      { en: 'Spice', ar: 'توابل' },
    ],
    price: 120,
    currency: 'SAR',
    featured: true,
    inStock: true,
  },
  {
    id: 'ethiopian-sun',
    name: { en: 'Ethiopian Sun', ar: 'شمس إثيوبيا' },
    description: {
      en: 'Sun-dried Yirgacheffe with explosive blueberry and lemon aromatics — a crowd favourite.',
      ar: 'يرجاتشيفي مجفف بالشمس بنكهات توت أزرق وليمون متفجرة — المفضل لدى الجميع.',
    },
    origin: 'Ethiopia',
    roastLevel: 'light',
    flavorNotes: [
      { en: 'Blueberry', ar: 'توت أزرق' },
      { en: 'Lemon Zest', ar: 'قشر ليمون' },
      { en: 'Bergamot', ar: 'برغموت' },
    ],
    price: 85,
    currency: 'SAR',
    featured: true,
    inStock: true,
  },
  {
    id: 'qahwa-classic',
    name: { en: 'Qahwa Classic', ar: 'القهوة الكلاسيك' },
    description: {
      en: 'Our signature Qahwa blend — green coffee with cardamom, saffron, and rose, brewed in the traditional dallah.',
      ar: 'مزيج القهوة المميز — قهوة خضراء مع هيل وزعفران وورد، محضرة في الدلّة التقليدية.',
    },
    origin: 'Saudi Arabia',
    roastLevel: 'light',
    flavorNotes: [
      { en: 'Cardamom', ar: 'هيل' },
      { en: 'Saffron', ar: 'زعفران' },
      { en: 'Rose', ar: 'ورد' },
    ],
    price: 45,
    currency: 'SAR',
    featured: false,
    inStock: true,
  },
];

// ── Services Data ─────────────────────────────────────────────

export const services: ServiceOffering[] = [
  {
    id: 'specialty-cafe',
    icon: '☕',
    title: { en: 'Specialty Café', ar: 'المقهى المتخصص' },
    description: {
      en: 'A curated menu of specialty espresso, filter, and traditional brews in a refined setting.',
      ar: 'قائمة منتقاة من الإسبريسو المتخصص والفلتر والمشروبات التقليدية في بيئة راقية.',
    },
    longDescription: {
      en: 'Our café is a sanctuary for the coffee connoisseur. Every method is offered — from Turkish dallah and siphon to AeroPress, V60, and our signature espresso bar. Our baristas are trained to championship standard, ensuring a world-class experience with every visit.',
      ar: 'مقهانا ملاذ لمحبي القهوة الحقيقيين. كل طريقة تحضير متاحة — من الدلّة التركية والسيفون إلى AeroPress وV60 وبار الإسبريسو المميز. يتلقى باريستانا تدريباً على مستوى البطولات لضمان تجربة عالمية المستوى في كل زيارة.',
    },
    features: [
      { en: 'Espresso-based drinks', ar: 'مشروبات الإسبريسو' },
      { en: 'Specialty filter coffee', ar: 'قهوة فلتر متخصصة' },
      { en: 'Traditional Qahwa & Dallah service', ar: 'خدمة القهوة والدلّة التقليدية' },
      { en: 'Seasonal specials', ar: 'خاصيات موسمية' },
    ],
    featured: true,
  },
  {
    id: 'cupping-sessions',
    icon: '🫖',
    title: { en: 'Cupping Sessions', ar: 'جلسات التذوق' },
    description: {
      en: 'Guided sensory experiences exploring the nuances of single-origin coffees from across Arabia.',
      ar: 'تجارب حسية موجّهة تستكشف دقائق قهوة الأصل المفرد من جميع أنحاء الجزيرة العربية.',
    },
    longDescription: {
      en: 'Join our master roasters for an intimate cupping journey. You will learn to identify aromas, flavors, and textures, understanding how origin, processing, and roasting shape each cup. Private and group sessions available.',
      ar: 'انضم إلى محمصينا الحرفيين في رحلة تذوق حميمة. ستتعلم التعرف على الروائح والنكهات والملمسات وفهم كيف تشكّل الأصل والمعالجة والتحميص كل فنجان. جلسات فردية وجماعية متاحة.',
    },
    features: [
      { en: 'Expert-guided tastings', ar: 'تذوقات بإرشاد خبير' },
      { en: 'Up to 8 single origins', ar: 'حتى ٨ أصناف أصل مفرد' },
      { en: 'Cupping score sheets', ar: 'أوراق تقييم التذوق' },
      { en: 'Take-home tasting notes', ar: 'ملاحظات تذوق للمنزل' },
    ],
    price: { en: 'From SAR 180 / person', ar: 'من ١٨٠ ريال / شخص' },
    featured: true,
  },
  {
    id: 'corporate-catering',
    icon: '🏢',
    title: { en: 'Corporate Catering', ar: 'الضيافة الشركاتية' },
    description: {
      en: 'Premium coffee solutions for offices, events, and corporate gatherings across Riyadh.',
      ar: 'حلول قهوة فاخرة للمكاتب والفعاليات والتجمعات الشركاتية في جميع أنحاء الرياض.',
    },
    longDescription: {
      en: 'Elevate your corporate hospitality with Qahwa House. We offer fully staffed coffee bars, specialty brewing equipment, premium beans, and bespoke menus for any event size. From intimate board meetings to large-scale conferences.',
      ar: 'ارتقِ بضيافتك الشركاتية مع بيت القهوة. نقدم بارات قهوة بكادر متكامل ومعدات تحضير متخصصة وحبوب فاخرة وقوائم مخصصة لأي حجم فعالية. من اجتماعات مجلس الإدارة الحميمة إلى المؤتمرات واسعة النطاق.',
    },
    features: [
      { en: 'Full-service mobile coffee bar', ar: 'بار قهوة متنقل بخدمة كاملة' },
      { en: 'Branded cups & packaging', ar: 'أكواب وتغليف بالشعار' },
      { en: 'Dedicated barista team', ar: 'فريق باريستا مخصص' },
      { en: 'Custom menu creation', ar: 'إنشاء قائمة مخصصة' },
    ],
    price: { en: 'Custom pricing', ar: 'تسعير مخصص' },
    featured: true,
  },
  {
    id: 'barista-training',
    icon: '🎓',
    title: { en: 'Barista Training', ar: 'تدريب الباريستا' },
    description: {
      en: 'Professional SCA-certified barista courses for aspiring coffee professionals.',
      ar: 'دورات باريستا احترافية معتمدة من SCA للمحترفين الطموحين في مجال القهوة.',
    },
    longDescription: {
      en: 'Whether you are a coffee enthusiast or building a career in hospitality, our SCA-aligned training program provides foundational and advanced skills. Courses cover espresso theory, milk science, latte art, sensory training, and business operations.',
      ar: 'سواء كنت من محبي القهوة أو تبني مسيرة في قطاع الضيافة، يوفر برنامجنا التدريبي المتوافق مع SCA المهارات الأساسية والمتقدمة. تشمل الدورات نظرية الإسبريسو وعلم الحليب وفن اللاتيه والتدريب الحسي والعمليات التجارية.',
    },
    features: [
      { en: 'Beginner & Advanced levels', ar: 'مستويات مبتدئ ومتقدم' },
      { en: 'SCA-aligned curriculum', ar: 'مناهج متوافقة مع SCA' },
      { en: 'Hands-on practical sessions', ar: 'جلسات تطبيقية عملية' },
      { en: 'Certificate of completion', ar: 'شهادة إتمام' },
    ],
    price: { en: 'From SAR 650 / course', ar: 'من ٦٥٠ ريال / دورة' },
    featured: false,
  },
  {
    id: 'bean-subscriptions',
    icon: '📦',
    title: { en: 'Bean Subscriptions', ar: 'اشتراكات الحبوب' },
    description: {
      en: 'Freshly roasted, hand-selected beans delivered to your door on a schedule that suits you.',
      ar: 'حبوب محمصة طازجة ومختارة يدويًا تُوصل إلى بابك وفق جدول يناسبك.',
    },
    longDescription: {
      en: 'Never run out of exceptional coffee. Subscribe to our curated monthly or bi-weekly delivery and receive freshly roasted beans from our current selection. Each delivery includes tasting notes and brewing recommendations tailored to the origins you receive.',
      ar: 'لا تنفد قهوتك الاستثنائية أبداً. اشترك في توصيلنا الشهري أو كل أسبوعين واستقبل حبوباً محمصة طازجة من اختيارنا الحالي. تتضمن كل شحنة ملاحظات تذوق وتوصيات تحضير مخصصة للأصناف التي تستقبلها.',
    },
    features: [
      { en: 'Weekly, bi-weekly, or monthly', ar: 'أسبوعي أو كل أسبوعين أو شهري' },
      { en: 'Choose your roast preference', ar: 'اختر تفضيلاتك للتحميص' },
      { en: 'Free GCC delivery', ar: 'توصيل مجاني في الخليج' },
      { en: 'Pause or cancel anytime', ar: 'توقف أو ألغِ في أي وقت' },
    ],
    price: { en: 'From SAR 120 / delivery', ar: 'من ١٢٠ ريال / شحنة' },
    featured: false,
  },
  {
    id: 'private-events',
    icon: '✨',
    title: { en: 'Private Events', ar: 'الفعاليات الخاصة' },
    description: {
      en: 'Host your celebration, launch, or gathering in our elegant private event space.',
      ar: 'احتفل بمناسبتك أو أطلق علامتك أو اعقد تجمعك في مساحة الفعاليات الخاصة الأنيقة.',
    },
    longDescription: {
      en: 'Our private event space seats up to 40 guests and can be transformed for any occasion — from intimate wedding brunches to product launches and community gatherings. Our team handles every detail, from décor consultation to full catering.',
      ar: 'تتسع مساحة الفعاليات الخاصة لـ ٤٠ ضيفاً ويمكن تحويلها لأي مناسبة — من حفلات الزفاف الحميمة إلى إطلاق المنتجات والتجمعات المجتمعية. يتولى فريقنا كل التفاصيل، من استشارة الديكور إلى تقديم الطعام الكامل.',
    },
    features: [
      { en: 'Seats up to 40 guests', ar: 'تتسع لـ ٤٠ ضيفاً' },
      { en: 'AV equipment included', ar: 'معدات صوت وصورة مشمولة' },
      { en: 'Custom coffee & food menu', ar: 'قائمة قهوة وطعام مخصصة' },
      { en: 'Décor consultation', ar: 'استشارة ديكور' },
    ],
    price: { en: 'Enquire for pricing', ar: 'استفسر عن الأسعار' },
    featured: false,
  },
];

// ── Brand Values ──────────────────────────────────────────────

export const brandValues: BrandValue[] = [
  {
    id: 'heritage',
    icon: '🏺',
    title: { en: 'Rooted in Heritage', ar: 'متجذر في التراث' },
    description: {
      en: 'Every decision we make is informed by the rich history of Arabian coffee culture — a tradition of welcome, generosity, and ceremonial beauty.',
      ar: 'كل قرار نتخذه يستنير بتاريخ ثقافة القهوة العربية الثري — تقليد من الترحيب والكرم والجمال الاحتفالي.',
    },
  },
  {
    id: 'quality',
    icon: '⭐',
    title: { en: 'Uncompromising Quality', ar: 'جودة لا تُساوم' },
    description: {
      en: 'From farm selection to your cup, quality is non-negotiable. We subject every batch to rigorous sensory evaluation before it reaches you.',
      ar: 'من اختيار المزرعة إلى فنجانك، الجودة غير قابلة للتفاوض. نخضع كل دفعة لتقييم حسي صارم قبل أن تصلك.',
    },
  },
  {
    id: 'sustainability',
    icon: '🌿',
    title: { en: 'Ethical Sourcing', ar: 'توريد أخلاقي' },
    description: {
      en: 'We build direct, fair-trade relationships with farmers, ensuring they receive just compensation and supporting the long-term health of coffee growing communities.',
      ar: 'نبني علاقات مباشرة وعادلة مع المزارعين، نضمن حصولهم على تعويض عادل وندعم الصحة طويلة الأمد لمجتمعات زراعة القهوة.',
    },
  },
  {
    id: 'craft',
    icon: '🤲',
    title: { en: 'Artisanal Craft', ar: 'الحرفية الفنية' },
    description: {
      en: 'Coffee is a craft. Each roast profile, each extraction, each presentation is the result of hundreds of hours of practice, experimentation, and refinement.',
      ar: 'القهوة حرفة. كل ملف تحميص وكل استخلاص وكل تقديم هو نتيجة مئات الساعات من الممارسة والتجريب والصقل.',
    },
  },
  {
    id: 'community',
    icon: '🤝',
    title: { en: 'Community First', ar: 'المجتمع أولاً' },
    description: {
      en: 'We are not just a coffee brand — we are a gathering place. We invest in the Riyadh community through events, partnerships, and educational programs.',
      ar: 'نحن لسنا مجرد ماركة قهوة — نحن مكان للتجمع. نستثمر في مجتمع الرياض من خلال الفعاليات والشراكات والبرامج التعليمية.',
    },
  },
  {
    id: 'innovation',
    icon: '💡',
    title: { en: 'Forward Thinking', ar: 'تفكير استشرافي' },
    description: {
      en: 'Tradition guides us, but we are not bound by it. We embrace new processing techniques, brewing methods, and flavour combinations to keep pushing the craft forward.',
      ar: 'التراث يقودنا لكننا لسنا مقيّدين به. نتبنى تقنيات المعالجة الجديدة وطرق التحضير ومزيجات النكهة للاستمرار في دفع الحرفية إلى الأمام.',
    },
  },
];

// ── Heritage Timeline ─────────────────────────────────────────

export const heritageMilestones: HeritageMilestone[] = [
  {
    year: 2019,
    title: { en: 'The First Cup', ar: 'الفنجان الأول' },
    description: {
      en: 'Qahwa House opens its doors in Al-Olaya, Riyadh, with 12 seats and a singular vision.',
      ar: 'يفتح بيت القهوة أبوابه في العليا بالرياض بـ ١٢ مقعدًا ورؤية فريدة.',
    },
  },
  {
    year: 2020,
    title: { en: 'Sourcing Program', ar: 'برنامج التوريد' },
    description: {
      en: 'We launch direct-trade partnerships with farmers in Asir and Yemen, establishing our signature sourcing philosophy.',
      ar: 'نطلق شراكات التجارة المباشرة مع مزارعين في عسير واليمن، مرسّخين فلسفة التوريد المميزة لنا.',
    },
  },
  {
    year: 2021,
    title: { en: 'The Roastery Opens', ar: 'افتتاح المحمصة' },
    description: {
      en: 'Our dedicated roasting facility opens in Riyadh, allowing full control from green bean to cup.',
      ar: 'يفتتح مرفق التحميص المخصص في الرياض، مما يتيح سيطرة كاملة من الحبة الخضراء إلى الفنجان.',
    },
  },
  {
    year: 2022,
    title: { en: 'Award Recognition', ar: 'التكريم بالجوائز' },
    description: {
      en: 'Qahwa House wins "Best Specialty Coffee" at the Saudi Food Awards and gains national recognition.',
      ar: 'يفوز بيت القهوة بجائزة "أفضل قهوة متخصصة" في جوائز الغذاء السعودية ويحظى بالاعتراف الوطني.',
    },
  },
  {
    year: 2023,
    title: { en: 'Training Academy', ar: 'أكاديمية التدريب' },
    description: {
      en: 'We launch the Qahwa House Barista Academy, offering SCA-aligned courses to the next generation.',
      ar: 'نطلق أكاديمية باريستا بيت القهوة، نقدم دورات متوافقة مع SCA للجيل القادم.',
    },
  },
  {
    year: 2024,
    title: { en: 'Expansion & Future', ar: 'التوسع والمستقبل' },
    description: {
      en: 'New flagship location announced, international wholesale program launched, and subscription service goes live.',
      ar: 'إعلان عن موقع رئيسي جديد وإطلاق برنامج الجملة الدولي وتفعيل خدمة الاشتراك.',
    },
  },
];

// ── Testimonials ──────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: { en: 'Layan Al-Ghamdi', ar: 'ليان الغامدي' },
    role: { en: 'Interior Designer, Riyadh', ar: 'مصممة داخلية، الرياض' },
    content: {
      en: "Qahwa House redefined what coffee means to me. The Asir Highland changed my entire understanding of what Saudi beans could be — floral, complex, and deeply emotional.",
      ar: 'أعاد بيت القهوة تعريف ما تعنيه القهوة لي. غيّر هضاب عسير فهمي بالكامل لما يمكن أن تكون عليه حبوب القهوة السعودية — زهرية ومعقدة وعاطفية عميقة.',
    },
    rating: 5,
  },
  {
    id: '2',
    author: { en: 'Omar Bin Nasser', ar: 'عمر بن ناصر' },
    role: { en: 'Entrepreneur, Jeddah', ar: 'رائد أعمال، جدة' },
    content: {
      en: "I drive from Jeddah whenever I visit Riyadh specifically to come here. The atmosphere, the knowledge of the staff, and most importantly — the coffee — is simply unmatched in the Kingdom.",
      ar: 'أقود سيارتي من جدة في كل مرة أزور الرياض لأتيّ هنا تحديداً. الأجواء ومعرفة الكادر والأهم — القهوة — لا مثيل لها في المملكة ببساطة.',
    },
    rating: 5,
  },
  {
    id: '3',
    author: { en: 'Noura Al-Rashid', ar: 'نورا الراشد' },
    role: { en: 'Coffee Enthusiast', ar: 'شغوفة بالقهوة' },
    content: {
      en: "The cupping sessions are absolutely transformative. In three hours I learned more about coffee than I had in years of drinking it. Highly recommend for anyone curious about what's in their cup.",
      ar: 'جلسات التذوق تحوّلية تماماً. في ثلاث ساعات تعلمت عن القهوة أكثر مما تعلمته في سنوات من شربها. أوصي بها بشدة لكل من يفضول ما يوجد في فنجانه.',
    },
    rating: 5,
  },
];

// ── Location Info ─────────────────────────────────────────────

export const locationInfo: LocationInfo = {
  address: { en: 'Al-Olaya District, King Fahd Road', ar: 'حي العليا، طريق الملك فهد' },
  neighborhood: { en: 'Al-Olaya', ar: 'العليا' },
  city: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  coordinates: { lat: 24.6877, lng: 46.6923 },
  phone: '+966 11 XXX XXXX',
  email: 'hello@qahwahouse.sa',
  hours: [
    {
      day: { en: 'Saturday – Wednesday', ar: 'السبت – الأربعاء' },
      hours: { en: '7:00 AM – 11:00 PM', ar: '٧:٠٠ ص – ١١:٠٠ م' },
    },
    {
      day: { en: 'Thursday – Friday', ar: 'الخميس – الجمعة' },
      hours: { en: '7:00 AM – 1:00 AM', ar: '٧:٠٠ ص – ١:٠٠ ص' },
    },
  ],
};
