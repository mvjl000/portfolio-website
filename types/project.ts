interface techStackItem {
  name: string;
  bgc: string;
  color: string;
}

export interface ProjectTypes {
  id: string;
  title: string;
  enDescription: string;
  plDescription: string;
  image: {
    url: string;
    alt: string;
  };
  date: string;
  techStack: {
    tech: techStackItem[];
  };
  link: string;
  github?: string;
}
