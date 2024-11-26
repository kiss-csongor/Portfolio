import {
  benefitIconConnection,
  benefitIconLock,
  benefitIconMessage,
  benefitIconGear,
  benefitIconScale,
  benefitIconHourGlass,
  benefitIconMap,
  benefitIconHdd,
  benefitIconDesktop,
  benefitIconMail,
  benefitIconZap,
  benefitIconSiteMap,
  benefitIconChart,
  benefitIconPrinter,
  benefitIconShield,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  sze_allo_logo,
  ddc_logo,
  sze_logo,
  sze_fekvo_logo,
  kcs_logo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Főoldal",
    url: "/",
  },
  {
    id: "1",
    title: "Blog",
    url: "/",
  },
  {
    id: "2",
    title: "IT",
    url: "/",
  },
  {
    id: "3",
    title: "Verseim",
    url: "/",
  },
  {
    id: "4",
    title: "Rólam",
    url: "/",
  },
  {
    id: "5",
    title: "Kapcsolat",
    url: "/",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Hírlevél",
    url: "/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [ddc_logo, sze_fekvo_logo, sze_logo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Elérhetőség",
    text: "Akár irodában ülsz a laptopod előtt, akár a parkban sétálsz telefonoddal a kezedben, szoftverünket úgy terveztük, hogy bárhonnan elérheted és kezelheted jegyeidet.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIconMap,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Azonnali kezelés",
    text: "Automatizált rendszereink azonnal rögzítik kérdéseidet és problémáidat, ezáltal nem kell órákat várnod az első válaszra, hisz azonnali visszajelzésekkel segítjük a hatékony ügyintézést.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIconZap,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Nyomkövetés",
    text: "A jegyek részletes állapotinformációkat tartalmaznak, beleértve az aktuális állapotot és a megoldás során végzett lépéseket, felelősöket, ami segít átláthatóbbá tenni a folyamatokat.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: benefitIconSiteMap,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Hatékony priorizálás",
    text: "A problémák priorizálása egyszerűen kezelhető, így mindig a legfontosabb gondok kerülnek előtérbe. Ez segít a munka hatékony szervezésében és az elégedettség növelésében.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: benefitIconScale,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Számokban a hatékonyságunk",
    text: "Tekintsd át egyszerűen, mennyi ideig tartottak a problémák megoldásai, és milyen gyorsan reagáltunk. Riportjaink megmutatják, mennyire komolyan vesszük a bejelentéseidet.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconChart,
    imageUrl: benefitImage3,
  },
  {
    id: "5",
    title: "Egyszerű kezelhetőség, gyors megoldások",
    text: "A rendszerünk pont annyira egyszerű, hogy bárki könnyedén használhatja, mégis elég okos ahhoz, hogy gyorsan eljuttassa a bejelentésed a megoldásig.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIconGear,
    imageUrl: benefitImage1,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const faq = [
  {
    id: "0",
    title: "Nem működik az internet",
    text: "Ellenőrizd a routert, a szolgáltatói kapcsolatot, valamint győződj meg róla, hogy a hálózati kábelek megfelelően csatlakoznak.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIconConnection,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Elfelejtett jelszó",
    text: "Próbálj jelszó-visszaállítást kérni a szolgáltatás weboldalán, ahol megadhatod a regisztrált e-mail címedet, hogy új jelszót generálhass.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIconLock,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Lassú számítógép",
    text: "Zárj be minden nem használt programot, futtass rendszertisztítót, és ellenőrizd a víruskeresőt, hogy biztosan ne legyenek kártékony programok a gépen.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: benefitIconHdd,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Nincs elég tárhely",
    text: "Törölj felesleges fájlokat, például régi dokumentumokat, alkalmazásokat, és használj külső meghajtót vagy felhőszolgáltatást az adatok tárolására.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: benefitIconHdd,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Program telepítése",
    text: "Töltsd le a program telepítőjét egy megbízható forrásból, és figyelj arra, hogy az operációs rendszered kompatibilis legyen a telepített szoftver verziójával.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconDesktop,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "5",
    title: "Nyomtató nem nyomtat",
    text: "Ellenőrizd a nyomtató papírtálcáját, a tintát és a csatlakozásokat. Ha minden rendben van, próbáld meg újraindítani a nyomtatót, vagy ellenőrizd az illesztőprogramokat.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIconPrinter,
    imageUrl: benefitImage1,
  },
  {
    id: "6",
    title: "Vírusos gép",
    text: "Futtass egy friss vírusellenőrzést, hogy eltávolíthasd a fenyegetéseket. Ha szükséges, használd az operációs rendszer beépített biztonsági eszközeit vagy telepíts egy új víruskeresőt.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIconShield,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Lassú Wi-Fi",
    text: "Ellenőrizd a Wi-Fi kapcsolatot, indítsd újra a modemet, és próbáld meg másik eszközzel is tesztelni a sebességet. Ha a probléma továbbra is fennáll, érdemes felvenni a kapcsolatot a szolgáltatóval.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIconConnection,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "8",
    title: "Lefagyó számítógép",
    text: "Ha az eszközöd rendszeresen lefagy, próbáld meg újraindítani, és ellenőrizd, hogy a memória vagy a háttértár nem telítődött-e. Ha a probléma továbbra is fennáll, érdemes hardver tesztet végezni.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: benefitIconHdd,
    imageUrl: benefitImage1,
  },
  {
    id: "9",
    title: "E-mail nem érkezik",
    text: "Ellenőrizd a spam mappát, és győződj meg arról, hogy a helyes e-mail címet adtad meg. Ha az e-mail rendszered beállításai nem megfelelőek, érdemes a szolgáltatóval felvenni a kapcsolatot.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: benefitIconMail,
    imageUrl: benefitImage2,
  },
  {
    id: "10",
    title: "Eltűnt fájlok",
    text: "Ha fájlokat töröltél vagy elvesztek, próbálj meg helyreállítani őket a 'Lomtár'-ból, vagy használj adat-helyreállító szoftvert, mint például a Recuva vagy EaseUS Data Recovery.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconHdd,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "11",
    title: "Nem tölt be a weboldal",
    text: "Próbáld meg elérni a weboldalt egy másik böngészővel, vagy ellenőrizd az internetkapcsolatot. Ha a probléma továbbra is fennáll, próbáld meg üríteni a böngésző cache-t.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIconConnection,
    imageUrl: benefitImage2,
  },
  {
    id: "12",
    title: "Lefagyó alkalmazás",
    text: "Zárd be az alkalmazást a Feladatkezelő segítségével, majd indítsd újra. Ellenőrizd, hogy a program naprakész-e, és frissítsd, ha szükséges.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconHourGlass,
    imageUrl: benefitImage3,
  },
  {
    id: "13",
    title: "Törölt e-mail visszaállítása",
    text: "Ellenőrizd a 'Kuka' mappát, és ha nem találod, keresd meg a levelezőrendszerben az 'Archivált' vagy 'Elveszett' mappák között.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIconMail,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "14",
    title: "Képernyő villogás",
    text: "Ez a probléma gyakran az illesztőprogramokkal kapcsolatos. Frissítsd azokat, vagy próbáld meg a képernyő beállításainak módosítását.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIconDesktop,
    imageUrl: benefitImage1,
  },
  {
    id: "15",
    title: "Program nem válaszol",
    text: "Ha egy program nem válaszol, próbáld meg bezárni a Feladatkezelő segítségével, és ha szükséges, indítsd újra az alkalmazást vagy a számítógépet.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconHourGlass,
    imageUrl: benefitImage1,
  },
  {
    id: "16",
    title: "Számítógép újraindul",
    text: "Ellenőrizd a hardver összetevőket, mint a memória és a merevlemez, hogy biztosan ne legyenek hibák. Ha a probléma továbbra is fennáll, érdemes egy szakember segítségét kérni.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIconHdd,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "17",
    title: "Laptop túl meleg",
    text: "Győződj meg arról, hogy a ventilátor nem eldugult, és hogy a laptop megfelelően szellőzik. Használj hűtőtálcát, ha szükséges.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIconGear,
    imageUrl: benefitImage3,
  },
  {
    id: "18",
    title: "USB eszköz nem ismerhető fel",
    text: "Ellenőrizd a csatlakozást, és próbálj meg másik portot vagy eszközt használni. Ha a probléma továbbra is fennáll, frissítsd az USB illesztőprogramokat.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIconConnection,
    imageUrl: benefitImage1,
  },
  {
    id: "19",
    title: "Rendszer lassulás",
    text: "Tisztítsd meg a rendszered a felesleges fájloktól, optimalizáld a startup programokat, futtass vírusellenőrzést ha szükséges telepítsd újra a gépet.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: benefitIconHourGlass,
    imageUrl: benefitImage2,
    light: true,
  },
];
