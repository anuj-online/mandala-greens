import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Innovative Farming Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our specialized project development services tailored for modern agriculture.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl pt-12">
          <Tabs defaultValue="polyhouse" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="polyhouse">Polyhouse Development</TabsTrigger>
              <TabsTrigger value="jv-models">Joint Ventures</TabsTrigger>
              <TabsTrigger value="soil-less">Soil-less Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="polyhouse" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative h-64 w-full">
                      <Image src="https://placehold.co/600x400.png" alt="Polyhouse" fill className="rounded-md object-cover" data-ai-hint="polyhouse farm" />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      <h3 className="text-2xl font-bold">Custom Polyhouse Structures</h3>
                      <p className="text-muted-foreground">
                        We design and build state-of-the-art polyhouse structures that create optimal growing environments, increasing yield and protecting crops from adverse weather. Our solutions are tailored to your specific needs and location.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="jv-models" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                     <div className="relative h-64 w-full">
                      <Image src="https://placehold.co/600x400.png" alt="Handshake" fill className="rounded-md object-cover" data-ai-hint="business handshake" />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      <h3 className="text-2xl font-bold">Partnership & Joint Ventures</h3>
                      <p className="text-muted-foreground">
                        Our flexible joint venture and partnership models are designed to foster collaboration and shared success. We work with you to create a business model that aligns with your goals and resources, ensuring a profitable venture for all parties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="soil-less" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                     <div className="relative h-64 w-full">
                      <Image src="https://placehold.co/600x400.png" alt="Soil-less farming" fill className="rounded-md object-cover" data-ai-hint="hydroponics farm" />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      <h3 className="text-2xl font-bold">Soil-less Project Development</h3>
                      <p className="text-muted-foreground">
                        We specialize in hydroponics, aeroponics, and aquaponics systems. These soil-less methods conserve water, eliminate soil-borne diseases, and allow for high-density vertical farming, maximizing your production in any space.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
