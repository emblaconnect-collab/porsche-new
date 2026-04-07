export interface Car {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  image: string;
  heroImage: string;
  video?: string;
  specs: { label: string; value: string }[];
  colors: string[];
  description: string;
}

export const cars: Car[] = [
  {
    slug: "911-turbo-s",
    name: "911 Turbo S",
    tagline: "The pinnacle of performance.",
    category: "Sports Car",
    price: "From $233,400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS7XKcxEjjdebtM9H8E8c2yvCM_057X7WpPf5yQNbawz3k_7ZxrIsTiWzvnhj-qrL8UglchQi9sCjRI22O2B_nS4ZR0zljkqp434zg0_6_-2pN6Jlr0IGbWYdGwc7U2jsGmlu2FkfA4NTWBaLh3yOsIBlFj1duL4c9HqqN4OP5SrtdxZBUzM54_Dhv790B9gD4bjIx8T-QYDyZAbLjb2YfplEIR582hdFjGQL67VV57IeSkYxIOj2G4Iaa_SfLS8y8DLWzejRpfWz3",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS7XKcxEjjdebtM9H8E8c2yvCM_057X7WpPf5yQNbawz3k_7ZxrIsTiWzvnhj-qrL8UglchQi9sCjRI22O2B_nS4ZR0zljkqp434zg0_6_-2pN6Jlr0IGbWYdGwc7U2jsGmlu2FkfA4NTWBaLh3yOsIBlFj1duL4c9HqqN4OP5SrtdxZBUzM54_Dhv790B9gD4bjIx8T-QYDyZAbLjb2YfplEIR582hdFjGQL67VV57IeSkYxIOj2G4Iaa_SfLS8y8DLWzejRpfWz3",
    video: "/videos/911-turbo-s.mp4",
    specs: [
      { label: "Engine", value: "3.8L Twin-Turbo Flat-6" },
      { label: "Power", value: "640 hp" },
      { label: "Torque", value: "590 lb-ft" },
      { label: "0-60 mph", value: "2.6 s" },
      { label: "Top Speed", value: "205 mph" },
      { label: "Transmission", value: "8-Speed PDK" },
    ],
    colors: ["#2c2c2c", "#c0c0c0", "#fff", "#8b0000", "#1a3a5c"],
    description: "The 911 Turbo S represents the absolute pinnacle of everyday performance. With 640 horsepower and Porsche's legendary all-wheel drive, it delivers supercar performance with sports car agility.",
  },
  {
    slug: "taycan",
    name: "Taycan",
    tagline: "The soul of a Porsche, electrified.",
    category: "Electric",
    price: "From $90,900",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANRJ6ci2F2yzYVQ-KJ3stoeMwlteQ1MoLetNUAngZpTv9kF_aIEKXu7-BB4vzZ_hDjAwE2kAgUYayG4tN-Z_LMilSEZNHmtcnFgysCgOR8sHjif1eG4qaRw_Q9uCgg2u6lrdHOPiJmyW7YALPhycstOTLnS_eV7FhG1BDF-AVbnosjtZ7wYArj843_u9ZSUoebcpvlRChBfA32IJD5itaRpwoAC6A6tD4uYRdIY2BGV0FEEKmzwlmX6EDM9N8-SPav9DqN7Gedd0dL",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuANRJ6ci2F2yzYVQ-KJ3stoeMwlteQ1MoLetNUAngZpTv9kF_aIEKXu7-BB4vzZ_hDjAwE2kAgUYayG4tN-Z_LMilSEZNHmtcnFgysCgOR8sHjif1eG4qaRw_Q9uCgg2u6lrdHOPiJmyW7YALPhycstOTLnS_eV7FhG1BDF-AVbnosjtZ7wYArj843_u9ZSUoebcpvlRChBfA32IJD5itaRpwoAC6A6tD4uYRdIY2BGV0FEEKmzwlmX6EDM9N8-SPav9DqN7Gedd0dL",
    specs: [
      { label: "Motor", value: "Dual Electric" },
      { label: "Power", value: "670 hp" },
      { label: "Range", value: "504 km" },
      { label: "0-100 km/h", value: "2.8 s" },
      { label: "Charging", value: "22.5 min (10–80%)" },
      { label: "Drive", value: "All-Wheel Drive" },
    ],
    colors: ["#1a3a5c", "#2c2c2c", "#fff", "#4a9e6b", "#8b0000"],
    description: "The Taycan proves that electric mobility and driving pleasure aren't mutually exclusive. With instant torque, a low center of gravity, and range for any journey, it's Porsche reimagined for the future.",
  },
  {
    slug: "cayenne",
    name: "Cayenne",
    tagline: "SUV. Redefined.",
    category: "SUV",
    price: "From $84,800",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9uA0GYRoApPihXoxdJo9zEHO1XvtN5XCUNwzr-CPmEwOVMXphoyIL0XutKCXYPJeoRmwlbyxU618NlS_kG96_qS7PDchoKZADpCaqbgtYb9XorTBlG7EYl92qqx_06FxzFCU-giZkl_Yui7RI9n8RtKbjZYBTc-J84IHLehLeVMygy0Yy0fxnjQga2WcZnfRpt4Fu4elTK670rKzggWx9W5p50n7IekGhAohFRRN7kTqJ5ORcVrkE1OHpzRiPoL4jrwt9M66IucrH",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9uA0GYRoApPihXoxdJo9zEHO1XvtN5XCUNwzr-CPmEwOVMXphoyIL0XutKCXYPJeoRmwlbyxU618NlS_kG96_qS7PDchoKZADpCaqbgtYb9XorTBlG7EYl92qqx_06FxzFCU-giZkl_Yui7RI9n8RtKbjZYBTc-J84IHLehLeVMygy0Yy0fxnjQga2WcZnfRpt4Fu4elTK670rKzggWx9W5p50n7IekGhAohFRRN7kTqJ5ORcVrkE1OHpzRiPoL4jrwt9M66IucrH",
    specs: [
      { label: "Engine", value: "3.0L Twin-Turbo V6" },
      { label: "Power", value: "348 hp" },
      { label: "Torque", value: "368 lb-ft" },
      { label: "0-60 mph", value: "5.1 s" },
      { label: "Top Speed", value: "152 mph" },
      { label: "Drive", value: "All-Wheel Drive" },
    ],
    colors: ["#2c2c2c", "#4a4a4a", "#fff", "#8b4513", "#1a3a5c"],
    description: "The Cayenne combines the everyday usability of an SUV with pure Porsche sports car DNA. From mountain passes to city streets, it dominates every environment.",
  },
  {
    slug: "panamera",
    name: "Panamera",
    tagline: "Four doors. Zero compromises.",
    category: "Sports Sedan",
    price: "From $92,600",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3KJ1uUWh_kYVzXYqiSWe-1QRyJlHSk_KrC-Kl65iqSvxpNPwj9KYMChbliL_2N-c3QSfGIE6d1z-y7k2dWeq94hDx-8_iLFq8e9ei40tdvbPeIMlPTvak31oD0DQv4k_yWi6O3ZY2nZG4wqiSLJHvRR0XaQuph4Am8dAIgTwzRcwAdziYBgHVLrk2Tr0ymFWGEcyM35CfZnpXROY5MqW4eAe2T1Gi2UcHnPrwo0Hl0Y5wo0Vppqar7adwxCyE7p4ogemWqK4-mFZL",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3KJ1uUWh_kYVzXYqiSWe-1QRyJlHSk_KrC-Kl65iqSvxpNPwj9KYMChbliL_2N-c3QSfGIE6d1z-y7k2dWeq94hDx-8_iLFq8e9ei40tdvbPeIMlPTvak31oD0DQv4k_yWi6O3ZY2nZG4wqiSLJHvRR0XaQuph4Am8dAIgTwzRcwAdziYBgHVLrk2Tr0ymFWGEcyM35CfZnpXROY5MqW4eAe2T1Gi2UcHnPrwo0Hl0Y5wo0Vppqar7adwxCyE7p4ogemWqK4-mFZL",
    specs: [
      { label: "Engine", value: "2.9L Twin-Turbo V6" },
      { label: "Power", value: "325 hp" },
      { label: "Torque", value: "332 lb-ft" },
      { label: "0-60 mph", value: "5.3 s" },
      { label: "Top Speed", value: "164 mph" },
      { label: "Transmission", value: "8-Speed PDK" },
    ],
    colors: ["#2c2c2c", "#1a1a1a", "#c0c0c0", "#fff", "#8b0000"],
    description: "The Panamera combines four full-sized seats with the performance of a sports car. Executive comfort meets exhilarating dynamics in Porsche's definitive sports saloon.",
  },
  {
    slug: "macan",
    name: "Macan",
    tagline: "Born to perform.",
    category: "Compact SUV",
    price: "From $57,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdKZLIP7NmBXQIUtMLvbTnUxELUgbgAvlSRyMUYQz_YVcRnk045GDVoROfdy4RkyvnCNWprnZiXmsQx8jGgvJ744MhO-QeGxVM0G1m4-PZsXtRaStV1-ZVKkz_gG7AxTPegtFYemAZl8fdRPatQXCf77b2UmE4m32J9XxrmPEGeFhPfCj895h8SrwcAw5bGSlkXREiKGNaD6SsSgrH727_3fc1iNOVKDlo-wxfy0O2iTvSHQ2LMchZPuWhyYwU-wu22lk_4zwe1csB",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdKZLIP7NmBXQIUtMLvbTnUxELUgbgAvlSRyMUYQz_YVcRnk045GDVoROfdy4RkyvnCNWprnZiXmsQx8jGgvJ744MhO-QeGxVM0G1m4-PZsXtRaStV1-ZVKkz_gG7AxTPegtFYemAZl8fdRPatQXCf77b2UmE4m32J9XxrmPEGeFhPfCj895h8SrwcAw5bGSlkXREiKGNaD6SsSgrH727_3fc1iNOVKDlo-wxfy0O2iTvSHQ2LMchZPuWhyYwU-wu22lk_4zwe1csB",
    specs: [
      { label: "Motor", value: "Dual Electric" },
      { label: "Power", value: "402 hp" },
      { label: "Range", value: "613 km" },
      { label: "0-100 km/h", value: "5.1 s" },
      { label: "Top Speed", value: "220 km/h" },
      { label: "Drive", value: "All-Wheel Drive" },
    ],
    colors: ["#4a9e6b", "#2c2c2c", "#fff", "#1a3a5c", "#8b4513"],
    description: "The all-electric Macan Electric combines agile city driving with impressive long-range capability. The most dynamic compact SUV in its class, now fully electrified.",
  },
  {
    slug: "718",
    name: "718 Cayman",
    tagline: "Pure. Mid-engine. Magic.",
    category: "Sports Car",
    price: "From $65,300",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByViSJ3qW8y9rFmr1VwgY0k3WABhUOzjvX1EyiNqD-on41TLjeD84VLRGd4NYCkjHjeedcxgnzF6IedfimPQ5CQ0pwMorxXjZlNcHSAvN5ymYR1HrPRoBYxOVqjrPRszZshTlEUH_W2J6Cv3MZHC4o0zEtyRV4v5Dstrm1HijyKKXHDeAB56rRUlFLWYuI6hbIXMI3szp9qU-xUwkdn2NwDqbrl4_ZdZpzsreKwkstHbTfQVy1L8paMl_lnGNrUe-zBg2tNv1FeP4A",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuByViSJ3qW8y9rFmr1VwgY0k3WABhUOzjvX1EyiNqD-on41TLjeD84VLRGd4NYCkjHjeedcxgnzF6IedfimPQ5CQ0pwMorxXjZlNcHSAvN5ymYR1HrPRoBYxOVqjrPRszZshTlEUH_W2J6Cv3MZHC4o0zEtyRV4v5Dstrm1HijyKKXHDeAB56rRUlFLWYuI6hbIXMI3szp9qU-xUwkdn2NwDqbrl4_ZdZpzsreKwkstHbTfQVy1L8paMl_lnGNrUe-zBg2tNv1FeP4A",
    specs: [
      { label: "Engine", value: "4.0L Flat-6" },
      { label: "Power", value: "394 hp" },
      { label: "Torque", value: "309 lb-ft" },
      { label: "0-60 mph", value: "4.0 s" },
      { label: "Top Speed", value: "182 mph" },
      { label: "Layout", value: "Mid-Engine RWD" },
    ],
    colors: ["#c0c0c0", "#2c2c2c", "#8b0000", "#fff", "#4a9e6b"],
    description: "The 718 Cayman GTS 4.0 delivers the pure, unfiltered driving experience Porsche is legendary for. A naturally aspirated flat-six, mid-engine layout, and razor-sharp handling.",
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug);
}
