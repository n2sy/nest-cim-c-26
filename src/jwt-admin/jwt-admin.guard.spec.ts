import { JwtAdminGuard } from './jwt-admin.guard.js';

describe('JwtAdminGuard', () => {
  it('should be defined', () => {
    expect(new JwtAdminGuard()).toBeDefined();
  });
});
