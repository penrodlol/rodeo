'use client';

import * as Select from '@/components/select';
import { BirdIcon, MailIcon, MessagesSquareIcon, PhoneCallIcon } from 'lucide-react';
import { Collection } from 'react-aria-components';
import { useAsyncList } from 'react-stately';
import Box from '../_box';

const COUNTRIES = [
  { name: 'United States', description: '19 shipping options', disabled: false },
  { name: 'Canada', description: '10 shipping options', disabled: false },
  { name: 'Mexico', description: '5 shipping options', disabled: false },
  { name: 'Germany', description: '8 shipping options', disabled: true },
  { name: 'France', description: '12 shipping options', disabled: false },
  { name: 'Japan', description: '18 shipping options', disabled: false },
];

const COUNTRIES_BY_REGION = [
  { region: 'North America', countries: COUNTRIES.slice(0, 3) },
  { region: 'Europe', countries: COUNTRIES.slice(3, 5) },
  { region: 'Asia', countries: COUNTRIES.slice(5, 6) },
];

export default function Selects() {
  const optionsAsync = useAsyncList<{ name: string }>({
    async load({ cursor }) {
      if (cursor) await new Promise((resolve) => setTimeout(resolve, 5000));
      const start = cursor ? Number(cursor) : 1;
      const items = Array.from({ length: 20 }, (_, i) => ({ name: `Option ${start + i}` }));
      const nextCursor = start + 20 <= 151 ? String(start + 20) : undefined;
      return { items, cursor: nextCursor };
    },
  });

  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isRequired isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="1" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="2" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="3" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isRequired isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="1" variant="soft" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="2" variant="soft" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="3" variant="soft" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isRequired isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="1" variant="soft-outline" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="2" variant="soft-outline" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="3" variant="soft-outline" />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isRequired isInvalid placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isRequired isInvalid placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} textValue={country.name} isDisabled={country.disabled}>
                <Select.OptionLabel>{country.name}</Select.OptionLabel>
                <Select.OptionDescription>{country.description}</Select.OptionDescription>
              </Select.Option>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger descriptionVisible />
          <Select.Options optionOrientation="horizontal">
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} textValue={country.name} isDisabled={country.disabled}>
                <Select.OptionLabel>{country.name}</Select.OptionLabel>
                <Select.OptionDescription>{country.description}</Select.OptionDescription>
              </Select.Option>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Options>
            {COUNTRIES_BY_REGION.map((group) => (
              <Select.OptionGroup key={group.region}>
                <Select.OptionGroupHeader>{group.region}</Select.OptionGroupHeader>
                {group.countries.map((country) => (
                  <Select.Option key={country.name} isDisabled={country.disabled}>
                    {country.name}
                  </Select.Option>
                ))}
              </Select.OptionGroup>
            ))}
          </Select.Options>
          <Select.Description>Select your shipping country</Select.Description>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a device">
          <Select.Label>Device Notifications</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your device for notifications</Select.Description>
          <Select.Options>
            <Select.Option textValue="text message" icon={{ source: <MessagesSquareIcon /> }}>
              Text Message
            </Select.Option>
            <Select.Option textValue="email" icon={{ source: <MailIcon /> }}>
              Email
            </Select.Option>
            <Select.Option textValue="phone call" icon={{ source: <PhoneCallIcon /> }}>
              Phone Call
            </Select.Option>
            <Select.Option textValue="messenger pigeon" icon={{ source: <BirdIcon /> }}>
              Messenger Pigeon
            </Select.Option>
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a country" selectionMode="multiple">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Options>
            {COUNTRIES.map((country) => (
              <Select.Option key={country.name} isDisabled={country.disabled}>
                {country.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select a project">
          <Select.Label>Project Type</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your project type</Select.Description>
          <Select.Options>
            <Select.Option href="/">Create new...</Select.Option>
            <Select.Option>Proposal</Select.Option>
            <Select.Option>Budget</Select.Option>
            <Select.Option>Onboarding</Select.Option>
          </Select.Options>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Options>
            <Collection items={COUNTRIES}>
              {(item) => <Select.Option id={item.name}>{item.name}</Select.Option>}
            </Collection>
          </Select.Options>
        </Select.Root>
        <Select.Root placeholder="Select an option">
          <Select.Label>Option Choice</Select.Label>
          <Select.Trigger />
          <Select.Description>Select an option</Select.Description>
          <Select.Options>
            <Collection items={optionsAsync.items}>
              {(item) => <Select.Option id={item.name}>{item.name}</Select.Option>}
            </Collection>
            <Select.OptionLoadMore
              onLoadMore={optionsAsync.loadMore}
              isLoading={optionsAsync.loadingState === 'loadingMore'}
            />
          </Select.Options>
        </Select.Root>
      </Box>
    </Box>
  );
}
