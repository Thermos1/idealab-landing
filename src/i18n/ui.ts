// Translation strings for IdeaLab landing.
//
// Three locales: RU (primary, default), KK (Kazakh), EN (English).
// RU is authoritative — written from the system prompt and current site.
// KK strings are a working draft — Динара / KK-носитель должны пройтись по ним перед запуском основного домена.
// EN is for international patients / b2b enquiries.

export const LOCALES = ["ru", "kk"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  ru: "Рус",
  kk: "Қаз",
};

export const LOCALE_LABELS_FULL: Record<Locale, string> = {
  ru: "Русский",
  kk: "Қазақша",
};

// Detect locale from URL pathname.
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/kk")) return "kk";  return "ru";
}

// Build a localized path: switch the locale prefix of `currentPath` to `target`.
// `/` → KK → `/kk/`
// `/kk/services` → EN → `/en/services`
// `/en/about` → RU → `/about`
export function localizedPath(currentPath: string, target: Locale): string {
  // Strip leading locale (kk or en) if any
  let rest = currentPath;
  if (rest.startsWith("/kk/") || rest === "/kk") rest = rest.slice(3) || "/";  if (!rest.startsWith("/")) rest = "/" + rest;
  if (target === "ru") return rest === "" ? "/" : rest;
  // Avoid double-slash when rest is "/"
  const tail = rest === "/" ? "" : rest;
  return `/${target}${tail}`;
}

type Strings = {
  // ---- Meta / SEO ----
  meta: {
    title: string;
    description: string;
    og_alt: string;
  };

  // ---- Navigation ----
  nav: {
    home: string;
    services: string;
    locations: string;
    about: string;
    contacts: string;
    results_cta: string;
    results_cta_short: string;
    menu_open: string;
    menu_close: string;
  };

  // ---- Bregis banner (legal-mandate sticky CTA) ----
  bregis: {
    label: string;
    body: string;
    cta: string;
  };

  // ---- Hero section ----
  hero: {
    eyebrow: string;
    h1_lead: string;
    h1_accent: string;
    h1_tail: string;
    lede: string;
    cta_primary: string;
    cta_secondary: string;
  };

  // ---- USP band ----
  usp: {
    title: string;
    items: { title: string; body: string }[];
  };

  // ---- Services preview ----
  services_preview: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { title: string; body: string }[];
    cta: string;
  };

  // ---- Technology section ----
  tech: {
    eyebrow: string;
    title: string;
    lede: string;
    imasa: { title: string; tagline: string; body: string };
    alex: { title: string; tagline: string; body: string };
    aia: { title: string; tagline: string; body: string };
  };

  // ---- OSMS band ----

  // ---- Locations preview ----
  locations_preview: {
    eyebrow: string;
    title: string;
    lede: string;
    days_short: { mon_sat: string; mon_fri: string; sat: string; sun_off: string };
    cities: {
      slug: string;
      city: string;
      addresses: string[];
      hours: string;
      phone_label: string;
    }[];
    cta: string;
  };

  // ---- Final CTA ----
  contact_cta: {
    eyebrow: string;
    title: string;
    body: string;
    cta_chat: string;
    cta_call: string;
  };

  // ---- Footer ----
  footer: {
    tagline: string;
    col_company: string;
    col_patients: string;
    col_contacts: string;
    links: {
      services: string;
      locations: string;
      about: string;
      offer: string;
      consent: string;
      complaints: string;
      quality: string;
      privacy: string;
      preparation: string;
      results_portal: string;
      tariff: string;
    };
    contacts_label_phone: string;
    contacts_label_whatsapp: string;
    contacts_label_telegram: string;
    contacts_label_instagram: string;
    copyright: string;
    license_note: string;
  };

  // ---- Chat widget ----
  widget: {
    title: string;
    subtitle: string;
    placeholder: string;
    welcome_fallback: string;
    teaser_title: string;
    teaser_body: string;
    error_network: string;
    error_generic: string;
    aria_open: string;
    aria_close: string;
    aria_send: string;
  };

  // ---- Cookie banner ----
  cookie: {
    text: string;
    accept: string;
    decline: string;
  };

  // ---- /services page ----
  services_page: {
    title: string;
    lede: string;
    filter_label: string;
    filters: { id: string; label: string }[];
    table_header: { code: string; name: string; price: string };
    price_unit: string;
    per_allergen: string;
    anesthetic_section_title: string;
    anesthetic_section_lede: string;
    anesthetic_list: { name: string; brand: string }[];
    anesthetic_byo_note: string;
  };

  // ---- /locations page ----
  locations_page: {
    title: string;
    lede: string;
    detail_address: string;
    detail_hours: string;
    detail_phone: string;
    detail_services: string;
    detail_directions: string;
    blood_draw_label: string;
    blood_draw_clinic: string;
    blood_draw_home: string;
    services_offered: string[];
  };

  // ---- /about page ----
  about_page: {
    title: string;
    lede: string;
    story_title: string;
    story_body: string[];
    tech_title: string;
    methods: { title: string; body: string }[];
    accreditation_title: string;
    accreditation_body: string;
    team_title: string;
    team_lede: string;
    team_placeholder: string;
  };

  // ---- Common ----
  common: {
    back_home: string;
    page_in_progress: string;
  };

  // ---- Video testimonials ----
  testimonials: {
    eyebrow: string;
    title: string;
    lede: string;
    consent_note: string;
    play_label: string;
  };

  // ---- Accreditation block ----
  accreditation: {
    title: string;
    body: string;
    download_ru: string;
    download_kk: string;
    download_license: string;
    license_meta: string;
  };

  // ---- Patent & exclusive-distributor (flagship trust signal) ----
  patent: {
    eyebrow: string;
    title: string;
    lede: string;
    points: { title: string; body: string }[];
    download_label: string;
    download_meta: string;
  };
};

