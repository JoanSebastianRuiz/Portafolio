
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ww15t6e666", // Service EmailJS
        "template_fbxfnqx", // Template EmailJS
        form.current,
        "wHo682_zVHWbxSlYl" // Public key EmailJS
      )
      .then(
        (result) => {
          setModalMessage("Message sent successfully! Thank you for contacting us.");
          setIsError(false);
          setIsModalOpen(true);
        },
        (error) => {
          setModalMessage("There was a problem sending the message. Please try again later.");
          setIsError(true);
          setIsModalOpen(true);
        }
      );
  };

  return (
    <div className="bg-indigo-500 min-h-screen relative pt-20">
        <div className="flex flex-col items-center">
            <p className="font-mosk700 text-center px-10 text-amber-50 text-2xl pb-8 sm:px-20 md:px-36 md:text-3xl md:leading-normal lg:w-2/3 lg:px-0">Send me a message by filling out the following fields, and I will get back to you as soon as possible!</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 max-w-96 min-w-72">
                <div className="flex flex-col gap-3">
                    <label htmlFor="from_name" className="text-xl font-mosk700 text-amber-50">
                        Name
                    </label>
                    <input
                        type="text"
                        name="from_name"
                        id="from_name"
                        required
                        className="border rounded p-2 w-full font-mosk500 text-gray-800"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="reply_to" className="text-xl font-mosk700 text-amber-50">
                        Email
                    </label>
                    <input
                        type="email"
                        name="reply_to" 
                        id="reply_to"
                        required
                        className="border rounded p-2 w-full font-mosk500 text-gray-800"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="text-xl font-mosk700 text-amber-50">
                        Message
                    </label>
                    <textarea
                        name="message" 
                        id="message"
                        required
                        className="border rounded p-2 w-full resize-none font-mosk500 text-gray-800"
                    />
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="font-mosk600 p-2 text-indigo-500 bg-amber-50 border-4 border-amber-50 hover:border-amber-50 hover:bg-indigo-500 hover:text-amber-50 rounded-3xl">
                    Send
                    </button>
                </div>
                
            </form>

        </div>
        

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg w-2/3 max-w-72">
                    <h2
                    className={`text-xl font-mosk700 ${
                        isError ? "text-red-600" : "text-green-600"
                    }`}
                    >
                    {isError ? "Error" : "Success!"}
                    </h2>
                    <p className="mt-2 text-gray-700 font-mosk600">{modalMessage}</p>
                    <div className="flex justify-center">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 bg-indigo-500 font-mosk600 text-white px-4 py-2 rounded"
                        >
                        Close
                        </button>

                    </div>
                </div>
            </div>
        )}
  </div>
  );
};

