import * as Select from '@/components/select';
import Box from '../_box';

export default function Selects() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-52">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            <Select.Option>United States</Select.Option>
            <Select.Option>Canada</Select.Option>
            <Select.Option>Mexico</Select.Option>
            <Select.Option>United Kingdom</Select.Option>
            <Select.Option>Germany</Select.Option>
            <Select.Option>France</Select.Option>
            <Select.Option>Japan</Select.Option>
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            <Select.Option>
              <Select.OptionLabel>United States</Select.OptionLabel>
              <Select.OptionDescription>20 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>Canada</Select.OptionLabel>
              <Select.OptionDescription>10 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>Mexico</Select.OptionLabel>
              <Select.OptionDescription>5 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>United Kingdom</Select.OptionLabel>
              <Select.OptionDescription>15 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>Germany</Select.OptionLabel>
              <Select.OptionDescription>8 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>France</Select.OptionLabel>
              <Select.OptionDescription>12 shipping options</Select.OptionDescription>
            </Select.Option>
            <Select.Option>
              <Select.OptionLabel>Japan</Select.OptionLabel>
              <Select.OptionDescription>18 shipping options</Select.OptionDescription>
            </Select.Option>
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Value />
          <Select.Options>
            <Select.OptionGroup>
              <Select.OptionGroupHeader>North America</Select.OptionGroupHeader>
              <Select.Option>United States</Select.Option>
              <Select.Option>Canada</Select.Option>
              <Select.Option>Mexico</Select.Option>
            </Select.OptionGroup>
            <Select.OptionGroup>
              <Select.OptionGroupHeader>Europe</Select.OptionGroupHeader>
              <Select.Option>United Kingdom</Select.Option>
              <Select.Option>Germany</Select.Option>
              <Select.Option>France</Select.Option>
            </Select.OptionGroup>
            <Select.OptionGroup>
              <Select.OptionGroupHeader>Asia</Select.OptionGroupHeader>
              <Select.Option>Japan</Select.Option>
            </Select.OptionGroup>
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
      </Box>
      <Box className="*:w-72">
        <Select.Root placeholder="Select a team member">
          <Select.Label>Team Member</Select.Label>
          <Select.Value />
          <Select.Options>
            <Select.Option orientation="horizontal">
              <Select.OptionLabel>Phoenix Baker</Select.OptionLabel>
              <Select.OptionDescription>@phoenix</Select.OptionDescription>
            </Select.Option>
            <Select.Option orientation="horizontal">
              <Select.OptionLabel>Rivera Richards</Select.OptionLabel>
              <Select.OptionDescription>@rivera</Select.OptionDescription>
            </Select.Option>
            <Select.Option orientation="horizontal">
              <Select.OptionLabel>Emerson Cooper</Select.OptionLabel>
              <Select.OptionDescription>@emerson</Select.OptionDescription>
            </Select.Option>
            <Select.Option orientation="horizontal">
              <Select.OptionLabel>Finley Howard</Select.OptionLabel>
              <Select.OptionDescription>@finley</Select.OptionDescription>
            </Select.Option>
            <Select.Option orientation="horizontal">
              <Select.OptionLabel>Reese Ward</Select.OptionLabel>
              <Select.OptionDescription>@reese</Select.OptionDescription>
            </Select.Option>
          </Select.Options>
        </Select.Root>
      </Box>
    </Box>
  );
}
