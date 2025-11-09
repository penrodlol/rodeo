import * as SwitchField from '@/components/switchfield';
import * as SwitchFieldGroup from '@/components/switchfield-group';
import Box from '../_box';

export default function SwitchFields() {
  return (
    <Box className="flex-col gap-6">
      <Box className="gap-6">
        <SwitchField.Switch variant="gray-solid" aria-label="Notifications" />
        <SwitchField.Switch variant="gray-soft" aria-label="Notifications" />
        <SwitchField.Switch variant="gray-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch variant="gray-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="gray-solid" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="gray-soft" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="gray-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="gray-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="gray-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="gray-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="gray-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="gray-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="gray-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="gray-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="gray-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="gray-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="gray-soft-outline" aria-label="Notifications" />
      </Box>
      <Box className="gap-6">
        <SwitchField.Switch variant="accent-solid" aria-label="Notifications" />
        <SwitchField.Switch variant="accent-soft" aria-label="Notifications" />
        <SwitchField.Switch variant="accent-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch variant="accent-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="accent-solid" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="accent-soft" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="accent-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="accent-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="accent-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="accent-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="accent-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="accent-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="accent-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="accent-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="accent-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="accent-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="accent-soft-outline" aria-label="Notifications" />
      </Box>
      <Box className="gap-6">
        <SwitchField.Switch variant="warn-solid" aria-label="Notifications" />
        <SwitchField.Switch variant="warn-soft" aria-label="Notifications" />
        <SwitchField.Switch variant="warn-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch variant="warn-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="warn-solid" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="warn-soft" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="warn-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="warn-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="warn-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="warn-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="warn-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="warn-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="warn-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="warn-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="warn-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="warn-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="warn-soft-outline" aria-label="Notifications" />
      </Box>
      <Box className="gap-6">
        <SwitchField.Switch variant="danger-solid" aria-label="Notifications" />
        <SwitchField.Switch variant="danger-soft" aria-label="Notifications" />
        <SwitchField.Switch variant="danger-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch variant="danger-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="danger-solid" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="danger-soft" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="danger-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch isDisabled variant="danger-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="danger-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="danger-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="1" variant="danger-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="danger-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="danger-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="2" variant="danger-soft-outline" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="danger-solid" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="danger-soft" aria-label="Notifications" />
        <SwitchField.Switch elevation="3" variant="danger-soft-outline" aria-label="Notifications" />
      </Box>
      <Box className="gap-6">
        <SwitchField.Switch size="1" aria-label="Notifications" />
        <SwitchField.Switch size="2" aria-label="Notifications" />
        <SwitchField.Switch size="3" aria-label="Notifications" />
      </Box>
      <Box className="gap-6">
        <SwitchField.Root>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
        </SwitchField.Root>
        <SwitchField.Root isDisabled>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
        </SwitchField.Root>
      </Box>
      <Box className="gap-6">
        <SwitchField.Root>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Description>Receive software updates</SwitchField.Description>
        </SwitchField.Root>
        <SwitchField.Root isDisabled>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Description>Receive software updates</SwitchField.Description>
        </SwitchField.Root>
      </Box>
      <Box className="items-center gap-6 *:w-80">
        <SwitchFieldGroup.Root>
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
          <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="soft">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
          <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
          <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
          <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
        </SwitchFieldGroup.Root>
      </Box>
      <Box className="items-center gap-6 *:w-80">
        <SwitchFieldGroup.Root>
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch>Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
            <SwitchField.Description>Receive SMS alerts on your phone</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="soft">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch>Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
            <SwitchField.Description>Receive SMS alerts on your phone</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch>Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
            <SwitchField.Description>Receive SMS alerts on your phone</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root variant="outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch>Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
            <SwitchField.Description>Receive SMS alerts on your phone</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
      </Box>
      <Box className="items-center gap-6 *:w-80">
        <SwitchFieldGroup.Root elevation="1" variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch elevation="1">Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch elevation="1">Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root elevation="2" variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch elevation="2">Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch elevation="2">Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root elevation="3" variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch elevation="3">Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch elevation="3">Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
      </Box>
      <Box className="items-end gap-6">
        <SwitchFieldGroup.Root orientation="horizontal" variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Switch>Notifications</SwitchField.Switch>
          <SwitchField.Switch>Marketing</SwitchField.Switch>
          <SwitchField.Switch>SMS Alerts</SwitchField.Switch>
        </SwitchFieldGroup.Root>
        <SwitchFieldGroup.Root orientation="horizontal" variant="soft-outline">
          <SwitchFieldGroup.Label>System Preferences</SwitchFieldGroup.Label>
          <SwitchField.Root>
            <SwitchField.Switch>Notifications</SwitchField.Switch>
            <SwitchField.Description>Receive software updates</SwitchField.Description>
          </SwitchField.Root>
          <SwitchField.Root>
            <SwitchField.Switch>Marketing Emails</SwitchField.Switch>
            <SwitchField.Description>Receive marketing emails and offers</SwitchField.Description>
          </SwitchField.Root>
        </SwitchFieldGroup.Root>
      </Box>
    </Box>
  );
}
