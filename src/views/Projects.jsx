import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import spring from "../assets/spring.jpg";
import genai from "../assets/genai.png";
import ai from "../assets/ai.png";
import springboot from "../assets/springboot.png";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Recent Works
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
        Product of Procrastination and Passion :)
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
        <Card
  imageSrc={spring}
  title="Spring Boot Security - JWT and Oauth"
  description="Crafted robust boilerplate code for Spring Security, integrating OAuth 2 with GitHub and Google logins. Developed separate security chains for JWT-based authentication and session management using Postgres DB"
  link="https://github.com/Abinandan314/spring-security"
/>
<Card
  imageSrc={genai}
  title="Conversa: Gen AI-Powered Interactive Chatbot Framework"
  description="Transforming conversations with Langchain and Django. This project features multi-agent interactions and tool integrations for dynamic chatbot functionalities, including REST API calls, response summarization, and advanced AI capabilities from OpenAI, LLama, and Gemini. Winner of hackathon and successfully productized."
  link="https://www.linkedin.com/feed/update/urn:li:activity:7168834175641272323/"
/>
<Card
  imageSrc={springboot}
  title="VaxEase - Effortless Booking System (Followed System Design Principles)"
  description="Streamline your vaccination process with our robust application built using Spring Boot, REST APIs, and MongoDB. Explore detailed user and entity diagrams for seamless integration."
  link="https://github.com/Abinandan314/vaccine-application"
/>
<Card
  imageSrc={ai}
  title="EcoVision: AI-Powered Waste Classification (ConvNet)"
  description="Developed a Custom ConvNet for real-time classification of wastes into biodegradable categories. Accepted by Springer Nature as a paper, this solution is seamlessly integratable with robotic arms for efficient garbage classification."
  link="https://github.com/Abinandan314/Convolutional-Neural-Networks-Classification"
/>

        </div>

        
        {
        //TODO List
        /* <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
