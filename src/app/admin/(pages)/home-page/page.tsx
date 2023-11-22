"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeaderSetting from "./components/HeaderSetting";
import FooterSetting from "./components/FooterSetting";
import BodySetting from "./components/BodySetting";
import axios from "axios";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [setting, setSetting] = useState({});
  useEffect(() => {
    axios.get("/assets/site.settings.json").then((res) => {
      setSetting(res.data);
    });
  }, []);

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Header setting</Tab>
          <Tab>Main Body</Tab>
          <Tab>Footer</Tab>
        </TabList>

        <TabPanel>
          <HeaderSetting setting={setting} />
        </TabPanel>
        <TabPanel>
          <BodySetting setting={setting} />
        </TabPanel>
        <TabPanel>
          <FooterSetting setting={setting} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default HomePage;
