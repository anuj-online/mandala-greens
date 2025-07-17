import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function GallerySection() {
  const images = [
    { src: '/images/gal-1.png', alt: 'Gallery image 1', hint: 'farm landscape' },
    { src: '/images/gal-2.png', alt: 'Gallery image 2', hint: 'greenhouse interior' },
    { src: '/images/gal-3.png', alt: 'Gallery image 3', hint: 'vegetable harvest' },
    { src: '/images/gal-4.png', alt: 'Gallery image 4', hint: 'modern agriculture' },
    { src: '/images/gal-5.png', alt: 'Gallery image 5', hint: 'dutch roses' },
    { src: '/images/gal-6.png', alt: 'Gallery image 6', hint: 'farm workers' },
  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Gallery</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Glimpse of Our Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore images from our successful projects and training programs, showcasing the future of farming.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={image.hint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
