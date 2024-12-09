interface ResenaProps {
  name: string;
  img: string;
  coment: string;
  stars: number;
  tag?: string[];
}

const StarRating = ({ stars }) => {
  return (
    <p>
      {Array(stars)
        .fill()
        .map((_, i) => (
          <span
            className=" text-yellow-200 "
            style={{
              textShadow:
                "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
            }}
            key={i}
          >
            ★
          </span>
        ))}
    </p>
  );
};

const Resena: React.FC<ResenaProps> = ({
  name,
  img,
  coment,
  tag,
  stars,
  ...props
}) => {
  return (
    <>
      <div className="mr-2 rounded-lg bg-white w-[350px] h-[450px] md:w-1/2 md:h-min">
        <figure className="relative h-full w-full overflow-hidden flex flex-col justify-between rounded-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img}
            alt={name}
          />
          <div className="absolute bottom-0 p-7 flex flex-row min-h-16 justify-between items-center bg-white bg-opacity-70 backdrop-blur-md border border-white border-opacity-20 shadow-lg rounded-lg self-end">
            <div>
              <div className="flex gap-4">
                <h2 className=" text-lg font-semibold">{name}</h2>
                {/* <StarRating stars={stars} /> */}
              </div>
              <p className=" text-xs text-gray-600">{coment}</p>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Resena;
