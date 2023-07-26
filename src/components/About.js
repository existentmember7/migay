// src/components/About.js

import React from "react";


export default function About() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [checked_1, setChecked_1] = React.useState(false);
    const [checked_2, setChecked_2] = React.useState(false);
    const [checked_3, setChecked_3] = React.useState(false);
    const [checked_4, setChecked_4] = React.useState(false);
    const [checked_5, setChecked_5] = React.useState(false);
    const [checked_6, setChecked_6] = React.useState(false);
    const [checked_7, setChecked_7] = React.useState(false);
    const [checked_8, setChecked_8] = React.useState(false);
    const [checked_9, setChecked_9] = React.useState(false);

    const handleChange_1 = () => {
        setChecked_1(!checked_1);
      };
    const handleChange_2 = () => {
        setChecked_2(!checked_2);
    };
    const handleChange_3 = () => {
        setChecked_3(!checked_3);
    };
    const handleChange_4 = () => {
        setChecked_4(!checked_4);
    };
    const handleChange_5 = () => {
        setChecked_5(!checked_5);
    };
    const handleChange_6 = () => {
        setChecked_6(!checked_6);
    };
    const handleChange_7 = () => {
        setChecked_7(!checked_7);
    };
    const handleChange_8 = () => {
        setChecked_8(!checked_8);
    };
    const handleChange_9 = () => {
        setChecked_9(!checked_9);
    };
      

    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, (Please enter your name below)
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
            <br className="hidden lg:inline-block" /> Is me what I think it is? Want to understand yourself even better? try this questionary.
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Embrace the exploration of your sexual orientation, for it leads to self-awareness and a more fulfilling life. 
          #EmbraceYourOrientation
          </p>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Questions:
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            1. Have you ever had any same-sex fantasies or thoughts?
            <label>
                <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                />
                Yes
            </label>
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            2. How comfortable are you with your body and physical intimacy with different genders?
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            3. Have you considered seeking support from a therapist, counselor, or support group to explore your sexual orientation further?
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            4. Have you ever questioned or explored your sexual identity in the past?
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            5. Have you ever felt a romantic or sexual attraction towards someone of the same gender
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            6. Do you feel confident in your understanding of your sexual orientation?
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            7. Do you believe that understanding your sexual orientation is important for your personal growth and happiness?
        </h1>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            8. Which types of high school did you attend?
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            9. Which city did you study your bachelor?
        </h1>
        </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
    </section>
  );
}