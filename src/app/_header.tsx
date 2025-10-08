'use client';

import Button from '@/components/button';
import { Text } from '@/components/typography';
import { PowerIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-gray-6 bg-gray-1 sticky top-0 z-50 flex items-center justify-center border-b border-dashed">
      <div className="border-gray-6 flex h-12 w-full max-w-screen-2xl items-center justify-between border-x border-dashed px-20 not-lg:px-8">
        <Text />
        <Button
          size="icon"
          variant="gray-ghost"
          icon={{ source: <PowerIcon /> }}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
    </header>
  );
}
