import React, { useEffect, useState } from 'react';

const AutoChangeContent = () => {
  return (
    <section className="mx-auto w-full max-w-7xl my-20">
      <div className="mx-3 md:mx-16">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8 md:mx-12`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            watch our content
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 lg:text-start md:text-[2.1rem] md:w-4/5 lg:text-[2.5rem] lg:leading-13`}
          >
            Calendly makes scheduling simple
          </h2>
          <p className="">
            Calendly’s easy enough for individual users, and powerful enough to
            meet the needs of enterprise organizations — including 86% of the
            Fortune 500 companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoChangeContent;
