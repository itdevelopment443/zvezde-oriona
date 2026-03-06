"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoadMoreList from "@/components/elements/LoadMoreList";
import { Card } from "../home/CarouselSectionTwo";

export default function NewsArchiveClient({ items }: { items: Card[] }) {
  return (
    <LoadMoreList
      items={items}
      queryKey="count"
      className="grid lg:grid-cols-3 gap-6"
      getKey={(_, index) => index}
      renderItem={(item) => (
        <div className="w-full">
          <div className="flex flex-col items-start gap-8 py-6">
            <div className="w-full">
              <Image
                src={item.featured_image}
                height={300}
                width={500}
                alt="prikazna slika"
                className=" w-full"
              />
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
