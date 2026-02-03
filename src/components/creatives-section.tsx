import Image from "next/image";
import { Creative } from "@/data/creatives";

export function CreativesSection({ creatives }: { creatives: Creative[] }) {
  if (creatives.length === 0) {
    return (
      <section id="creatives" className="border-t border-zinc-200 pt-12 mt-12">
        <h2 className="font-serif text-md mb-8 tracking-wide uppercase text-zinc-700">
          Creatives
        </h2>
        <p className="text-sm text-zinc-500 italic">
          Favourite moments — NYC, Columbia, and beyond. Photos coming soon.
        </p>
      </section>
    );
  }

  return (
    <section id="creatives" className="border-t border-zinc-200 pt-12 mt-12">
      <h2 className="font-serif text-md mb-8 tracking-wide uppercase text-zinc-700">
        Creatives
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {creatives.map((item, index) => (
          <figure key={index} className="space-y-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100">
              <Image
                src={item.imageUrl}
                alt={item.caption ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            {item.caption && (
              <figcaption className="text-xs text-zinc-500">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
