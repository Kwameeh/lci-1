import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

interface ContactFormProps {
  // onSubmit: (data: { email: string; subject: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:dufeemmanuel.code@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    // onSubmit(formData);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <div className="flex gap-4">
          <div>
            <PhoneIcon className="h-8 w-8 text-primary" />
            <h1>0556071762</h1>
          </div>
          <div>
            <PhoneIcon className="h-8 w-8 text-primary" />
            <h1>0556071762</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm  dark:placeholder-gray-400"
              placeholder="name@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm  dark:placeholder-gray-400"
              placeholder="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              message
            </label>
            <textarea
              id="message"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm  dark:placeholder-gray-400"
              placeholder="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {/* Other fields omitted for brevity */}
          <button
            type="submit"
            className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-white hover:bg-secondary focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
