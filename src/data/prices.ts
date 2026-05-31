// Price catalog — verbatim from idealab.kz "Цены на услуги" (2026).
// Source: idealab-research/text/ru-services.txt + kk-services.txt
// IdeaLab is an autoimmune diagnostics lab.

import type { Locale } from "../i18n/ui";

interface PriceRow {
  code: string;
  name: { ru: string; kk: string; en: string };
  price: number;
  unit?: string;
  city_variance?: { karaganda: number; temirtau: number };
  days?: string;
  notes?: { ru: string; kk: string; en: string };
}

interface Section {
  id: string;
  category: "blood-draw" | "allergy" | "autoimmune-basic" | "autoimmune-blot" | "autoimmune-ifa" | "autoimmune-packages" | "cryoglobulins";
  title: { ru: string; kk: string; en: string };
  subtitle?: { ru: string; kk: string; en: string };
  rows: PriceRow[];
}

export const SECTIONS: Section[] = [
  // === Услуги забора крови ===
  {
    id: "blood-draw",
    category: "blood-draw",
    title: {
      ru: "Услуги забора крови",
      kk: "Қан алу қызметтері",
      en: "Blood draw services",
    },
    rows: [
      {
        code: "—",
        name: {
          ru: "Забор крови из вены/пальца",
          kk: "Венадан/саусақтан қан алу",
          en: "Blood draw (vein / finger)",
        },
        price: 1000,
        days: "—",
      },
      {
        code: "—",
        name: {
          ru: "Забор крови из вены/пальца, выезд на дом",
          kk: "Венадан/саусақтан қан алу, үйге шығу",
          en: "Blood draw, home visit",
        },
        price: 10000,
        days: "—",
        notes: { ru: "только Астана", kk: "тек Астана", en: "Astana only" },
      },
    ],
  },
  // === Аллергология (specific IgE, общий IgE, ALEX3, ППН) ===
  {
    id: "allergy",
    category: "allergy",
    title: {
      ru: "Аллергология",
      kk: "Аллергология",
      en: "Allergy",
    },
    rows: [
      {
        code: "B06.576.005",
        name: {
          ru: "Определение специфических IgE к прочим аллергенам ИФА-методом*",
          kk: "Басқа аллергендерге спецификалық IgE анықтау ИФА әдісімен*",
          en: "Specific IgE to other allergens by ELISA*",
        },
        price: 6500,
        days: "1–3",
        notes: { ru: "* Алматы, Астана", kk: "* Алматы, Астана", en: "* Almaty, Astana" },
      },
      {
        code: "B06.576.006",
        name: {
          ru: "Определение специфических IgE к прочим аллергенам ИФА-методом**",
          kk: "Басқа аллергендерге спецификалық IgE анықтау ИФА әдісімен**",
          en: "Specific IgE to other allergens by ELISA**",
        },
        price: 6000,
        days: "1–3",
        notes: { ru: "** Караганда, Темиртау", kk: "** Қарағанды, Теміртау", en: "** Karaganda, Temirtau" },
      },
      {
        code: "B06.406.005",
        name: {
          ru: "Определение IgE (общий) в сыворотке крови ИФА-методом",
          kk: "Қан сарысуында IgE (жалпы) анықтау ИФА әдісімен",
          en: "Total IgE in serum by ELISA",
        },
        price: 3000,
        days: "4–5",
      },
      {
        code: "1.1.1",
        name: {
          ru: "Комплексный молекулярный анализ ALEX3 (300 аллергенов, IgE)",
          kk: "ALEX3 кешенді молекулалық талдауы (300 аллерген, IgE)",
          en: "ALEX3 molecular panel (300 allergens, IgE)",
        },
        price: 90000,
        days: "1–3",
      },
      {
        code: "1.1.3",
        name: {
          ru: "ППН",
          kk: "ППН",
          en: "PPN",
        },
        price: 1200,
        days: "1",
      },
    ],
  },
  // === Аутоиммунные — базовые (нРИФ) ===
  {
    id: "autoimmune-basic",
    category: "autoimmune-basic",
    title: {
      ru: "Аутоиммунные заболевания — базовые исследования, нРИФ",
      kk: "Аутоиммунды аурулар — негізгі зерттеулер, нРИФ",
      en: "Autoimmune — basic studies (IIF)",
    },
    rows: [
      { code: "1.1", days: "1–3", name: { ru: "Антинуклеарный фактор на клетках НЕр2 (АНФ), скрининг, титр, тип свечения", kk: "НЕр2 жасушаларында антинуклеарлық фактор (АНФ), скрининг, титр, түрі", en: "ANF on HEp2 cells, screening, titer" }, price: 12000 },
      { code: "1.2", days: "1–3", name: { ru: "Антитела к двуспиральной ДНК (дсДНК) на Crithidia luciliae, IgG, подтвержд. тест, титр", kk: "Crithidia luciliae үстінде қос ширатылған ДНҚ-ға антиденелер (дсДНҚ), IgG, растайтын тест, титр", en: "Anti-dsDNA antibodies on Crithidia luciliae, IgG, confirmatory" }, price: 9000 },
      { code: "1.3", days: "1–3", name: { ru: "Антитела к цитоплазматическим антигенам нейтрофилов (cANCA/pANCA), IgG, тип свечения, с АТ к протеиназе-3 (PR3), миелопероксидазе (МРО), базальной мембране клубочков почек (GBM), титр", kk: "Нейтрофилдер цитоплазмасы антигендеріне антиденелер (cANCA/pANCA), IgG, түрі, PR3, МРО, GBM-ге АТ-мен, титр", en: "ANCA + anti-PR3/MPO/GBM, IgG, titer" }, price: 35000 },
      { code: "1.4", days: "1–3", name: { ru: "Скрининговый тест на аутоиммунные заболевания печени и ЖКТ (APCA, AMA, ASMA, anti-LKM), титр", kk: "Бауыр мен АІЖ аутоиммунды ауруларына скрининг (APCA, AMA, ASMA, anti-LKM), титр", en: "Autoimmune hepatic & GI screening (APCA, AMA, ASMA, anti-LKM), titer" }, price: 17000 },
      { code: "1.5", days: "1–3", name: { ru: "Антитела к рецептору фосфолипазы А2, IgG (PLA2R) — диагностика мембранозной нефропатии, титр", kk: "Фосфолипаза А2 рецепторына антиденелер, IgG (PLA2R) — мембраналық нефропатияны диагностикалау, титр", en: "Anti-PLA2R IgG — membranous nephropathy, titer" }, price: 25000 },
      { code: "1.6", days: "1–3", name: { ru: "Антитела к цитоплазматическим антигенам нейтрофилов (cANCA/pANCA), IgG, тип свечения, титр", kk: "Нейтрофилдер цитоплазмасы антигендеріне антиденелер (cANCA/pANCA), IgG, түрі, титр", en: "ANCA (cANCA/pANCA), IgG, titer" }, price: 21000 },
      { code: "1.7", days: "1–3", name: { ru: "Антитела IgG к островковым клеткам поджелудочной железы (ICA), титр", kk: "Ұйқы безінің аралшық жасушаларына IgG антиденелері (ICA), титр", en: "Anti-ICA IgG, titer" }, price: 18000 },
      { code: "1.8", days: "1–3", name: { ru: "Антитела к аквапорину-4 (AQP4), титр — диагностика нейрооптикомиелита", kk: "Аквапорин-4 (AQP4) антиденелер, титр — нейрооптикомиелит диагностикасы", en: "Anti-AQP4, titer — neuromyelitis optica" }, price: 28000 },
    ],
  },
  // === Подтверждающие — иммуноблот ===
  {
    id: "autoimmune-blot",
    category: "autoimmune-blot",
    title: {
      ru: "Подтверждающие исследования, иммуноблот",
      kk: "Растайтын зерттеулер, иммуноблот",
      en: "Confirmatory — immunoblot",
    },
    rows: [
      { code: "2.1", days: "1–3", name: { ru: "Антинуклеарные антитела, IgG, 22 АТ, кач-но", kk: "Антинуклеарлық антиденелер, IgG, 22 АТ, сапалық", en: "ANA IgG, 22 antigens, qualitative" }, price: 34000 },
      { code: "2.2", days: "1–3", name: { ru: "Иммуноблот при аутоиммунных заболеваниях печени IgG, 9 АТ (AMA-M2, M2-3E (BPO), Sp100, PML, gp210, LKM-1, LC-1, SLA/LP, Ro-52), кач-но", kk: "Бауырдың аутоиммунды ауруларында иммуноблот IgG, 9 АТ, сапалық", en: "Autoimmune hepatic IgG immunoblot, 9 antigens" }, price: 34000 },
      { code: "2.3", days: "1–3", name: { ru: "Иммуноблот при антифосфолипидном синдроме (IgG/IgM к 10 АТ), кач-но", kk: "Антифосфолипидті синдром иммуноблоты (IgG/IgM 10 АТ), сапалық", en: "APS immunoblot, IgG/IgM to 10 antigens" }, price: 34000 },
      { code: "2.4", days: "1–3", name: { ru: "Иммуноблот при аутоиммунном сахарном диабете I типа, 5 АТ (GAD, IA-2, IA, IC, ZnT8), кач-но", kk: "I типті аутоиммунды диабет иммуноблоты, 5 АТ, сапалық", en: "Type-1 diabetes immunoblot, 5 antigens" }, price: 30000 },
      { code: "2.5", days: "1–3", name: { ru: "Антинуклеарные антитела, IgG, 17 АТ, кач-но", kk: "Антинуклеарлық антиденелер, IgG, 17 АТ, сапалық", en: "ANA IgG, 17 antigens, qualitative" }, price: 22000 },
      { code: "2.6", days: "1–3", name: { ru: "Иммуноблот при миозитах, поли-/дерматомиозитах, склеродермии (Jo-1, PL-7, PL-12, SRP, Mi-2, Ku, PM-Scl100, Scl-70), кач-но", kk: "Миозит/полимиозит/дерматомиозит/склеродермия иммуноблоты, сапалық", en: "Myositis/dermatomyositis/scleroderma immunoblot" }, price: 28000 },
    ],
  },
  // === Дополнительные исследования, ИФА (section 3) ===
  {
    id: "autoimmune-ifa",
    category: "autoimmune-ifa",
    title: {
      ru: "Дополнительные исследования, ИФА",
      kk: "Қосымша зерттеулер, ИФА",
      en: "Additional studies, ELISA",
    },
    rows: [
      { code: "3.1", days: "1–3", name: { ru: "Антитела к циклическому цитруллинированному пептиду (АЦЦП), кол-но", kk: "Циклдік цитруллинденген пептидке антиденелер (АЦЦП), сандық", en: "Anti-CCP antibodies, quantitative" }, price: 8000 },
      { code: "3.2", days: "1–3", name: { ru: "Антитела к двуспиральной ДНК (dsDNA-NcX), тест II поколения, кол-но", kk: "Қос ширатылған ДНҚ-ға антиденелер (dsDNA-NcX), II ұрпақ тесті, сандық", en: "Anti-dsDNA (NcX) Gen-II, quantitative" }, price: 8000 },
      { code: "3.3", days: "1–3", name: { ru: "Антитела к кардиолипину IgM, кол-но", kk: "Кардиолипинге IgM антиденелер, сандық", en: "Anti-cardiolipin IgM, quantitative" }, price: 6000 },
      { code: "3.4", days: "1–3", name: { ru: "Антитела к кардиолипину IgG, кол-но", kk: "Кардиолипинге IgG антиденелер, сандық", en: "Anti-cardiolipin IgG, quantitative" }, price: 6000 },
      { code: "3.5", days: "1–3", name: { ru: "Антитела к кардиолипину IgA, кол-но", kk: "Кардиолипинге IgA антиденелер, сандық", en: "Anti-cardiolipin IgA, quantitative" }, price: 6000 },
      { code: "3.6", days: "1–3", name: { ru: "Антитела к кардиолипину IgM/G/A, суммарно, кол-но", kk: "Кардиолипинге IgM/G/A, жалпы, сандық", en: "Anti-cardiolipin IgM/G/A total, quantitative" }, price: 8000 },
      { code: "3.7", days: "1–3", name: { ru: "Антитела к β2-гликопротеину-1, IgM, кол-но", kk: "β2-гликопротеин-1-ге IgM, сандық", en: "Anti-β2-glycoprotein-1 IgM, quantitative" }, price: 8000 },
      { code: "3.8", days: "1–3", name: { ru: "Антитела к β2-гликопротеину-1, IgG, кол-но", kk: "β2-гликопротеин-1-ге IgG, сандық", en: "Anti-β2-glycoprotein-1 IgG, quantitative" }, price: 8000 },
      { code: "3.9", days: "1–3", name: { ru: "Антитела к β2-гликопротеину-1, IgA, кол-но", kk: "β2-гликопротеин-1-ге IgA, сандық", en: "Anti-β2-glycoprotein-1 IgA, quantitative" }, price: 8000 },
      { code: "3.10", days: "1–3", name: { ru: "Антитела к β2-гликопротеину-1, IgM/G/A, суммарно, кол-но", kk: "β2-гликопротеин-1-ге IgM/G/A, жалпы, сандық", en: "Anti-β2-glycoprotein-1 IgM/G/A total, quantitative" }, price: 8000 },
      { code: "3.11", days: "1–3", name: { ru: "Антитела к ацетилхолиновому рецептору IgG, кол-но", kk: "Ацетилхолин рецепторына IgG, сандық", en: "Anti-AChR IgG, quantitative" }, price: 17990 },
      { code: "3.12", days: "1–3", name: { ru: "Определение антинуклеарных аутоантител (ANA), индекс", kk: "Антинуклеарлық аутоантиденелер (ANA), индекс", en: "ANA index" }, price: 7000 },
      { code: "3.13", days: "1–3", name: { ru: "Аутоантитела IgG к ядерным и цитоплазматическим антигенам (дсДНК, RNP, Sm, SS-A, SS-B, Scl-70, CENP, Jo-1), индекс", kk: "Ядро және цитоплазма антигендеріне IgG аутоантиденелер, индекс", en: "IgG to nuclear & cytoplasmic antigens, index" }, price: 21000 },
      { code: "3.14", days: "1–3", name: { ru: "Митохондриальные аутоантитела (AMA M2), кол-но", kk: "Митохондриалық аутоантиденелер (AMA M2), сандық", en: "AMA M2, quantitative" }, price: 7000 },
      { code: "3.15", days: "1–3", name: { ru: "Фекальный кальпротектин, кол-но (КАЛ в контейнере)", kk: "Нәжіс кальпротектині, сандық (контейнердегі нәжіс)", en: "Faecal calprotectin, quantitative" }, price: 12000 },
      { code: "3.16", days: "1–3", name: { ru: "IgA к маннанам сахаромицетов (ASCA), кол-но", kk: "Сахаромицеттер маннандарына IgA (ASCA), сандық", en: "Anti-ASCA IgA, quantitative" }, price: 8000 },
      { code: "3.17", days: "1–3", name: { ru: "IgG к маннанам сахаромицетов (ASCA), кол-но", kk: "Сахаромицеттер маннандарына IgG (ASCA), сандық", en: "Anti-ASCA IgG, quantitative" }, price: 8000 },
      { code: "3.18", days: "1–3", name: { ru: "IgA к глиадину, кол-но", kk: "Глиадинге IgA, сандық", en: "Anti-gliadin IgA, quantitative" }, price: 8000 },
      { code: "3.19", days: "1–3", name: { ru: "IgG к глиадину, кол-но", kk: "Глиадинге IgG, сандық", en: "Anti-gliadin IgG, quantitative" }, price: 8000 },
      { code: "3.20", days: "1–3", name: { ru: "IgA к тканевой трансглутаминазе, кол-но", kk: "Тіндік трансглутаминазаға IgA, сандық", en: "Anti-tTG IgA, quantitative" }, price: 8000 },
      { code: "3.21", days: "1–3", name: { ru: "IgG к тканевой трансглутаминазе, кол-но", kk: "Тіндік трансглутаминазаға IgG, сандық", en: "Anti-tTG IgG, quantitative" }, price: 8000 },
      { code: "3.24", days: "1–3", name: { ru: "Антитела к рецептору фосфолипазы А2, IgG (PLA2R), количественно", kk: "Фосфолипаза А2 рецепторына IgG (PLA2R), сандық", en: "Anti-PLA2R IgG, quantitative" }, price: 18000 },
      { code: "3.27", days: "1–3", name: { ru: "Определение IgA (общий)", kk: "IgA (жалпы) анықтау", en: "Total IgA" }, price: 4000 },
      { code: "3.28", days: "1–3", name: { ru: "Определение IgM (общий)", kk: "IgM (жалпы) анықтау", en: "Total IgM" }, price: 4000 },
      { code: "3.29", days: "1–3", name: { ru: "Определение IgG (общий)", kk: "IgG (жалпы) анықтау", en: "Total IgG" }, price: 4000 },
    ],
  },
  // === Комплексные исследования (section 4) ===
  {
    id: "autoimmune-packages",
    category: "autoimmune-packages",
    title: {
      ru: "Комплексные исследования",
      kk: "Кешенді зерттеулер",
      en: "Disease packages",
    },
    rows: [
      { code: "4.1", days: "1–3", name: { ru: "Системные заболевания соединительной ткани", kk: "Дәнекер тіннің жүйелі аурулары", en: "Systemic connective tissue disease" }, price: 54000 },
      { code: "4.2", days: "1–3", name: { ru: "Аутоиммунные васкулиты", kk: "Аутоиммунды васкулиттер", en: "Autoimmune vasculitis" }, price: 32000 },
      { code: "4.3", days: "1–3", name: { ru: "Аутоиммунные заболевания почек", kk: "Бүйректің аутоиммунды аурулары", en: "Autoimmune kidney disease" }, price: 73000 },
      { code: "4.4", days: "1–3", name: { ru: "Аутоиммунные заболевания печени", kk: "Бауырдың аутоиммунды аурулары", en: "Autoimmune liver disease" }, price: 62000 },
      { code: "4.5", days: "1–3", name: { ru: "Антифосфолипидный синдром", kk: "Антифосфолипидті синдром", en: "Antiphospholipid syndrome" }, price: 27000 },
      { code: "4.7", days: "1–3", name: { ru: "Вторичный антифосфолипидный синдром", kk: "Қайталама антифосфолипидті синдром", en: "Secondary APS" }, price: 45000 },
      { code: "4.8", days: "1–3", name: { ru: "Аутоиммунный сахарный диабет I типа", kk: "I типті аутоиммунды диабет", en: "Type-1 autoimmune diabetes" }, price: 47000 },
      { code: "4.9", days: "1–3", name: { ru: "Воспалительные заболевания кишечника (НЯК, БК)", kk: "Ішектің қабыну аурулары (НЯК, БК)", en: "Inflammatory bowel disease (UC, CD)" }, price: 48000 },
      { code: "4.10", days: "1–3", name: { ru: "Аутоиммунные (поли-/дермато-) миозиты, склеродермия", kk: "Аутоиммунды (поли-/дермато-) миозиттер, склеродермия", en: "Autoimmune myositis, scleroderma" }, price: 39000 },
    ],
  },
  // === Криоглобулины (section 5, Astana only) ===
  {
    id: "cryoglobulins",
    category: "cryoglobulins",
    title: {
      ru: "Определение криоглобулинов",
      kk: "Криоглобулиндерді анықтау",
      en: "Cryoglobulins",
    },
    subtitle: {
      ru: "Только филиал Байтурсынова, 6 — г. Астана",
      kk: "Тек Байтұрсынов 6 филиалы — Астана қ.",
      en: "Astana, Baitursynov 6 branch only",
    },
    rows: [
      { code: "5.1", days: "—", name: { ru: "Определение криоглобулинов в сыворотке крови, кач-но", kk: "Қан сарысуында криоглобулиндерді анықтау, сапалық", en: "Cryoglobulins in serum, qualitative" }, price: 8000 },
    ],
  },
];

export function formatPrice(p: number): string {
  return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function getRowName(row: PriceRow, locale: Locale): string {
  return row.name[locale] ?? row.name.ru;
}

export function getSectionTitle(s: Section, locale: Locale): string {
  return s.title[locale] ?? s.title.ru;
}

export function getSectionSubtitle(s: Section, locale: Locale): string | undefined {
  return s.subtitle ? (s.subtitle[locale] ?? s.subtitle.ru) : undefined;
}

export function getNotes(row: PriceRow, locale: Locale): string | undefined {
  return row.notes ? (row.notes[locale] ?? row.notes.ru) : undefined;
}
