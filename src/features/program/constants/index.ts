import { ProgramItem } from "../types";

export const programsData: ProgramItem[] = Array(6)
  .fill({
    id: 1,
    title: "Edukasi Pernikahan dini di SMP Negeri 5 Karawang",
    date: "21 mei 2024",
    desc: "Lorem ipsum dolor sit amet consectetur. Integer urna tempor viverra at pretium magna ac condimentum arcu Arcu platea tempor tempor tincidunt",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
  })
  .map((item, index) => ({
    ...item,
    id: index + 1,
    image: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    ][index],
  }));
