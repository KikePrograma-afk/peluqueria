import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { LogIn, LogOut, User } from 'lucide-react';

export const AuthButton = () => {
  const { user, signInWithGoogle, signOut } = useAuthStore();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span className="text-sm">
            {user.lili_coins} Lili Coins
          </span>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 text-sm text-secondary-600 hover:text-secondary-900"
        >
          <LogOut className="w-4 h-4" />
          Salir
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="flex items-center gap-2 btn btn-primary"
    >
      <LogIn className="w-4 h-4" />
      Ingresar con Google
    </button>
  );
};