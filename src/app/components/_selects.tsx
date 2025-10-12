import * as Select from '@/components/select';
import Box from '../_box';

const COUNTRIES = [
  { name: 'United States', description: '20 shipping options' },
  { name: 'Canada', description: '10 shipping options' },
  { name: 'Mexico', description: '5 shipping options' },
  { name: 'United Kingdom', description: '15 shipping options' },
  { name: 'Germany', description: '8 shipping options' },
  { name: 'France', description: '12 shipping options' },
  { name: 'Japan', description: '18 shipping options' },
];

const COUNTRIES_BY_REGION = [
  { region: 'North America', countries: COUNTRIES.slice(0, 3) },
  { region: 'Europe', countries: COUNTRIES.slice(3, 6) },
  { region: 'Asia', countries: COUNTRIES.slice(6, 7) },
];

const ACCOUNTS = [
  { name: 'Phoenix Baker', handle: '@phoenix' },
  { name: 'Rivera Richards', handle: '@rivera' },
  { name: 'Emerson Cooper', handle: '@emerson' },
  { name: 'Finley Howard', handle: '@finley' },
  { name: 'Reese Ward', handle: '@reese' },
];

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
              <Select.Option key={country.name} textValue={country.name}>
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
            {COUNTRIES_BY_REGION.map((group) => (
              <Select.OptionGroup key={group.region}>
                <Select.OptionGroupHeader>{group.region}</Select.OptionGroupHeader>
                {group.countries.map((country) => (
                  <Select.Option key={country.name}>{country.name}</Select.Option>
                ))}
              </Select.OptionGroup>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
      </Box>
      <Box className="*:w-64">
        <Select.Root placeholder="Select a team member">
          <Select.Label>Team Member</Select.Label>
          <Select.Value descriptionVisible />
          <Select.Options optionOrientation="horizontal">
            {ACCOUNTS.map((account) => (
              <Select.Option key={account.handle} textValue={account.name}>
                <Select.OptionLabel>{account.name}</Select.OptionLabel>
                <Select.OptionDescription>{account.handle}</Select.OptionDescription>
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
    </Box>
  );
}
