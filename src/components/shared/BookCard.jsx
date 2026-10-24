
import Link from "next/link";
import {
  FaStar,
  FaArrowUpRightFromSquare,
  FaCircle,
} from "react-icons/fa6";

export default function BookCard({ book }) {
  const {
    id,
    category = "General",
    rating = 0,//
    image_url,
    title ,
    author,
    description,
    volumeCode = "",//
    available_quantity = 0,
  } = book;

  return (
    <article className="card w-full overflow-hidden rounded-xl border border-base-200 bg-base-100 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Book Cover */}
      <figure className="relative block aspect-380/568 w-full overflow-hidden bg-base-200">
        <img
          src={image_url || "/images/book-placeholder.png"}
          alt={`Cover of ${title}`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Category Badge */}
        <span className="badge absolute left-4 top-4 z-10 h-auto rounded-sm border-0 bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
          {category}
        </span>

        {/* Rating Badge */}
        <span className="badge absolute right-4 top-4 z-10 h-auto gap-1.5 rounded-full border-0 bg-white/95 px-3 py-1.5 text-sm text-neutral-800">
          <FaStar className="text-amber-700" />
          {Number(rating).toFixed(1)}
        </span>
      </figure>

      {/* Book Information */}
      <div className="card-body gap-0 p-4 sm:p-5">
        {/* Volume and Stock */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium text-amber-800">
            {volumeCode ? `Vol. ${volumeCode}` : ""}
          </span>

          <span
            className={`badge h-auto shrink-0 gap-1.5 rounded-full border-0 px-2.5 py-1.5 text-xs font-medium ${
              available_quantity > 0
                ? "bg-orange-50 text-neutral-800"
                : "bg-red-50 text-red-700"
            }`}
          >
            <FaCircle
              className={`text-[8px] ${
                available_quantity > 0 ? "text-green-600" : "text-red-600"
              }`}
            />

            {available_quantity > 0
              ? `${available_quantity} ${available_quantity === 1 ? "copy" : "copies"} left`
              : "Out of stock"}
          </span>
        </div>

        {/* Title */}
        <h2
          className="mb-1 line-clamp-1 font-serif text-xl font-bold leading-snug text-neutral-900 sm:text-2xl"
          title={title}
        >
          {title}
        </h2>

        {/* Author */}
        <p
          className="mb-3 line-clamp-1 text-sm text-base-content/75 sm:text-base"
          title={author}
        >
          {author}
        </p>

        {/* Description */}
        <p
          className="mb-5 line-clamp-2 min-h-12 text-sm leading-relaxed text-base-content/70 sm:text-base"
          title={description}
        >
          {description}
        </p>
        <Link href={`/book-details/${id}`}>
              <button
          className="btn btn-neutral min-h-11 h-11 w-full rounded-sm border-0 bg-black text-sm font-medium text-white hover:bg-neutral-800"
        >
          Details
          <FaArrowUpRightFromSquare className="text-sm" />
        </button>
        </Link>
      </div>
    </article>
  );
}
