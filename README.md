# CoreTen

CoreTen is a SaaS infrastructure platform that provides developers with the core building blocks required to build scalable multi-tenant applications.

It abstracts tenant management, RBAC, billing hooks, and observability into a unified system.

## Features

- Multi-tenant architecture (schema-per-tenant / DB-per-tenant)
- Role-Based Access Control (RBAC)
- Tenant lifecycle management
- Feature flags per tenant
- Usage-based billing hooks
- Audit logs and activity tracking
- API-first design (REST + GraphQL)

## Architecture

- API Layer (Node.js / NestJS)
- Database (PostgreSQL)
- Cache (Redis)
- Auth & RBAC Engine
- Background Jobs (BullMQ / queues)

## ⚙️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Run with Docker

```bash
docker-compose up
```

## Multi-Tenancy Models

- Shared DB + Tenant ID
- Schema-per-tenant
- Database-per-tenant

## Testing

```bash
npm run test
```

## Example Use Cases

- SaaS HR platforms
- CRM systems
- B2B dashboards

## Future Work

- Stripe billing integration
- Tenant-level analytics
- Plugin marketplace