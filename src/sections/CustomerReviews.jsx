import CustomerCard from "../components/CustomerCard";
import { reviews } from "../contants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Out? <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className=" font-montserrat text-lg text-slate-gray text-center mt-4 leading-normal">
        Hear genuine stories from our satisfied customers about <br /> their
        exceptional experiences with us.
      </p>
      <div className="mt-20 flex flex-row justify-center items-center gap-52 max-sm:gap-36 max-sm:flex max-sm:flex-col ">
        {reviews.map((review) => (
          <CustomerCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
{
  /* <div className="flex flex-col  justify-center items-center">
<img
  src={customer1}
  width={120}
  height={120}
  alt=""
  className="rounded-full"
/>
<p className="text-center text-lg text-slate-gray max-w-sm leading-normal mt-6">
  The attention to detail and the quality of the product exceeded my
  expectations. Highly recommended!
</p>
<div className="flex gap-2 mt-3">
  <img src={star} width={25} height={25} alt="" />
  <p className="text-slate-gray text-xl">(4.5)</p>
</div>
</div>
<div className="flex flex-col  justify-center items-center max-sm:mt-10">
<img
  src={customer2}
  width={120}
  height={120}
  alt=""
  className="rounded-full"
/>
<p className="text-center text-lg text-slate-gray max-w-sm leading-normal mt-6">
  The product not only met but exceeded my expectations. I'll
  definitely be a returning customer!
</p>
<div className="flex gap-2 mt-3">
  <img src={star} width={25} height={25} alt="" />
  <p className="text-slate-gray text-xl">(4.5)</p>
</div>
</div> */
}
