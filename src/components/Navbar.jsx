"use client"; 
import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore'; // Import gudang tadi

export default function Navbar() {
  // Ambil data dari Zustand
  const { user, isLoggedIn, logout } = useAuthStore();

  return (
    <nav className="flex justify-between p-4 bg-[#0F172A]">
      <div className="text-white font-bold">PUSH ID</div>
      
      <div>
        {isLoggedIn ? (
          // TAMPILAN KALAU SUDAH LOGIN
          <div className="flex gap-4 items-center">
            <span className="text-white">Halo, {user.name}!</span>
            <button 
              onClick={logout} 
              className="bg-red-500 px-4 py-2 rounded text-white text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          // TAMPILAN KALAU BELUM LOGIN
          <Link href="/login" className="bg-blue-600 px-6 py-2 rounded text-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}