import Text from '@/components/text';
import Box from '../_box';

export default function Typography() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-6">
        <Text font="sans">Sans</Text>
        <Text font="serif">Serif</Text>
        <Text font="mono">Mono</Text>
      </Box>
      <Box className="gap-6">
        <Text>Normal</Text>
        <Text variant="soft">Soft</Text>
        <Text variant="accent">Accent</Text>
        <Text variant="warn">Warning</Text>
        <Text variant="danger">Danger</Text>
      </Box>
      <Box className="gap-6">
        <Text weight="1">Thin</Text>
        <Text weight="2">Extra Light</Text>
        <Text weight="3">Light</Text>
        <Text weight="4">Normal</Text>
        <Text weight="5">Medium</Text>
        <Text weight="6">Semi Bold</Text>
        <Text weight="7">Bold</Text>
        <Text weight="8">Extra Bold</Text>
        <Text weight="9">Black</Text>
      </Box>
      <Box className="gap-6">
        <Text italic>Italic</Text>
        <Text underline>Underline</Text>
      </Box>
    </Box>
  );
}
