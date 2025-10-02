import createPlugin from 'tailwindcss/plugin';

export default createPlugin(({ matchVariant }) => matchVariant('slot', (slot) => `[data-slot="${slot}"]`));
