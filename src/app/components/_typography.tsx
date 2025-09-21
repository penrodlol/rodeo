import { Currency, DateTime, Numeric, Percentage, Text, Unit } from '@/components/typography';
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
      <Box className="gap-6">
        <Numeric value={123456} />
        <Numeric value="123456" />
        <Percentage value={0.55} />
        <Percentage value="0.32" />
        <Currency value={14.99} />
        <Currency value="154.99" />
        <Unit options={{ unit: 'kilobyte' }} value={100} />
        <Unit options={{ unit: 'mile-per-hour' }} value="35" />
      </Box>
      <Box className="gap-6">
        <DateTime value={new Date()} />
        <DateTime value="09-21-2025" />
        <DateTime value="2025-09-21T12:00:00.000Z" />
        <DateTime value={new Date().getTime()} />
      </Box>
    </Box>
  );
}
