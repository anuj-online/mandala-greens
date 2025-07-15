import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold">Mandala Greens</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
          <Link href="#services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#training" className="transition-colors hover:text-primary">
            Training
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
           <Button variant="outline" asChild>
            <Link href="#">Login</Link>
          </Button>
           <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
