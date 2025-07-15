import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function TrainingSection() {
  return (
    <section id="training" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Training & Employment</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Empowering a New Generation of Farmers</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Our programs provide the skills and opportunities needed to succeed in modern agriculture.
              </p>
            </div>
            <ul className="grid gap-3 py-4">
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Comprehensive hands-on training sessions covering all aspects of automated farming.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                <span>In-depth offline technical courses with expert instructors and practical modules.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Proven success in spot employment generation, connecting trained individuals with opportunities.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-xl">
            <Image src="https://placehold.co/600x400.png" alt="Farming training" fill className="object-cover transition-transform duration-500 hover:scale-105" data-ai-hint="agricultural training" />
          </div>
        </div>
      </div>
    </section>
  );
}
