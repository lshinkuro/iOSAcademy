export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  provider?: 'email' | 'google';
  role: 'student' | 'mentor' | 'admin';
}

export interface Program {
  id: string;
  title: string;
  type: 'regular' | 'parttime';
  duration: string;
  price: number;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Material {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null | string;
  title: string;
  description: string;
  icon: string;
  duration: number;
  lessons: number;
  learningPoints: string[];
  content: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    title: string;
    topics: string[];
    material_id: number;
  }[];
  videoCourses: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    title: string;
    description: string;
    youtube_id: string;
    duration: string;
    instructor: string;
    level: string;
    material_id: number;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  author: {
    name: string;
    batch: string;
    avatar: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface GoogleLoginResponse {
  credential: string;
}