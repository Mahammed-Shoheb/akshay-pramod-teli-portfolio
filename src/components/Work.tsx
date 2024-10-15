import Title from "./Title";
import { Timeline } from "@/components/ui/timeline";

const Work = () => {
  return (
    <section id="work">
      <div className="align-center section-padding overflow-hidden">
        <Title title="work experience" />
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
};

export default Work;

const data = [
  {
    title: (
      <>
        <span className="text-primary">Product Manager Bijak </span>
        <span className="md:text-2xl">Gurgaon</span>
        <br />
        <span className="md:text-2xl">Jun 2023 - Present</span>
      </>
    ),
    content: (
      <ul className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 flex flex-col gap-4 list-disc">
        <li>
          Achieved more than 100% increase in app engagement through the
          implementation of multi-lingual support and the incorporation of clear
          user action prompts.
        </li>
        <li>
          Implemented and Automated Trade and Loan Management System, enhancing
          organizations’ ability to manage & scale trades and lending worth 100+
          Cr, saving 4 FTEs
        </li>
        <li>
          Streamlined specific Trade processes and built an inventory management
          system, resulting in a 200% increase in overall operational efficiency
        </li>
        <li>
          Drove a 25% boost in DAU/MAU by gamifying the User Interface on the
          App
        </li>
        <li>
          Created comprehensive reports at both macro and micro levels,
          analyzing projected and actual returns to assess investment
          profitability
        </li>
        <li>
          Managed multiple product responsibilities in daily Scrum, release
          planning, and go-to-market strategies.
        </li>
        <li>Led over 50 deployment calls in 1.5 years</li>
        <li>Managed a high-performing team of 27 members.</li>
      </ul>
    ),
  },

  {
    title: (
      <>
        <span className="text-primary">Co-Founder VP Mart Pvt Ltd </span>
        <span className="md:text-2xl">Bangalore</span>
        <br />
        <span className="md:text-2xl">Feb 2020 - Feb 2022</span>
      </>
    ),
    content: (
      <ul className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 flex flex-col gap-4 list-disc">
        <li>
          Pioneered the end to end Development of a hyperlocal marketplace app,
          responsibilities included creating FRDs, PRDs, designing wireframes,
          and leading daily scrum meetings from inception to market launch.
        </li>
        <li>
          Analyzed and executed new and potential products, services, markets,
          and advertising opportunities.
        </li>
        <li>
          Closed 11 client agreements and successfully completed onboarding.
        </li>
        <li>
          Contributed to various aspects of a startup, gaining diverse cross
          functional experience.
        </li>
      </ul>
    ),
  },
  {
    title: (
      <>
        <span className="text-primary">
          Business Analyst Intern Healthifyme{" "}
        </span>
        <span className="md:text-2xl">Bangalore</span>
        <br />
        <span className="md:text-2xl">Jun 2018 - Jul 2018</span>
      </>
    ),
    content: (
      <ul className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 flex flex-col gap-4 list-disc">
        <li>Gathered multiple business requirements.</li>
        <li>
          Documented impact reports for 4 clients using Excel and PowerPoint
        </li>
        <li>
          Participated in 9 kiosks for interviewing users’ across major cities,
          including Bangalore, Mumbai, Delhi, Chennai, Kolkata, and Jaipur.
        </li>
      </ul>
    ),
  },
];
