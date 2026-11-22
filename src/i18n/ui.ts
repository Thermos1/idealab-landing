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

// The shared call centre: voice assistant line and its WhatsApp, answered 24/7.
export const VOICE_ASSISTANT_PHONE = "+7 700 428 65 68";
export const VOICE_ASSISTANT_WHATSAPP = "+7 775 989 32 87";
export const RESULTS_URL = "https://allergoscreen.bregis.kz/sign-in?redirect=/patient";
export const telHref = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;
export const waHref = (n: string) => `https://wa.me/${n.replace(/\D/g, "")}`;

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
    license: string;
    offer: string;
    preparation: string;
  };

  // ---- Bregis banner (legal-mandate sticky CTA) ----

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

  // ---- Cookie banner ----

  // ---- /services page ----
  services_page: {
    title: string;
    lede: string;
    filter_label: string;
    filters: { id: string; label: string }[];
    search_placeholder: string;
    search_empty: string;
    footnote: string;
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
  };

  // ---- /about page ----

  // ---- Home: directions, steps, FAQ ----
  home: {
    hero_img_alt: string;
    directions_eyebrow: string;
    directions_title: string;
    directions_lede: string;
    directions: { title: string; body: string; q: string }[];
    directions_more: string;
    directions_cta: string;
    steps_eyebrow: string;
    steps_title: string;
    steps: { title: string; body: string }[];
    results_cta: string;
    faq_title: string;
    faq: { q: string; a: string }[];
  };

  // ---- Common ----
  common: {
    back_home: string;
    page_in_progress: string;
  };

  // ---- Video testimonials ----

  // ---- Accreditation block ----

  // ---- Patent & exclusive-distributor (flagship trust signal) ----
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
    license: "Лицензия",
    offer: "Оферта",
    preparation: "Подготовка",
  },
  hero: {
    eyebrow: "IdeaLab",
    h1_lead: "Анализы на",
    h1_accent: "аутоиммунные заболевания",
    h1_tail: "",
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
    title: "Пункты забора в 5 городах",
    lede:
      "Астана, Алматы, Караганда, Темиртау и Шымкент. Адреса, часы работы и маршрут в 2ГИС.",
    days_short: { mon_sat: "Пн–Сб", mon_fri: "Пн–Пт", sat: "Сб", sun_off: "Вс выходной" },
    cities: [
      { slug: "astana", city: "Астана", addresses: ["ул. Ахмета Байтурсынова, 6", "ул. Сабыра Ракымова, 22"], hours: "Пн–Сб 08:00–14:00" },
      { slug: "almaty", city: "Алматы", addresses: ["ул. Кабанбай Батыра, 111 (здание Neuromed)", "просп. Райымбека, 540/7 (Ташкентский тракт), 1 этаж, кабинет 1 (LB Clinic)"], hours: "Пн–Пт 08:00–13:00 · Сб 09:00–13:00" },
      { slug: "karaganda", city: "Караганда", addresses: ["мкр. Степной-2, 18/1"], hours: "Пн–Пт 08:00–14:00 · Сб 08:00–12:00" },
      { slug: "temirtau", city: "Темиртау", addresses: ["пр. Мира, 114"], hours: "Пн–Сб 08:00–12:00" },
      { slug: "shymkent", city: "Шымкент", addresses: ["ул. Акпан батыра, 42, 1 этаж", "просп. Кабанбай батыра, 26 (Park Health)"], hours: "Пн–Сб 08:00–13:00" },
    ],
    cta: "Подробнее о филиалах →",
  },
  contact_cta: {
    eyebrow: "Связаться с нами",
    title: "Возникли вопросы?",
    body:
      "Позвоните или напишите в WhatsApp — голосовой помощник отвечает круглосуточно: цена, подготовка, ближайший пункт забора.",
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
    contacts_label_phone: "Голосовой помощник",
    contacts_label_whatsapp: "WhatsApp",
    contacts_label_telegram: "Telegram",
    contacts_label_instagram: "Instagram",
    copyright: "© ТОО «IdeaLab». Все права защищены.",
    license_note:
      "Медицинская деятельность осуществляется на основании государственной лицензии Министерства здравоохранения Республики Казахстан.",
  },
  services_page: {
    title: "Цены на услуги",
    lede: "Прейскурант цен на платные услуги 2026 г. Найдите анализ по названию или по коду из направления врача.",
    filter_label: "Раздел",
    filters: [
      { id: "services", label: "Забор крови" },
      { id: "autoimmune", label: "Аутоиммунные" },
      { id: "allergy", label: "Аллергология" },
      { id: "blood", label: "Кровь" },
      { id: "biochem", label: "Биохимия" },
      { id: "hormones", label: "Гормоны" },
      { id: "oncology", label: "Онкомаркеры" },
      { id: "infections", label: "Инфекции" },
      { id: "other", label: "Прочее" },
    ],
    search_placeholder: "Поиск: название или код анализа",
    search_empty: "Такого анализа в прайсе нет. Позвоните или напишите в WhatsApp +7 775 989 32 87 — подскажем.",
    footnote: "Срок — в днях, по прейскуранту лаборатории. Забор крови оплачивается отдельно: 1 000 ₸ в пункте забора, выезд на дом — 10 000 ₸ (только Астана).",
    table_header: { code: "Код", name: "Название", price: "Цена" },
    price_unit: "₸",
    per_allergen: "за аллерген",
    anesthetic_section_title: "Анестетики в наличии",
    anesthetic_section_lede:
      "Эти анестетики у нас в лаборатории — можете приехать без своего препарата. Также принимаем ваш анестетик любого производителя.",
    anesthetic_list: [
      { name: "Артикаин 4% с эпинефрином 1:100 000", brand: "Inibsa Dental · Испания" },
      { name: "Артикаина гидрохлорид 4% с эпинефрином", brand: "Huons Co. Ltd. · Корея" },
      { name: "Ораблок 1:100 000 / 1:200 000", brand: "Pierrel Pharma · Италия" },
      { name: "Мепивастезин 3%", brand: "3M ESPE · Германия" },
      { name: "Убистезин 4% / Убистезин форте", brand: "3M ESPE · Германия/Италия" },
      { name: "Скандонест 3%", brand: "Septodont · Франция" },
      { name: "Септанест с адреналином 1:100 000", brand: "Septodont · Франция" },
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
    detail_phone: "WhatsApp помощника · 24/7",
    detail_services: "Что доступно в этом филиале",
    detail_directions: "Как добраться",
    blood_draw_label: "Забор крови",
    blood_draw_clinic: "1 000 ₸ — в клинике",
    blood_draw_home: "10 000 ₸ — выезд на дом (только Астана)",
  },
  home: {
    hero_img_alt: "Лаборанты IdeaLab за анализатором",
    directions_eyebrow: "Что мы исследуем",
    directions_title: "Аутоиммунная диагностика — от скрининга до подтверждения",
    directions_lede: "Базовые исследования нРИФ, подтверждающий иммуноблот и количественный ИФА по основным группам аутоиммунных заболеваний.",
    directions: [
      { title: "Системные заболевания соединительной ткани", body: "Волчанка, синдром Шегрена, склеродермия: АНФ на клетках HEp-2, антитела к двуспиральной ДНК, иммуноблот ANA на 17 и 22 антитела.", q: "антинуклеар" },
      { title: "Васкулиты", body: "cANCA/pANCA, антитела к протеиназе-3 (PR3), миелопероксидазе (MPO) и базальной мембране клубочков почек (GBM).", q: "anca" },
      { title: "Аутоиммунные заболевания печени", body: "Скрининг APCA, AMA, ASMA, anti-LKM; иммуноблот на 9 антител; митохондриальные антитела AMA-M2.", q: "печени" },
      { title: "Почки", body: "Мембранозная нефропатия: антитела к рецептору фосфолипазы A2 (PLA2R) — титр и количественный тест.", q: "pla2r" },
      { title: "Антифосфолипидный синдром", body: "Антитела к кардиолипину и бета-2-гликопротеину-1 (IgM, IgG, IgA), иммуноблот на 10 антифосфолипидных антител.", q: "антифосфолип" },
      { title: "Сахарный диабет I типа", body: "Антитела к островковым клеткам (ICA), иммуноблот GAD, IA-2, IA, IC, ZnT8.", q: "диабет" },
      { title: "Целиакия и болезни кишечника", body: "Антитела к глиадину и тканевой трансглутаминазе, ASCA, фекальный кальпротектин.", q: "глиадин" },
      { title: "Неврология", body: "Антитела к аквапорину-4 (нейрооптикомиелит) и к ацетилхолиновому рецептору.", q: "аквапорин" },
      { title: "Ревматология", body: "АЦЦП, anti-MCV, ревматоидный фактор, типирование HLA-B27, HLA-B51, HLA-Cw6.", q: "ревмат" },
    ],
    directions_more: "Также в прайсе: аллергология, общий анализ крови, биохимия, гормоны, онкомаркеры и инфекции — всего {n} исследований.",
    directions_cta: "Весь прайс с поиском",
    steps_eyebrow: "Как сдать анализ",
    steps_title: "Четыре шага до результата",
    steps: [
      { title: "Выберите анализ", body: "По направлению врача или по прайсу — поиск находит анализ по названию и коду." },
      { title: "Подготовьтесь", body: "Кровь сдаётся натощак: 6–8 часов без еды, воду пить можно. Если принимаете гормоны или иммуносупрессоры — скажите регистратору." },
      { title: "Приходите в пункт забора", body: "Пять городов, утренние часы. Забор крови — 1 000 ₸; в Астане можно вызвать на дом." },
      { title: "Получите результат онлайн", body: "В личном кабинете пациента. Срок по каждому анализу указан в прайсе." },
    ],
    results_cta: "Личный кабинет пациента",
    faq_title: "Частые вопросы",
    faq: [
      { q: "Сколько стоит забор крови?", a: "1 000 ₸ в пункте забора. Выезд на дом — 10 000 ₸, только в Астане." },
      { q: "Как подготовиться к анализу?", a: "Кровь сдаётся натощак: между последним приёмом пищи и забором — не менее 6–8 часов, воду пить можно. Подробнее — на странице «Подготовка»." },
      { q: "Я принимаю преднизолон или биологическую терапию. Можно сдавать?", a: "Скажите об этом регистратору до забора крови: гормоны, иммуносупрессоры, плазмаферез и иммуносорбция влияют на уровень антител. Отмену препаратов согласуйте с лечащим врачом." },
      { q: "Когда будет готов результат?", a: "Срок указан в прайсе у каждого анализа. Большинство аутоиммунных исследований готовы за 1–3 дня." },
      { q: "Где посмотреть результат?", a: "В личном кабинете пациента — это защищённый канал получения результатов." },
      { q: "Куда обращаться с вопросами?", a: "Голосовой помощник +7 700 428 65 68 и WhatsApp +7 775 989 32 87 отвечают круглосуточно." },
    ],
  },
  common: {
    back_home: "← На главную",
    page_in_progress: "Страница готовится. Обновим в ближайшие дни.",
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
    license: "Лицензия",
    offer: "Жария оферта",
    preparation: "Анализдерге дайындық",
  },
  hero: {
    eyebrow: "IdeaLab",
    h1_lead: "",
    h1_accent: "Аутоиммунды ауруларға",
    h1_tail: "арналған талдаулар",
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
    title: "5 қаладағы қан алу пункттері",
    lede:
      "Астана, Алматы, Қарағанды, Теміртау және Шымкент. Мекенжайлар, жұмыс уақыты және 2ГИС-тегі бағыт.",
    days_short: { mon_sat: "Дс–Сб", mon_fri: "Дс–Жм", sat: "Сб", sun_off: "Жс демалыс" },
    cities: [
      { slug: "astana", city: "Астана", addresses: ["Ахмет Байтұрсынов к-сі, 6", "Сабыр Рақымов к-сі, 22"], hours: "Дс–Сб 08:00–14:00" },
      { slug: "almaty", city: "Алматы", addresses: ["Қабанбай Батыр к-сі, 111 (Neuromed ғимараты)", "Райымбек даң., 540/7 (Ташкент тас жолы), 1-қабат, 1-кабинет (LB Clinic)"], hours: "Дс–Жм 08:00–13:00 · Сб 09:00–13:00" },
      { slug: "karaganda", city: "Қарағанды", addresses: ["Степной-2 ы/а, 18/1"], hours: "Дс–Жм 08:00–14:00 · Сб 08:00–12:00" },
      { slug: "temirtau", city: "Теміртау", addresses: ["Бейбітшілік даң., 114"], hours: "Дс–Сб 08:00–12:00" },
      { slug: "shymkent", city: "Шымкент", addresses: ["Ақпан батыр к-сі, 42, 1-қабат", "Қабанбай батыр даң., 26 (Park Health)"], hours: "Дс–Сб 08:00–13:00" },
    ],
    cta: "Филиалдар туралы толығырақ →",
  },
  contact_cta: {
    eyebrow: "Бізбен байланысыңыз",
    title: "Сұрақтарыңыз бар ма?",
    body:
      "Қоңырау шалыңыз немесе WhatsApp-қа жазыңыз — дауыстық көмекші тәулік бойы жауап береді: баға, дайындық, жақын қан алу пункті.",
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
    contacts_label_phone: "Дауыстық көмекші",
    contacts_label_whatsapp: "WhatsApp",
    contacts_label_telegram: "Telegram",
    contacts_label_instagram: "Instagram",
    copyright: "© «IdeaLab» ЖШС. Барлық құқықтар қорғалған.",
    license_note:
      "Медициналық қызмет Қазақстан Республикасы Денсаулық сақтау министрлігінің мемлекеттік лицензиясы негізінде жүзеге асырылады.",
  },
  services_page: {
    title: "Қызметтер бағасы",
    lede:
      "2026 жылғы ақылы қызметтердің бағасы. Талдауды атауы немесе дәрігер жолдамасындағы коды бойынша табыңыз.",
    filter_label: "Бөлім",
    filters: [
      { id: "services", label: "Қан алу" },
      { id: "autoimmune", label: "Аутоиммунды" },
      { id: "allergy", label: "Аллергология" },
      { id: "blood", label: "Қан" },
      { id: "biochem", label: "Биохимия" },
      { id: "hormones", label: "Гормондар" },
      { id: "oncology", label: "Онкомаркерлер" },
      { id: "infections", label: "Инфекциялар" },
      { id: "other", label: "Басқа" },
    ],
    search_placeholder: "Іздеу: талдау атауы немесе коды",
    search_empty: "Мұндай талдау прайста жоқ. Қоңырау шалыңыз немесе WhatsApp-қа жазыңыз +7 775 989 32 87 — көмектесеміз.",
    footnote: "Мерзімі — зертхана прейскуранты бойынша, күнмен. Қан алу бөлек төленеді: пунктте 1 000 ₸, үйге шығу — 10 000 ₸ (тек Астана).",
    table_header: { code: "Код", name: "Атауы", price: "Бағасы" },
    price_unit: "₸",
    per_allergen: "аллерген үшін",
    anesthetic_section_title: "Қолда бар анестетиктер",
    anesthetic_section_lede:
      "Бұл анестетиктер зертханамызда — өз препаратыңызсыз келе аласыз. Кез келген өндірушінің анестетигін де қабылдаймыз.",
    anesthetic_list: [
      { name: "Артикаин 4% эпинефринмен 1:100 000", brand: "Inibsa Dental · Испания" },
      { name: "Артикаин гидрохлориді 4% эпинефринмен", brand: "Huons Co. Ltd. · Корея" },
      { name: "Ораблок 1:100 000 / 1:200 000", brand: "Pierrel Pharma · Италия" },
      { name: "Мепивастезин 3%", brand: "3M ESPE · Германия" },
      { name: "Убистезин 4% / Убистезин форте", brand: "3M ESPE · Германия/Италия" },
      { name: "Скандонест 3%", brand: "Septodont · Франция" },
      { name: "Септанест адреналинмен 1:100 000", brand: "Septodont · Франция" },
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
    detail_phone: "Көмекшінің WhatsApp-ы · 24/7",
    detail_services: "Бұл филиалда не қол жетімді",
    detail_directions: "Жолды қалай табу керек",
    blood_draw_label: "Қан алу",
    blood_draw_clinic: "1 000 ₸ — клиникада",
    blood_draw_home: "10 000 ₸ — үйге шығу (тек Астана)",
  },
  home: {
    hero_img_alt: "IdeaLab лаборанттары анализатор жанында",
    directions_eyebrow: "Не зерттейміз",
    directions_title: "Аутоиммунды диагностика — скринингтен растауға дейін",
    directions_lede: "Аутоиммунды аурулардың негізгі топтары бойынша нРИФ негізгі зерттеулері, растайтын иммуноблот және сандық ИФА.",
    directions: [
      { title: "Дәнекер тіннің жүйелі аурулары", body: "Қызыл жегі, Шегрен синдромы, склеродермия: HEp-2 жасушаларындағы АНФ, қос ширатылған ДНҚ-ға антиденелер, 17 және 22 антиденеге ANA иммуноблоты.", q: "антинуклеар" },
      { title: "Васкулиттер", body: "cANCA/pANCA, протеиназа-3 (PR3), миелопероксидаза (MPO) және бүйрек шумақтарының базальды мембранасына (GBM) антиденелер.", q: "anca" },
      { title: "Бауырдың аутоиммунды аурулары", body: "APCA, AMA, ASMA, anti-LKM скринингі; 9 антиденеге иммуноблот; AMA-M2 митохондриялық антиденелері.", q: "печени" },
      { title: "Бүйрек", body: "Мембраналық нефропатия: фосфолипаза A2 рецепторына антиденелер (PLA2R) — титр және сандық тест.", q: "pla2r" },
      { title: "Антифосфолипидті синдром", body: "Кардиолипинге және бета-2-гликопротеин-1-ге антиденелер (IgM, IgG, IgA), 10 антифосфолипидті антиденеге иммуноблот.", q: "антифосфолип" },
      { title: "I типті қант диабеті", body: "Аралшық жасушаларына антиденелер (ICA), GAD, IA-2, IA, IC, ZnT8 иммуноблоты.", q: "диабет" },
      { title: "Целиакия және ішек аурулары", body: "Глиадинге және тіндік трансглутаминазаға антиденелер, ASCA, фекальді кальпротектин.", q: "глиадин" },
      { title: "Неврология", body: "Аквапорин-4-ке (нейрооптикомиелит) және ацетилхолин рецепторына антиденелер.", q: "аквапорин" },
      { title: "Ревматология", body: "АЦЦП, anti-MCV, ревматоидты фактор, HLA-B27, HLA-B51, HLA-Cw6 типтеу.", q: "ревмат" },
    ],
    directions_more: "Прайста сондай-ақ: аллергология, жалпы қан талдауы, биохимия, гормондар, онкомаркерлер және инфекциялар — барлығы {n} зерттеу.",
    directions_cta: "Іздеуі бар толық прайс",
    steps_eyebrow: "Талдауды қалай тапсыру керек",
    steps_title: "Нәтижеге дейін төрт қадам",
    steps: [
      { title: "Талдауды таңдаңыз", body: "Дәрігер жолдамасы немесе прайс бойынша — іздеу талдауды атауы мен коды бойынша табады." },
      { title: "Дайындалыңыз", body: "Қан аш қарынға тапсырылады: 6–8 сағат тамақ ішпеу, су ішуге болады. Гормондар немесе иммуносупрессорлар қабылдасаңыз — тіркеушіге айтыңыз." },
      { title: "Қан алу пунктіне келіңіз", body: "Бес қала, таңғы уақыт. Қан алу — 1 000 ₸; Астанада үйге шақыруға болады." },
      { title: "Нәтижені онлайн алыңыз", body: "Пациенттің жеке кабинетінде. Әр талдаудың мерзімі прайста көрсетілген." },
    ],
    results_cta: "Пациенттің жеке кабинеті",
    faq_title: "Жиі қойылатын сұрақтар",
    faq: [
      { q: "Қан алу қанша тұрады?", a: "Пунктте 1 000 ₸. Үйге шығу — 10 000 ₸, тек Астанада." },
      { q: "Талдауға қалай дайындалу керек?", a: "Қан аш қарынға тапсырылады: соңғы тамақтану мен қан алу арасында кемінде 6–8 сағат өтуі тиіс, су ішуге болады. Толығырақ — «Дайындық» бетінде." },
      { q: "Преднизолон немесе биологиялық терапия қабылдаймын. Тапсыруға бола ма?", a: "Қан алу алдында бұл туралы тіркеушіге айтыңыз: гормондар, иммуносупрессорлар, плазмаферез және иммуносорбция антиденелер деңгейіне әсер етеді. Препараттарды тоқтатуды емдеуші дәрігермен келісіңіз." },
      { q: "Нәтиже қашан дайын болады?", a: "Мерзімі прайста әр талдаудың жанында көрсетілген. Аутоиммунды зерттеулердің көбі 1–3 күнде дайын." },
      { q: "Нәтижені қайдан көруге болады?", a: "Пациенттің жеке кабинетінде — бұл нәтижелерді алудың қорғалған арнасы." },
      { q: "Сұрақтармен қайда хабарласуға болады?", a: "Дауыстық көмекші +7 700 428 65 68 және WhatsApp +7 775 989 32 87 тәулік бойы жауап береді." },
    ],
  },
  common: {
    back_home: "← Басты бетке",
    page_in_progress: "Бет дайындалуда. Жақын күндерде жаңартамыз.",
  },
};
export const ALL_STRINGS: Record<Locale, Strings> = { ru, kk };

export function t(locale: Locale): Strings {
  return ALL_STRINGS[locale] ?? ALL_STRINGS.ru;
}
