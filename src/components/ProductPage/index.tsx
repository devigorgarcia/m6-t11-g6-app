import { Flex } from "@chakra-ui/react";
import { ProductPageOwnerDetail } from "./OwnerDetail";
import { CarImages } from "./CarImages";
import { CarDescription } from "./CarDescription/indedx";
import { CarAnnouncementInfo } from "./CarAnnouncementInfo";
import { Comments } from "./Comments";
import { CommentBox } from "./CommentBox";
import { CarImage } from "./CarImage";
import { useContext, useEffect } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";

export const ProductComponent = () => {
  const { getVehicles,vehicles } = useContext(VehicleContext);

  useEffect(()=>{
    getVehicles()
  },[])

  console.log(vehicles)

  return (
    <Flex
      bg={[
        "linear-gradient(#4529E6 15%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 23%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 25%, #FFFFFF 0%)",
        "linear-gradient(#4529E6 28%, #FFFFFF 0%)",
      ]}
    >
      <Flex flexDirection={["column"]} gap={"20px"}>
        <CarImage />

        <CarAnnouncementInfo />

        <CarDescription />
        <Flex
          gap={"20px"}
          display={["flex", "flex", "flex", "none"]}
          flexDirection={["column"]}
        >
          <CarImages />

          <ProductPageOwnerDetail />
        </Flex>

        <Comments />

        <CommentBox />
      </Flex>
      <Flex
        gap={"20px"}
        display={["none", "none", "none", "flex"]}
        flexDirection={["column"]}
        margin={"6.5% 10% 0 auto"}
      >
        <CarImages />

        <ProductPageOwnerDetail />
      </Flex>
    </Flex>
  );
};
