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
import { useParams } from "react-router-dom";

export const ProductComponent = () => {
  
  const { id } = useParams();

  const { profileVehicle, vehicleInfo} = useContext(VehicleContext);

  const carImage = vehicleInfo.frontImg;
  const carTitle = vehicleInfo.title;
  const carDescription = vehicleInfo.description;
  const carPrice = vehicleInfo.price;
  const carKm = vehicleInfo.km;
  const carYear = vehicleInfo.year;
  const carUser = vehicleInfo.user;
  const carId = vehicleInfo.id;
  const carImages = vehicleInfo.gallery

  useEffect(() => {
    if (id) {
      profileVehicle(id);
    }
  }, []);

  return (
    <>
      {carId ? (
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
              <CarImages images={carImages}/>

              <ProductPageOwnerDetail owner={carUser} />
            </Flex>

            <Comments carId={carId}/>

            <CommentBox owner={carUser} carId={carId} />
          </Flex>
          <Flex
            gap={"20px"}
            display={["none", "none", "none","flex","flex", "flex"]}
            flexDirection={["column"]}
            margin={"6.5% 10% 0 auto"}
          >
            <CarImages images={carImages}/>

            <ProductPageOwnerDetail owner={carUser} />
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};
