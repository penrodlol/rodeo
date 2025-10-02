import * as TextField from '@/components/textfield';
import { EditIcon, MailIcon, SendHorizonalIcon } from 'lucide-react';
import Box from '../_box';

export default function TextFields() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root isRequired isInvalid>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root isRequired isInvalid>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Donation Amount</TextField.Label>
          <TextField.Input placeholder="Enter your donation" prefix="$" />
          <TextField.Description>Provide a donation amount for the cause</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Donation Amount</TextField.Label>
          <TextField.Input placeholder="Enter your donation" suffix="$" />
          <TextField.Description>Provide a donation amount for the cause</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Donation Amount</TextField.Label>
          <TextField.Input placeholder="Enter your donation" prefix="$" suffix="$" />
          <TextField.Description>Provide a donation amount for the cause</TextField.Description>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Donation Amount</TextField.Label>
          <TextField.Input placeholder="Enter your donation" prefix="$" />
          <TextField.Description>Provide a donation amount for the cause</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" prefix={{ source: <MailIcon /> }} />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" suffix={{ source: <MailIcon /> }} />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input
            type="email"
            placeholder="Enter your email"
            prefix={{ source: <MailIcon /> }}
            suffix={{ source: <MailIcon /> }}
          />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input type="email" placeholder="Enter your email" prefix={{ source: <MailIcon /> }} />
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.Input type="email" placeholder="Enter your email" />
            <TextField.InputGroupButton position="prefix" aria-label="Edit" icon={{ source: <EditIcon /> }} />
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.Input type="email" placeholder="Enter your email" />
            <TextField.InputGroupButton position="suffix" aria-label="Send" icon={{ source: <SendHorizonalIcon /> }} />
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupButton position="prefix" aria-label="Edit" icon={{ source: <EditIcon /> }} />
            <TextField.Input type="email" placeholder="Enter your email" />
            <TextField.InputGroupButton position="suffix" aria-label="Send" icon={{ source: <SendHorizonalIcon /> }} />
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupButton position="prefix" aria-label="Edit" icon={{ source: <EditIcon /> }} />
            <TextField.Input type="email" placeholder="Enter your email" />
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Website Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupText position="prefix">https://</TextField.InputGroupText>
            <TextField.Input type="url" placeholder="Enter your website" />
          </TextField.InputGroup>
          <TextField.Description>Provide a website address to showcase</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Website Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.Input type="url" placeholder="Enter your website" />
            <TextField.InputGroupText position="suffix">.com</TextField.InputGroupText>
          </TextField.InputGroup>
          <TextField.Description>Provide a website address to showcase</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Website Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupText position="prefix">https://</TextField.InputGroupText>
            <TextField.Input type="url" placeholder="Enter your website" />
            <TextField.InputGroupText position="suffix">.com</TextField.InputGroupText>
          </TextField.InputGroup>
          <TextField.Description>Provide a website address to showcase</TextField.Description>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Website Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupText position="prefix">https://</TextField.InputGroupText>
            <TextField.Input type="url" placeholder="Enter your website" />
          </TextField.InputGroup>
          <TextField.Description>Provide a website address to showcase</TextField.Description>
        </TextField.Root>
      </Box>
    </Box>
  );
}
