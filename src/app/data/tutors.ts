export interface Tutor {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  price: number;
  experience: number;
  subjects: string[];
  specialization: string;
  description: string;
  tags: string[];
  availability: string[];
  language: string[];
  aboutMe: string;
  teachingStyle: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 4.9,
    reviewCount: 120,
    price: 35,
    experience: 7,
    subjects: ["Math", "Physics"],
    specialization: "Exam Specialist",
    description: "Experienced math tutor specializing in SAT/ACT prep with proven track record",
    tags: ["Exam Specialist", "Patient"],
    availability: ["Mon 9-12", "Wed 14-17", "Fri 10-15"],
    language: ["English", "Spanish"],
    aboutMe: "I've been teaching mathematics for over 7 years and have helped hundreds of students achieve their academic goals. My approach focuses on building strong fundamentals and confidence.",
    teachingStyle: "Interactive problem-solving with real-world examples. I believe in making complex concepts accessible through patient explanation and practice.",
    reviews: [
      { user: "Mike Chen", rating: 5, comment: "Sarah helped me improve my SAT math score by 150 points!", date: "2026-03-15" },
      { user: "Emma Davis", rating: 5, comment: "Very patient and explains concepts clearly", date: "2026-02-20" },
      { user: "Alex Martinez", rating: 4, comment: "Great tutor, highly recommend", date: "2026-01-10" }
    ]
  },
  {
    id: "2",
    name: "David Lee",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5.0,
    reviewCount: 80,
    price: 50,
    experience: 3,
    subjects: ["Programming", "Web Development"],
    specialization: "Beginner Friendly",
    description: "Full-stack developer teaching modern web development from scratch",
    tags: ["Beginner Friendly", "Tech Expert"],
    availability: ["Tue 18-21", "Thu 18-21", "Sat 10-16"],
    language: ["English", "Mandarin"],
    aboutMe: "Professional software engineer with 3 years of tutoring experience. I love introducing beginners to the world of coding and helping them build real projects.",
    teachingStyle: "Hands-on project-based learning. We'll build actual applications while learning concepts, not just theory.",
    reviews: [
      { user: "Jessica Park", rating: 5, comment: "David made coding fun and accessible!", date: "2026-04-01" },
      { user: "Tom Wilson", rating: 5, comment: "Best programming tutor I've had", date: "2026-03-10" },
      { user: "Lisa Brown", rating: 5, comment: "Very knowledgeable and patient", date: "2026-02-15" }
    ]
  },
  {
    id: "3",
    name: "Maria Garcia",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 4.8,
    reviewCount: 200,
    price: 40,
    experience: 5,
    subjects: ["IELTS", "English", "Business English"],
    specialization: "Language Expert",
    description: "IELTS preparation specialist with 5+ years experience, average student score 7.5+",
    tags: ["IELTS Expert", "Professional"],
    availability: ["Mon 14-18", "Wed 14-18", "Fri 14-18"],
    language: ["English", "Spanish", "French"],
    aboutMe: "Certified IELTS instructor with a passion for helping students achieve their language goals. My students consistently score 7.5+ on the exam.",
    teachingStyle: "Structured approach combining grammar, vocabulary, and exam strategies. Focus on practical communication skills.",
    reviews: [
      { user: "Ahmed Hassan", rating: 5, comment: "Scored 8.0 thanks to Maria!", date: "2026-04-10" },
      { user: "Yuki Tanaka", rating: 5, comment: "Excellent IELTS preparation", date: "2026-03-25" },
      { user: "Carlos Silva", rating: 4, comment: "Very professional and organized", date: "2026-02-28" }
    ]
  },
  {
    id: "4",
    name: "James Anderson",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 4.7,
    reviewCount: 95,
    price: 30,
    experience: 4,
    subjects: ["Chemistry", "Biology"],
    specialization: "Science Tutor",
    description: "Science educator with hands-on approach to teaching chemistry and biology",
    tags: ["Interactive", "Visual Learner"],
    availability: ["Mon 16-19", "Tue 16-19", "Thu 16-19"],
    language: ["English"],
    aboutMe: "Former lab researcher turned educator. I bring real-world science experience into every lesson.",
    teachingStyle: "Visual demonstrations and interactive experiments. Making science tangible and exciting.",
    reviews: [
      { user: "Sophie Martin", rating: 5, comment: "Made chemistry finally make sense!", date: "2026-04-05" },
      { user: "Ryan Cooper", rating: 4, comment: "Great explanations", date: "2026-03-12" },
      { user: "Olivia White", rating: 5, comment: "Very engaging teacher", date: "2026-02-18" }
    ]
  },
  {
    id: "5",
    name: "Emily Chen",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    rating: 4.9,
    reviewCount: 150,
    price: 45,
    experience: 6,
    subjects: ["Piano", "Music Theory"],
    specialization: "Music Teacher",
    description: "Classically trained pianist offering lessons for all ages and skill levels",
    tags: ["Kids Friendly", "Performance Coach"],
    availability: ["Mon 15-20", "Wed 15-20", "Sat 9-17"],
    language: ["English", "Mandarin"],
    aboutMe: "Concert pianist with 6 years of teaching experience. I've taught students from age 5 to 65, from complete beginners to advanced performers.",
    teachingStyle: "Personalized approach based on student goals. Balance of technique, theory, and playing music you love.",
    reviews: [
      { user: "Jennifer Lee", rating: 5, comment: "My daughter loves her piano lessons!", date: "2026-04-15" },
      { user: "Robert Kim", rating: 5, comment: "Emily is an amazing teacher", date: "2026-03-30" },
      { user: "Anna Schmidt", rating: 4, comment: "Very patient with beginners", date: "2026-03-05" }
    ]
  },
  {
    id: "6",
    name: "Ahmed Rahman",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    rating: 4.6,
    reviewCount: 70,
    price: 38,
    experience: 5,
    subjects: ["Arabic", "Islamic Studies"],
    specialization: "Language & Culture",
    description: "Native Arabic speaker teaching language and cultural studies",
    tags: ["Native Speaker", "Cultural Expert"],
    availability: ["Tue 10-14", "Thu 10-14", "Sun 14-18"],
    language: ["Arabic", "English", "French"],
    aboutMe: "Native Arabic speaker from Cairo with a degree in Arabic Literature. I help students learn Arabic for travel, work, or personal enrichment.",
    teachingStyle: "Conversational approach with cultural context. Focus on practical communication from day one.",
    reviews: [
      { user: "Mark Johnson", rating: 5, comment: "Learning Arabic has been a joy", date: "2026-04-08" },
      { user: "Sara Miller", rating: 4, comment: "Great cultural insights", date: "2026-03-18" },
      { user: "David Brown", rating: 5, comment: "Very patient teacher", date: "2026-02-22" }
    ]
  },
  {
    id: "7",
    name: "Lisa Thompson",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 4.8,
    reviewCount: 110,
    price: 42,
    experience: 8,
    subjects: ["History", "Literature"],
    specialization: "Humanities",
    description: "PhD in History, specializing in essay writing and critical analysis",
    tags: ["Academic Writing", "Critical Thinking"],
    availability: ["Mon 13-17", "Wed 13-17", "Fri 13-17"],
    language: ["English"],
    aboutMe: "University professor with 8 years of tutoring experience. I help students develop critical thinking and writing skills.",
    teachingStyle: "Socratic method encouraging deep analysis and original thought. Focus on developing strong arguments.",
    reviews: [
      { user: "Kevin Zhang", rating: 5, comment: "Improved my essay scores significantly", date: "2026-04-12" },
      { user: "Rachel Green", rating: 4, comment: "Challenges you to think deeper", date: "2026-03-22" },
      { user: "Daniel Park", rating: 5, comment: "Excellent critical analysis skills", date: "2026-02-28" }
    ]
  },
  {
    id: "8",
    name: "Carlos Rodriguez",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 4.9,
    reviewCount: 130,
    price: 33,
    experience: 4,
    subjects: ["Spanish", "Portuguese"],
    specialization: "Language Tutor",
    description: "Native Spanish speaker teaching conversational Spanish and Portuguese",
    tags: ["Conversational", "Native Speaker"],
    availability: ["Tue 17-21", "Thu 17-21", "Sat 11-15"],
    language: ["Spanish", "Portuguese", "English"],
    aboutMe: "Born in Madrid, lived in Brazil for 5 years. I make language learning fun and practical through conversation.",
    teachingStyle: "Immersive conversation from day one. We'll discuss topics you care about while building your skills.",
    reviews: [
      { user: "Michelle Adams", rating: 5, comment: "Carlos makes learning Spanish fun!", date: "2026-04-18" },
      { user: "John Smith", rating: 5, comment: "Very engaging lessons", date: "2026-03-28" },
      { user: "Emma Wilson", rating: 4, comment: "Great for conversation practice", date: "2026-03-08" }
    ]
  }
];
