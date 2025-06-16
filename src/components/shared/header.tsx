import { useLocation, Link } from 'react-router';
import { Container } from './container';
import { useMemo } from 'react';
import { useGetArticles } from '@/hooks/useArticles';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
    { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const location = useLocation();
  const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

  const headerBg = isHome
    ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900'
    : 'bg-white';

  const textColor = isHome ? 'text-white' : 'text-gray-900';
  const linkHoverColor = isHome ? 'hover:text-violet-400' : 'hover:text-indigo-600';

  const { data: articles } = useGetArticles();

  return (
    <header className={`relative overflow-hidden transition-colors duration-500 ${headerBg}`}>
      {/* Animated circles + lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-[60%] right-10 w-16 h-16 bg-purple-400 opacity-10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-0 right-1/3 w-1 h-32 bg-gradient-to-b from-indigo-400 to-transparent rotate-45 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-12 h-12 border-2 border-violet-500 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute top-[40%] left-[20%] w-20 h-20 border-2 border-pink-500 rounded-full animate-spin-slow-reverse opacity-10"></div>
      </div>

      <Container>
        <div className="relative z-10 py-6 lg:py-10 flex flex-col items-center space-y-6">
          <div className="relative flex items-center justify-center w-full">
            {/* Left links */}
            <nav className="flex gap-6 absolute left-0">
              {LINKS.slice(0, 2).map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold ${textColor} ${linkHoverColor} bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:scale-105 transition-all`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className={`text-3xl font-black leading-none ${textColor}`}>101newSound</div>
              <div className="text-sm font-bold leading-none mt-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                MusicCollective
              </div>
            </div>

            {/* Right links */}
            <nav className="flex gap-6 absolute right-0">
              {LINKS.slice(2, 5).map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold ${textColor} ${linkHoverColor} bg-gradient-to-r from-pink-500/20 to-violet-500/20 hover:scale-105 transition-all`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Accent divider */}
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            <div className="w-1 h-1 bg-violet-500 transform rotate-45"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
        </div>
      </Container>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }
      `}</style>
    </header>
  );
}