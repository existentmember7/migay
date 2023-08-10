// src/components/About.js


import React, { useState, useEffect } from "react";
import { Question } from "./question/question";

const options_twoOpts = [
    {
        label: 'Yes',
        value: 1
    },
    {
        label: 'No',
        value: 0
    }
]

const options_other1Opts = [
    {
        label: 'Taipei',
        value: 1
    },
    {
        label: 'Others',
        value: 0
    }
]
const options_other2Opts = [
    {
        label: 'Same-gender',
        value: 1
    },
    {
        label: 'Mix-gender',
        value: 0
    }
]

const options_fiveOpts = [
    {
        label: '0',
        value: 0
    },{
        label: '1',
        value: 1
    },
    {
        label: '2',
        value: 2
    },
    {
        label: '3',
        value: 3
    },
    {
        label: '4',
        value: 4
    },
    {
        label: '5',
        value: 5
    }
]

const questions = [
    {
        title: '1. Have you ever had any same-sex fantasies or thoughts?',
        options: options_twoOpts
    },
    {
        title: '2. How comfortable are you with your body and physical intimacy with different genders?',
        options: options_twoOpts
    },
    {
        title: '3. Have you considered seeking support from a therapist, counselor, or support group to explore your sexual?',
        options: options_twoOpts
    },
    {
        title: '4. Have you ever questioned or explored your sexual identity in the past?',
        options: options_twoOpts
    },
    {
        title: '5. Have you ever felt a romantic or sexual attraction towards someone of the same gender',
        options: options_twoOpts
    },
    {
        title: '6. Do you feel confident in your understanding of your sexual orientation?',
        options: options_twoOpts
    },
    {
        title: '7. Do you believe that understanding your sexual orientation is important for your personal growth and happiness?',
        options: options_twoOpts
    },
    {
        title: '8. Which types of high school did you attend?',
        options: options_other2Opts
    },
    {
        title: '9. Which city did you study your bachelor?',
        options: options_other1Opts
    },
    {
        title: '10. Are you Wisconsin Badger?',
        options: options_twoOpts
    },
]

export default function About() {
    const [name, setName] = React.useState("");
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const [values, setValues] = useState({}) 
    const handleQuestionsChange = (index, value) => setValues(prev => ({
        ...prev,
        [index]: value
    }))

    const init = () => {
        setScore(0)
        setAnswered(false)
        setShowResult(false)
        setValues({})
    }
      
    function handleSubmit(e) {
        e.preventDefault();

        let _score = 0
        
        if (name === ""){
            alert("Please enter your name.");
        }
        else if (isNaN(values[0]+values[1]+values[2]+values[3]+values[4]+values[5]+values[6])){
            alert("Please answer all the questions.")
        }else{
            if (name == "子恆" || name == "黃子恆" || name == "Tzu-heng Huang" || name == "Brian Huang" || name == "Brian" || name == "brian"){
                _score = 200;
            }else{
                if((values[8]+values[9]+values[10]) == 3){
                    _score = 100;
                }else{
                    if (values[0]+values[1]+values[2]+values[3]+values[4]+values[5]+values[6] === 0){
                        _score = Math.floor(Math.random()*20);
                    }else{
                        _score = (3+values[0]+values[1]+values[2]+values[3]+values[4]+values[5]+values[6])*100/10;
                    }
                };
            }
            setAnswered(true)
            setScore(_score)
            setShowResult(true)
        }
    }

    // h1 className="title-font sm:text-base text-base mb-4 font-medium text-white"

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
      <div className="container mx-auto flex px-10 py-0 flex-col items-start">
        {
            questions.map((question, index) => (
                <Question 
                    key={question.title} 
                    title={question.title} 
                    options={question.options} 
                    value={values[String(index)]} 
                    disabled={answered}
                    onChange={(value) => handleQuestionsChange(String(index), value)} 
                />
            ))
        }
        </div>

        {
            showResult && 
            <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
                <a href={"https://www.instagram.com/reel/CuPDDfUxOGZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}>
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white justify-center">
                        {"Hey " + name + ", you are " + score + "% gay! Click me for more infomation!"}
                    </h1>
                </a>
            </div>
        }

        <div className="container mx-auto flex px-10 py-5 flex-row items-center">
            <button
                type="submit"
                className="mr-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center"
                onClick={(e)=>handleSubmit(e)}
                disabled={answered}
                >
                Submit
            </button>
            <button className="" onClick={init} >Reset</button>
        </div>
    </section>
  );
}