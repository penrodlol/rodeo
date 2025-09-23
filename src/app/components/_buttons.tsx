import Button from '@/components/button';
import Link from '@/components/link';
import { GithubIcon, LinkIcon, Loader2Icon, TwitterIcon } from 'lucide-react';
import Box from '../_box';

// prettier-ignore
export default function Buttons() {
  return (
    <Box className="flex-col gap-6">
      <Box className=" gap-6">
        <Button variant="gray-solid">Button</Button>
        <Button variant="gray-soft">Button</Button>
        <Button variant="gray-soft-outline">Button</Button>
        <Button variant="gray-outline">Button</Button>
        <Button variant="gray-ghost">Button</Button>
        <Button variant="gray-solid" isDisabled>Button</Button>
        <Button variant="gray-soft" isDisabled>Button</Button>
        <Button variant="gray-soft-outline" isDisabled>Button</Button>
        <Button variant="gray-outline" isDisabled>Button</Button>
        <Button variant="gray-ghost" isDisabled>Button</Button>
      </Box>
      <Box className="gap-6">
        <Button variant="accent-solid">Button</Button>
        <Button variant="accent-soft">Button</Button>
        <Button variant="accent-soft-outline">Button</Button>
        <Button variant="accent-outline">Button</Button>
        <Button variant="accent-ghost">Button</Button>
        <Button variant="accent-solid" isDisabled>Button</Button>
        <Button variant="accent-soft" isDisabled>Button</Button>
        <Button variant="accent-soft-outline" isDisabled>Button</Button>
        <Button variant="accent-outline" isDisabled>Button</Button>
        <Button variant="accent-ghost" isDisabled>Button</Button>
      </Box>
      <Box className="gap-6">
        <Button variant="warn-solid">Button</Button>
        <Button variant="warn-soft">Button</Button>
        <Button variant="warn-soft-outline">Button</Button>
        <Button variant="warn-outline">Button</Button>
        <Button variant="warn-ghost">Button</Button>
        <Button variant="warn-solid" isDisabled>Button</Button>
        <Button variant="warn-soft" isDisabled>Button</Button>
        <Button variant="warn-soft-outline" isDisabled>Button</Button>
        <Button variant="warn-outline" isDisabled>Button</Button>
        <Button variant="warn-ghost" isDisabled>Button</Button>
      </Box>
      <Box className="gap-6">
        <Button variant="danger-solid">Button</Button>
        <Button variant="danger-soft">Button</Button>
        <Button variant="danger-soft-outline">Button</Button>
        <Button variant="danger-outline">Button</Button>
        <Button variant="danger-ghost">Button</Button>
        <Button variant="danger-solid" isDisabled>Button</Button>
        <Button variant="danger-soft" isDisabled>Button</Button>
        <Button variant="danger-soft-outline" isDisabled>Button</Button>
        <Button variant="danger-outline" isDisabled>Button</Button>
        <Button variant="danger-ghost" isDisabled>Button</Button>
      </Box>
      <Box className=" items-end gap-6">
        <Button variant="gray-solid" size="1">Button</Button>
        <Button variant="gray-solid" size="2">Button</Button>
        <Button variant="gray-solid" size="3">Button</Button>
      </Box>
      <Box className=" gap-6">
        <Button variant="accent-solid" size="icon"  icon={{ source: <GithubIcon /> }} />
        <Button variant="accent-soft" size="icon" icon={{ source: <GithubIcon /> }} />
        <Button variant="accent-soft-outline" size="icon" icon={{ source: <GithubIcon /> }} />
        <Button variant="accent-outline" size="icon" icon={{ source: <GithubIcon /> }} />
        <Button variant="accent-ghost" size="icon" icon={{ source: <GithubIcon /> }} />
      </Box>
      <Box className="items-end gap-6">
        <Button variant="accent-solid" size="1" icon={{ source: <TwitterIcon/> }}>Twitter</Button>
        <Button variant="accent-solid" size="2" icon={{ source: <TwitterIcon/> }}>Twitter</Button>
        <Button variant="accent-solid" size="3" icon={{ source: <TwitterIcon/> }}>Twitter</Button>
        <Button variant="accent-solid" isDisabled icon={{ source: <Loader2Icon/> }} className="motion-safe:[&_svg]:animate-spin">Loading</Button>
      </Box>
      <Box className="items-end gap-6">
        <Link href="/" buttonVariants={{ variant: 'gray-ghost' }}>Internal Link</Link>
        <Link href="http://" buttonVariants={{ variant: 'accent-ghost' }}>External Link</Link>
        <Link href="/" icon={{ source: <LinkIcon/> }} buttonVariants={{ variant: 'gray-ghost', size: 'icon' }} />
        <Link href="http://" icon={{ source: <LinkIcon/> }} buttonVariants={{ variant: 'accent-ghost', size: 'icon' }} />
      </Box>
    </Box>
  );
}
