import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'hero-glass backdrop-blur-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-semibold gradient-text">EcoGift</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#aromatics" className="text-foreground/80 hover:text-primary transition-colors">
              Ароматизация
            </a>
            <a href="#decor" className="text-foreground/80 hover:text-primary transition-colors">
              Декор
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              О нас
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="glass" className="hidden md:inline-flex">
              Связаться
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};