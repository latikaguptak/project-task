const About = () => {
  return (
    <div className=" min-h-screen py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto rounded-lg p-8 ">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          About Us
        </h1>
        <div className="shadow-inner shadow-gray-500 m-2 p-5 bg-white">

        <p className="text-gray-700 text-lg leading-8 mb-6">
          Welcome to <span className="font-semibold"> Pharmacy</span>, 
          your trusted partner in health and wellness. We have been dedicated 
          to serving our community with high-quality pharmaceutical care and 
          personalized service for over a decade.
        </p>
        <p className="text-gray-700 text-lg leading-8 mb-6">
          At Pharmacy, we offer a wide range of services, including 
          prescription medications, over-the-counter drugs, health consultations, 
          and wellness products. Our experienced pharmacists are here to answer 
          your questions and ensure you receive the care and support you deserve.
        </p>
        <p className="text-gray-700 text-lg leading-8 mb-6">
          Our mission is to provide accessible and affordable healthcare 
          solutions to everyone. Whether you need assistance with managing 
          chronic conditions, immunizations, or advice on leading a healthier 
          lifestyle, we are here to help.
        </p>
        <p className="text-gray-700 text-lg leading-8 mb-6">
          Thank you for choosing  Pharmacy. Your health is our priority!
        </p>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
