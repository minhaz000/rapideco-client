"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeaderSetting from "./components/HeaderSetting";
import FooterSetting from "./components/FooterSetting";
import BodySetting from "./components/BodySetting";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const HomePage = () => {
  // const setting = useQueryData(["get setting data"], "/assets/site.settings.json");
  const setting = useQuery({
    queryKey: ["get setting data"],
    queryFn: async () => {
      const res = await axios.get("/assets/site.settings.json");
      return res.data;
    },
  });
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Header setting</Tab>
          <Tab>Main Body</Tab>
          <Tab>Footer</Tab>
        </TabList>

        <TabPanel>{setting.data && <HeaderSetting setting={setting} />}</TabPanel>
        <TabPanel>{setting.data && <BodySetting setting={setting} />}</TabPanel>
        <TabPanel>{setting.data && <FooterSetting setting={setting} />}</TabPanel>
      </Tabs>
    </>
  );
};

export default HomePage;
