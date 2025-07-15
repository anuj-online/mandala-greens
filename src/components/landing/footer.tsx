import { Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-border/40 bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/images/logo.PNG" alt="Mandala Greens Logo" width={28} height={28} className="h-12 w-auto" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Mandala Greens. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="#" className="transition-colors hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="transition-colors hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
