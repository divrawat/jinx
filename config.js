// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.jinxmanga.in.net';

export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>Jinx</u></a> is a popular manhwa (Korean manga) created by Mingwa. The story revolves around Kim Dan, a physical therapist struggling with financial difficulties, and Jaekyung Joo, a professional MMA fighter who believes he suffers from a curse or "jinx" that affects his career. Desperate for help, Jaekyung seeks Kim Dan's assistance, leading to a complex and intense relationship. The manhwa explores themes of trauma, resilience, and the unconventional bond between the two main characters.`


export const MANGA_NAME = 'Jinx';
export const MANGA_AUTHOR = 'Mingwa';
export const MANGA_RELEASE = '2022';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Mingwa';
export const MANGA_STUDIO = 'MAPPA';
export const MANGA_GENRE = 'Romance, Yaoi, Drama, Sports';

export const CHAPTER_PREFIX = 'jinx-chapter';
export const IMAGE_PREFIX = 'images/jinx';
export const NEXT_PREVIOUS_PREFIX = 'manga/jinx-chapter';
export const URL_PREFIX = 'manga/jinx-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/jinx-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://cdn.epicstream.com/images/ncavvykf/epicstream/087c6bec73829312ec964ae04b7cfb0d8955fc2f-1255x738.png?rect=0,40,1255,659&w=1200&h=630&auto=format";


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[135px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Jinx';
export const NavbarName = "Jinx";

export const APP_DESCRIPTION = `Read ${MANGA_NAME} manhwa or manga all chapters online. The story revolves around Kim Dan, a physical therapist struggling with financial difficulties, and Jaekyung Joo, a professional MMA fighter who believes he suffers from a curse or "jinx" that affects his career. Desperate for help, Jaekyung seeks Kim Dan's assistance, leading to a complex and intense relationship. The manhwa explores themes of trauma, resilience, and the unconventional bond between the two main characters.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Jinx is a captivating manhwa created by Mingwa, known for its intricate plot and intense character development. The story primarily focuses on Kim Dan, a struggling physical therapist, and Jaekyung Joo, a highly successful but troubled MMA fighter. Jaekyung believes he is afflicted by a curse, or 'jinx' that negatively impacts his performance in critical matches, causing him immense stress and paranoia."
    },
    {
        id: 2,
        content: "Kim Dan's life is far from easy. He is burdened with financial problems, and his career as a physical therapist barely allows him to make ends meet. His situation becomes even more precarious when he is forced to find new employment to support his ailing grandmother and pay off mounting debts. Desperate for a solution, Kim Dan accepts a job offer from Jaekyung Joo, despite the fighter's intimidating and abrasive demeanor."
    },
    {
        id: 3,
        content: "Jaekyung, on the other hand, is a man driven by his desire to succeed in the fiercely competitive world of MMA. His belief in the jinx has led him to seek unconventional methods to break free from its grip. He hires Kim Dan, hoping that the therapist's skills can alleviate his physical and psychological burdens, thereby improving his performance in the ring."
    },
    {
        id: 4,
        content: "As the story progresses, the relationship between Kim Dan and Jaekyung becomes increasingly complex. Initially, their interactions are purely professional, marked by tension and mutual distrust. However, as they spend more time together, they begin to uncover each other's vulnerabilities and past traumas. Jaekyung's tough exterior gradually reveals a man who is deeply scarred and fearful of failure, while Kim Dan's resilience and determination to overcome his hardships shine through his quiet demeanor."
    },
    {
        id: 5,
        content: "The narrative delves into themes of trauma, resilience, and the human need for connection. Kim Dan's unwavering dedication to helping Jaekyung, despite the fighter's often harsh treatment, highlights his compassion and strength. Meanwhile, Jaekyung's journey to confront his fears and insecurities showcases his inner struggle and desire for redemption."
    },
    {
        id: 6,
        content: "Mingwa masterfully balances drama, romance, and psychological depth in Jinx. The manhwa's artwork vividly captures the emotional intensity of the characters, enhancing the reader's engagement with their story. Through the evolving dynamic between Kim Dan and Jaekyung, Jinx explores the transformative power of empathy and support in overcoming personal demons."
    },
    {
        id: 7,
        content: "In summary, Jinx is a compelling manhwa that weaves together the lives of two men from vastly different worlds. Their intertwined fates lead them on a journey of self-discovery, healing, and unexpected companionship. Mingwa's storytelling and artistic prowess make Jinx a noteworthy addition to the world of manhwa, resonating with readers through its poignant exploration of human connection and resilience."
    }
];




export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran Manga',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man Manga',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen Manga',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man Manga',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei Manga',
        link: 'https://www.mushokutenseimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-piece.webp`,
        title: 'One Piece Manga',
        link: 'https://www.onepiecemanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jinx.webp`,
        title: 'Jinx Manga',
        link: 'https://www.jinxmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/boruto.webp`,
        title: 'Boruto Manga',
        link: 'https://www.borutomanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/demon-slayer.webp`,
        title: 'Demon Slayer Manga',
        link: 'https://www.demonslayermanga.in.net',
    },

    /*
    {
        imageUrl: `${DOMAIN}/related/my-dress-up-darling.webp`,
        title: 'My Dress Up Darling Manga',
        link: 'https://www.mydressupdarlingmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/blue-lock.webp`,
        title: 'Blue Lock Manga',
        link: 'https://www.bluelockmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/solo-leveling.webp`,
        title: 'Solo Leveling Manga',
        link: 'https://www.sololevelingimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/my-hero-academia.webp`,
        title: 'My Hero Academia Manga',
        link: 'https://www.myheroacademiamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga Manga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover Manga',
        link: 'https://www.blackclovermanga.in.net',
    },
*/

];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 96
    },
    {
        "chapterNumber": "2",
        "numImages": 61
    },
    {
        "chapterNumber": "3",
        "numImages": 50
    },
    {
        "chapterNumber": "4",
        "numImages": 55
    },
    {
        "chapterNumber": "5",
        "numImages": 67
    },
    {
        "chapterNumber": "6",
        "numImages": 55
    },
    {
        "chapterNumber": "7",
        "numImages": 61
    },
    {
        "chapterNumber": "8",
        "numImages": 8
    },
    {
        "chapterNumber": "9",
        "numImages": 55
    },
    {
        "chapterNumber": "10",
        "numImages": 49
    },
    {
        "chapterNumber": "11",
        "numImages": 49
    },
    {
        "chapterNumber": "12",
        "numImages": 49
    },
    {
        "chapterNumber": "13",
        "numImages": 49
    },
    {
        "chapterNumber": "14",
        "numImages": 55
    },
    {
        "chapterNumber": "15",
        "numImages": 66
    },
    {
        "chapterNumber": "16",
        "numImages": 49
    },
    {
        "chapterNumber": "17",
        "numImages": 54
    },
    {
        "chapterNumber": "18",
        "numImages": 49
    },
    {
        "chapterNumber": "19",
        "numImages": 55
    },
    {
        "chapterNumber": "20",
        "numImages": 48
    },
    {
        "chapterNumber": "21",
        "numImages": 49
    },
    {
        "chapterNumber": "22",
        "numImages": 61
    },
    {
        "chapterNumber": "23",
        "numImages": 57
    },
    {
        "chapterNumber": "24",
        "numImages": 63
    },
    {
        "chapterNumber": "25",
        "numImages": 63
    },
    {
        "chapterNumber": "26",
        "numImages": 63
    },
    {
        "chapterNumber": "27",
        "numImages": 71
    },
    {
        "chapterNumber": "28",
        "numImages": 7
    },
    {
        "chapterNumber": "29",
        "numImages": 70
    },
    {
        "chapterNumber": "30",
        "numImages": 7
    },
    {
        "chapterNumber": "31",
        "numImages": 71
    },
    {
        "chapterNumber": "32",
        "numImages": 15
    },
    {
        "chapterNumber": "33",
        "numImages": 60
    },
    {
        "chapterNumber": "34",
        "numImages": 48
    },
    {
        "chapterNumber": "35",
        "numImages": 69
    },
    {
        "chapterNumber": "36",
        "numImages": 19
    },
    {
        "chapterNumber": "37",
        "numImages": 82
    },
    {
        "chapterNumber": "37a",
        "numImages": 61
    },
    {
        "chapterNumber": "38",
        "numImages": 24
    },
    {
        "chapterNumber": "39",
        "numImages": 19
    },
    {
        "chapterNumber": "40",
        "numImages": 9
    },
    {
        "chapterNumber": "40a",
        "numImages": 2
    },
    {
        "chapterNumber": "41",
        "numImages": 38
    },
    {
        "chapterNumber": "42",
        "numImages": 17
    },
    {
        "chapterNumber": "43",
        "numImages": 20
    },
    {
        "chapterNumber": "44",
        "numImages": 19
    },
    {
        "chapterNumber": "45",
        "numImages": 19
    },
    {
        "chapterNumber": "46",
        "numImages": 17
    },
    {
        "chapterNumber": "47",
        "numImages": 21
    },
    {
        "chapterNumber": "48",
        "numImages": 21
    },
    {
        "chapterNumber": "49",
        "numImages": 19
    },
    {
        "chapterNumber": "50",
        "numImages": 18
    },
    {
        "chapterNumber": "51",
        "numImages": 19
    },
    {
        "chapterNumber": "52",
        "numImages": 19
    },
    {
        "chapterNumber": "53",
        "numImages": 4
    },
    {
        "chapterNumber": "53a",
        "numImages": 33
    },
    {
        "chapterNumber": "53b",
        "numImages": 9
    },
    {
        "chapterNumber": "53c",
        "numImages": 11
    },
    {
        "chapterNumber": "54",
        "numImages": 39
    }
];