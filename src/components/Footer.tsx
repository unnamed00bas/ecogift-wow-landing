import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground/5 to-primary/5 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-semibold gradient-text">EcoGift</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md leading-relaxed">
              Создаем атмосферу уюта в вашем доме с помощью натуральных ароматов и стильного декора ручной работы.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#catalog" className="text-foreground/70 hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#aromatics" className="text-foreground/70 hover:text-primary transition-colors">Ароматизация</a></li>
              <li><a href="#decor" className="text-foreground/70 hover:text-primary transition-colors">Декор</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">О нас</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">info@ecogift.site</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 EcoGift. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};