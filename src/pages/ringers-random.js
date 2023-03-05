import RingersRandomLone from "./ringers-random-lone";
import "./ranger.scss";

export default function RingersRando() {
  return (
    <>
      <div className="page page--square--double">
        <div className="img-container img-container--squares">
          <RingersRandomLone />
        </div>
        <div className="img-container img-container--squares">
          <RingersRandomLone />
        </div>
      </div>
    </>
  );
}
