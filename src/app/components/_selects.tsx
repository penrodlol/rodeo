'use client';

import * as SearchField from '@/components/searchfield';
import * as Select from '@/components/select';
import { BirdIcon, FlagIcon, MailIcon, MessagesSquareIcon, MicIcon, PhoneCallIcon, SearchIcon } from 'lucide-react';
import { Collection, useFilter } from 'react-aria-components';
import { useAsyncList } from 'react-stately';
import Box from '../_box';

const COUNTRIES = [
  { name: 'United States', description: '19 shipping options' },
  { name: 'Canada', description: '10 shipping options' },
  { name: 'Mexico', description: '5 shipping options' },
  { name: 'Germany', description: '8 shipping options' },
  { name: 'France', description: '12 shipping options' },
  { name: 'Japan', description: '18 shipping options' },
];

const COUNTRIES_BY_REGION = [
  { region: 'North America', countries: COUNTRIES.slice(0, 3) },
  { region: 'Europe', countries: COUNTRIES.slice(3, 5) },
  { region: 'Asia', countries: COUNTRIES.slice(5, 6) },
];

const LARGE_COUNTRIES = Array.from({ length: 100 }, (_, i) => ({
  name: `Country ${i + 1}`,
  description: `${Math.floor(Math.random() * 20) + 1} shipping options`,
}));

export default function Selects() {
  const { contains } = useFilter({ sensitivity: 'base' });
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
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="1" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="2" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger elevation="3" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" elevation="1" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" elevation="2" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft" elevation="3" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isInvalid placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" elevation="1" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" elevation="2" />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" aria-label="Shipping Country">
          <Select.Trigger variant="soft-outline" elevation="3" />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isInvalid isRequired placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isInvalid isRequired placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.ErrorMessage>Country is required</Select.ErrorMessage>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root isDisabled placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger prefix="$" />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger suffix="$" />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger prefix="$" suffix="$" />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger prefix={{ source: <FlagIcon /> }} />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger suffix={{ source: <FlagIcon /> }} />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger prefix={{ source: <FlagIcon /> }} suffix={{ source: <FlagIcon /> }} />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES} itemOrientation="vertical">
              {({ name, description }) => (
                <Select.Item id={name} textValue={name}>
                  <Select.ItemLabel>{name}</Select.ItemLabel>
                  <Select.ItemDescription>{description}</Select.ItemDescription>
                </Select.Item>
              )}
            </Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger descriptionVisible />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES} itemOrientation="horizontal">
              {({ name, description }) => (
                <Select.Item id={name} textValue={name}>
                  <Select.ItemLabel>{name}</Select.ItemLabel>
                  <Select.ItemDescription>{description}</Select.ItemDescription>
                </Select.Item>
              )}
            </Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES_BY_REGION}>
              {({ region, countries }) => (
                <Select.ItemsGroup id={region}>
                  <Select.ItemsGroupHeader>{region}</Select.ItemsGroupHeader>
                  <Collection items={countries}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Collection>
                </Select.ItemsGroup>
              )}
            </Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a device">
          <Select.Label>Device Notifications</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your device for notifications</Select.Description>
          <Select.Content>
            <Select.Items>
              <Select.Item textValue="Text Message" icon={{ source: <MessagesSquareIcon /> }}>
                Text Message
              </Select.Item>
              <Select.Item textValue="Email" icon={{ source: <MailIcon /> }}>
                Email
              </Select.Item>
              <Select.Item textValue="Phone Call" icon={{ source: <PhoneCallIcon /> }}>
                Phone Call
              </Select.Item>
              <Select.Item textValue="Messenger Pigeon" icon={{ source: <BirdIcon /> }}>
                Messenger Pigeon
              </Select.Item>
            </Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country" selectionMode="multiple">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content>
            <Select.Items items={COUNTRIES}>{({ name }) => <Select.Item id={name}>{name}</Select.Item>}</Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a project">
          <Select.Label>Project Type</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your project type</Select.Description>
          <Select.Content>
            <Select.Items>
              <Select.Item href="/">Create new...</Select.Item>
              <Select.Item>Proposal</Select.Item>
              <Select.Item>Budget</Select.Item>
              <Select.Item>Onboarding</Select.Item>
            </Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select an option">
          <Select.Label>Option Choice</Select.Label>
          <Select.Trigger />
          <Select.Description>Select an option</Select.Description>
          <Select.Content>
            <Select.Items>
              <Collection items={optionsAsync.items}>
                {(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
              </Collection>
              <Select.ItemLoadMore
                onLoadMore={optionsAsync.loadMore}
                isLoading={optionsAsync.loadingState === 'loadingMore'}
              />
            </Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a country">
          <Select.Label>Shipping Country</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your shipping country</Select.Description>
          <Select.Content filterProps={{ filter: contains }}>
            <SearchField.Root aria-label="Search countries" autoFocus>
              <SearchField.InputGroup>
                <SearchField.Input placeholder="Search countries..." prefix={{ source: <SearchIcon /> }} />
                <SearchField.InputGroupButton position="suffix" icon={{ source: <MicIcon /> }} />
              </SearchField.InputGroup>
            </SearchField.Root>
            <Select.Items items={COUNTRIES}>
              {({ name, description }) => (
                <Select.Item id={name} textValue={name}>
                  <Select.ItemLabel>{name}</Select.ItemLabel>
                  <Select.ItemDescription>{description}</Select.ItemDescription>
                </Select.Item>
              )}
            </Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <Select.Root placeholder="Select a project">
          <Select.Label>Project Type</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your project type</Select.Description>
          <Select.Content>
            <Select.Items itemsVirtualized={LARGE_COUNTRIES}>
              {({ name }) => <Select.Item id={name}>{name}</Select.Item>}
            </Select.Items>
          </Select.Content>
        </Select.Root>
        <Select.Root placeholder="Select a project">
          <Select.Label>Project Type</Select.Label>
          <Select.Trigger />
          <Select.Description>Select your project type</Select.Description>
          <Select.Content>
            <Select.Items
              itemsVirtualized={LARGE_COUNTRIES}
              virtualizerProps={{ layoutOptions: Select.SELECT_VIRTUAL_ROW_MULTILINE_LAYOUT_OPTIONS }}
            >
              {({ name, description }) => (
                <Select.Item id={name} textValue={name}>
                  <Select.ItemLabel>{name}</Select.ItemLabel>
                  <Select.ItemDescription>{description}</Select.ItemDescription>
                </Select.Item>
              )}
            </Select.Items>
          </Select.Content>
        </Select.Root>
      </Box>
    </Box>
  );
}
