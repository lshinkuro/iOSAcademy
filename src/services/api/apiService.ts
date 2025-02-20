import { mockData } from './mockData';
import type { LoginCredentials, User, Program, Testimonial, Partner, Material, GoogleLoginResponse, Project } from './types';

const BASE_URL_API = import.meta.env.VITE_BASEURL;

interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export class ApiService {
  private static instance: ApiService;
  private readonly baseUrl: string;
  private readonly defaultHeaders: HeadersInit;

  private constructor() {
    this.baseUrl = BASE_URL_API;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async fetchApi<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      ...this.defaultHeaders,
      ...(localStorage.getItem('auth_token')
        ? { Authorization: `Bearer ${localStorage.getItem('auth_token')}` }
        : {}),
      ...(options?.headers || {}),
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async login(credentials: LoginCredentials): Promise<User> {
    const response = await this.fetchApi<{ token: string; user: User }>('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    const { token, user } = response.data;

    if (!user || !token) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('auth_token', token);
    const { password, ...userWithoutPassword } = user;
    return { ...userWithoutPassword, provider: 'email' };
  }

  async loginWithGoogle(response: GoogleLoginResponse): Promise<User> {
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
    const response = await this.fetchApi<Program[]>('/programs');
    return response.data;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    // Using mock data for now
    return mockData.testimonials;
  }

  async getPartners(): Promise<Partner[]> {
    // Using mock data for now
    return mockData.partners;
  }

  async getMaterials(): Promise<Material[]> {
    // Using mock data for now
    const response = await this.fetchApi<Material[]>('/materials');
    return response.data;
  }

  async getMaterialById(id: string): Promise<Material | undefined> {
    // Using mock data for now
    const response = await this.fetchApi<Material[]>('/materials');
    return response.data.find(m => m.id === id);
  }

  async getProjects(): Promise<Project[]> {
    // Using mock data for now
    return mockData.projects;
  }
}