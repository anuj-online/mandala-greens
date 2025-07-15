import { Briefcase, Cpu, GraduationCap, Handshake, Sprout, Users, BookOpen, Building, LifeBuoy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  { icon: Briefcase, title: 'A-Z Business Assistance', description: 'From structure development to the sale of produce.' },
  { icon: LifeBuoy, title: '24/7 Agronomic Consultation', description: 'Round-the-clock assistance and expert advice.' },
  { icon: GraduationCap, title: 'Hands-on Training', description: 'Practical, on-site training for modern farming techniques.' },
  { icon: Users, title: 'Spot Employment Generation', description: 'Creating job opportunities within the community.' },
  { icon: Cpu, title: 'AI Controlled Automated Farms', description: 'Leveraging AI for precision farming and automation.' },
  { icon: Building, title: 'Polyhouse Structure Development', description: 'Expert design and construction of polyhouses.' },
  { icon: Handshake, title: 'Joint Venture/Partnership Models', description: 'Flexible partnership opportunities for growth.' },
  { icon: Sprout, title: 'Vertical & Soil-less Farming', description: 'Indoor/outdoor vertical farms and soil-less projects.' },
  { icon: BookOpen, title: 'Offline Technical Training', description: 'In-depth, classroom-based technical farming education.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive support for every stage of your agricultural venture.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/20 p-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
