import type { Role } from "./roles";

export const ADMIN_ROUTE_ACCESS: Record<string, Role[]> = {
  "/admin": [
    "owner",
    "admin",
    "senior_mod",
    "junior_mod",
    "trial_mod",
    "writer",
    "helper",
    "graphic_designer",
    "bot_dev",
  ],

  "/admin/team": ["owner", "admin"],
  "/admin/access": ["owner", "admin"],
  "/admin/blog": ["owner", "admin", "writer"],
  "/admin/helper": ["owner", "admin", "senior_mod"],
  "/admin/scheduling": [
    "owner",
    "admin",
    "senior_mod",
    "informative_team", // example
  ],
};
