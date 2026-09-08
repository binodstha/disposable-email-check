import { blockDomains } from './block_domains.js';

// Parse comma-separated domains into a Set for fast O(1) lookup
const blockDomainsSet = new Set(blockDomains.split(','));

/**
 * Checks if the given email is from a temporary/disposable domain.
 * @param email - Email address to check
 * @returns boolean
 */
export function isDisposableEmail(email: string): boolean {
  if (typeof email !== 'string') return false;

  // Basic email format validation (not fully RFC 5322)
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) return false;

  const domain = email.split('@')[1].toLowerCase();

  // Check if the domain exists in the Set
  return blockDomainsSet.has(domain);
}