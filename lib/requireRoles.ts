// /lib/requireRoles.ts
import type { Role } from "@/lib/roles";

export function requireRoles(session: any, allowed: Role[]) {
  const roles = session?.userData?.roles as Role[] | undefined;

  if (!roles || !roles.some((r) => allowed.includes(r))) {
    throw new Error("FORBIDDEN");
  }
}
