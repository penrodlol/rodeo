import { Text } from '@/components/typography';
import Section from './_section';
import Buttons from './components/_buttons';
import Icons from './components/_icons';
import Separators from './components/_separators';
import TextFields from './components/_textfields';
import Typography from './components/_typography';

// prettier-ignore
export default function HomePage() {
  return (
    <>
      <Section><Text font="mono" weight="8" size="8">Typography</Text><Typography /></Section>
      <Section><Text font="mono" weight="8" size="8">Buttons</Text><Buttons /></Section>
      <Section><Text font="mono" weight="8" size="8">Text Fields</Text><TextFields /></Section>
      <Section><Text font="mono" weight="8" size="8">Icons</Text><Icons /></Section>
      <Section><Text font="mono" weight="8" size="8">Separators</Text><Separators /></Section>
    </>
  );
}
