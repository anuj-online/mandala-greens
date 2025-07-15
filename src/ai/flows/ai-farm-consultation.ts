'use server';

/**
 * @fileOverview An AI-powered consultation tool for answering general questions about automated farms and vertical farming.
 *
 * - aiFarmConsultation - A function that handles the AI consultation process.
 * - AiFarmConsultationInput - The input type for the aiFarmConsultation function.
 * - AiFarmConsultationOutput - The return type for the aiFarmConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiFarmConsultationInputSchema = z.object({
  query: z.string().describe('The user query about automated farms and vertical farming.'),
});
export type AiFarmConsultationInput = z.infer<typeof AiFarmConsultationInputSchema>;

const AiFarmConsultationOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AiFarmConsultationOutput = z.infer<typeof AiFarmConsultationOutputSchema>;

export async function aiFarmConsultation(input: AiFarmConsultationInput): Promise<AiFarmConsultationOutput> {
  return aiFarmConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiFarmConsultationPrompt',
  input: {schema: AiFarmConsultationInputSchema},
  output: {schema: AiFarmConsultationOutputSchema},
  prompt: `You are an AI assistant specialized in providing information about automated farms and vertical farming.

  Respond to the following user query with accurate and helpful information. If the question is not about automated farms and vertical farming or is irrelevant, respond with that you can only answer questions about automated farms and vertical farming.
  Query: {{{query}}} `,
});

const aiFarmConsultationFlow = ai.defineFlow(
  {
    name: 'aiFarmConsultationFlow',
    inputSchema: AiFarmConsultationInputSchema,
    outputSchema: AiFarmConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
