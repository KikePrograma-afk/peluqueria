import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  lili_coins: number;
  is_admin: boolean;
}

interface AuthState {
  user: Profile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signInWithGoogle: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
    if (error) throw error;
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  loadUser: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profile) {
          set({ user: profile });
        }
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      set({ loading: false });
    }
  }
}));