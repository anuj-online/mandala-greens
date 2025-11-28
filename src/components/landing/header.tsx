"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Header() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Always show invalid credentials error regardless of input
    setShowError(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/images/logo.PNG" alt="Mandala Greens Logo" width={28} height={28} className="h-12 w-auto" />
          <span className="font-bold text-2xl">Mandala Greens</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
          <Link href="#services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#training" className="transition-colors hover:text-primary">
            Training
          </Link>
          <Link href="#gallery" className="transition-colors hover:text-primary">
            Gallery
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLogin}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  {showError && (
                    <div className="text-red-500 text-sm text-center">
                      Invalid credentials
                    </div>
                  )}
                </div>
                <DialogFooter>
                  <Button type="submit">Sign in</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}