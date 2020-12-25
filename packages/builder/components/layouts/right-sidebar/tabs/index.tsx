import {
  Box,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { MdChromeReaderMode, MdDns, MdSettings } from "react-icons/md";

const LazyRightSidebarSectionsTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyRightSidebarSectionsTab' */ "components/layouts/right-sidebar/tabs/sections"
    ),
  { ssr: false }
);

const RightSidebarTabs: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");

  return (
    <Tabs isLazy>
      <TabList bg={editorControlsBgColor}>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdDns} />
            <Text>Sections</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdChromeReaderMode} />
            <Text>Templates</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdSettings} />
            <Text>Settings</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box bg={editorControlsBgColor}>
            <LazyRightSidebarSectionsTab />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightSidebarTabs;