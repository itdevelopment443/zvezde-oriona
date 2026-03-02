import { LucideIcon, Mail, Phone } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  href: string;
  type: "phone" | "email";
}

export const contacts: ContactItem[] = [
  {
    icon: Mail,
    label: "info@zvezdeoriona.com",
    href: "info@zvezdeoriona.com",
    type: "email",
  },
  {
    icon: Phone,
    label: "+386777777",
    href: "+386777777",
    type: "phone",
  },
];
