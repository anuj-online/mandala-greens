import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Cultivating the Future of Farming
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Mandala Greens is transforming Indian agriculture through technology, smart infrastructure, and a transparent partnership model. We help farmers shift from low-income crops to high-valued exotics & floriculture using controlled-environment polyhouse farming. Our proven COM Model – Construct, Operate, Market – ensures farmers earn more with less risk.
            </p>

          </div>
          <div className="relative h-64 min-h-[300px] w-full overflow-hidden rounded-xl shadow-2xl lg:h-auto">
             <Image
                src="/images/hero.png"
                alt="Vertical Farming"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
