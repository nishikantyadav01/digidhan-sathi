export type User = { username: string };

class AuthService {
  private user: User | null = null;

  login(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === '1234admin') {
        this.user = { username };
        setTimeout(() => resolve(this.user!), 500);
      } else {
        setTimeout(() => reject(new Error('Invalid credentials')), 500);
      }
    });
  }
  logout(): void {
    this.user = null;
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }
}

export const authService = new AuthService();
