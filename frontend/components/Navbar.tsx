'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Code2, PlusCircle, List, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-dark-layer border-b border-white/10 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2 text-brand-orange hover:text-brand-darkOrange transition-colors">
            <Code2 size={24} />
            <span className="font-bold text-xl tracking-tight">AI LeetCode</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List size={18} />
              <span>Problems</span>
            </Link>
            {isAdmin && (
              <Link 
                href="/add-problem" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/add-problem') ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
                }`}
              >
                <PlusCircle size={18} />
                <span>Add Problem</span>
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-orange to-yellow-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {user?.name.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">{user?.name}</span>
                  <span className="text-xs text-gray-400">{user?.role === 'admin' ? 'Admin' : 'User'}</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-md text-sm font-medium bg-brand-orange hover:bg-brand-darkOrange text-white transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
