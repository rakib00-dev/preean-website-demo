import React from 'react';
import SoluCommonCard from './SoluCommonCard';

const SolutionWhyChoose = () => {
  return (
    <section className="w-full max-w-7xl md:my-20">
      <div className="relative bg-gray-100 py-10">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Why DesignPro
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-13`}
          >
            Move marketing initiatives forward, faster with easy scheduling
          </h2>
        </div>
        <div className="bg-gray-100 w-full">
          <SoluCommonCard bgColor={'bg-gray-100'} smallChild />
          <SoluCommonCard
            smallTitle="Increase you visibility"
            bigTitle="Book less meetings from your marketing project"
            para="Enable qualified leads to instantly schedule meetings with your sales team. Maintain your qualification rules, improve your HubSpot, Marketo, or Pardot form performance, and match existing customers with their HubSpot or Salesforce account owner."
            linkText="see one of our plans"
            imgSrc="/images/solutionPage/graphic-design/customers.png"
            bgColor={'bg-gray-100'}
            imgOrder="order-1"
            contentOrder="order-2"
            smallChild
          />
          <SoluCommonCard
            smallTitle="Measure ampaign performance"
            bigTitle="Make your valuable time free and more impact to project"
            para="Prove the value of your programs. Get a clearer picture of which messages, campaigns, and routing forms resulted in booked meetings when you integrate Calendly with your CRM and marketing tech stack."
            linkText="see our plans or book a call"
            imgSrc="/images/solutionPage/graphic-design/crm.png"
            bgColor={'bg-gray-100'}
            smallChild
          />
          <SoluCommonCard
            smallTitle="Schedule any meetings"
            bigTitle="Remove the hassle of marketing meetings too"
            para="Easily connect with your vendors, meet with customers, send Meeting Polls for larger groups, organize webinars, and co-host meetings with teammates to plan a project with partners outside of your company."
            linkText="Contact for more info"
            imgSrc="/images/solutionPage/graphic-design/event-types-marketing.png"
            bgColor={'bg-gray-100'}
            imgOrder="order-1"
            contentOrder="order-2"
            smallChild
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChoose;
