'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function Footer() {
  const [openDialog, setOpenDialog] = useState<'privacy' | 'terms' | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (openDialog) {
      const file = openDialog === 'privacy' ? '/content/privacy.txt' : '/content/tnc.txt';
      fetch(file)
        .then((res) => res.text())
        .then((text) => setContent(text.replace('{{date}}', new Date().toLocaleDateString())));
    } else {
      setContent('');
    }
  }, [openDialog]);

  const closeDialog = () => setOpenDialog(null);

  const renderDialogContent = () => {
    const title = openDialog === 'privacy' ? 'Privacy Policy – Mandala Greens' : 'Terms of Service – Mandala Greens';

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-md max-w-lg w-full shadow-lg max-h-[80vh] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <div className="prose max-w-none text-gray-700">
                <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          <button onClick={closeDialog} className="mt-6 text-blue-600 hover:underline">
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer id="contact" className="w-full border-t border-border/40 bg-secondary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image src="/images/logo.PNG" alt="Mandala Greens Logo" width={28} height={28} className="h-12 w-auto" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Mandala Greens. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button onClick={() => setOpenDialog('privacy')} className="transition-colors hover:text-primary">
              Privacy Policy
            </button>
            <button onClick={() => setOpenDialog('terms')} className="transition-colors hover:text-primary">
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {openDialog && renderDialogContent()}
    </>
  );
}
