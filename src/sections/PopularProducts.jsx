import PopularProductCard from "../components/PopularProductCard";
import { products } from "../contants";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold max-sm:text-center">
          Our <span className="text-coral-red">Popular</span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray max-sm:text-center">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <section>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-20 ">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PopularProducts;
