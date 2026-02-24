import createPlugin from 'tailwindcss/plugin';

export default createPlugin(({ matchVariant }) => {
  matchVariant('slot', (slot) => `[data-slot="${slot}"]`);
  matchVariant('slot-self', (slot) => `&[data-slot="${slot}"]`);
  matchVariant('slot-sibling', (slot) => `&+[data-slot="${slot}"]`);
});
