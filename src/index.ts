import blockDomains from './block_domains.json';

// Create a Map for fast lookup
const blockDomainsMap = new Map((blockDomains as string[]).map(domain => [domain, true]));

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

  // Check if the domain exists in the Map
  return blockDomainsMap.has(domain);
}