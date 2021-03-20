import { User } from './user.model';

describe('Profile', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
