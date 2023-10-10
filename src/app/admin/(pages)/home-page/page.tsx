"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeaderSetting from "./components/HeaderSetting";
import FooterSetting from "./components/FooterSetting";
import BodySetting from "./components/BodySetting";
const HomePage = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Header setting</Tab>
          <Tab>Main Body</Tab>
          <Tab>Footer</Tab>
        </TabList>

        <TabPanel>
          <HeaderSetting />
        </TabPanel>
        <TabPanel>
          <BodySetting />
        </TabPanel>
        <TabPanel>
          <FooterSetting />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default HomePage;
