// src/components/About.js

import React, { useState } from "react";


export default function About() {
    const [name, setName] = React.useState("");
    const [clickme, setClickme] = React.useState("Hit submit to see the result!");
    const [score, setScore] = useState(0);
    const [url, seturl] = React.useState("");
    

    const [checked_1, setChecked_1] = React.useState(false);
    const [checked_2, setChecked_2] = React.useState(false);
    const [checked_3, setChecked_3] = React.useState(false);
    const [checked_4, setChecked_4] = React.useState(false);
    const [checked_5, setChecked_5] = React.useState(false);
    const [checked_6, setChecked_6] = React.useState(false);
    const [checked_7, setChecked_7] = React.useState(false);
    const [checked_8, setChecked_8] = React.useState(false);
    const [checked_9, setChecked_9] = React.useState(false);
    const [checked_10, setChecked_10] = React.useState(false);

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
    const handleChange_10 = () => {
        setChecked_10(!checked_10);
    };
      
    function handleSubmit(e) {
        e.preventDefault();
        // setScore(0);
        if (name == ""){
            alert("Please enter your name.");
        }else{
            if (name == "子恆" || name == "黃子恆" || name == "Tzu-heng Huang" || name == "Brian Huang" || name == "Brian" || name == "brian"){
                setScore(100)
            }else{
                if((checked_8+checked_9+checked_10) == 3){
                    setScore(100);
                }else{
                    setScore((3 + checked_1+checked_2+checked_3+checked_4+checked_5+checked_6+checked_7)*100/10);
                };
            }
            setClickme("Hey " + name + ", you are " + score.toString() + "% gay! Click me!");
            seturl("https://www.instagram.com/reel/CuPDDfUxOGZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==");
        }
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
            <br className="hidden lg:inline-block" /> Is I what I think it is? Want to understand yourself even better? try this questionnaire.
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
      <div className="container mx-auto flex px-10 py-0 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-base text-base mb-4 font-medium text-white">
            1. Have you ever had any same-sex fantasies or thoughts?<br /><br />
                <p className="mb-8 leading-relaxed">
                <label>
                    <input
                    type="checkbox"
                    checked={checked_1}
                    onChange={handleChange_1}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
                </p>
            2. How comfortable are you with your body and physical intimacy with different genders?<br /><br />
                <p className="mb-8 leading-relaxed">
                <label>
                    <input
                    type="checkbox"
                    checked={checked_2}
                    onChange={handleChange_2}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
                </p>
            3. Have you considered seeking support from a therapist, counselor, or support group to explore your sexual?<br /><br />
                <p className="mb-8 leading-relaxed">
                <label>
                    <input
                    type="checkbox"
                    checked={checked_3}
                    onChange={handleChange_3}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
                </p>
            4. Have you ever questioned or explored your sexual identity in the past?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_4}
                    onChange={handleChange_4}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
            
        <br /><br />
            5. Have you ever felt a romantic or sexual attraction towards someone of the same gender?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_5}
                    onChange={handleChange_5}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
            
        <br /><br />
            6. Do you feel confident in your understanding of your sexual orientation?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_6}
                    onChange={handleChange_6}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
        
        <br /><br />
            7. Do you believe that understanding your sexual orientation is important for your personal growth and happiness?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_7}
                    onChange={handleChange_7}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>

        <br /><br />
            8. Which types of high school did you attend?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_8}
                    onChange={handleChange_8}
                    />
                    &nbsp;&nbsp; Men school
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp; Women school
                </label><label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp; Mixed-gender school
                </label>
        <br /><br />
            9. Which city did you study your bachelor?<br /><br />
                <label>
                    <input
                    type="checkbox"
                    checked={checked_9}
                    onChange={handleChange_9}
                    />
                    &nbsp;&nbsp; Taipei
                </label>
                <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;Other
                </label>
        <br /><br />
            10. Are you Wisconsin Badger?<br /><br />
                    <label>
                        <input
                        type="checkbox"
                        checked={checked_10}
                        onChange={handleChange_10}
                        />
                        &nbsp;&nbsp;Yes
                    </label>
                    <label>
                    &nbsp;&nbsp;
                    <input
                    type="checkbox"
                    />
                    &nbsp;&nbsp;No
                </label>
        </h1>
        </div>
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center"
                onClick={(e)=>handleSubmit(e)}>
                Submit
            </button>
        </div>
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
            <a href={url}>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white justify-center">
                    {clickme}
                </h1>
            </a>
        </div>
    </section>
  );
}