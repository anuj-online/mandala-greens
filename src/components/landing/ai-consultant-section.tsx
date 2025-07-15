import AiConsultantForm from '@/components/ai-consultant-form';
import { Bot } from 'lucide-react';

export default function AiConsultantSection() {
  return (
    <section id="ai-consultant" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="rounded-full bg-primary/20 p-4">
            <Bot className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">AI-Powered Farm Consultation</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about automated or vertical farming? Our AI assistant is here to help 24/7.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-2xl">
          <AiConsultantForm />
        </div>
      </div>
    </section>
  );
}
