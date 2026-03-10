"use client";

import { useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const frameworks = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];

export default function ComboboxAwards() {
  const [value, setValue] = useState<string | null>("2026");

  return (
    <Combobox
      items={frameworks}
      value={value}
      onValueChange={(value) => setValue(value)}
    >
      <ComboboxInput
        className="w-full lg:w-2/5 px-4 py-10 rounded-none border-2 border-white"
        inputClassName="text-4xl! uppercase font-bold placeholder:text-3xl! placeholder:font-normal"
        placeholder="Izberite leto"
      />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem className="text-xl" key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
