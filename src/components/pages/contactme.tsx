function ContactMe() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          Let's Connect! 👋
        </h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-4 sm:px-0">
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch 📧</h3>
            <p className="mb-4">
              Feel free to reach out! I'm always excited to discuss new projects
              and opportunities.
            </p>
            <p className="mb-2">📍 Location: New Mumbai, India</p>
            <p className="mb-2">📱 Phone: (+91) 8976261261</p>
            <p>✉️ Email: siddheshmhatrecodes1808@gmail.com</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e"
              alt="Contact visual"
              className="w-full h-48 sm:h-64 object-cover rounded-lg transform transition duration-300 hover:scale-105 active:scale-95"
            />
          </div>
        </div>

        <div className="text-white text-center">
          <h3 className="text-2xl font-semibold mb-6">Follow Me 🌐</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/siddheshmhatre_flute/profilecard/?igsh=MW1kNnFtNjhxMThwMw=="
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-8 h-8 transform transition duration-300 hover:scale-110 active:scale-90"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-mhatre-1984171aa/"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-8 h-8 transform transition duration-300 hover:scale-110 active:scale-90"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
