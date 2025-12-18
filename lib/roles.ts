// lib/roles.ts

export const ROLES = [
  "owner",
  "admin",
  "senior_mod",
  "junior_mod",
  "trial_mod",
  "graphic_designer",
  "writer",
  "bot_dev",
  "helper",
  "informative_team",
  "former_staff",
] as const;

export type Role = (typeof ROLES)[number];

/**
 * Lower index = higher authority
 */
export function roleRank(role: Role) {
  return ROLES.indexOf(role);
}

/**
 * Get highest authority role from a list of roles
 */
export function highestAuthorityRole(roles: Role[]): Role {
  return roles.reduce((highest, current) =>
    roleRank(current) < roleRank(highest) ? current : highest
  );
}

/**
 * Check if user has at least one required role
 */
export function hasRequiredRole(
  userRoles: Role[] | undefined,
  allowedRoles: readonly Role[]
) {
  if (!userRoles || userRoles.length === 0) return false;
  return allowedRoles.some((r) => userRoles.includes(r));
}

/**
 * Alias (semantic clarity)
 */
export function hasAnyRole(
  userRoles: Role[] | undefined,
  allowedRoles: readonly Role[]
) {
  return hasRequiredRole(userRoles, allowedRoles);
}

/**
 * Admin-level access helper
 */
export function isAdmin(userRoles?: Role[]) {
  return hasAnyRole(userRoles, ["owner", "admin"]);
}
