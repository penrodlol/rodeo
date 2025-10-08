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
      <Section><Typography /></Section>
      <Section><Buttons /></Section>
      <Section><TextFields /></Section>
      <Section><Icons /></Section>
      <Section><Separators /></Section>
    </>
  );
}
