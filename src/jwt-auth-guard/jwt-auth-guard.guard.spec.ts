import { JwtAuthGuardGuard } from './jwt-auth-guard.guard.js';

describe('JwtAuthGuardGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuardGuard()).toBeDefined();
  });
});
