"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Title from "./Title";
import {
  fangoverLogo,
  vpMart1,
  vpMartLogo,
  bijakLogo,
  bijak3,
  bijak4,
  bijak5,
  fangover,
  bijak,
} from "../assets/product-images";

const Products = () => {
  return (
    <section className="p-10">
      <Title title="products" />
      <StickyScroll content={content} />
    </section>
  );
};

export default Products;

const content = [
  {
    title: "Fangover Food Services Pvt Ltd",
    date: "Apr 2019 - June 2020",
    description: (
      <ul className="list-disc">
        <li>
          Launched and managed cafe, overseeing operational processes and
          workflow optimization.
        </li>
        <li>
          Developed a customer-driven menu and optimized pricing, achieving over
          60% gross margin by reducing product and procurement costs through
          vendor network optimization.
        </li>
        <li>
          Acquired customers via Instagram campaigns, affiliate, and offline
          marketing strategies.
        </li>
        <li>
          Enhanced customer retention by offering exclusive deals, personalized
          order greetings, and providing high-quality hosting service.
        </li>
        <li>
          Collected and acted on customer feedback to continuously enhance the
          product.
        </li>
        <li>
          Reached operational break-even within 3 months, with profit generation
          starting from the 6th month.
        </li>
      </ul>
    ),
    logo: (
      <Image
        src={fangoverLogo}
        width={200}
        height={200}
        className=""
        alt="fangover logo"
      />
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fangover}
          width={300}
          height={300}
          className="h-full w-full object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "VP Mart",
    date: "Jun 2020 - Jan 2022",
    description: (
      <ul className="list-disc">
        <li>
          Launched a hyperlocal marketplace for products and services, featuring
          a Customer App and a Merchant App.
        </li>
        <li>
          Developed the Customer App to provide access to nearby shops,
          including groceries, stationery, restaurants, salons, meat shops,
          etc., allowing users to purchase or book products/services.
        </li>
        <li>
          Developed the Merchant App, providing merchants with an interface to
          list their products/services, manage inventory, and track payments.
        </li>
        <li>
          Led the end-to-end development of both apps, including creating PRDs,
          designing wireframes, leading daily scrum meetings, and managing
          go-to-market strategy.
        </li>
        <li>Successfully onboarded 41 merchants within 4 months</li>
      </ul>
    ),
    logo: (
      <Image
        src={vpMartLogo}
        width={200}
        height={200}
        className=""
        alt="fangover logo"
      />
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={vpMart1}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Bijak",
    date: "Feb 2022 - Oct 2024",
    description: (
      <ul className="list-disc">
        <li>
          Implemented a wallet feature linked to a virtual account on a B2B
          agri-trading app, facilitating seamless transactions and reducing
          payout turnaround time by automating the manual process, leading to a
          23% increase in DAU and a 40% improvement in retention.
        </li>
        <li>
          Developed the Customer App to provide access to nearby shops,
          including groceries, stationery, restaurants, salons, meat shops,
          etc., allowing users to purchase or book products/services.
        </li>
        <li>
          Introduced a Loan Management System, enabling the organization to
          scale its lending business from ₹30 crore to over ₹100+ crore.
        </li>
      </ul>
    ),
    logo: (
      <Image
        src={bijakLogo}
        width={200}
        height={200}
        className=""
        alt="fangover logo"
      />
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={bijak}
          width={300}
          height={300}
          className="h-full w-full object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    description: (
      <li className="pt-20">
        Streamlined specific Trade processes and built an inventory management
        system, resulting in a 200% increase in overall operational efficiency
      </li>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={bijak3}
          width={300}
          height={300}
          className="h-full w-full object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    description: (
      <li className="mt-72">
        Developed a comprehensive system to assess the real-time profitability
        (XIRR) of trades at both macro and micro levels. This system provided
        continuous monitoring and analysis of both projected and actual returns,
        enabling detailed assessment of investment profitability. Additionally,
        it included an alert mechanism to notify when specific assets were
        underperforming, allowing for timely intervention and better risk
        management
      </li>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={bijak4}
          width={300}
          height={300}
          className="h-full w-full object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    description: (
      <div className="mt-56">
        <li>
          Automated the payment reconciliation process on a D2C F&V app by
          implementing dynamic QR code generation at the time of delivery and
          gamifying the experience to encourage users to pay online. This
          effectively reduced cash transactions by 90%, significantly minimized
          human effort, and reduced errors and discrepancies in payment
          handling.
        </li>
        <li>
          Managed a high-performing development team of 27 members using agile
          methodologies, leading over 100 deployment calls across 2.5 years
        </li>
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={bijak5}
          width={300}
          height={300}
          className="w-full h-full block object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
