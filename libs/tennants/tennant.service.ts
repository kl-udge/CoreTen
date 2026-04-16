export class TenantService {
  getTenantById(id: string) {
    return { id, name: "Sample Tenant" };
  }
}