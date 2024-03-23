const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 shadow-3xl">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-palanquin leading-normal text-3xl font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
