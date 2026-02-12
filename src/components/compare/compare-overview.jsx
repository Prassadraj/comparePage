import React from "react";

function CompareOverview() {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 container mx-auto">
      <div className="flex flex-col md:gap-2">
        <h1 className="flex items-center text-3xl font-semibold heading">An Overview</h1>
        <div className="flex flex-col gap-2 md:gap-5">
          <p>
            When recruiters are considering alternatives to Micro1, they may be
            looking for more targeted screening (video, phone, coding), more
            in-depth anti-cheating, that is built into the app itself, and ATS
            integration that allows them to easily advance candidates to
            interview/hire decisions. 
          </p>
          <p>
            {" "}
            Hyring’s product area is recruitment workflows (screen → assess →
            decide), while Micro1’s is the human data layer and sourcing and
            vetting expert talent (using Zara).
          </p>
        </div>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="heading wordspacing">
          Why Hiring Teams Migrate From Micro1 To Hyring
        </h1>
        <div className="flex flex-col gap-2 md:gap-4">
          <p>
            Micro1 is marketed as a human data and intelligence platform (Data
            Engine, Zara, Intelligence) aimed at enterprises and labs.  
          </p>
          <p>
            {" "}
            This makes it extremely strong at sourcing and expert-level
            screening, but less clear on recruiter-facing functionality that
            many high-volume hiring teams need out of the box. These include -
            documented remote proctoring guidelines, role-based scoring
            templates, public pricing, and ready-made ATS connectors.
          </p>
          <p>
            {" "}
            This mismatch in requirements is often why teams whose core problem
            is running hiring workflows ultimately choose Hyring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompareOverview;
