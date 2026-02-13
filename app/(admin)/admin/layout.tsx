import NoAccess from "@/components/NoAccess";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { hasAnyRole } from "@/lib/roles";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

function Sidebar({ roles }: { roles: string[] }) {
  return (
    <aside className="w-64 border-r bg-white px-4 py-6">
      <h2 className="text-lg font-semibold mb-6">Admin</h2>

      <nav className="space-y-2 text-sm">
        {/* Blogs: writers allowed */}
        {hasAnyRole(roles as any, ["owner", "admin", "writer"]) && (
          <a
            href="/admin/blogs"
            className="block px-3 py-2 rounded hover:bg-gray-100"
          >
            Blogs
          </a>
        )}

        {/* Admin-only */}
        {hasAnyRole(roles as any, ["owner", "admin"]) && (
          <>
            <a
              href="/admin/access"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Access
            </a>
            <a
              href="/admin/team"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Mod. Staff
            </a>
            <a
              href="/admin/helper"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Helper
            </a>
            <a
              href="/admin/graphic"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Graphic Dept.
            </a>

            <a
              href="/admin/info"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Informative Dept.
            </a>
            <a
              href="/admin/forms"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Form submission
            </a>
            <a
              href="/admin/certificates"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Certificates
            </a>
          </>
        )}

        {/* Informative team + admin */}
        {hasAnyRole(roles as any, ["owner", "admin", "informative_team"]) && (
          <>
            <a
              href="/admin/scheduling"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Scheduling
            </a>
          </>
        )}
      </nav>
    </aside>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    !hasAnyRole(session.userData?.roles, [
      "owner",
      "admin",
      "writer",
      "informative_team",
    ])
  ) {
    redirect("/"); // or redirect
  }

  const roles = session.userData?.roles;

  // ❌ Logged in but NO ROLES
  if (!roles || roles.length === 0) {
    return (
      <SessionProviderWrapper>
        <div className="min-h-screen flex bg-gray-50">
          <Sidebar roles={[]} />
          <main className="flex-1 p-8">
            <NoAccess message="You don’t have access to the admin panel." />
          </main>
        </div>
      </SessionProviderWrapper>
    );
  }

  return (
    <SessionProviderWrapper>
      <div className="min-h-screen flex bg-gray-50">
        <Sidebar roles={roles} />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </SessionProviderWrapper>
  );
}
