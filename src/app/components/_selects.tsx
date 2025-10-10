import * as Select from '@/components/select';
import Box from '../_box';

export default function Selects() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-72">
        <Select.Root>
          <Select.Label>Favorite Animal</Select.Label>
          <Select.Value />
          <Select.Options>
            <Select.Option>Cat</Select.Option>
            <Select.Option>Dog</Select.Option>
            <Select.Option>Bird</Select.Option>
            <Select.Option>Hamster</Select.Option>
            <Select.Option>Snake</Select.Option>
            <Select.Option>Lizard</Select.Option>
            <Select.Option>Fish</Select.Option>
          </Select.Options>
          <Select.Description>Select your favorite animal</Select.Description>
        </Select.Root>
      </Box>
    </Box>
  );
}
