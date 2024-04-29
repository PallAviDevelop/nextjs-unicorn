import Image from "next/image";
import style from "@/app/styles/common.module.css";
import Link from "next/link";

const MovieCard = (curEl) => {
  const { id, type, title, synopsis } = curEl.jawSummary;
  return (
    <div className={style["cardBox"]}>
      <Image
        src={curEl.jawSummary.backgroundImage.url}
        width={240}
        height={250}
      />
      <div className={style["space-box"]}>
        <h1>{title}</h1>
        <p>
          {synopsis.substring(0, 70)}
          {`...`}
        </p>
        <button className={style["btn-movie"]}>
          <Link href={`/movie/${id}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
