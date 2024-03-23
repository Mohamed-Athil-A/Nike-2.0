import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-row max-sm:flex-col  justify-between items-center"
    >
      <h1 className="text-4xl font-palanquin font-bold leading-normal lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full max-sm:mt-5">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="max-sm:w-full">
          <Button label="Sign Up" width="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
