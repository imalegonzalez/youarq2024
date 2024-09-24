import Link from "next/link";

const categories = [
  { name: "Cocina", image: "https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp" },
  { name: "Baño", image: "https://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp" },
  { name: "Ampliación", image: "https://images.ctfassets.net/e51cz0cgcy2g/6VknuaoiikMGgmqgYv9zcW/90c5eec98cba77310b50525fe7cb3479/Zapiola_9.webp" },
  { name: "Integral", image: "https://images.ctfassets.net/e51cz0cgcy2g/7EQTunohwwamfH7rCVg1xm/5da4a9d2acd6c857049e73b7150bdb9b/Curapaligue_3.webp" },
  { name: "A medida", image: "https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp" },
];

function SelectorObra() {
  return (
    <div className="w-full px-0 py-8 md:px-3">
      <h2 className="mb-6 text-2xl font-regular text-center">¿Qué necesitas remodelar?</h2>
      <div className="flex w-full gap-2 px-2 pb-4 overflow-x-auto snap-x snap-mandatory sm:justify-between sm:pb-0 md:gap-2 md:px-0">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/category/${category.name.toLowerCase()}`}
            className="
              relative flex-shrink-0 w-[75%] basis-[75%] 
              overflow-hidden rounded-lg shadow-lg
              snap-center
              group
              transition-transform duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              sm:w-auto
              md:flex-grow md:snap-align-none md:mr-0
              lg:basis-[calc(20%-0.8rem)]
            "
            style={{ aspectRatio: '4/5' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 transition-opacity duration-300 group-hover:opacity-80" /> */}
            <div className="relative flex flex-col justify-end w-fit h-full p-4">
              <h3 className="inline-block px-3 py-1 text-lg font-regular text-black bg-white rounded-full drop-shadow-lg">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SelectorObra;
