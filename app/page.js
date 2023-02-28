import Link from "next/link";

import "../src/pages/tron.scss";

export default function Page() {
  return (
    <>
      <div className="page page--tron">
        <div className="img-container">
          <Link href="/tron">
            <img
              className="tron-image--fade-in"
              src="/tron/tron-stills_055.jpg"
              alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
            />
          </Link>
        </div>
      </div>
    </>
  );
}
