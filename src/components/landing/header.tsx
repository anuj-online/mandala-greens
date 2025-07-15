import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold">Mandala Greens</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href="#services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#training" className="transition-colors hover:text-primary">
            Training
          </Link>
          <Link href="#ai-consultant" className="transition-colors hover:text-primary">
            AI Consultant
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
           <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
