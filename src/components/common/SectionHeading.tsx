import React from "react";

const SectionHeading = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <h2 className="text-[22px] font-semibold text-[#3bb77e] capitalize">
      {sectionTitle}
    </h2>
  );
};

export default SectionHeading;
