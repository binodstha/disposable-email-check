import { describe, it, expect } from 'vitest';
import { isDisposableEmail } from './index';

// Example disposable and non-disposable domains for testing
const disposable = '10minutemail.com'; // Known in block_domains.json
const nonDisposable = 'gmail.com'; // Not in block_domains.json

describe('isDisposableEmail', () => {
  it('returns true for a known disposable email domain', () => {
    expect(isDisposableEmail(`test@${disposable}`)).toBe(true);
  });

  it('returns false for a non-disposable email domain', () => {
    expect(isDisposableEmail(`test@${nonDisposable}`)).toBe(false);
  });

  it('returns false for invalid email format', () => {
    expect(isDisposableEmail('not-an-email')).toBe(false);
    expect(isDisposableEmail('test@')).toBe(false);
    expect(isDisposableEmail('@domain.com')).toBe(false);
  });

  it('is case-insensitive for domain', () => {
    expect(isDisposableEmail(`test@${disposable.toUpperCase()}`)).toBe(true);
    expect(isDisposableEmail(`test@${disposable.toLowerCase()}`)).toBe(true);
  });

  it('returns false for non-string input', () => {
    // @ts-expect-error
    expect(isDisposableEmail(null)).toBe(false);
    // @ts-expect-error
    expect(isDisposableEmail(undefined)).toBe(false);
    // @ts-expect-error
    expect(isDisposableEmail(123)).toBe(false);
  });
}); 