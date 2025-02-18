import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ApiService } from '../services/api/apiService';
import type { User, Program, Testimonial, Partner, Material, Project, GoogleLoginResponse } from '../services/api/types';

const api = ApiService.getInstance();

interface BootcampStore {
  // State
  user: User | null;
  isAuthenticated: boolean;
  programs: Program[];
  testimonials: Testimonial[];
  partners: Partner[];
  materials: Material[];
  projects: Project[];
  selectedProgram: Program | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setSelectedProgram: (program: Program | null) => void;
  getMaterialById: (id: string) => Material | undefined;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (response: GoogleLoginResponse) => Promise<void>;
  logout: () => void;
  fetchPublicData: () => Promise<void>;
  fetchPrograms: () => Promise<void>;
  fetchTestimonials: () => Promise<void>;
  fetchPartners: () => Promise<void>;
  fetchMaterials: () => Promise<void>;
  fetchProjects: () => Promise<void>;
}

export const useBootcampStore = create<BootcampStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      programs: [],
      testimonials: [],
      partners: [],
      materials: [],
      projects: [],
      selectedProgram: null,
      isLoading: false,
      error: null,

      // Actions
      setSelectedProgram: (program) => set({ selectedProgram: program }),
      
      getMaterialById: (id) => get().materials.find(m => m.id === id),
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const user = await api.login({ email, password });
          set({ user, isAuthenticated: true });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      loginWithGoogle: async (response: GoogleLoginResponse) => {
        set({ isLoading: true, error: null });
        try {
          const user = await api.loginWithGoogle(response);
          set({ user, isAuthenticated: true });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          selectedProgram: null,
        });
      },

      fetchPublicData: async () => {
        await Promise.all([
          get().fetchPrograms(),
          get().fetchTestimonials(),
          get().fetchPartners(),
          get().fetchMaterials(),
          get().fetchProjects(),
        ]);
      },

      fetchPrograms: async () => {
        set({ isLoading: true, error: null });
        try {
          const programs = await api.getPrograms();
          set({ programs });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ isLoading: false });
        }
      },

      fetchTestimonials: async () => {
        set({ isLoading: true, error: null });
        try {
          const testimonials = await api.getTestimonials();
          set({ testimonials });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPartners: async () => {
        set({ isLoading: true, error: null });
        try {
          const partners = await api.getPartners();
          set({ partners });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ isLoading: false });
        }
      },

      fetchMaterials: async () => {
        set({ isLoading: true, error: null });
        try {
          const materials = await api.getMaterials();
          set({ materials });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ isLoading: false });
        }
      },

      fetchProjects: async () => {
        set({ isLoading: true, error: null });
        try {
          const projects = await api.getProjects();
          set({ projects });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'bootcamp-store'
    }
  )
);