const ru: Strings = {
  meta: {
    title: "IdeaLab — медицинская лаборатория. Анализы на аутоиммунные заболевания",
    description:
      "Медицинская лаборатория. Проведение анализов на аутоиммунные заболевания. Современные методики, контроль качества и клиническая значимость каждого результата.",
    og_alt: "IdeaLab — медицинская лаборатория аутоиммунной диагностики",
  },
  nav: {
    home: "Главная",
    services: "Цены на услуги",
    locations: "Контакты",
    about: "О лаборатории",
    contacts: "Контакты",
    results_cta: "Получить результаты",
    results_cta_short: "Результаты",
    menu_open: "Открыть меню",
    menu_close: "Закрыть меню",
  },
  bregis: {
    label: "Результаты анализов",
    body: "Войдите в личный кабинет пациента — это защищённый канал получения результатов согласно требованиям РК.",
    cta: "Войти в личный кабинет →",
  },
  hero: {
    eyebrow: "Медицинская лаборатория",
    h1_lead: "IdeaLab.kz",
    h1_accent: "Медицинская лаборатория",
    h1_tail: "Проведение анализов на аутоиммунные заболевания",
    lede: "Современные методики, контроль качества и клиническая значимость каждого результата. Мы помогаем врачам и пациентам разобраться в сложных аутоиммунных процессах, предоставляя достоверную лабораторную диагностику, которой можно доверять.",
    cta_primary: "Перечень анализов и цены",
    cta_secondary: "Написать в WhatsApp",
  },
  usp: {
    title: "Почему выбирают нас?",
    items: [
      {
        title: "Контроль",
        body: "Ежегодные внешние контроли качества. Сравнение результатов с референс-лабораториями.",
      },
      {
        title: "Профессионализм",
        body: "Опытные врачи и лаборанты, которые регулярно повышают квалификацию.",
      },
      {
        title: "Оснащение",
        body: "Современное оборудование и реагенты от мировых лидеров отрасли.",
      },
    ],
  },
  services_preview: {
    eyebrow: "Что мы тестируем",
    title: "9 направлений диагностики",
    lede:
      "От лекарственной аллергии у стоматологического пациента до аутоиммунного панели при подозрении на красную волчанку — закрываем сложные случаи, которые не берут общие лаборатории.",
    items: [
      {
        title: "Стоматологические препараты",
        body:
          "Анестетики (септанест, мепивастезин, убистезин, скандонест, ораблок), пломбировочные материалы, металлы, имплантаты.",
      },
      {
        title: "Лекарства — твёрдые формы",
        body:
          "Антибиотики, НПВС, противовирусные, гормоны, противогрибковые, желчегонные — таблетки, капсулы, порошки, травы.",
      },
      {
        title: "Лекарства — жидкие формы",
        body:
          "Препараты для общей анестезии (пропофол, кетамин), прививочные вакцины, инъекционные НПВС (диклофенак и др.).",
      },
      {
        title: "Косметология",
        body:
          "Мази, кремы, тушь, духи, одеколоны — всё, что наносится на кожу или вдыхается.",
      },
      {
        title: "Бытовые аллергены",
        body:
          "Стиральные порошки, моющие средства, мыло, домашняя пыль, плесень — частая причина «непонятных» дерматитов.",
      },
      {
        title: "Пищевые аллергены",
        body:
          "Детские смеси, фрукты, овощи, рыба, орехи, молочные продукты — стандартные и нестандартные пищевые реакции.",
      },
      {
        title: "Растительные аллергены",
        body:
          "Пыльца деревьев, трав, злаков. Сезонные риниты, поллинозы — определим конкретный источник.",
      },
      {
        title: "Аллергены животных",
        body:
          "Эпителий кошки, собаки, лошади, шерсть, перо птицы. Реакции у владельцев и медработников.",
      },
      {
        title: "Аутоиммунные заболевания",
        body:
          "Антинуклеарные антитела (АНФ, dsDNA, ANA), васкулиты (cANCA/pANCA), миозиты, антифосфолипидный синдром, заболевания печени и почек.",
      },
    ],
    cta: "Смотреть полный перечень и цены →",
  },
  tech: {
    eyebrow: "Наши услуги",
    title: "Лабораторная диагностика, которой можно доверять",
    lede:
      "Мы помогаем врачам и пациентам разобраться в сложных аутоиммунных процессах, предоставляя достоверную лабораторную диагностику, которой можно доверять.",
    imasa: {
      title: "Базовые исследования нРИФ",
      tagline: "Непрямая реакция иммунофлюоресценции",
      body:
        "Лабораторный метод для выявления аутоантител (антител против собственных тканей организма) в крови или спинномозговой жидкости.",
    },
    alex: {
      title: "Иммуноблот",
      tagline: "Несколько аутоантител в одном тесте",
      body:
        "Иммунологическое исследование, позволяющее в одном лабораторном тесте провести анализ на несколько аутоантител.",
    },
    aia: {
      title: "ИФА",
      tagline: "Иммуноферментный анализ",
      body:
        "Это ключевой метод диагностики, который определяет антитела к собственным тканям организма путём обнаружения специфических антигенов/антител в крови, подтверждая аутоиммунную реакцию и помогая в мониторинге состояния.",
    },
  },
  locations_preview: {
    eyebrow: "Где сдать",
    title: "4 филиала в Казахстане",
    lede:
      "Пункты забора на карте и контакты.",
    days_short: { mon_sat: "Пн–Сб", mon_fri: "Пн–Пт", sat: "Сб", sun_off: "Вс выходной" },
    cities: [
      {
        slug: "astana",
        city: "Астана",
        addresses: ["ул. Ахмет Байтурсынова, 6", "ул. Генерал С.Рақымов, 22"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "almaty",
        city: "Алматы",
        addresses: ["ул. Сейфуллина, 553", "ул. Прокофьева, 16"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "karaganda",
        city: "Караганда",
        addresses: ["ул. Абая, 3", "мкр. Степной, 18/1"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "temirtau",
        city: "Темиртау",
        addresses: ["ул. Мира, 114"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
    ],
    cta: "Подробнее о филиалах →",
  },
  contact_cta: {
    eyebrow: "Связаться с нами",
    title: "Возникли вопросы?",
    body:
      "Напишите нам в WhatsApp или позвоните — ответим в рабочее время.",
    cta_chat: "Написать в WhatsApp",
    cta_call: "Позвонить",
  },
  footer: {
    tagline: "Медицинская лаборатория. Проведение анализов на аутоиммунные заболевания.",
    col_company: "Лаборатория",
    col_patients: "Пациентам",
    col_contacts: "Контакты",
    links: {
      services: "Цены на услуги",
      locations: "Контакты",
      about: "О нас",
        offer: "Публичная оферта",
      consent: "Информированное согласие",
      complaints: "Обработка жалоб",
      quality: "Руководство по качеству",
      privacy: "Политика конфиденциальности",
      preparation: "Подготовка к анализам",
      results_portal: "Личный кабинет пациента",
      tariff: "Тарификатор ОСМС 2026",
    },
    contacts_label_phone: "Колл-центр",
    contacts_label_whatsapp: "WhatsApp",
    contacts_label_telegram: "Telegram",
    contacts_label_instagram: "Instagram",
    copyright: "© ТОО «IdeaLab». Все права защищены.",
    license_note:
      "Медицинская деятельность осуществляется на основании государственной лицензии Министерства здравоохранения Республики Казахстан.",
  },
  widget: {
    title: "Чат-консультация",
    subtitle: "Обычно отвечает за минуту",
    placeholder: "Спросите про анализ, цену, адрес…",
    welcome_fallback:
      "Здравствуйте! Это чат лаборатории IdeaLab. Подскажу про анализы, цены, адреса. Чем могу помочь?",
    teaser_title: "Чат-консультация",
    teaser_body: "Подскажу про анализы, цены и подготовку. Задайте вопрос.",
    error_network: "Ошибка сети. Проверьте подключение и попробуйте снова.",
    error_generic: "Не удалось получить ответ. Попробуйте ещё раз или позвоните в колл-центр.",
    aria_open: "Написать в WhatsApp",
    aria_close: "Закрыть чат",
    aria_send: "Отправить сообщение",
  },
  cookie: {
    text:
      "Сайт использует cookies для базовой аналитики и работы чат-виджета. Продолжая использовать сайт, вы соглашаетесь с этим.",
    accept: "Понятно",
    decline: "Не сейчас",
  },
  services_page: {
    title: "Цены на услуги",
    lede: "Прейскурант цен на платные услуги 2026 г.",
    filter_label: "Категория",
    filters: [
      { id: "allergy", label: "Аллергология" },
      { id: "autoimmune", label: "Аутоиммунные" },
      { id: "hormones", label: "Гормоны" },
      { id: "oncology", label: "Онкомаркеры" },
      { id: "general", label: "Общеклинические" },
    ],
    table_header: { code: "Код", name: "Название", price: "Цена" },
    price_unit: "₸",
    per_allergen: "за аллерген",
    anesthetic_section_title: "Анестетики в наличии",
    anesthetic_section_lede:
      "Эти анестетики у нас в лаборатории — можете приехать без своего препарата. Также принимаем ваш анестетик любого производителя.",
    anesthetic_list: [
      { name: "Артикаин 4% с эпинефрином 1:100 000", brand: "Inibsa Dental · Испания" },
      { name: "Артикаина гидрохлорид 4% с эпинефрином", brand: "Huons Co. Ltd. · Корея" },
      { name: "Ораблок 1:100 000 / 1:200 000", brand: "Pierrel Pharma · Италия" },
      { name: "Мепивастезин 3%", brand: "3M ESPE · Германия" },
      { name: "Убистезин 4% / Убистезин форте", brand: "3M ESPE · Германия/Италия" },
      { name: "Скандонест 3%", brand: "Septodont · Франция" },
      { name: "Септанест с адреналином 1:100 000", brand: "Septodont · Франция" },
      { name: "Лидокаин спрей 10% / р-р для инъекций", brand: "Dosfarm · Казахстан" },
      { name: "Лидокаин 1% и 2% (ампулы)", brand: "Santo Химфарм / БЗМП · Казахстан/Беларусь" },
    ],
    anesthetic_byo_note:
      "",
  },
  locations_page: {
    title: "Филиалы",
    lede:
      "Пункты забора крови и контакты.",
    detail_address: "Адреса",
    detail_hours: "Часы работы",
    detail_phone: "Колл-центр",
    detail_services: "Что доступно в этом филиале",
    detail_directions: "Как добраться",
    blood_draw_label: "Забор крови",
    blood_draw_clinic: "1 000 ₸ — в клинике",
    blood_draw_home: "10 000 ₸ — выезд на дом (только Астана)",
    services_offered: [
      "",
      "",
      "",
      "",
      "Аутоиммунные панели (нРИФ, иммуноблот, ИФА)",
      "Гормоны, онкомаркеры, общеклинические",
      "Консультация аллерголога-иммунолога (только Астана)",
    ],
  },
  about_page: {
    title: "О лаборатории",
    lede:
      "IdeaLab — медицинская лаборатория аллергологии и иммунологии. Работаем с 2015 года, четыре филиала по Казахстану, собственная методика imasa.",
    story_title: "Зачем мы здесь",
    story_body: [
      "IdeaLab — медицинская лаборатория, специализирующаяся на проведении анализов на аутоиммунные заболевания.",
      "Мы помогаем врачам и пациентам разобраться в сложных аутоиммунных процессах, предоставляя достоверную лабораторную диагностику, которой можно доверять.",
      "Современные методики, контроль качества и клиническая значимость каждого результата.",
    ],
    tech_title: "Наши услуги",
    methods: [
      {
        title: "Базовые исследования нРИФ",
        body:
          "Лабораторный метод для выявления аутоантител (антител против собственных тканей организма) в крови или спинномозговой жидкости.",
      },
      {
        title: "Иммуноблот",
        body:
          "Иммунологическое исследование, позволяющее в одном лабораторном тесте провести анализ на несколько аутоантител.",
      },
      {
        title: "ИФА",
        body:
          "Это ключевой метод диагностики, который определяет антитела к собственным тканям организма путём обнаружения специфических антигенов/антител в крови.",
      },
    ],
    accreditation_title: "Лицензии и аккредитации",
    accreditation_body:
      "Медицинская деятельность лицензирована Министерством здравоохранения РК. Лаборатория работает в системе ФСМС (ОСМС). Документы — по запросу и в подвале сайта.",
    team_title: "Команда",
    team_lede:
      "Аллергологи-иммунологи с опытом 10+ лет, врачи лабораторной диагностики, медицинские сёстры с сертификатами по забору крови.",
    team_placeholder:
      "Фото команды и врачебные карточки готовим — обновим эту секцию в ближайшие дни.",
  },
  common: {
    back_home: "← На главную",
    page_in_progress: "Страница готовится. Обновим в ближайшие дни.",
  },
  testimonials: {
    eyebrow: "Отзывы пациентов",
    title: "Что говорят наши пациенты",
    lede: "Реальные истории людей, которые пришли к нам со сложным запросом и получили ответ. Все видео опубликованы с согласия пациентов.",
    consent_note: "Видео размещены с письменного согласия пациентов в соответствии со ст. 273 Кодекса РК «О здоровье народа».",
    play_label: "Воспроизвести",
  },
  accreditation: {
    title: "Аккредитация лаборатории",
    body: "Лаборатория «IdeaLab» прошла государственную аккредитацию Министерства здравоохранения Республики Казахстан и работает в системе обязательного социального медицинского страхования (ФСМС / ОСМС).",
    download_ru: "Аттестат аккредитации (рус)",
    download_kk: "Аккредитация аттестаты (қаз)",
    download_license: "Лицензия Минздрава РК № 17017427",
    license_meta: "PDF · выдана 10.10.2017 · неотчуждаемая, класс 1",
  },
  patent: {
    eyebrow: "Запатентованный метод",
    title: "",
    lede:
      "",
    points: [
      {
        title: "Патент Республики Казахстан № 2632",
        body:
          "Способ подготовки проб для иммуноферментного анализа на определение специфического иммуноглобулина E в плазме крови. Дата приоритета: 21.01.2022.",
      },
      {
        title: "Евразийский патент № 05122",
        body:
          "Действует на территории Армении, Беларуси, Казахстана, Кыргызстана, России, Таджикистана, Туркменистана. Изобретатель и правообладатель: Кусаинова Д.",
      },
      {
        title: "Эксклюзивная дистрибуция",
        body:
          "",
      },
    ],
    download_label: "Сертификат дистрибьютера",
    download_meta: "PDF · подлинник на территории государств — участников Евразийской патентной конвенции",
  },
};

// Kazakh — draft translation, requires native review (Динара / KK-носитель)
// TODO: review by native Kazakh speaker before main domain switch
const kk: Strings = {
  meta: {
    title:
      "IdeaLab — медициналық зертхана. Аутоиммунды ауруларды диагностикалау",
    description:
      "Медициналық зертхана. Аутоиммунды ауруларды анықтауға арналған зертханалық талдауларды жүргізу. Заманауи әдістемелер, сапаны бақылау және әрбір нәтиженің клиникалық маңыздылығы.",
    og_alt: "IdeaLab — аутоиммунды диагностика медициналық зертханасы",
  },
  nav: {
    home: "Басты",
    services: "Қызметтер бағасы",
    locations: "Байланыс",
    about: "Зертхана туралы",
    contacts: "Байланыс",
    results_cta: "Нәтижелерді алу",
    results_cta_short: "Нәтижелер",
    menu_open: "Мәзірді ашу",
    menu_close: "Мәзірді жабу",
  },
  bregis: {
    label: "Талдау нәтижелері",
    body:
      "Пациенттің жеке кабинетіне кіріңіз — нәтижелерді алудың қорғалған арнасы (ҚР заңнамасы талаптарына сәйкес).",
    cta: "Жеке кабинетке кіру →",
  },
  hero: {
    eyebrow: "Аллергология және иммунология медициналық зертханасы",
    h1_lead: "Күрделі аллергияларға",
    h1_accent: "дәл жауап",
    h1_tail: "Аутоиммунды ауруларды диагностикалау",
    lede: "Заманауи әдістемелер, сапаны бақылау және әрбір нәтиженің клиникалық маңыздылығы. Біз дәрігерлер мен пациенттерге күрделі аутоиммундық үдерістерді түсінуге көмектесеміз.",
    cta_primary: "Талдаулар тізімі және бағалар",
    cta_secondary: "WhatsApp-та жазу",
  },
  usp: {
    title: "Неліктен бізді таңдайды?",
    items: [
      {
        title: "Бақылау",
        body: "Сапаны жыл сайынғы сыртқы бақылау. Нәтижелерді референс-зертханалармен салыстыру.",
      },
      {
        title: "Кәсібилік",
        body: "Біліктілігін тұрақты түрде арттырып отыратын тәжірибелі дәрігерлер мен лаборанттар.",
      },
      {
        title: "Жабдықталуы",
        body: "Сала көшбасшыларының заманауи жабдықтары мен реагенттері.",
      },
    ],
  },
  services_preview: {
    eyebrow: "Не тексереміз",
    title: "Диагностиканың 9 бағыты",
    lede:
      "Стоматологиялық пациенттегі дәрі-дәрмек аллергиясынан Қызыл жегідегі күдікке арналған аутоиммунды панельге дейін — жалпы зертханалар алмайтын күрделі жағдайларды жабамыз.",
    items: [
      {
        title: "Стоматологиялық препараттар",
        body:
          "Анестетиктер (септанест, мепивастезин, убистезин, скандонест, ораблок), пломба материалдары, металдар, имплантаттар.",
      },
      {
        title: "Дәрілер — қатты түрі",
        body:
          "Антибиотиктер, ҚҚСП, вирусқа қарсы, гормондар, саңырауқұлаққа қарсы — таблеткалар, капсулалар, ұнтақтар, шөптер.",
      },
      {
        title: "Дәрілер — сұйық түрі",
        body:
          "Жалпы наркозға арналған препараттар (пропофол, кетамин), вакциналар, инъекциялық ҚҚСП (диклофенак және басқалары).",
      },
      {
        title: "Косметология",
        body: "Майлар, кремдер, тушь, иіссулар — теріге жағатын немесе тыныс алатын барлық нәрсе.",
      },
      {
        title: "Тұрмыстық аллергендер",
        body:
          "Кір жуу ұнтақтары, тазалағыш заттар, сабын, үй шаңы, зең — «түсініксіз» дерматиттердің жиі себебі.",
      },
      {
        title: "Тағамдық аллергендер",
        body:
          "Балалар қоспалары, жемістер, көкөністер, балық, жаңғақтар, сүт өнімдері — стандартты және стандартты емес тағам реакциялары.",
      },
      {
        title: "Өсімдік аллергендері",
        body:
          "Ағаштардың, шөптердің, дәнді дақылдардың тозаңы. Маусымдық риниттер, поллиноздар — нақты көзін анықтаймыз.",
      },
      {
        title: "Жануар аллергендері",
        body:
          "Мысықтың, иттің, жылқының эпителиі, жүн, құс қанаты. Иелер мен медициналық қызметкерлердегі реакциялар.",
      },
      {
        title: "Аутоиммунды аурулар",
        body:
          "Антиядролық антиденелер (АНФ, dsDNA, ANA), васкулиттер (cANCA/pANCA), миозиттер, антифосфолипидті синдром, бауыр мен бүйрек аурулары.",
      },
    ],
    cta: "Толық тізім мен бағаларды көру →",
  },
  tech: {
    eyebrow: "Біздің қызметтеріміз",
    title: "Сенуге болатын зертханалық диагностика",
    lede:
      "Біз дәрігерлер мен пациенттерге күрделі аутоиммундық үдерістерді түсінуге көмектесеміз, сенім артуға болатын дәл әрі сенімді зертханалық диагностика ұсынамыз.",
    imasa: {
      title: "нРИФ бойынша базалық зерттеулер",
      tagline: "Иммунофлюоресценцияның жанама реакциясы",
      body:
        "Қанда немесе жұлын-ми сұйықтығында аутоантиденелерді (ағзаның өз тіндеріне қарсы антиденелерді) анықтауға арналған зертханалық әдіс.",
    },
    alex: {
      title: "Иммуноблот",
      tagline: "Бір тестте бірнеше аутоантидене",
      body:
        "Бір зертханалық тест аясында бірнеше аутоантиденені анықтауға мүмкіндік беретін иммунологиялық зерттеу.",
    },
    aia: {
      title: "ИФА",
      tagline: "Иммуноферменттік талдау",
      body:
        "Бұл — диагностиканың негізгі әдісі, ол қандағы арнайы антигендер мен антиденелерді анықтау арқылы ағзаның өз тіндеріне қарсы антиденелерді айқындайды, аутоиммундық реакцияны растайды және науқастың жағдайын бақылауға көмектеседі.",
    },
  },
  locations_preview: {
    eyebrow: "Қайда тапсыруға болады",
    title: "Қазақстандағы 4 филиал",
    lede:
      "Қан алу пункттері картада және байланыс.",
    days_short: { mon_sat: "Дс–Сб", mon_fri: "Дс–Жм", sat: "Сб", sun_off: "Жс демалыс" },
    cities: [
      {
        slug: "astana",
        city: "Астана",
        addresses: ["Ахмет Байтұрсынов к-сі, 6", "Генерал С.Рақымов к-сі, 22"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "almaty",
        city: "Алматы",
        addresses: ["Сейфуллин даң., 553", "Прокофьев к-сі, 16"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "karaganda",
        city: "Қарағанды",
        addresses: ["Абай к-сі, 3", "Степной ы/а, 18/1"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
      {
        slug: "temirtau",
        city: "Теміртау",
        addresses: ["Мира к-сі, 114"],
        hours: "",
        phone_label: "+7 (700) 428-65-68",
      },
    ],
    cta: "Филиалдар туралы толығырақ →",
  },
  contact_cta: {
    eyebrow: "Бізбен байланысыңыз",
    title: "Сұрақтарыңыз бар ма?",
    body:
      "WhatsApp арқылы хабарласыңыз немесе қоңырау шалыңыз — жұмыс уақытында жауап береміз.",
    cta_chat: "WhatsApp-та жазу",
    cta_call: "Қоңырау шалу",
  },
  footer: {
    tagline: "Медициналық зертхана. Аутоиммунды ауруларды анықтауға арналған зертханалық талдаулар.",
    col_company: "Зертхана",
    col_patients: "Пациенттерге",
    col_contacts: "Байланыс",
    links: {
      services: "Қызметтер бағасы",
      locations: "Байланыс",
      about: "Біз туралы",
        offer: "Оферта шарты",
      consent: "Хабардар келісім",
      complaints: "Шағымдарды өңдеу",
      quality: "Сапа басшылығы",
      privacy: "Құпиялылық саясаты",
      preparation: "Талдауларға дайындық",
      results_portal: "Пациенттің жеке кабинеті",
      tariff: "МӘМС тарификаторы 2026",
    },
    contacts_label_phone: "Колл-орталық",
    contacts_label_whatsapp: "WhatsApp",
    contacts_label_telegram: "Telegram",
    contacts_label_instagram: "Instagram",
    copyright: "© «IdeaLab» ЖШС. Барлық құқықтар қорғалған.",
    license_note:
      "Медициналық қызмет Қазақстан Республикасы Денсаулық сақтау министрлігінің мемлекеттік лицензиясы негізінде жүзеге асырылады.",
  },
  widget: {
    title: "Чат-кеңес",
    subtitle: "Әдетте бір минут ішінде жауап береді",
    placeholder: "Талдау, баға, мекенжай туралы сұраңыз…",
    welcome_fallback:
      "Сәлеметсіз бе! Бұл IdeaLab зертханасының чаты. Талдаулар, бағалар, мекенжайлар туралы айтамын. Қалай көмектесе аламын?",
    teaser_title: "IdeaLab чат-кеңесі",
    teaser_body: "Талдаулар, бағалар және дайындық туралы айтамын. Сұрағыңызды қойыңыз.",
    error_network: "Желі қатесі. Қосылымды тексеріп, қайтадан көріңіз.",
    error_generic: "Жауап алу мүмкін болмады. Қайтадан көріңіз немесе колл-орталыққа қоңырау шалыңыз.",
    aria_open: "Чатты ашу",
    aria_close: "Чатты жабу",
    aria_send: "Хабарлама жіберу",
  },
  cookie: {
    text:
      "Сайт негізгі аналитика мен чат-виджеттің жұмысы үшін cookies пайдаланады. Сайтты пайдалануды жалғастыра отырып, сіз бұған келісесіз.",
    accept: "Түсінікті",
    decline: "Қазір емес",
  },
  services_page: {
    title: "Қызметтер бағасы",
    lede:
      "2026 жылғы ақылы қызметтердің бағасы.",
    filter_label: "Санат",
    filters: [
      { id: "allergy", label: "Аллергология" },
      { id: "autoimmune", label: "Аутоиммунды" },
      { id: "hormones", label: "Гормондар" },
      { id: "oncology", label: "Онкомаркерлер" },
      { id: "general", label: "Жалпы клиникалық" },
    ],
    table_header: { code: "Код", name: "Атауы", price: "Бағасы" },
    price_unit: "₸",
    per_allergen: "аллерген үшін",
    anesthetic_section_title: "Қолда бар анестетиктер",
    anesthetic_section_lede:
      "Бұл анестетиктер зертханамызда — өз препаратыңызсыз келе аласыз. Кез келген өндірушінің анестетигін де қабылдаймыз.",
    anesthetic_list: [
      { name: "Артикаин 4% эпинефринмен 1:100 000", brand: "Inibsa Dental · Испания" },
      { name: "Артикаин гидрохлориді 4% эпинефринмен", brand: "Huons Co. Ltd. · Корея" },
      { name: "Ораблок 1:100 000 / 1:200 000", brand: "Pierrel Pharma · Италия" },
      { name: "Мепивастезин 3%", brand: "3M ESPE · Германия" },
      { name: "Убистезин 4% / Убистезин форте", brand: "3M ESPE · Германия/Италия" },
      { name: "Скандонест 3%", brand: "Septodont · Франция" },
      { name: "Септанест адреналинмен 1:100 000", brand: "Septodont · Франция" },
      { name: "Лидокаин спрей 10% / инъекциялық ерітінді", brand: "Dosfarm · Қазақстан" },
      { name: "Лидокаин 1% және 2% (ампулалар)", brand: "Santo Химфарм / БЗМП · Қазақстан/Беларусь" },
    ],
    anesthetic_byo_note:
      "",
  },
  locations_page: {
    title: "Филиалдар",
    lede:
      "Қан алу пункттері мен байланыс.",
    detail_address: "Мекенжайлар",
    detail_hours: "Жұмыс уақыты",
    detail_phone: "Колл-орталық",
    detail_services: "Бұл филиалда не қол жетімді",
    detail_directions: "Жолды қалай табу керек",
    blood_draw_label: "Қан алу",
    blood_draw_clinic: "1 000 ₸ — клиникада",
    blood_draw_home: "10 000 ₸ — үйге шығу (тек Астана)",
    services_offered: [
      "",
      "",
      "",
      "",
      "Аутоиммунды панельдер (нРИФ, иммуноблот, ИФА)",
      "Гормондар, онкомаркерлер, жалпы клиникалық",
      "Аллерголог-иммунологтың кеңесі (тек Астана)",
    ],
  },
  about_page: {
    title: "Зертхана туралы",
    lede:
      "IdeaLab — аутоиммундық ауруларды диагностикалауға маманданған медициналық зертхана.",
    story_title: "Біздің миссиямыз",
    story_body: [
      "IdeaLab — аутоиммундық ауруларға арналған талдауларды жүргізуге маманданған медициналық зертхана.",
      "Біз дәрігерлер мен пациенттерге күрделі аутоиммундық үдерістерді түсінуге көмектесеміз, сенім артуға болатын дәл әрі сенімді зертханалық диагностика ұсынамыз.",
      "Заманауи әдістемелер, сапаны бақылау және әрбір нәтиженің клиникалық маңыздылығы.",
    ],
    tech_title: "Біздің қызметтеріміз",
    methods: [
      {
        title: "нРИФ бойынша базалық зерттеулер",
        body:
          "Қанда немесе жұлын-ми сұйықтығында аутоантиденелерді анықтауға арналған зертханалық әдіс.",
      },
      {
        title: "Иммуноблот",
        body:
          "Бір зертханалық тест аясында бірнеше аутоантиденені анықтауға мүмкіндік беретін иммунологиялық зерттеу.",
      },
      {
        title: "ИФА",
        body:
          "Қандағы арнайы антигендер мен антиденелерді анықтау арқылы ағзаның өз тіндеріне қарсы антиденелерді айқындайтын негізгі диагностикалық әдіс.",
      },
    ],
    accreditation_title: "Лицензиялар мен аккредитациялар",
    accreditation_body:
      "Медициналық қызмет ҚР Денсаулық сақтау министрлігі лицензиялаған. Зертхана ӘМСҚ (МӘМС) жүйесінде жұмыс істейді. Құжаттар — сұраныс бойынша және сайт төменгі бөлігінде.",
    team_title: "Команда",
    team_lede:
      "10+ жыл тәжірибесі бар аллерголог-иммунологтар, зертханалық диагностика дәрігерлері, қан алу сертификаттары бар медбикелер.",
    team_placeholder:
      "Команда фотолары мен дәрігерлік карточкаларды дайындап жатырмыз — жақын күндерде осы бөлімді жаңартамыз.",
  },
  common: {
    back_home: "← Басты бетке",
    page_in_progress: "Бет дайындалуда. Жақын күндерде жаңартамыз.",
  },
  testimonials: {
    eyebrow: "Пациент пікірлері",
    title: "Біздің пациенттер не дейді",
    lede: "Бізге күрделі сұранысымен келіп, жауап тапқан адамдардың нақты әңгімелері. Барлық бейне пациенттердің келісімімен жарияланған.",
    consent_note: "Бейнелер ҚР «Халық денсаулығы туралы» Кодексінің 273-бабына сәйкес пациенттердің жазбаша келісімімен орналастырылған.",
    play_label: "Ойнату",
  },
  accreditation: {
    title: "Зертхана аккредитациясы",
    body: "«IdeaLab» зертханасы Қазақстан Республикасы Денсаулық сақтау министрлігінің мемлекеттік аккредитациясынан өтіп, міндетті әлеуметтік медициналық сақтандыру (ӘМСҚ / МӘМС) жүйесінде жұмыс істейді.",
    download_ru: "Аккредитация аттестаты (орыс)",
    download_kk: "Аккредитация аттестаты (қаз)",
    download_license: "ҚР Денсаулық сақтау министрлігінің лицензиясы № 17017427",
    license_meta: "PDF · 10.10.2017 берілген · ажыратылмайтын, 1-сынып",
  },
  patent: {
    eyebrow: "Патенттелген әдіс",
    title: "",
    lede:
      "",
    points: [
      {
        title: "Қазақстан Республикасының № 2632 патенті",
        body:
          "Қан плазмасында спецификалық E иммуноглобулинін анықтауға арналған иммуноферменттік талдау үшін үлгілерді дайындау әдісі. Басымдық күні: 21.01.2022.",
      },
      {
        title: "Еуразиялық патент № 05122",
        body:
          "Армения, Беларусь, Қазақстан, Қырғызстан, Ресей, Тәжікстан, Түрікменстан аумағында әрекет етеді. Өнертапқыш және құқық иеленуші: Құсайынова Д.",
      },
      {
        title: "Эксклюзивті дистрибьюция",
        body:
          "",
      },
    ],
    download_label: "Дистрибьютор сертификаты",
    download_meta: "PDF · Еуразиялық патенттік конвенцияға қатысушы мемлекеттер аумағында түпнұсқа",
  },
};
export const ALL_STRINGS: Record<Locale, Strings> = { ru, kk };

export function t(locale: Locale): Strings {
  return ALL_STRINGS[locale] ?? ALL_STRINGS.ru;
}
