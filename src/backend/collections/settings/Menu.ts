import { createTitle } from "@/backend/fields/non-localized/text/create-title";
import type { CollectionConfig } from "payload";
import { isAdminOrEditor } from "../access-control/isAdminOrEditor";

export const Menus: CollectionConfig = {
  slug: "menus",
  admin: {
    useAsTitle: "title",
    group: "Settings",
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  fields: [createTitle({ required: true, unique: true })],
};
