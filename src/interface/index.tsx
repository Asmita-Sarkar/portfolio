export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  role: string;
  link: string;
}

export interface Experience {
  id: number,
  company: string,
  role: string,
  location: string,
  tech: string[],
}

export interface  NavbarProps{
  activeSection: string;
  isMenuOpen: boolean;
  scrollToSection: (_item: string) => void;
  setIsMenuOpen: (_item: boolean) => void;
}