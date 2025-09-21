import Icon from '@/components/icon';
import { Sparkles } from 'lucide-react';
import Box from '../_box';

export default function Icons() {
  return (
    <Box className="flex-col gap-6">
      <Box className="items-end gap-6">
        <Icon source={<Sparkles />} size="1" />
        <Icon source={<Sparkles />} size="2" />
        <Icon source={<Sparkles />} size="3" />
      </Box>
      <Box className="gap-6">
        <Icon source={<Sparkles />} variant="soft" />
        <Icon source={<Sparkles />} variant="accent" />
        <Icon source={<Sparkles />} variant="warn" />
        <Icon source={<Sparkles />} variant="danger" />
      </Box>
    </Box>
  );
}
