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
    const [checked_final, setChecked_final] = React.useState(false);

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
    const handleChange_final = () => {
        setChecked_final(!checked_final);
    };
      
    function handleSubmit(e) {
        e.preventDefault();
        if (name == "黃子恆" || name == "Tzu-heng Huang"){
            setChecked_final(true);
        }else{
            var score = (checked_1+checked_2+checked_3+checked_4+checked_5+checked_6+checked_7+checked_8+checked_9)*100/10;
        };
    }
        
        // fetch("/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   body: encode({ "form-name": "contact", name, email, message }),
        // })
        //   .then(() => alert("Message sent!"))
        //   .catch((error) => alert(error));
        // }

    
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./title.jpg"
          />
        </div>
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Questions:
        <br />
            1. Have you ever had any same-sex fantasies or thoughts?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    Yes
                </label>
        <br /><br />
            2. How comfortable are you with your body and physical intimacy with different genders?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    Yes
                </label>
            
        <br /><br />
            4. Have you ever questioned or explored your sexual identity in the past?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    Yes
                </label>
            
        <br /><br />
            6. Do you feel confident in your understanding of your sexual orientation?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    Yes
                </label>
            
        <br /><br />
            8. Which types of high school did you attend?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    Yes
                </label>
            
        <br /><br />
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
            </button>
        </div>
    </section>
  );
}