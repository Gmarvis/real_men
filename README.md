# Monorepo

A pnpm monorepo with workspaces.

## Structure

```
├── apps/
│   └── website/        # Next.js website
├── packages/           # Shared packages
├── package.json        # Root package.json
└── pnpm-workspace.yaml # Workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm

### Installation

```bash
pnpm install
```

### Development

Run the website in development mode:

```bash
pnpm dev
```

### Build

Build the website for production:

```bash
pnpm build
```

### Start

Start the production server:

```bash
pnpm start
```

## Adding New Apps/Packages

- Add new apps to `apps/` directory
- Add shared packages to `packages/` directory
- They will be automatically included via pnpm workspaces
# real_men
