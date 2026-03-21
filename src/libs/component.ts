import { select, selectAll } from 'hast-util-select';
import { rehype } from 'rehype';

type Node = ReturnType<ReturnType<typeof rehype>['parse']>;

export class componentProvider {
  private _html!: string;
  private _htmlParsed!: Node;
  private _processor = this._createProcessor();
  private _slots = new Map<string, (props: any) => any>();

  constructor(html: typeof this._html) {
    if (!html) return;
    this._html = html;
    this._htmlParsed = this._createProcessor().parse(this._html);
  }

  static create(html: string) {
    return new componentProvider(html);
  }

  generateId() {
    return crypto.randomUUID();
  }

  hasSlot(slot: string) {
    return !!select(`[data-slot="${slot}"]`, this._htmlParsed);
  }

  getSlotProps(slot: string) {
    return select(`[data-slot="${slot}"]`, this._htmlParsed)?.properties;
  }

  provideContext(slots: Record<string, (props: any) => any>) {
    Object.entries(slots).forEach(([slot, callback]) => this._slots.set(slot, callback));
  }

  render() {
    if (!this._html || !this._slots.size) return this._html;

    const selector = Array.from(this._slots.keys())
      .map((slot) => `[data-slot="${slot}"]`)
      .join(',');

    this._processor.use(() => (root) => {
      selectAll(selector, root as Node).forEach((node) => {
        const slot = this._slots.get(String(node.properties.dataSlot));
        if (!slot || !node.properties) return;

        Object.entries(slot(node.properties))
          .filter(([, value]) => value != null)
          .forEach(([key, value]) => {
            if (typeof value === 'boolean') node.properties[key] = value === true ? '' : undefined;
            else if (typeof value === 'string') node.properties[key] = value.replace(/"/g, '&quot;');
          });
      });
    });

    return String(this._processor.processSync(this._html).value);
  }

  private _createProcessor() {
    return rehype().data('settings', { fragment: true });
  }
}
