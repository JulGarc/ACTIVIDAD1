export function Card({ count, info, state }) {
  return (
    <div className="relative flex w-48 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md 2 select-none">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img
          className="object-cover w-full aspect-square"
          src={info?.img}
          alt="logo"
        />
      </div>
      <div className="p-5">
        <div className="grid grid-cols- ">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased capitalize">
            {info.title}
          </h5>
          {state || <p className="mt-2">Visitas: {count}</p>}
        </div>
        {state || (
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {info.description}
          </p>
        )}
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
