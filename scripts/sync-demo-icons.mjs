#!/usr/bin/env node
/**
 * Extracts fullColor SVG paths from design-system LogoIcon components
 * into marketing/public/workbench-demo/ds-brand-icons.jsx
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DS = path.resolve(__dirname, '../../assets/design-system/src/components/icons');
const OUT = path.resolve(__dirname, '../public/workbench-demo/ds-brand-icons.jsx');

const ICONS = {
  github: { file: 'GitHubLogoIcon.tsx', fill: '#fff' },
  grafana: { file: 'GrafanaLogoIcon.tsx', gradient: true },
  linear: { file: 'LinearLogoIcon.tsx', fill: '#fff' },
  pagerduty: { file: 'PagerdutyLogoIcon.tsx', fill: '#06AC38' },
  elastic: { file: 'ElasticsearchLogoIcon.tsx', multi: true },
  prometheus: { file: 'PrometheusLogoIcon.tsx', fill: '#E6522C' },
  aws: { file: 'AwsLogoIcon.tsx', aws: true },
  exa: { file: 'ExaLogoIcon.tsx', fill: '#1E40ED' },
  codex: { file: 'OpenAILogoIcon.tsx', fill: '#fff' },
  claude: { file: 'ClaudeLogoIcon.tsx', fill: '#DE7356' },
  slack: { file: 'SlackLogoIcon.tsx', slack: true },
};

function read(file) {
  return fs.readFileSync(path.join(DS, file), 'utf8');
}

function extractViewBox(src) {
  const m = src.match(/viewBox="([^"]+)"/);
  return m ? m[1] : '0 0 16 16';
}

function extractPaths(src, fill) {
  const paths = [];
  const re = /<path[^>]*\/>|<path[^>]*>[\s\S]*?<\/path>/g;
  let m;
  while ((m = re.exec(src))) {
    let tag = m[0];
    if (tag.includes('fill={') || tag.includes('fillRule=') && !tag.includes('fill="#')) {
      tag = tag
        .replace(/fill=\{fullColor \? '[^']*' : color\}/g, `fill="${fill}"`)
        .replace(/fill=\{fullColor \? "[^"]*" : color\}/g, `fill="${fill}"`)
        .replace(/fill=\{color\}/g, `fill="${fill}"`)
        .replace(/fill=\{fullColor \? '#FFF100' : color\}/g, 'fill="#FFF100"')
        .replace(/fill=\{fullColor \? '#F05A28' : color\}/g, 'fill="#F05A28"')
        .replace(/fill=\{fullColor \? '#06AC38' : color\}/g, 'fill="#06AC38"')
        .replace(/fill=\{fullColor \? '#00a9e5' : color\}/g, 'fill="#00a9e5"')
        .replace(/fill=\{fullColor \? '#353535' : color\}/g, 'fill="#353535"')
        .replace(/fill=\{fullColor \? '#00bfb3' : color\}/g, 'fill="#00bfb3"')
        .replace(/fill=\{fullColor \? '#019b8f' : color\}/g, 'fill="#019b8f"')
        .replace(/fill=\{fullColor \? '#f9b110' : color\}/g, 'fill="#f9b110"')
        .replace(/fill=\{fullColor \? '#fed10a' : color\}/g, 'fill="#fed10a"')
        .replace(/fill=\{fullColor \? '#E6522C' : color\}/g, 'fill="#E6522C"')
        .replace(/fill=\{fullColor \? '#1E40ED' : color\}/g, 'fill="#1E40ED"')
        .replace(/fill=\{fullColor \? '#DE7356' : color\}/g, 'fill="#DE7356"')
        .replace(/fill=\{fullColor \? '#E01E5A' : color\}/g, 'fill="#E01E5A"')
        .replace(/fill=\{fullColor \? '#44BEDF' : color\}/g, 'fill="#44BEDF"')
        .replace(/fill=\{fullColor \? '#2EB67D' : color\}/g, 'fill="#2EB67D"')
        .replace(/fill=\{fullColor \? '#ECB22E' : color\}/g, 'fill="#ECB22E"')
        .replace(/fill=\{fullColor \? '#f90' : color\}/g, 'fill="#f90"')
        .replace(/fill=\{neutralColor\}/g, 'fill="#fff"')
        .replace(/fill=\{fullColor \? \(mode === 'dark' \? '#ffffff' : '#222326'\) : color\}/g, 'fill="#fff"');
    }
    paths.push(tag);
  }
  return paths;
}

function extractGrafana(src) {
  const vb = extractViewBox(src);
  const d = src.match(/d="(M255\.5901[^"]+)"/)?.[1];
  if (!d) throw new Error('grafana path missing');
  return { vb, d };
}

function extractAws(src) {
  const vb = extractViewBox(src);
  const wordmarkD = src.match(/d="(m11\.013826[\s\S]*?2\.1z)"/)?.[1];
  if (!wordmarkD) throw new Error('aws wordmark path missing');
  return { vb, wordmarkD };
}

function extractSlack(src) {
  const vb = extractViewBox(src);
  const groups = [];
  const re = /<g fill=\{fullColor \? '([^']+)' : color\}>([\s\S]*?)<\/g>/g;
  let m;
  while ((m = re.exec(src))) {
    const color = m[1];
    const paths = (m[2].match(/<path[^/]*\/>/g) || []).join('\n      ');
    groups.push(`<g fill="${color}">\n      ${paths}\n    </g>`);
  }
  return { vb, paths: groups.join('\n      ') };
}

const parts = [];
parts.push(`/* ds-brand-icons.jsx — synced from @pluralsh/design-system (run: node scripts/sync-demo-icons.mjs) */

