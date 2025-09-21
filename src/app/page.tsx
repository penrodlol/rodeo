import { Text } from '@/components/typography';
import Section from './_section';
import Icons from './components/_icons';
import Separators from './components/_separators';
import Typography from './components/_typography';

// prettier-ignore
export default function HomePage() {
  return (
    <>
      <Section><Text font="mono" weight="8" size="6">Typography</Text><Typography /></Section>
      <Section><Text font="mono" weight="8" size="6">Icons</Text><Icons /></Section>
      <Section><Text font="mono" weight="8" size="6">Separators</Text><Separators /></Section>
    </>
  );
}
