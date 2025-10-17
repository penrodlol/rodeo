import Spinner from '@/components/spinner';
import { LoaderIcon, LoaderPinwheelIcon, ShellIcon } from 'lucide-react';
import Box from '../_box';

export default function Spinners() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-6">
        <Spinner />
        <Spinner />
        <Spinner />
        <Spinner variant="accent" />
        <Spinner variant="accent" />
        <Spinner variant="accent" />
        <Spinner variant="soft" />
        <Spinner variant="soft" />
        <Spinner variant="soft" />
        <Spinner variant="warn" />
        <Spinner variant="warn" />
        <Spinner variant="warn" />
        <Spinner variant="danger" />
        <Spinner variant="danger" />
        <Spinner variant="danger" />
      </Box>
      <Box className="items-end gap-6">
        <Spinner size="1" />
        <Spinner size="2" />
        <Spinner size="3" />
      </Box>
      <Box className="items-end gap-6">
        <Spinner source={<LoaderIcon />} />
        <Spinner source={<LoaderPinwheelIcon />} />
        <Spinner source={<ShellIcon />} />
      </Box>
    </Box>
  );
}
