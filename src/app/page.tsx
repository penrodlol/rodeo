import Section from './_section';
import Buttons from './components/_buttons';
import Icons from './components/_icons';
import SearchFields from './components/_searchfields';
import Selects from './components/_selects';
import Separators from './components/_separators';
import Spinners from './components/_spinners';
import TextFields from './components/_textfields';
import Typography from './components/_typography';

// prettier-ignore
export default function HomePage() {
  return (
    <>
      <Section><Typography /></Section>
      <Section><Buttons /></Section>
      <Section><TextFields /></Section>
      <Section><SearchFields /></Section>
      <Section><Selects /></Section>
      <Section><Icons /></Section>
      <Section><Spinners /></Section>
      <Section><Separators /></Section>
    </>
  );
}
