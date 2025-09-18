import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-aromatics.jpg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out parallax"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-background/95" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-primary-glow/30 animate-float delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-8 h-8 rounded-full bg-primary/10 animate-float delay-2000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full hero-glass mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Создайте атмосферу уюта</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">АРОМАТИЗАТОРЫ</span>
            <br />
            <span className="text-foreground">И ДЕКОР ДЛЯ ДОМА</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            здесь нет конвейерной безликости — только шедевры ручной работы
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="animate-glow">
              ПЕРЕЙТИ В КАТАЛОГ
            </Button>
            <Button variant="glass" size="xl">
              Узнать больше
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-foreground/50" />
        </div>
      </div>
    </section>
  );
};