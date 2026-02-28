export interface Event {
  id: number
  slug: string
  title: string
  description: string
  fullDescription?: string
  date: string
  dayOfWeek: string
  day: string
  month: string
  year: string
  time: string
  endTime?: string
  venue: string
  address: string
  image: string
  color: string
  featured?: boolean
  highlights?: string[]
  speakers?: {
    name: string
    role: string
    image?: string
  }[]
  schedule?: {
    time: string
    activity: string
  }[]
}

export const events: Event[] = [
  {
    id: 1,
    slug: "monthly-mens-gathering",
    title: "Monthly Men's Gathering",
    description: "Join us for an evening of fellowship, worship, and powerful teaching. Connect with brothers who share your faith journey.",
    fullDescription: "Our Monthly Men's Gathering is a cornerstone of the Real Men community. This evening is designed to bring men together in an atmosphere of authentic fellowship, heartfelt worship, and transformative teaching. Whether you're new to faith or have been walking with God for years, this gathering offers something for everyone. Come expecting to be encouraged, challenged, and equipped to live out your calling as a godly man.",
    date: "2026-03-15",
    dayOfWeek: "Sat",
    day: "15",
    month: "March",
    year: "2026",
    time: "5:00 PM",
    endTime: "8:00 PM",
    venue: "Grace Community Church",
    address: "123 Faith Avenue, Lagos",
    image: "/gathering-1/DSC04057.jpg",
    color: "bg-blue-500",
    highlights: [
      "Worship session led by our praise team",
      "Powerful message on godly leadership",
      "Small group discussions",
      "Networking and fellowship dinner"
    ],
    schedule: [
      { time: "5:00 PM", activity: "Doors Open & Registration" },
      { time: "5:30 PM", activity: "Worship Session" },
      { time: "6:00 PM", activity: "Main Message" },
      { time: "7:00 PM", activity: "Small Group Discussion" },
      { time: "7:30 PM", activity: "Fellowship Dinner" },
    ]
  },
  {
    id: 2,
    slug: "leadership-workshop",
    title: "Leadership Workshop",
    description: "A hands-on workshop focused on developing godly leadership skills for the workplace, home, and community.",
    fullDescription: "This intensive Leadership Workshop is designed to equip men with practical, biblical principles for leading effectively in every area of life. Through interactive sessions, real-world case studies, and mentored discussions, you'll gain tools to lead with integrity at work, shepherd your family well, and make an impact in your community. This is more than theory—it's hands-on training for the challenges you face daily.",
    date: "2026-03-22",
    dayOfWeek: "Sat",
    day: "22",
    month: "March",
    year: "2026",
    time: "10:00 AM",
    endTime: "4:00 PM",
    venue: "Real Men Hub",
    address: "45 Kingdom Street, Uyo",
    image: "/gathering-1/DSC04020.jpg",
    color: "bg-green-500",
    highlights: [
      "Biblical foundations of leadership",
      "Leading at work with excellence",
      "Family leadership principles",
      "Community impact strategies",
      "Mentorship breakout sessions"
    ],
    schedule: [
      { time: "10:00 AM", activity: "Welcome & Introduction" },
      { time: "10:30 AM", activity: "Session 1: Biblical Leadership Foundations" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Session 2: Leading at Work & Home" },
      { time: "2:30 PM", activity: "Mentorship Breakouts" },
      { time: "3:30 PM", activity: "Closing & Action Planning" },
    ]
  },
  {
    id: 3,
    slug: "annual-mens-conference",
    title: "Annual Men's Conference",
    description: "Our flagship annual event bringing together men from across the nation for three days of transformation, networking, and spiritual renewal.",
    fullDescription: "The Annual Men's Conference is our most anticipated event of the year. For three powerful days, men from across the nation gather to experience life-changing worship, hear from renowned speakers, build lasting connections, and encounter God in a profound way. This conference is designed to challenge, inspire, and equip you to return home as a transformed man ready to impact your sphere of influence.",
    date: "2026-04-10",
    dayOfWeek: "Fri",
    day: "10",
    month: "April",
    year: "2026",
    time: "9:00 AM",
    endTime: "5:00 PM",
    venue: "Ibom Golf Resort",
    address: "Nwaniba Road, Uyo",
    image: "/gathering-1/DSC04013.jpg",
    color: "bg-purple-500",
    featured: true,
    highlights: [
      "3 days of transformative content",
      "Keynote speakers from around the world",
      "Worship experiences",
      "Networking opportunities",
      "Breakout sessions by topic",
      "Awards and recognition ceremony"
    ],
    speakers: [
      { name: "Pastor David Okonkwo", role: "Keynote Speaker" },
      { name: "Dr. Emmanuel Udo", role: "Workshop Facilitator" },
      { name: "Brother James Akpan", role: "Worship Leader" },
    ],
    schedule: [
      { time: "9:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Opening Worship" },
      { time: "11:00 AM", activity: "Keynote Address" },
      { time: "1:00 PM", activity: "Lunch & Networking" },
      { time: "2:30 PM", activity: "Breakout Sessions" },
      { time: "4:00 PM", activity: "Evening Worship & Ministry" },
    ]
  },
  {
    id: 4,
    slug: "skill-hub-financial-literacy",
    title: "Skill Hub: Financial Literacy",
    description: "Learn biblical principles of money management, investment strategies, and building generational wealth.",
    fullDescription: "The Skill Hub: Financial Literacy session is part of our commitment to equipping men holistically. In this practical workshop, you'll learn biblical principles for managing money, debt elimination strategies, investment basics, and how to build generational wealth that honors God. Whether you're just starting your financial journey or looking to level up, this session provides actionable insights you can implement immediately.",
    date: "2026-04-18",
    dayOfWeek: "Sat",
    day: "18",
    month: "April",
    year: "2026",
    time: "2:00 PM",
    endTime: "5:00 PM",
    venue: "Ibom e-Library",
    address: "Wellington Bassey Way, Uyo",
    image: "/gathering-1/DSC04006.jpg",
    color: "bg-amber-500",
    highlights: [
      "Biblical principles of finance",
      "Budgeting and debt elimination",
      "Investment fundamentals",
      "Building generational wealth",
      "Q&A with financial experts"
    ],
    schedule: [
      { time: "2:00 PM", activity: "Welcome & Introduction" },
      { time: "2:30 PM", activity: "Biblical Foundations of Finance" },
      { time: "3:15 PM", activity: "Practical Money Management" },
      { time: "4:00 PM", activity: "Investment Strategies" },
      { time: "4:45 PM", activity: "Q&A Session" },
    ]
  },
]

export function getEventById(id: number): Event | undefined {
  return events.find(event => event.id === id)
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug)
}

export function getGoogleMapsUrl(venue: string, address: string) {
  const query = encodeURIComponent(`${venue}, ${address}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function getDayColor(dayOfWeek: string) {
  const colors: Record<string, string> = {
    Mon: "bg-blue-500",
    Tue: "bg-green-500",
    Wed: "bg-amber-500",
    Thur: "bg-purple-500",
    Fri: "bg-pink-500",
    Sat: "bg-indigo-500",
    Sun: "bg-red-500",
  }
  return colors[dayOfWeek] || "bg-primary"
}
