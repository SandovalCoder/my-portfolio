import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctame</h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center max-w-2xl">
            <p>
              Abierto a nuevas oportunidades en desarrollo web. Si tienes un
              proyecto o colaboración en mente, no dudes en contactarme.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              <a
                href="mailto:luisvilders@gmail.com"
                className="hover:underline"
              >
                luisvilders@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <span>+51 900899586</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-green-400" />
              <span>Lince, Lima, Peru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
