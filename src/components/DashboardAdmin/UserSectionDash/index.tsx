import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

import { AdminDetails } from "./AdminDetails";

export const AdminSectionDash = () => {
  const { getUserProfile, userProfile } = useContext(UserContext);
  const { userId } = useParams();
  useEffect(() => {
    if (userId) {
      getUserProfile(userId);
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
      <AdminDetails user={userProfile} />
    </Flex>
  );
};
