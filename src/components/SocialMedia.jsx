const SocialMedia = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center w-12 h-12 bg-white hover:bg-gradient-to-r from-purple-500 to-blue-500 rounded-full cursor-pointe">
      <div className="flex items-center justify-center">
        <img src={src} alt={alt} width={24} height={24} />
      </div>
    </div>
  );
};

export default SocialMedia;
