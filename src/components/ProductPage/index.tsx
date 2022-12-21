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
  const { profileVehicle, vehicleInfo, owner } = useContext(VehicleContext);

  const vehicleId = "e2c62435-b9b7-401d-9daf-dafe3abb9b6f";
  useEffect(() => {
    profileVehicle(vehicleId);
  }, []);

  // console.log(vehicleInfo.user)
  // console.log(owner)

  const carImage = vehicleInfo.frontImg;
  const carTitle = vehicleInfo.title;
  const carDescription = vehicleInfo.description;
  const carPrice = vehicleInfo.price;
  const carKm = vehicleInfo.km;
  const carYear = vehicleInfo.year;
  const carComments = vehicleInfo.Comment;
  const carUser = vehicleInfo.user;

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
        <CarImage image={carImage} />

        <CarAnnouncementInfo
          title={carTitle}
          price={carPrice}
          km={carKm}
          year={carYear}
        />

        <CarDescription description={carDescription} />
        <Flex
          gap={"20px"}
          display={["flex", "flex", "flex", "none"]}
          flexDirection={["column"]}
        >
          <CarImages />

          <ProductPageOwnerDetail owner={carUser}/>
        </Flex>

        <Comments comments={carComments} />

        <CommentBox />
      </Flex>
      <Flex
        gap={"20px"}
        display={["none", "none", "none", "flex"]}
        flexDirection={["column"]}
        margin={"6.5% 10% 0 auto"}
      >
        <CarImages />

        <ProductPageOwnerDetail owner={carUser}/>
      </Flex>
    </Flex>
  );
};
