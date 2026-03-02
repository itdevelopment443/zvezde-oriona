"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

type LoadMoreListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;

  /** how many to show initially */
  initial?: number;
  /** how many to add per click */
  step?: number;

  /** query param name, e.g. ?count=18 */
  queryKey?: string;

  /** wrapper for the list */
  className?: string;

  /** custom key extractor (recommended) */
  getKey?: (item: T, index: number) => React.Key;

  /** custom load more button */
  renderLoadMore?: (args: {
    onLoadMore: () => void;
    remaining: number;
    visibleCount: number;
    total: number;
  }) => React.ReactNode;
};

export default function LoadMoreList<T>({
  items,
  renderItem,
  initial = 9,
  step = 9,
  queryKey = "count",
  className,
  getKey,
  renderLoadMore,
}: LoadMoreListProps<T>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const countFromQuery = Number(searchParams.get(queryKey));
  const initialCount =
    Number.isFinite(countFromQuery) && countFromQuery > 0
      ? countFromQuery
      : initial;

  const [visibleCount, setVisibleCount] = React.useState(() =>
    clamp(initialCount, initial, items.length)
  );

  // Sync with back/forward + manual URL edits
  React.useEffect(() => {
    const n = Number(searchParams.get(queryKey));
    if (!Number.isFinite(n) || n <= 0) return;
    setVisibleCount(clamp(n, initial, items.length));
  }, [searchParams, queryKey, items.length, initial]);

  const visibleItems = items.slice(0, visibleCount);
  const remaining = Math.max(0, items.length - visibleCount);
  const canLoadMore = remaining > 0;

  const updateQuery = (nextCount: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, String(nextCount));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const onLoadMore = () => {
    const next = clamp(visibleCount + step, initial, items.length);
    setVisibleCount(next);
    updateQuery(next);
  };

  return (
    <>
      <div className={className}>
        {visibleItems.map((item, index) => (
          <React.Fragment key={getKey ? getKey(item, index) : index}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </div>

      {canLoadMore &&
        (renderLoadMore ? (
          renderLoadMore({
            onLoadMore,
            remaining,
            visibleCount,
            total: items.length,
          })
        ) : (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onLoadMore}
              className="mt-6 rounded-md bg-primary px-6 py-3 text-white"
            >
              Load more
            </button>
          </div>
        ))}
    </>
  );
}
