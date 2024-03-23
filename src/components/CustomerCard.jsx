import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        width={120}
        height={120}
        alt=""
        className="rounded-full"
      />
      <p className="text-center text-lg text-slate-gray max-w-sm leading-normal mt-6 font-montserrat">
        {feedback}
      </p>
      <div className="flex gap-3 mt-3">
        <img src={star} width={25} height={25} alt="" />
        <p className="text-slate-gray text-xl font-montserrat leading-normal">
          ({rating})
        </p>
      </div>
      <h2 className="text-bold text-3xl font-bold font-palanquin mt-4">
        {customerName}
      </h2>
    </div>
  );
};

export default CustomerCard;
