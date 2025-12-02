export interface GalleryImage {
  id: number;
  imagePath: string;
  alt: string;
  title: string;
  tags: string[];
  date: string;
  location?: string;
  source?: {
    type: 'instagram' | 'direct';
    url?: string;
  };
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    imagePath: '/IMG_2456.JPG',
    alt: 'Awarded the Outstanding Innovation Award at AArete Annual Awards Night 2025 by Abhinav Rao for delivering high-impact AI, Cloud, Salesforce, and Automation initiatives across key enterprise projects.',
    title: 'AArete Awards Night 2025',
    tags: ['Award', 'Annual Night', 'Innovation'],
    date: '2025-11-13',
    source: { type: 'direct' },
  },
  {
    id: 2,
    imagePath: '/e8ae7433-4df0-41f9-a286-17f0fc6b3c04.mov',
    alt: 'A highlight from AArete Annual Awards Night 2025 where I walk up to the stage with a big smile as Abhinav Rao presents the Outstanding Innovation Award, recognizing my AI, Salesforce, Automation, and Cloud-led contributions.',
    title: 'AArete Awards Night 2025',
    tags: ['Video', 'Award', 'Annual Night', 'Innovation'],
    date: '2025-11-13',
    source: { type: 'direct' },
  },
  {
    id: 3,
    imagePath: '/AQMTrQxySIQzhWMZ8cMXr423ghdx6vfTKDvMzgf_OzTUub_68zhWyAz05Yzi_V853tZVTxe1Nf5x47YAuADrKg7WT6hSKObFf8YULV4 2.mp4',
    alt: 'My Workspace Setup: A glimpse into my productive environment featuring dual monitors, a sleek laptop, and essential accessories that keep me focused and efficient throughout the workday.',
    title: 'Workspace that fuels productivity',
    tags: ['Workspace', 'Productivity', 'Laptop', 'Monitors'],
    date: '2023-07-16',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
  {
    id: 4,
    imagePath: '/01c26d5d7771482988f99651efcca577.MP4',
    alt: 'A small moment from my downtime. No work, no pressure, no deadlines. Just me unwinding and enjoying the break. When I chill, I give myself the space to breathe, smile, and reset.',
    title: 'A calm break from everything',
    tags: ['Break', 'Personal', 'Leisure', 'Chilling'],
    date: '2025-08-23',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
  {
    id: 5,
    imagePath: '/IMG_0474.HEIC',
    alt: 'Vacation  vibes: A snapshot from my recent getaway where I soaked in the sun, embraced scenic beauty, tried new foods, and created unforgettable memories. Traveling not only refreshes my mind but also fuels my creativity and broadens my perspective.',
    title: 'Vacation vibes',
    tags: ['Vacation', 'Travel', 'Leisure', 'Memories'],
    date: '2025-04-12',
    source: { type: 'direct' }
  },
  {
    id: 6,
    imagePath: '/_Speed thrills, skill kills _ 125 kmph survived!__ Come to 22 Yards, Blueridge_ where you play .mp4',
    alt: 'Cricket is a game that I worship. Here is a glimpse of my recent thrilling experience at 22 Yards, Blueridge, where I pushed my limits and survived a heart-pounding 125 kmph delivery. The adrenaline rush and the joy of playing the sport I love made it an unforgettable moment.',
    title: 'Cricket thrill',
    tags: ['Cricket', 'Sports', 'Adrenaline', 'Challenge', 'Bowling Machine'],
    date: '2025-08-09',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
  {
    id: 7,
    imagePath: '/match_winning.mp4',
    alt: 'If I not working on tech, you will find me on the cricket field. I love the thrill of competition and the camaraderie of teammates. I love batting against tough opponents and winning matches. Here is a glimpse of a match-winning moment where I contributed significantly to my team\'s victory. Cricket is more than just a sport for me; it\'s a passion that fuels my competitive spirit and teamwork skills.',
    title: 'Game of Cricket',
    tags: ['Cricket', 'Sports', 'Adrenaline', 'Challenge', 'Batting'],
    date: '2023-08-19',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
  {
    id: 8,
    imagePath: '/South_Style.mp4',
    alt: 'Enjoying my brother\'s Marriage at Madurai! A blend of vibrant traditions, joyous celebrations, and cherished moments with family and friends. South Indian weddings are a beautiful tapestry of culture, colors, and rituals that create unforgettable memories.',
    title: 'Brother\'s Marriage',
    tags: ['Wedding', 'Family', 'Celebration', 'Culture'],
    date: '2023-11-23',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
  {
    id: 9,
    imagePath: '/self_love.mp4.mp4',
    alt: 'Self Love is the best love ❤️ Embracing self-love and self-care is a transformative journey that nurtures my well-being and happiness. It\'s about prioritizing my needs, setting boundaries, and celebrating my worth. Here\'s to loving myself unconditionally and living authentically!',
    title: 'Self Love Journey',
    tags: ['Self Love', 'Well-being', 'Happiness', 'Authenticity'],
    date: '2024-10-07',
    source: { type: 'instagram', url: 'https://www.instagram.com/jyotiraditya12?igsh=eTg0dDU4ZXo4b2du&utm_source=qr' },
  },
];
