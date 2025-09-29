import Button from '@/components/button';
import * as TextField from '@/components/textfield';
import { EditIcon, MailIcon, SendHorizonalIcon } from 'lucide-react';
import Box from '../_box';

export default function TextFields() {
  return (
    <Box className="flex-col gap-12">
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
            <TextField.InputGroupPrefix>
              <Button size="icon" variant="accent-ghost" icon={{ source: <EditIcon /> }} />
            </TextField.InputGroupPrefix>
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.Input type="email" placeholder="Enter your email" />
            <TextField.InputGroupSuffix>
              <Button size="icon" variant="accent-ghost" icon={{ source: <SendHorizonalIcon /> }} />
            </TextField.InputGroupSuffix>
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupPrefix>
              <Button size="icon" variant="accent-ghost" icon={{ source: <EditIcon /> }} />
            </TextField.InputGroupPrefix>
            <TextField.Input type="email" placeholder="Enter your email" />
            <TextField.InputGroupSuffix>
              <Button size="icon" variant="accent-ghost" icon={{ source: <SendHorizonalIcon /> }} />
            </TextField.InputGroupSuffix>
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.InputGroup>
            <TextField.InputGroupPrefix>
              <Button size="icon" variant="accent-ghost" icon={{ source: <EditIcon /> }} />
            </TextField.InputGroupPrefix>
            <TextField.Input type="email" placeholder="Enter your email" />
          </TextField.InputGroup>
          <TextField.Description>Provide a email to receive updates</TextField.Description>
        </TextField.Root>
      </Box>
    </Box>
  );
}
