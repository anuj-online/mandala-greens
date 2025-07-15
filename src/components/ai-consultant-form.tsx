"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { askAi } from '@/app/actions';

const formSchema = z.object({
  query: z.string().min(10, {
    message: "Please enter a query of at least 10 characters.",
  }),
});

export default function AiConsultantForm() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResponse("");
    setError("");
    try {
      const result = await askAi({ query: values.query });
      if (result && result.answer) {
        setResponse(result.answer);
      } else {
        setError("Sorry, I couldn't get a response. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>Ask a Question</CardTitle>
        <CardDescription>Get instant answers from our AI expert.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., What are the benefits of vertical farming?"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Advice
            </Button>
          </form>
        </Form>
        {isLoading && (
            <div className="mt-6 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-2">Thinking...</p>
            </div>
        )}
        {error && !isLoading && (
            <p className="mt-6 text-center text-destructive">{error}</p>
        )}
        {response && !isLoading && (
          <Card className="mt-6 bg-secondary">
            <CardHeader>
              <CardTitle>AI Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm">{response}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
