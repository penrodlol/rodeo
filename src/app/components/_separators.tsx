import Separator from '@/components/separator';
import Box from '../_box';

export default function Separators() {
  return (
    <Box className="flex-col gap-6">
      <Box className="flex-col gap-6">
        <Separator orientation="horizontal" className="lg:w-1/3" />
        <Separator orientation="horizontal" className="lg:w-1/2" />
        <Separator orientation="horizontal" />
      </Box>
      <Box className="items-end gap-6">
        <Separator orientation="vertical" className="h-24" />
        <Separator orientation="vertical" className="h-32" />
        <Separator orientation="vertical" className="h-40" />
      </Box>
    </Box>
  );
}
