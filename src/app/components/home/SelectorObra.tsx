import Link from "next/link";

const categories1 = [
  { name: "Cocina", image: "https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp" },
  { name: "Baño", image: "https://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp" },
  { name: "Ampliación", image: "https://images.ctfassets.net/e51cz0cgcy2g/6VknuaoiikMGgmqgYv9zcW/90c5eec98cba77310b50525fe7cb3479/Zapiola_9.webp" },
  
];

const categories2 = [
  { name: "Integral", image: "https://images.ctfassets.net/e51cz0cgcy2g/7EQTunohwwamfH7rCVg1xm/5da4a9d2acd6c857049e73b7150bdb9b/Curapaligue_3.webp" },
  { name: "A medida", image: "https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp" },
];


function SelectorObra() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-5 gap-3 flex flex-col">
        <h2 className=" text-2xl font-regular text-center md:text-4xl md:text-left bg-white rounded-lg p-12">¿Qué necesitas remodelar?</h2>
        <div className="grid md:grid md:grid-cols-3  w-full gap-2 overflow-x-auto snap-x snap-mandatory sm:justify-between sm:pb-0 md:gap-2">
          {categories1.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase()}`}
              className="
                relative flex-shrink-0 w-full 
                overflow-hidden rounded-lg shadow-lg
                snap-center
                group
                transition-transform duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:w-auto
                md:flex-grow md:snap-align-none md:mr-0
                lg:basis-[calc(20%-0.8rem)]
              "
              style={{ aspectRatio: '1/1' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 transition-opacity duration-300 group-hover:opacity-80" /> */}
              <div className="relative flex flex-col justify-end w-fit h-full p-4">
                <h4 className="inline-block px-3 py-1 text-lg md:text-sm font-regular text-black bg-white rounded-full drop-shadow-lg">
                  {category.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2  w-full gap-2 overflow-x-auto snap-x snap-mandatory sm:justify-between sm:pb-0 md:gap-2">
          {categories2.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase()}`}
              className="
                relative flex-shrink-0 
                overflow-hidden rounded-lg shadow-lg
                snap-center
                group
                transition-transform duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:w-auto
                md:flex-grow md:snap-align-none md:mr-0
                lg:basis-[calc(20%-0.8rem)]
              "
              style={{ aspectRatio: '1/1' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 transition-opacity duration-300 group-hover:opacity-80" /> */}
              <div className="relative flex flex-col justify-end w-fit h-full p-4">
                <h4 className="inline-block px-3 py-1 text-lg md:text-sm font-regular text-black bg-white rounded-full drop-shadow-lg">
                  {category.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectorObra;
