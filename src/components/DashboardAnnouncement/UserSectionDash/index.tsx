import { Flex } from "@chakra-ui/react";
import { AnnouncementDetails } from "../AnnouncementDetails";

export const UserSectionDash = () => {
  return (
    <Flex
      bg={[
        "linear-gradient(#4529E6 65%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 23%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 25%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 28%, #FFFFFF 0%)",
      ]}
    >
      <AnnouncementDetails/>
    </Flex>
  );
};
