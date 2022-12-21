import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { AnnouncementDetails } from "../AnnouncementDetails";

export const UserSectionDash = () => {
  const { getUser, user } = useContext(UserContext);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, []);

  return (
    <Flex
      bg={[
        "linear-gradient(#4529E6 65%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 23%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 25%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 28%, #FFFFFF 0%)",
      ]}
    >
      <AnnouncementDetails user={user} />
    </Flex>
  );
};
