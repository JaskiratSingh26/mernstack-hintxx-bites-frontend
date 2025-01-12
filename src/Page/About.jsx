export default function About() {
  const technologies = [
    {
      name: "HTML/CSS",
      description: "Modern markup and styling for creating responsive and beautiful web interfaces.",
      color: "text-red-500",
      buttonColor: "bg-red-500 hover:bg-red-600",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "JavaScript",
      description: "Dynamic programming language for interactive and modern web applications.",
      color: "text-yellow-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "ReactJS",
      description: "Frontend library for building user interfaces with reusable components.",
      color: "text-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "Node.js",
      description: "Runtime environment for executing JavaScript on the server side.",
      color: "text-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      url: "https://nodejs.org/en/docs/",
    },
    {
      name: "Express.js",
      description: "Web application framework for Node.js, simplifying API and web app development.",
      color: "text-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      url: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for storing and managing large-scale data efficiently.",
      color: "text-teal-500",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      url: "https://www.mongodb.com/docs/",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapidly building custom user interfaces.",
      color: "text-indigo-500",
      buttonColor: "bg-indigo-500 hover:bg-indigo-600",
      url: "https://tailwindcss.com/docs",
    },
    {
      name: "React Icons",
      description: "React Icons library for easy access to popular icons from various sources",
      color: "text-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      url: 'https://react-icons.github.io/react-icons/search/#q=user'
    },
  ];

  return (
    <div className=" mt-20 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-8">About Hint/xx Bites</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Hint/xx Bites, your ultimate destination for discovering and ordering delicious food. Our app is designed to make your food ordering experience seamless and enjoyable, connecting you with a wide variety of culinary delights at your fingertips.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We started Hint/xx Bites with a simple mission: to revolutionize the way people experience food delivery. Our platform brings together the best local restaurants and food vendors, offering you an extensive selection of cuisines to satisfy any craving.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're looking for a quick bite or planning a feast, Hint/xx Bites is here to serve you with the best food options, reliable delivery, and an easy-to-use platform that makes ordering food a pleasure.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="max-w-7xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className={`text-xl font-semibold mb-3 ${tech.color}`}>{tech .name}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <button
                className={`${tech.buttonColor} text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium`}
                onClick={() => window.open(tech.url, '_blank')}
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-4 text-orange-600">Our Developer</h2>
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-150 hover:animate-pop">
          <img
            src="/developer.jpg"
            alt="Jaskirat Singh"
            className="w-48 h-48 object-cover rounded-full mx-auto mt-4 border-4 border-gray-300 shadow-md transition-transform duration-300 transform hover:scale-150"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-extrabold">Jaskirat Singh</h3>
            <p className="text-gray-600 font-semibold">MERN STACK DEVELOPER</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto mt-16 mb-12 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Testimonials</h2>
        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://i.ytimg.com/vi/lUVxhf41V3A/maxresdefault.jpg"
                alt="Elon Musk"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="ml-4 text-gray-700 font-medium">Elon Musk</p>
            </div>
            <p className="text-gray-700 italic">
              "This app has transformed my food ordering experience! Highly recommend!"
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://preview.redd.it/g39au73fdir01.jpg?auto=webp&s=cef8394b639af82ba92d6ab084935f7adc8e841d"
                alt="Albert Einstein"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="ml-4 text-gray-700 font-medium">Albert Einstein</p>
            </div>
            <p className="text-gray-700 italic">
              "Exceptional service and quality food options. I will definitely order here again!"
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 mt-10 mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-teal-600">Contact Us</h2>
        <div className="mb-4">
          <span className="font-semibold">Address:</span> New Delhi, India
        </div>
        <div className="mb-4">
          <span className="font-semibold">Phone:</span> +91 8860327174
        </div>
        <div>
          <span className="font-semibold">Email:</span> <a href="mailto:jaskirattt1@gmail.com" className="text-blue-600 hover:underline">jaskirattt1@gmail.com</a>
        </div>
      </section>
    </div>
  );
}