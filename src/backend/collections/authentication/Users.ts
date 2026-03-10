import { createRoles } from "@/backend/fields/non-localized/auth/create-roles";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    group: "Authentication",
    useAsTitle: "email",
  },
  lockDocuments: {
    duration: 120, // Keep locked document 2 minutes after unactivity
  },
  auth: true,
  fields: [
    // Email added by default
    createRoles(),
  ],
};
