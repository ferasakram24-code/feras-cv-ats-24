import { AtsSample } from '../types';

export const ATS_SAMPLES: AtsSample[] = [
  {
    id: 'banking_finance',
    title: 'سيرة ذاتية لمحلل مالي ومصرفي',
    titleEn: 'Senior Financial & Banking Analyst',
    field: 'القطاع المصرفي والمالي',
    fieldEn: 'Banking & Financial Sector',
    language: 'ar',
    summary: 'نموذج لسيرة ذاتية متوافقة 100% مع أنظمة ATS للقطاع المصرفي والمالي في الأردن ودول الخليج، تركز على لغة الأرقام والمؤشرات المالية ونسب النمو.',
    atsScore: 98,
    keyHighlights: [
      'تنسيق هرمي يخلو من الجداول المعقدة لضمان قراءة روبوتات ATS بنسبة 100%',
      'استخدام أفعال إنجاز قوية (قاد، طوّر، حسّن، خفّض التكاليف)',
      'تضمين الكلمات المفتاحية المصرفية: IFRS, AML/KYC, Financial Modeling, Credit Risk'
    ],
    structure: {
      personalInfo: {
        name: 'أحمد محمود العبادي',
        title: 'محلل مالي أول ومسؤول ائتمان مصرفي | Senior Financial Analyst',
        email: 'ahmed.financial@example.com',
        phone: '+962 7 9123 4567',
        location: 'عمان، الأردن',
        linkedin: 'linkedin.com/in/ahmed-financial'
      },
      profileSummary: 'محلل مالي مصرفي معتمد بخبرة تتجاوز 7 سنوات في التحليل الائتماني، إعداد النماذج المالية التنبؤية، وإدارة المخاطر التشغيلية. أثبتت كفاءتي في تحسين دقة التدفقات النقدية بنسبة 32% وتقييم ملفات ائتمانية للشركات بقيمة تجاوزت 40 مليون دولار أمريكي. متمرس في معايير IFRS وبرمجيات ERP المصرفية.',
      skills: [
        'التحليل المالي المتقدم والنمذجة المالية (Financial Modeling)',
        'تقييم الجدارة الائتمانية وإدارة المخاطر (Credit Risk Assessment)',
        'معايير المحاسبة والتقارير الدولية (IFRS Standards)',
        'مكافحة غسل الأموال والامتثال (AML / KYC Compliance)',
        'إتقان أنظمة Oracle Financials, SAP, Power BI, Advanced Excel',
        'التخطيط والتحليل المالي (FP&A) وإعداد الموازنات التقديرية'
      ],
      experience: [
        {
          role: 'محلل ائتمان ومالي أول (Senior Credit Analyst)',
          company: 'بنك تجاري رائد - عمان، الأردن',
          period: '2021 - حتى الآن',
          achievements: [
            'دراسة وتحليل أكثر من 120 ملفاً ائتمانياً للشركات المتوسطة والكبرى بمحفظة بلغت 45 مليون دينار مع الحفاظ على نسبة تعثر أقل من 1.2%.',
            'بناء نماذج مالية ديناميكية وتوقعات التدفقات النقدية للعملاء، مما ساهم في تقليص وقت اتخاذ القرار الائتماني بنسبة 25%.',
            'التنسيق مع دائرة الامتثال والمخاطر لضمان مطابقة جميع التسهيلات مع تعليمات البنك المركزي ومعايير IFRS 9.'
          ]
        },
        {
          role: 'محلل مالي (Financial Analyst)',
          company: 'مجموعة استثمارية قابضة - عمان',
          period: '2018 - 2021',
          achievements: [
            'إعداد التقارير المالية الشهرية والربعية للإدارة التنفيذية مع تحليل التباين بين الموازنة والأداء الفعلي بنسبة دقة 98%.',
            'أتمتة تقارير التدفق النقدي اليومي عبر Power BI مما وفر 15 ساعة عمل أسبوعياً لفريق المحاسبة.'
          ]
        }
      ],
      education: [
        {
          degree: 'بكالوريوس في العلوم المالية والمصرفية (تقدير: امتياز)',
          institution: 'الجامعة الأردنية - عمان',
          year: '2014 - 2018'
        }
      ],
      certifications: [
        'شهادة المحلل المالي المعتمد (CFA Level 2 Candidate)',
        'شهادة اختصاصي التحليل المالي والنمذجة (FMVA®)',
        'شهادة الامتثال المصرفي المعتمد (ACAMS)'
      ]
    }
  },
  {
    id: 'tech_software',
    title: 'سيرة ذاتية لمهندس برمجيات (English ATS)',
    titleEn: 'Senior Full Stack Software Engineer',
    field: 'تكنولوجيا المعلومات والبرمجيات',
    fieldEn: 'IT & Software Engineering',
    language: 'en',
    summary: 'ATS-optimized resume in English for Software Engineers and Tech Leads applying to international tech firms and remote roles.',
    atsScore: 99,
    keyHighlights: [
      'Clean single-column standard layout engineered to pass Taleo, Greenhouse, and Lever ATS systems effortlessly.',
      'Quantifiable impact metrics (e.g., "Reduced latency by 40%", "Scaled system to 2M+ active users").',
      'Categorized tech stack mapping all core keywords (TypeScript, Node.js, React, AWS, Docker, CI/CD).'
    ],
    structure: {
      personalInfo: {
        name: 'Omar Al-Khatib',
        title: 'Senior Full Stack Engineer | Cloud Architect',
        email: 'omar.alkhatib.dev@example.com',
        phone: '+962 7 8987 6543',
        location: 'Amman, Jordan (Open to Remote / Relocation)',
        linkedin: 'linkedin.com/in/omar-alkhatib-tech'
      },
      profileSummary: 'Senior Full Stack Software Engineer with 6+ years of experience designing scalable distributed web architectures, RESTful APIs, and microservices for fintech and enterprise SaaS platforms. Proven track record in reducing backend latency by 45%, migrating legacy monoliths to AWS serverless stacks, and leading cross-functional teams of 8+ engineers.',
      skills: [
        'Languages: TypeScript, JavaScript (ES6+), Python, Go, SQL',
        'Frontend: React 19, Next.js, Tailwind CSS, Redux Toolkit, WebSockets',
        'Backend & Cloud: Node.js, Express, NestJS, PostgreSQL, Redis, Docker, AWS (Lambda, ECS, S3, RDS)',
        'Architecture: Microservices, Event-Driven Systems, CI/CD Pipelines (GitHub Actions), REST & GraphQL APIs'
      ],
      experience: [
        {
          role: 'Lead Full Stack Engineer',
          company: 'Fintech Solutions Middle East - Amman, Jordan',
          period: '2022 - Present',
          achievements: [
            'Architected real-time payment processing gateway handling 150,000+ daily transactions with 99.99% uptime.',
            'Optimized PostgreSQL queries and implemented Redis caching, cutting P95 database latency by 55%.',
            'Spearheaded the migration of monolithic core systems to containerized Docker microservices on AWS ECS.'
          ]
        },
        {
          role: 'Software Engineer',
          company: 'Global Cloud Systems - Dubai (Remote)',
          period: '2019 - 2022',
          achievements: [
            'Developed key client-facing dashboards using React & TypeScript, boosting user engagement by 38%.',
            'Implemented automated end-to-end testing suite (Jest & Cypress), increasing code coverage from 45% to 92%.'
          ]
        }
      ],
      education: [
        {
          degree: 'B.Sc. in Computer Science & Software Engineering',
          institution: 'Princess Sumaya University for Technology (PSUT)',
          year: '2015 - 2019'
        }
      ],
      certifications: [
        'AWS Certified Solutions Architect – Associate (SAA-C03)',
        'Certified Kubernetes Administrator (CKA)'
      ]
    }
  },
  {
    id: 'marketing_sales',
    title: 'سيرة ذاتية لمدير تسويق ومبيعات',
    titleEn: 'Digital Marketing & Growth Lead',
    field: 'التسويق والمبيعات وتطوير الأعمال',
    fieldEn: 'Marketing & Business Development',
    language: 'ar',
    summary: 'نموذج سيرة ذاتية يبرز مؤشرات الأداء التسويقية (ROI, CAC, ROAS) واستراتيجيات النمو وتوسيع الحصة السوقية.',
    atsScore: 97,
    keyHighlights: [
      'تسليط الضوء على نتائج الحملات التسويقية ونمو المبيعات بالأرقام والنسب المئوية',
      'تضمين أدوات التحليل والتسويق الرقمي: Google Ads, Meta Ads, HubSpot, SEO/SEM, CRM',
      'صياغة متوافقة مع متطلبات مسؤولي التوظيف في الشركات الكبرى ووكالات الإعلانات'
    ],
    structure: {
      personalInfo: {
        name: 'سارة خالد النجار',
        title: 'مديرة تسويق رقمي ونمو أعمال | Digital Marketing & Growth Manager',
        email: 'sara.marketing@example.com',
        phone: '+962 7 7654 3210',
        location: 'عمان، الأردن (مستعدة للانتقال للخليج)',
        linkedin: 'linkedin.com/in/sara-marketing-pro'
      },
      profileSummary: 'مديرة تسويق رقمي ونمو أعمال حاصلة على ماجستير إدارة أعمال مع 8 سنوات من الخبرة في قيادة الحملات الإعلانية متعددة القنوات وإدارة ميزانيات تسويقية تجاوزت 500 ألف دولار. حققت نمواً في الإيرادات بنسبة 140% عبر استراتيجيات اكتساب العملاء وتحسين محركات البحث والتسويق عبر المؤثرين.',
      skills: [
        'إدارة الحملات الإعلانية الممولة (Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads)',
        'تحسين محركات البحث وتوليد العملاء المحتملين (SEO & Lead Generation)',
        'تحليل البيانات وسلوك المستهلك (Google Analytics 4, Hotjar, Looker Studio)',
        'أتمتة التسويق وإدارة علاقات العملاء (HubSpot, Salesforce, Mailchimp)',
        'بناء الهوية المؤسسية والعلاقات العامة وإدارة المؤثرين'
      ],
      experience: [
        {
          role: 'مديرة التسويق الرقمي والنمو (Digital Marketing Manager)',
          company: 'شركة تجارة إلكترونية إقليمية - عمان والرياض',
          period: '2021 - حتى الآن',
          achievements: [
            'إدارة ميزانية إعلانية شهرية بقيمة 40,000 دولار مع الحفاظ على عائد على الإنفاق الإعلاني (ROAS) بنسبة 4.8x.',
            'تطوير استراتيجية محتوى وSEO قادت لزيادة الزيارات العضوية بنسبة 210% خلال 12 شهراً.',
            'إعادة هيكلة مسار تحويل العملاء (Funnel Optimization) مما قلل تكلفة الاكتساب (CAC) بنسبة 35%.'
          ]
        }
      ],
      education: [
        {
          degree: 'ماجستير في التسويق الاستراتيجي وإدارة الأعمال (MBA)',
          institution: 'الجامعة الألمانية الأردنية (GJU)',
          year: '2019 - 2021'
        },
        {
          degree: 'بكالوريوس في إدارة الأعمال والتسويق',
          institution: 'جامعة اليرموك',
          year: '2013 - 2017'
        }
      ],
      certifications: [
        'Google Ads & Analytics Certified Professional',
        'HubSpot Inbound Marketing & Growth Certification'
      ]
    }
  }
];
