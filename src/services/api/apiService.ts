import { mockData } from './mockData';
import type { LoginCredentials, User, Program, Testimonial, Partner, Material, GoogleLoginResponse, Project } from './types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ApiService {
  private static instance: ApiService;

  private constructor() {}

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async login(credentials: LoginCredentials): Promise<User> {
    await delay(500); // Simulate network delay

    const user = mockData.users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;
    return { ...userWithoutPassword, provider: 'email' };
  }

  async loginWithGoogle(response: GoogleLoginResponse): Promise<User> {
    await delay(500); // Simulate network delay

    const decoded: any = jwt_decode(response.credential);
    
    return {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
      provider: 'google'
    };
  }

  async getPrograms(): Promise<Program[]> {
    await delay(300);
    return mockData.programs;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    await delay(300);
    return mockData.testimonials;
  }

  async getPartners(): Promise<Partner[]> {
    await delay(300);
    return mockData.partners;
  }

  async getMaterials(): Promise<Material[]> {
    await delay(300);
    return mockData.materials;
  }

  async getMaterialById(id: string): Promise<Material | undefined> {
    await delay(300);
    return mockData.materials.find(m => m.id === id);
  }

  async getProjects(): Promise<Project[]> {
    await delay(300);
    return mockData.projects;
  }
}