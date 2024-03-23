import ServiceCard from "../components/ServiceCard";
import { services } from "../contants";

const Services = () => {
  //services contains { imgURL,label,subtext}
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
