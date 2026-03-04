// /lib/requireRoles.ts
// import type { Role } from "@/lib/roles";

// export function requireRoles(session: any, allowed: Role[]) {
//   const roles = session?.userData?.roles as Role[] | undefined;

//   if (!roles || !roles.some((r) => allowed.includes(r))) {
//     throw new Error("FORBIDDEN");
//   }
// }

import type { Role } from "@/lib/roles";
import { Session } from "next-auth";

export function hasRole(session: Session | null, allowed: Role[]) {
  const roles = session?.userData?.roles as Role[] | undefined;
  if (!roles) return false;

  const allowedSet = new Set(allowed);
  return roles.some((r) => allowedSet.has(r));
}

export function requireRoles(session: Session | null, allowed: Role[]) {
  if (!hasRole(session, allowed)) {
    throw new Error("FORBIDDEN");
  }
}
