import type { Field } from "payload";

interface ImageProps {
  name: string;
  required?: boolean;
}

export const createImage = ({ name, required = false }: ImageProps): Field => {
  return {
    name,
    type: "upload",
    relationTo: "images",
    required,
    validate: (value: any) => {
      if (!value) return true;

      if (value.filesize > 2 * 1024 * 1024) {
        return "File size must be less than 2MB";
      }

      return true;
    },
  };
};
