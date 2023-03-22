import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Head from "next/head";

const ViewBooks = () => {
  return (
    <>
      <Head>
        <title>View Books - My Library</title>
      </Head>
      <div className="container mx-auto my-8">
        <Tabs defaultIndex={1}>
          <TabList className="flex border-b border-gray-200">
            <Tab className="py-4 px-6 font-semibold text-gray-600 hover:text-gray-800 focus:outline-none">
              Want to Read
            </Tab>
            <Tab className="py-4 px-6 font-semibold text-gray-600 hover:text-gray-800 focus:outline-none">
              Reading
            </Tab>
            <Tab className="py-4 px-6 font-semibold text-gray-600 hover:text-gray-800 focus:outline-none">
              Read
            </Tab>
          </TabList>
          <TabPanel>
            <h2>tab1</h2>
          </TabPanel>
          <TabPanel>
            <h2>tab2</h2>
          </TabPanel>
          <TabPanel>
            <h2>tab3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ViewBooks;
