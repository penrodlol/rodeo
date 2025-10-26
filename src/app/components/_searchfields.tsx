import * as SearchField from '@/components/searchfield';
import { EllipsisIcon, MicIcon, SearchIcon, UserIcon } from 'lucide-react';
import Box from '../_box';

export default function SearchFields() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-72">
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input placeholder="Type to seach..." />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input variant="soft" placeholder="Type to seach..." />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input variant="soft-outline" placeholder="Type to seach..." />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input placeholder="Type to seach..." prefix={{ source: <UserIcon /> }} />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input placeholder="Type to seach..." suffix={{ source: <SearchIcon /> }} />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.Input
            placeholder="Type to seach..."
            prefix={{ source: <UserIcon /> }}
            suffix={{ source: <SearchIcon /> }}
          />
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.Input placeholder="Type to seach..." />
            <SearchField.InputGroupButton position="prefix" icon={{ source: <MicIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.Input placeholder="Type to seach..." />
            <SearchField.InputGroupButton position="suffix" icon={{ source: <MicIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.InputGroupButton position="prefix" icon={{ source: <MicIcon /> }} />
            <SearchField.Input placeholder="Type to seach..." />
            <SearchField.InputGroupButton position="suffix" icon={{ source: <EllipsisIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.Input placeholder="Type to seach..." suffix="@" />
            <SearchField.InputGroupButton icon={{ source: <MicIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.Input placeholder="Type to seach..." suffix={{ source: <SearchIcon /> }} />
            <SearchField.InputGroupButton icon={{ source: <MicIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
        <SearchField.Root>
          <SearchField.Label>Account Search</SearchField.Label>
          <SearchField.InputGroup>
            <SearchField.Input placeholder="Type to seach..." prefix="@" suffix={{ source: <SearchIcon /> }} />
            <SearchField.InputGroupButton icon={{ source: <MicIcon /> }} />
          </SearchField.InputGroup>
          <SearchField.Description>Search accounts in system</SearchField.Description>
        </SearchField.Root>
      </Box>
    </Box>
  );
}
