import { parse, renderSync, type Node } from 'ultrahtml';
import querySelectorAll from 'ultrahtml/selector';

export class componentProvider {
  private _html!: string;
  private _htmlParsed!: Node;
  private _slots: Map<string, (props: any) => any> = new Map();

  constructor(html: typeof this._html) {
    if (!html) return;
    this._html = html;
    this._htmlParsed = parse(html);
  }

  static create(html: string) {
    return new componentProvider(html);
  }

  generateId() {
    return crypto.randomUUID();
  }

  hasSlot(slot: string) {
    return !!querySelectorAll(this._htmlParsed, `[data-slot="${slot}"]`).length;
  }

  provideContext(slots: Record<string, (props: any) => any>) {
    Object.entries(slots).forEach(([slot, callback]) => this._slots.set(slot, callback));
  }

  render() {
    if (!this._html || !this._slots.size) return this._html;

    const selector = Array.from(this._slots.keys())
      .map((slot) => `[data-slot="${slot}"]`)
      .join(',');

    querySelectorAll(this._htmlParsed, selector).forEach((node) => {
      const slot = this._slots.get(node.attributes['data-slot']);
      if (!slot) return;

      const attributes = Object.entries(slot(node.attributes))
        .filter(([_, value]) => value != null)
        .reduce((acc, [key, value]) => {
          if (value == null || value === false) return acc;
          else if (typeof value === 'string') return { ...acc, [key]: value.replace(/"/g, '&quot;') };
          else return { ...acc, [key]: value === true ? '' : value };
        }, {});

      node.attributes = { ...attributes, ...node.attributes };
    });

    return renderSync(this._htmlParsed);
  }
}
