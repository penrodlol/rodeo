import createPlugin from 'tailwindcss/plugin';

export default createPlugin(({ matchVariant }) => {
  matchVariant('slot', (slot) => `[data-slot="${slot}"]`);
  matchVariant('slot-self', (slot) => `&[data-slot="${slot}"]`);
  matchVariant('slot-sibling', (slot) => `&+[data-slot="${slot}"]`);
  matchVariant('slot-only', (slot) => `&:only-child[data-slot="${slot}"]`);
  matchVariant('slot-first', (slot) => `&:first-child[data-slot="${slot}"]`);
  matchVariant('slot-last', (slot) => `&:last-child[data-slot="${slot}"]`);
  matchVariant('slot-focus-visible', (slot) => `&:focus-visible[data-slot="${slot}"]`);
  matchVariant('slot-disabled', (slot) => `&:disabled[data-slot="${slot}"]`);
  matchVariant('slot-user-invalid', (slot) => `&:user-invalid[data-slot="${slot}"]`);
});
