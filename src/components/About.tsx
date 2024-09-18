import { IconDownload } from "@tabler/icons-react";
import Title from "./Title";

const About = () => {
  return (
    <section id="about">
      <div className="align-center section-padding">
        <Title title="about me" />
        <p className="mb-8 max-w-4xl">
          With over 4 years of experience in the technology sector, my
          proficiency lies in defining and executing product strategies,
          fostering innovation, and ensuring outstanding user experiences.
          Expertise encompasses market analysis, data-driven decision-making,
          product development, go-to-market strategies, and stakeholder
          management. Possessing a deep comprehension of technology trends and
          customer requirements, products launched under my direction
          consistently boost business growth and elevate customer satisfaction.
        </p>
        <div className="mb-4">
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            education :
          </h3>
          <p>
            B.Tech in Electronics and Communication Engineering PES University,
            Bangalore 2015 - 2019
          </p>
        </div>
        <div className="mb-4">
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            Certifications :
          </h3>
          <ol>
            <li>
              CSPO(Certified Scrum Product Owner) license by Scrum Alliance
            </li>
            <li>Google Data Analyst Specialization - Foundation by Coursera</li>
          </ol>
        </div>
        <div className="mb-4">
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            Achievements :
          </h3>
          <p>Top performer of 2 consecutive Biannual Metrics Review</p>
        </div>
        <div className="mb-4">
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            languages :
          </h3>
          <ul>
            <li>English: Fluent</li>
            <li>Hindi: Native Speaker</li>
            <li>Kannada: Native Speaker</li>
            <li>Telugu: Fluent</li>
            <li>Marathi: Intermediate</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            contact info :
          </h3>
          <p>
            Phone : <a href="tel:+91-9591461981">+91-9591461981</a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:akshay.teli.001@gmail.com">
              akshay.teli.001@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="capitalize text-2xl text-primary font-semibold mb-2">
            resume :
          </h3>
          <p>
            <a
              href="/Akshay_Pramod_Teli_9Jun2024.pdf"
              download={true}
              className="flex items-center gap-2 underline"
            >
              <span>Download</span>
              <span>
                <IconDownload className="animate-bounce text-primary" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
