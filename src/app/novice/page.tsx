import NewsArchive from "@/components/sections/news/NewsArchive";
import { newsArchive } from "@/constants/news-placeholder";

export default function NewsArchivePage() {
  return (
    <main>
      <NewsArchive
        title="Novice"
        description="   Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing"
        cards={newsArchive}
      />
    </main>
  );
}
