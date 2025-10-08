import * as TextField from '@/components/textfield';
import { EditIcon, MailIcon, SendHorizonalIcon } from 'lucide-react';
import Box from '../_box';

export default function TextFields() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root isRequired isInvalid aria-label="Email Address">
          <TextField.Input type="email" placeholder="Enter your email" />
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled aria-label="Email Address">
          <TextField.Input type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="1" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="2" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="3" type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input variant="soft" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root isRequired isInvalid aria-label="Email Address">
          <TextField.Input variant="soft" type="email" placeholder="Enter your email" />
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled aria-label="Email Address">
          <TextField.Input variant="soft" type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="1" variant="soft" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="2" variant="soft" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="3" variant="soft" type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input variant="soft-outline" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root isRequired isInvalid aria-label="Email Address">
          <TextField.Input variant="soft-outline" type="email" placeholder="Enter your email" />
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled aria-label="Email Address">
          <TextField.Input variant="soft-outline" type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="1" variant="soft-outline" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="2" variant="soft-outline" type="email" placeholder="Enter your email" />
        </TextField.Root>
        <TextField.Root aria-label="Email Address">
          <TextField.Input elevation="3" variant="soft-outline" type="email" placeholder="Enter your email" />
        </TextField.Root>
      </Box>
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
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea resize="auto" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea resize="none" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root isRequired isInvalid>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
          <TextField.ErrorMessage>This field is required.</TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root isDisabled>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea variant="outline" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea variant="soft" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea variant="soft-outline" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
      </Box>
      <Box className="gap-12 *:w-72">
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea elevation="1" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea elevation="2" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Feedback</TextField.Label>
          <TextField.TextArea elevation="3" placeholder="Enter your feedback" />
          <TextField.Description>Provide your feedback to help us improve</TextField.Description>
        </TextField.Root>
      </Box>
    </Box>
  );
}
