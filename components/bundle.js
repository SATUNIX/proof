/* @ds-bundle: {"format":4,"namespace":"Proof","components":[{"name":"Glyph"},{"name":"Pattern"},{"name":"Button"},{"name":"IconButton"},{"name":"Tag"},{"name":"Status"},{"name":"Input"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Card"},{"name":"Stat"},{"name":"Tabs"},{"name":"Disclosure"},{"name":"Progress"},{"name":"Callout"},{"name":"Banner"},{"name":"CodeBlock"},{"name":"DataTable"},{"name":"RowList"},{"name":"Steps"},{"name":"TileGrid"},{"name":"Band"},{"name":"Topbar"},{"name":"Hero"},{"name":"Section"},{"name":"StatusBar"},{"name":"Footer"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var cx = function () { return Array.prototype.filter.call(arguments, Boolean).join(' '); };

  /* ---------- GLYPHS: 24px grid, 2px stroke, square caps, mitred joins ---------- */
  var C = function (cx_, cy, r) { return 'M' + (cx_ + r) + ' ' + cy + 'a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0 ' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0'; };
  var G = {
    /* arrows and chevrons */
    'arrow-right': 'M4 12h16M14 6l6 6-6 6',
    'arrow-left': 'M20 12H4M10 6l-6 6 6 6',
    'arrow-up': 'M12 20V4M6 10l6-6 6 6',
    'arrow-down': 'M12 4v16M6 14l6 6 6-6',
    'arrow-ne': 'M6 18L18 6M8 6h10v10',
    'arrow-se': 'M6 6l12 12M18 8v10H8',
    'arrow-nw': 'M18 18L6 6M16 6H6v10',
    'arrow-sw': 'M18 6L6 18M6 8v10h10',
    'arrow-both': 'M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4',
    'chevron-right': 'M9 5l7 7-7 7',
    'chevron-left': 'M15 5l-7 7 7 7',
    'chevron-up': 'M5 15l7-7 7 7',
    'chevron-down': 'M5 9l7 7 7-7',
    'chevrons-right': 'M5 5l7 7-7 7M13 5l7 7-7 7',
    'corner-down-right': 'M5 4v10h14M14 9l5 5-5 5',
    /* marks */
    'plus': 'M12 4v16M4 12h16',
    'minus': 'M4 12h16',
    'x': 'M5 5l14 14M19 5L5 19',
    'check': 'M4 12l5 6L20 6',
    'check-double': 'M1 13l5 5L15 7M11 16l2 2L23 7',
    'asterisk': 'M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9',
    'slash': 'M8 21L16 3',
    'hash': 'M5 9h15M4 15h15M10 3L8 21M16 3l-2 18',
    'at': C(12, 12, 4) + 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8',
    'percent': 'M19 5L5 19' + C(6, 7, 2) + C(18, 17, 2),
    'equals': 'M4 9h16M4 15h16',
    'dots': ['M3 10h4v4H3zM10 10h4v4h-4zM17 10h4v4h-4z', 1],
    'grip': ['M8 4h3v3H8zM13 4h3v3h-3zM8 10h3v3H8zM13 10h3v3h-3zM8 16h3v3H8zM13 16h3v3h-3z', 1],
    /* symbols and shapes (outline) */
    'crosshair': C(12, 12, 5) + 'M12 0v24M0 12h24',
    'registration': C(12, 12, 8) + 'M12 1v8M12 15v8M1 12h8M15 12h8',
    'target': C(12, 12, 9) + C(12, 12, 5) + 'M12 12h.01',
    'circle': C(12, 12, 9),
    'square': 'M4 4h16v16H4z',
    'triangle': 'M12 3l10 18H2z',
    'diamond': 'M12 2l10 10-10 10L2 12z',
    'hexagon': 'M7 3h10l5 9-5 9H7l-5-9z',
    'cross-box': 'M4 4h16v16H4zM4 4l16 16M20 4L4 20',
    'sparkle': 'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
    'starburst': 'M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4',
    'star': 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
    'infinity': 'M12 12c-2-3-4-5-6-5a5 5 0 0 0 0 10c2 0 4-2 6-5zM12 12c2 3 4 5 6 5a5 5 0 0 0 0-10c-2 0-4 2-6 5z',
    'pi': 'M4 6h16M8 6v14M16 6v11a3 3 0 0 0 3 3',
    'sigma': 'M18 4H6l7 8-7 8h12',
    'delta': 'M12 4l9 16H3z',
    /* symbols (solid) */
    'square-fill': ['M4 4h16v16H4z', 1],
    'circle-fill': [C(12, 12, 9), 1],
    'triangle-fill': ['M12 3l10 18H2z', 1],
    'diamond-fill': ['M12 2l10 10-10 10L2 12z', 1],
    'hexagon-fill': ['M7 3h10l5 9-5 9H7l-5-9z', 1],
    'caret-down': ['M6 9h12l-6 7z', 1],
    'caret-up': ['M6 15h12l-6-7z', 1],
    'caret-right': ['M9 6v12l7-6z', 1],
    'caret-left': ['M15 6v12l-7-6z', 1],
    'play': ['M6 4l14 8-14 8z', 1],
    'pause': ['M6 4h4v16H6zM14 4h4v16h-4z', 1],
    'stop': ['M5 5h14v14H5z', 1],
    'record': [C(12, 12, 7), 1],
    'bolt': ['M13 2L4 14h7l-1 8 9-12h-7z', 1],
    'flag-fill': ['M5 21V3M5 4h13l-3 4 3 4H5', 1],
    /* interface */
    'menu': 'M3 6h18M3 12h18M3 18h18',
    'search': C(10, 10, 7) + 'M15 15l6 6',
    'grid': 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
    'list': 'M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1',
    'columns': 'M3 4h18v16H3zM9 4v16M15 4v16',
    'layout': 'M3 4h18v16H3zM3 9h18M9 9v11',
    'filter': 'M3 4h18l-7 9v7l-4-2v-5z',
    'sliders': 'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6',
    'settings': C(12, 12, 3) + 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2',
    'home': 'M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6',
    'user': C(12, 7, 4) + 'M4 21v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2',
    'users': C(9, 8, 3) + 'M2 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1M16 4a3 3 0 0 1 0 6M20 20v-1a5 5 0 0 0-3-4.5',
    'mail': 'M3 5h18v14H3zM3 5l9 8 9-8',
    'bell': 'M6 17V11a6 6 0 0 1 12 0v6l2 2H4zM10 21h4',
    'clock': C(12, 12, 9) + 'M12 7v5l3 3',
    'calendar': 'M3 5h18v16H3zM3 10h18M8 2v6M16 2v6',
    'eye': 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z' + C(12, 12, 3),
    'eye-off': 'M3 3l18 18M10 5.3A9 9 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3 3.7M6.5 6.7A17 17 0 0 0 2 12s4 7 10 7c1.5 0 2.8-.4 4-1',
    'lock': 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
    'unlock': 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 7-2.6',
    'key': C(8, 15, 5) + 'M12 11l9-9M17 6l3 3M14 9l2 2',
    'shield': 'M12 2l9 3v7c0 5-4 9-9 10-5-1-9-5-9-10V5z',
    'copy': 'M8 8h13v13H8zM16 8V3H3v13h5',
    'link': 'M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1',
    'external': 'M14 3h7v7M21 3l-9 9M18 14v7H3V6h7',
    'download': 'M12 3v13M6 10l6 6 6-6M4 21h16',
    'upload': 'M12 17V4M6 10l6-6 6 6M4 21h16',
    'refresh': 'M20 11a8 8 0 1 0-2 6M20 4v7h-7',
    'undo': 'M4 9h11a5 5 0 0 1 0 10H8M8 5L4 9l4 4',
    'trash': 'M4 7h16M9 7V3h6v4M6 7l1 14h10l1-14M10 11v6M14 11v6',
    'edit': 'M4 20h4L20 8l-4-4L4 16zM14 6l4 4',
    'save': 'M4 3h13l3 3v15H4zM8 3v6h8V3M8 21v-7h8v7',
    'bookmark': 'M6 3h12v18l-6-5-6 5z',
    'flag': 'M5 21V3M5 4h13l-3 4 3 4H5',
    'pin': 'M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z' + C(12, 9, 2.5),
    'map': 'M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15',
    'globe': C(12, 12, 9) + 'M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    'sun': C(12, 12, 4) + 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2',
    'moon': 'M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z',
    'power': 'M12 3v9M6.5 6.5a8 8 0 1 0 11 0',
    'image': 'M3 4h18v16H3zM3 16l5-5 5 5 3-3 5 5' + 'M8 8h.01',
    'camera': 'M3 7h4l2-3h6l2 3h4v13H3z' + C(12, 13, 4),
    'mic': 'M9 3h6v10a3 3 0 0 1-6 0zM5 11a7 7 0 0 0 14 0M12 18v3',
    'volume': 'M3 9h4l5-4v14l-5-4H3zM16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14',
    'printer': 'M6 9V3h12v6M6 17H3V9h18v8h-3M6 14h12v7H6z',
    'share': C(18, 5, 3) + C(6, 12, 3) + C(18, 19, 3) + 'M8.6 10.5l6.8-4M8.6 13.5l6.8 4',
    'paperclip': 'M20 11l-8 8a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8',
    'tag-glyph': 'M3 3h9l9 9-9 9-9-9zM8 8h.01',
    /* feedback */
    'info': C(12, 12, 9) + 'M12 11v6M12 7h.01',
    'help': C(12, 12, 9) + 'M9 9a3 3 0 1 1 4 2.8c-1 .5-1 1.2-1 2.2M12 17h.01',
    'warning': 'M12 3l10 18H2zM12 10v5M12 18h.01',
    'error': C(12, 12, 9) + 'M12 7v6M12 16h.01',
    'success': C(12, 12, 9) + 'M7.5 12.5l3 3 6-7',
    'block': C(12, 12, 9) + 'M5.6 5.6l12.8 12.8',
    /* technical */
    'terminal': 'M3 4h18v16H3zM7 9l3 3-3 3M13 15h4',
    'code': 'M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16',
    'file': 'M6 2h9l5 5v15H6zM15 2v5h5',
    'file-text': 'M6 2h9l5 5v15H6zM15 2v5h5M9 12h8M9 16h8',
    'folder': 'M3 5h7l2 3h9v12H3z',
    'database': 'M4 6c0-2 16-2 16 0s-16 2-16 0v12c0 2 16 2 16 0V6M4 12c0 2 16 2 16 0',
    'server': 'M3 3h18v7H3zM3 14h18v7H3zM7 6.5h.01M7 17.5h.01',
    'cpu': 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
    'cloud': 'M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9z',
    'layers': 'M12 2l10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5',
    'box': 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
    'branch': 'M6 3v12M18 6v2c0 4-12 2-12 7' + C(6, 18, 3) + C(18, 5, 2.5),
    'commit': 'M3 12h6M15 12h6' + C(12, 12, 3),
    'merge': C(6, 5, 2.5) + C(6, 19, 2.5) + C(18, 15, 2.5) + 'M6 7.5v9M6 10c0 5 12 0 12 2.5',
    'bug': 'M8 8h8v9a4 4 0 0 1-8 0zM3 13h5M16 13h5M4 6l4 3M20 6l-4 3M4 20l4-3M20 20l-4-3M9 5a3 3 0 0 1 6 0',
    'wifi': 'M2 9a16 16 0 0 1 20 0M5 13a11 11 0 0 1 14 0M8.5 16.5a6 6 0 0 1 7 0M12 20h.01',
    'battery': 'M2 7h17v10H2zM22 10v4M6 11v2M10 11v2',
    'chart-bar': 'M3 21h18M6 21V11M11 21V5M16 21v-7M21 21V8',
    'chart-line': 'M3 3v18h18M6 15l4-4 4 3 6-7',
    'pie': 'M12 3v9h9a9 9 0 1 1-9-9zM15 3a9 9 0 0 1 6 6h-6z'
  };
  var NAMES = Object.keys(G);

  function Glyph(p) {
    var g = G[p.name] || G.square, d = Array.isArray(g) ? g[0] : g, solid = Array.isArray(g) && g[1];
    var size = p.size || 24;
    return h('svg', {
      className: cx('pf-glyph', p.className), width: size, height: size, viewBox: '0 0 24 24',
      fill: solid ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: p.weight || 2,
      strokeLinecap: 'square', strokeLinejoin: 'miter',
      role: p.title ? 'img' : undefined, 'aria-label': p.title, 'aria-hidden': p.title ? undefined : 'true'
    }, h('path', { d: d }));
  }

  /* ---------- PATTERNS ---------- */
  function Barcode(p) {
    var s = p.seed || 'proof', hh = 2166136261, i;
    for (i = 0; i < s.length; i++) { hh ^= s.charCodeAt(i); hh = Math.imul(hh, 16777619); }
    function rnd() { hh ^= hh << 13; hh ^= hh >>> 17; hh ^= hh << 5; return (hh >>> 0) / 4294967296; }
    var x = 0, bars = [];
    while (x < 400) {
      var bar = 1 + Math.floor(rnd() * 4), gap = 1 + Math.floor(rnd() * 3);
      if (x + bar > 400) bar = 400 - x;
      bars.push(h('rect', { key: x, x: x, y: 0, width: bar, height: 24, fill: 'currentColor' }));
      x += bar + gap;
    }
    return h('svg', { className: 'pf-pattern pf-pattern--barcode', style: { height: p.height || 24 }, viewBox: '0 0 400 24', preserveAspectRatio: 'none', 'aria-hidden': 'true' }, bars);
  }
  function Pattern(p) {
    var kind = p.kind || 'halftone';
    if (kind === 'barcode') return h(Barcode, { seed: p.seed, height: p.height });
    return h('div', { className: cx('pf-pattern', 'pf-pattern--' + kind, p.tone && 'pf-tone--' + p.tone, p.className), style: { height: p.height || 40 }, 'aria-hidden': 'true' });
  }

  /* ---------- ACTIONS ---------- */
  function Button(p) {
    var cls = cx('pf-btn', p.variant && p.variant !== 'default' && 'pf-btn--' + p.variant, p.size === 'sm' && 'pf-btn--sm', p.className);
    var kids = [p.icon ? h(Glyph, { key: 'i', name: p.icon, size: 14 }) : null, p.children];
    if (p.href) return h('a', { className: cls, href: p.href }, kids);
    return h('button', { className: cls, type: p.type || 'button', onClick: p.onClick, disabled: p.disabled }, kids);
  }
  function IconButton(p) {
    return h('button', { className: cx('pf-btn pf-iconbtn', p.variant && p.variant !== 'default' && 'pf-btn--' + p.variant), type: 'button', onClick: p.onClick, disabled: p.disabled, 'aria-label': p.label, title: p.label },
      h(Glyph, { name: p.icon, size: 16 }));
  }

  /* ---------- LABELS ---------- */
  function Tag(p) {
    var v = p.variant || 'outline';
    return h('span', { className: cx('pf-tag', v !== 'outline' && 'pf-tag--' + v, p.className) }, p.children);
  }
  var STATUS_ICON = { success: 'success', warning: 'warning', danger: 'error', info: 'info', neutral: 'circle' };
  function Status(p) {
    var k = p.kind || 'neutral';
    return h('span', { className: 'pf-status pf-status--' + k }, h(Glyph, { name: STATUS_ICON[k], size: 14 }), p.children);
  }

  /* ---------- FORMS ---------- */
  var uid = 0;
  function useId(pref) { var r = React.useRef(null); if (!r.current) r.current = pref + (++uid); return r.current; }
  function Field(p) {
    return h('div', { className: cx('pf-field', p.error && 'pf-field--error') },
      h('label', { className: 'pf-field__label', htmlFor: p.id }, p.label),
      p.children,
      p.error ? h('p', { className: 'pf-field__msg pf-field__msg--error', id: p.id + '-m' }, h(Glyph, { name: 'error', size: 14 }), p.error)
        : p.hint ? h('p', { className: 'pf-field__msg', id: p.id + '-m' }, p.hint) : null);
  }
  function Input(p) {
    var id = useId('pf-in-');
    return h(Field, { id: id, label: p.label, hint: p.hint, error: p.error },
      h('input', { id: id, className: 'pf-input', type: p.type || 'text', placeholder: p.placeholder, defaultValue: p.defaultValue, value: p.value, onChange: p.onChange, disabled: p.disabled, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': (p.error || p.hint) ? id + '-m' : undefined }));
  }
  function Select(p) {
    var id = useId('pf-sel-');
    return h(Field, { id: id, label: p.label, hint: p.hint, error: p.error },
      h('div', { className: 'pf-select' },
        h('select', { id: id, className: 'pf-input', defaultValue: p.defaultValue, value: p.value, onChange: p.onChange, disabled: p.disabled },
          (p.options || []).map(function (o, i) { return h('option', { key: i, value: o.value || o }, o.label || o); })),
        h(Glyph, { name: 'chevron-down', size: 16 })));
  }
  function Checkbox(p) {
    var id = useId('pf-cb-');
    return h('label', { className: 'pf-check', htmlFor: id },
      h('input', { id: id, type: p.radio ? 'radio' : 'checkbox', name: p.name, defaultChecked: p.defaultChecked, checked: p.checked, onChange: p.onChange, disabled: p.disabled }),
      h('span', null, p.label));
  }
  function Switch(p) {
    var st = React.useState(!!p.defaultOn), on = p.on !== undefined ? p.on : st[0];
    function tog() { if (p.onChange) p.onChange(!on); if (p.on === undefined) st[1](!on); }
    return h('button', { type: 'button', role: 'switch', 'aria-checked': on, className: 'pf-switch', onClick: tog, disabled: p.disabled },
      h('span', { className: 'pf-switch__track' }, h('span', { className: 'pf-switch__knob' })),
      h('span', null, p.label));
  }

  /* ---------- CONTAINERS ---------- */
  function Card(p) {
    return h('div', { className: cx('pf-card', p.tone && 'pf-card--' + p.tone) },
      p.eyebrow ? h('p', { className: 'pf-micro pf-card__eyebrow' }, p.eyebrow) : null,
      p.title ? h('h3', { className: 'pf-card__title' }, p.title) : null,
      h('div', { className: 'pf-card__body' }, p.children),
      p.footer ? h('div', { className: 'pf-card__foot' }, p.footer) : null);
  }
  function Stat(p) {
    return h('div', { className: 'pf-stat' },
      h('p', { className: 'pf-micro' }, p.label),
      h('p', { className: 'pf-stat__v' }, p.value),
      p.delta ? h('p', { className: 'pf-stat__d' }, p.delta) : null,
      p.note ? h('p', { className: 'pf-stat__n' }, p.note) : null);
  }
  function Tabs(p) {
    var tabs = p.tabs || [], st = React.useState(p.defaultId || (tabs[0] && tabs[0].id)), cur = st[0];
    var active = tabs.filter(function (t) { return t.id === cur; })[0] || tabs[0];
    return h('div', { className: 'pf-tabs' },
      h('div', { className: 'pf-tabs__list', role: 'tablist' }, tabs.map(function (t) {
        return h('button', { key: t.id, role: 'tab', type: 'button', 'aria-selected': t.id === cur, className: 'pf-tabs__tab', onClick: function () { st[1](t.id); } }, t.label);
      })),
      h('div', { className: 'pf-tabs__panel', role: 'tabpanel' }, active && active.content));
  }
  function Disclosure(p) {
    return h('div', { className: 'pf-disc' }, (p.items || []).map(function (it, i) {
      return h('details', { key: i, open: it.open }, h('summary', null, h('span', null, it.title), h(Glyph, { name: 'plus', size: 18 })), h('div', { className: 'pf-disc__body' }, it.content));
    }));
  }
  function Progress(p) {
    var max = p.max || 10, v = Math.max(0, Math.min(max, p.value)), cells = [], i;
    for (i = 0; i < max; i++) cells.push(h('i', { key: i, className: i < v ? 'on' : '' }));
    return h('div', { className: 'pf-progress', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': v, 'aria-label': p.label },
      p.label ? h('p', { className: 'pf-micro' }, p.label + ' ' + v + '/' + max) : null,
      h('div', { className: 'pf-progress__bar' }, cells));
  }
  function Callout(p) {
    var tone = p.tone || 'default', ic = { default: 'info', warning: 'warning', danger: 'error', success: 'success' }[tone];
    return h('div', { className: 'pf-callout pf-callout--' + tone },
      h('div', null, h('h3', null, p.icon !== false ? h(Glyph, { name: p.icon || ic, size: 20 }) : null, p.title), h('div', { className: 'pf-callout__body' }, p.children)));
  }
  function Banner(p) {
    return h('aside', { className: 'pf-banner' },
      h('div', { className: 'pf-banner__tag' }, p.tag),
      h('div', { className: 'pf-banner__body' },
        h('strong', null, p.title),
        h('p', null, p.children),
        p.actions ? h('div', { className: 'pf-banner__links' }, p.actions) : null));
  }

  /* ---------- CONTENT ---------- */
  function CodeBlock(p) {
    var st = React.useState('Copy'), label = st[0];
    var lines = (p.lines || []).map(function (l) { return typeof l === 'string' ? { cmd: l } : l; });
    var text = lines.map(function (l) { return l.cmd; }).join('\n');
    function done(m) { st[1](m); setTimeout(function () { st[1]('Copy'); }, 1600); }
    function copy() {
      try { navigator.clipboard.writeText(text).then(function () { done('Copied'); }, function () { done('Select text'); }); }
      catch (e) { done('Select text'); }
    }
    return h('div', { className: cx('pf-code', p.prompt === false && 'pf-code--plain') },
      h('div', { className: 'pf-code__bar' }, h('span', null, p.label || 'Shell'), h('button', { type: 'button', onClick: copy }, label)),
      h('pre', null, h('code', null, lines.map(function (l, i) {
        return h('span', { className: 'pf-code__ln', key: i }, l.cmd, l.comment ? h('span', { className: 'pf-code__c' }, '  # ' + l.comment) : null);
      }))));
  }
  function DataTable(p) {
    return h('div', { className: 'pf-tbl-wrap' },
      h('table', { className: 'pf-tbl' },
        h('thead', null, h('tr', null, p.columns.map(function (c, i) { return h('th', { scope: 'col', key: i }, c); }))),
        h('tbody', null, p.rows.map(function (r, i) { return h('tr', { key: i }, r.map(function (c, j) { return h('td', { key: j }, c); })); }))));
  }
  function RowList(p) {
    return h('ul', { className: 'pf-rows' }, p.rows.map(function (r, i) {
      return h('li', { className: 'pf-row', key: i },
        h('span', { className: 'pf-row__n' }, r.title),
        h('p', { className: 'pf-row__d' }, r.description),
        r.tag ? h(Tag, { variant: r.tagVariant || 'default' }, r.tag) : h('span', null));
    }));
  }
  function Steps(p) {
    return h('ol', { className: 'pf-steps' }, p.steps.map(function (s, i) {
      return h('li', { key: i }, h('strong', null, s.title), h('span', null, s.detail));
    }));
  }
  function TileGrid(p) {
    return h('div', { className: 'pf-tiles' }, p.tiles.map(function (k, i) {
      return h('a', { className: 'pf-tile', href: k.href || '#', key: i },
        k.label ? h('span', { className: 'pf-micro' }, k.label) : null,
        h('span', { className: 'pf-tile__t' }, k.icon ? h(Glyph, { name: k.icon, size: 28 }) : null, k.title),
        h('span', { className: 'pf-tile__d' }, k.description),
        k.tag ? h(Tag, { variant: k.tagVariant || 'private' }, k.tag) : null);
    }));
  }

  /* ---------- PAGE FURNITURE ---------- */
  function Band(p) {
    return h('div', { className: cx('pf-band', p.tone === 'ink' && 'pf-band--ink') },
      p.plate ? h('div', { className: 'pf-plate' }, h('p', { className: 'pf-micro' }, p.plateLabel), h('pre', null, p.plate)) : null,
      h('div', { className: 'pf-band__copy' }, p.children),
      h('div', { className: 'pf-band__foot' },
        h('strong', null, p.headline),
        h('span', { className: 'pf-pattern pf-pattern--ticks', 'aria-hidden': 'true', style: { flex: 1, height: 20 } }),
        p.meta ? h('span', { className: 'pf-micro' }, p.meta) : null));
  }
  function Topbar(p) {
    return h('header', { className: 'pf-topbar' },
      h('a', { className: 'pf-brand', href: '#top' }, h('span', { className: 'pf-brand__mark', 'aria-hidden': 'true' }, p.mark ? (G[p.mark] ? h(Glyph, { name: p.mark, size: 18 }) : p.mark) : h(Glyph, { name: 'asterisk', size: 18 })), p.name),
      h('nav', { className: 'pf-nav', 'aria-label': 'Sections' }, (p.links || []).map(function (l, i) { return h('a', { href: l.href, key: i }, l.label); })),
      h('div', { className: 'pf-actions' }, p.actions));
  }
  function Marks() { return h('div', { className: 'pf-marks', 'aria-hidden': 'true' }, h(Glyph, { name: 'crosshair', size: 16, weight: 1.2 }), h(Glyph, { name: 'crosshair', size: 16, weight: 1.2 })); }
  function Hero(p) {
    var ref = React.useRef(null);
    React.useEffect(function () {
      var wm = ref.current; if (!wm) return;
      function fit() { var box = wm.parentElement; wm.style.fontSize = '100px'; var w = wm.getBoundingClientRect().width; if (w > 0) wm.style.fontSize = (98 * box.clientWidth / w) + 'px'; }
      fit(); window.addEventListener('resize', fit);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
      return function () { window.removeEventListener('resize', fit); };
    }, [p.title]);
    return h('section', { className: 'pf-hero', id: 'top' },
      h('div', { className: 'pf-hero__meta pf-micro' }, h('p', null, p.left), h('p', null, p.right)),
      h(Marks), h('div', { className: 'pf-wm-wrap' }, h('h1', { className: 'pf-wordmark', ref: ref }, p.title)), h(Marks),
      p.children);
  }
  function Section(p) {
    return h('section', { className: 'pf-sec', id: p.id },
      h('div', { className: 'pf-sec__head' }, h('h2', null, p.title), p.lead ? h('p', null, p.lead) : null),
      h('div', { className: 'pf-sec__body' }, p.children));
  }
  function StatusBar(p) {
    return h('div', { className: 'pf-statusbar pf-micro' },
      h(Barcode, { seed: p.seed || p.left }),
      h('span', { className: 'pf-statusbar__mid' }, (p.items || []).map(function (it, i) {
        return h('span', { key: i, className: 'pf-statusbar__it' }, h('i', { className: 'pf-dot' + (it.on ? ' pf-dot--on' : '') }), it.label);
      })),
      h(Barcode, { seed: p.seed2 || p.right || 'proof' }));
  }
  function Footer(p) {
    return h('footer', { className: 'pf-foot' },
      h('div', { className: 'pf-foot__grid' },
        h('p', { className: 'pf-foot__big' }, p.title),
        h('ul', null, (p.links || []).map(function (l, i) { return h('li', { key: i }, h('a', { href: l.href }, l.label)); }))),
      h(Barcode, { seed: p.seed || 'footer' }));
  }

  window.Proof = {
    Glyph: Glyph, Pattern: Pattern, Button: Button, IconButton: IconButton, Tag: Tag, Status: Status,
    Input: Input, Select: Select, Checkbox: Checkbox, Switch: Switch, Card: Card, Stat: Stat, Tabs: Tabs,
    Disclosure: Disclosure, Progress: Progress, Callout: Callout, Banner: Banner, CodeBlock: CodeBlock,
    DataTable: DataTable, RowList: RowList, Steps: Steps, TileGrid: TileGrid, Band: Band, Topbar: Topbar,
    Hero: Hero, Section: Section, StatusBar: StatusBar, Footer: Footer, glyphNames: NAMES
  };
})();
