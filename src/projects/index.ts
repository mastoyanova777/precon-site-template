import type { ProjectConfig } from './types';

// Each deploy builds one project. Pick it with the PROJECT env var,
// e.g. `PROJECT=one-hollywood npm run build`.
const modules = import.meta.glob<{ default: ProjectConfig }>(
  ['./*.ts', '!./index.ts', '!./types.ts'],
  { eager: true },
);

const projects = Object.fromEntries(
  Object.values(modules).map((m) => [m.default.slug, m.default]),
);

const slug = import.meta.env.PROJECT ?? process.env.PROJECT ?? 'one-hollywood';

if (!projects[slug]) {
  throw new Error(
    `Unknown PROJECT "${slug}". Available: ${Object.keys(projects).join(', ')}`,
  );
}

export const project: ProjectConfig = projects[slug];
