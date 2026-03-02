"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoadMoreList from "@/components/elements/LoadMoreList";

type NewsItem = {
  featured_image: string;
  title: string;
  excerpt: string;
};

export default function NewsArchiveClient({ items }: { items: NewsItem[] }) {
  return (
    <LoadMoreList
      items={items}
      queryKey="count"
      className="px-16 grid grid-cols-3"
      getKey={(_, index) => index}
      renderItem={(item) => (
        <div className="basis-4/13 pl-4">
          <div className="flex flex-col items-start gap-8 py-6">
            <div className="relative inline-block">
              <Image
                src={item.featured_image}
                height={300}
                width={500}
                alt="prikazna slika"
                className="block"
              />
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4/18 w-[95%] h-15 bg-primary -z-10" />
            </div>
            <div className="flex flex-col gap-3 pr-5">
              <h3 className="text-3xl font-black">{item.title}</h3>
              <p>{item.excerpt}</p>
            </div>
          </div>
        </div>
      )}
      renderLoadMore={({ onLoadMore, remaining }) => (
        <div className="px-16 flex justify-center">
          <Button onClick={onLoadMore}>Prikaži več({remaining})</Button>
        </div>
      )}
    />
  );
}