const BSVG = ({ children, size = 12, vb = '0 0 16 16', id }) => (
  <svg width={size} height={size} viewBox={vb} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    {children}
  </svg>
);
`);

const mapEntries = [];

for (const [key, cfg] of Object.entries(ICONS)) {
  const src = read(cfg.file);
  const compName = key.charAt(0).toUpperCase() + key.slice(1).replace(/duty/, 'Duty') + 'LogoMark';
  const fixName = {
    github: 'GitHub', grafana: 'Grafana', linear: 'Linear', pagerduty: 'Pagerduty',
    elastic: 'Elasticsearch', prometheus: 'Prometheus', aws: 'Aws', exa: 'Exa',
    codex: 'OpenAI', claude: 'Claude', slack: 'Slack',
  }[key] + 'LogoMark';

  if (cfg.gradient) {
    const { vb, d } = extractGrafana(src);
    parts.push(`
let _${key}GradId = 0;
const ${fixName} = ({ size = 12 }) => {
  const gradId = React.useMemo(() => '${key}-grad-' + (++_${key}GradId), []);
  return (
    <BSVG size={size} vb="${vb}">
      <defs>
        <linearGradient id={gradId} x1="49.9947839%" y1="122.450358%" x2="49.9947839%" y2="31.1390083%">
          <stop stopColor="#FFF100" offset="0%" />
          <stop stopColor="#F05A28" offset="100%" />
        </linearGradient>
      </defs>
      <path fill={\`url(#\${gradId})\`} fillRule="nonzero" d="${d}" />
    </BSVG>
  );
};`);
    mapEntries.push(`  ${key}: ${fixName}`);
    continue;
  }

  if (cfg.aws) {
    const { vb, wordmarkD } = extractAws(src);
    parts.push(`
const ${fixName} = ({ size = 12 }) => (
  <BSVG size={size} vb="${vb}">
    <g transform="matrix(.05321432 0 0 .05321468 3.981399 6.278019)">
      <path fill="#fff" d="${wordmarkD}" />
      <g fill="#f90" fillRule="evenodd" transform="translate(-76.486174 -53.881333)">
        <path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
        <path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
      </g>
    </g>
  </BSVG>
);`);
    mapEntries.push(`  ${key}: ${fixName}`);
    continue;
  }

  if (cfg.slack) {
    const { vb, paths } = extractSlack(src);
    parts.push(`
const ${fixName} = ({ size = 12 }) => (
  <BSVG size={size} vb="${vb}">
      ${paths}
  </BSVG>
);`);
    mapEntries.push(`  ${key}: ${fixName}`);
    continue;
  }

  const vb = extractViewBox(src);
  let body;
  if (cfg.multi) {
    body = extractPaths(src, '#00a9e5').join('\n      ');
  } else if (key === 'linear') {
    const d = src.match(/d="(M1\.22541[^"]+)"/)?.[1];
    body = `<path fill="#fff" d="${d}" />`;
  } else if (key === 'exa') {
    const d = src.match(/d=\{LOGOMARK_PATH\}/) ? read('ExaLogoIcon.tsx').match(/LOGOMARK_PATH\s*=\s*'([^']+)'/)?.[1] : null;
    body = `<path fillRule="evenodd" clipRule="evenodd" fill="#1E40ED" d="${d}" />`;
  } else {
    body = extractPaths(src, cfg.fill).join('\n      ');
  }

  parts.push(`
const ${fixName} = ({ size = 12 }) => (
  <BSVG size={size} vb="${vb}">
      ${body}
  </BSVG>
);`);
  mapEntries.push(`  ${key}: ${fixName}`);
}

// cloudwatch uses aws logo in production
mapEntries.push('  cloudwatch: AwsLogoMark');

parts.push(`
const BRAND_ICONS = {
${mapEntries.join(',\n')},
};

let _brandId = 0;
const BrandMark = ({ name, size = 24, title }) => {
  const I = BRAND_ICONS[name];
  if (!I) return null;
  const id = React.useMemo(() => 'b' + (++_brandId), []);
  return (
    <span title={title || name} className="pc-brand" style={{ width: size, height: size }}>
      <I size={size} key={id} />
    </span>
  );
};

Object.assign(window, { BRAND_ICONS, BrandMark });
`);

fs.writeFileSync(OUT, parts.join('\n'));
console.log('Wrote', OUT);
