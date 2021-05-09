interface techStackItem {
  name: string;
  bgc: string;
  color: string;
}

export interface ProjectTypes {
  id: string;
  title: string;
  description: string;
  date: string;
  techStack: {
    tech: techStackItem[];
  };
}
