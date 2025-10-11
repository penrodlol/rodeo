import * as Select from '@/components/select';
import Box from '../_box';

const COUNTRIES = [
  { name: 'United States', description: '20 shipping options', group: 'North America' },
  { name: 'Canada', description: '10 shipping options', group: 'North America' },
  { name: 'Mexico', description: '5 shipping options', group: 'North America' },
  { name: 'United Kingdom', description: '15 shipping options', group: 'Europe' },
  { name: 'Germany', description: '8 shipping options', group: 'Europe' },
  { name: 'France', description: '12 shipping options', group: 'Europe' },
  { name: 'Japan', description: '18 shipping options', group: 'Asia' },
];

const GROUPED_COUNTRIES = COUNTRIES.reduce(
  (groups, c) => ((groups[c.group] = [...(groups[c.group] || []), c]), groups),
  {} as Record<string, typeof COUNTRIES>,
);

export default function Selects() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-52">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name}>{country.name}</Select.Option>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name}>
                <Select.OptionLabel>{country.name}</Select.OptionLabel>
                <Select.OptionDescription>{country.description}</Select.OptionDescription>
              </Select.Option>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            {Object.entries(GROUPED_COUNTRIES).map(([group, countries]) => (
              <Select.OptionGroup key={group}>
                <Select.OptionGroupHeader>{group}</Select.OptionGroupHeader>
                {countries.map((country) => (
                  <Select.Option key={country.name}>{country.name}</Select.Option>
                ))}
              </Select.OptionGroup>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
      </Box>
    </Box>
  );
}
