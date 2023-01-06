import { Box, Flex, Heading, Image} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { ImageVehicleModal } from "../../Modals/ImageVehicleModal";

export interface IImagesData {
  id: string;
  url: string;
  vehicleId: string;
}

export interface IImages {
  images: IImagesData[];
}

export const CarImages = ({ images }: any) => {
  
  const { onOpenImage } = useContext(ModalContext);

  return (
    <>
      {images != undefined ? (
        <>
          <Flex
            bg="grey.9"
            width={["90%", "70%"]}
            height={"350px"}
            margin={"0 auto"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            padding={"2rem"}
            borderRadius={"5px"}
            wrap={"wrap"}
          >
            <Heading size={"md"} marginBottom={"1rem"}>Fotos</Heading>

            {images.map((image: IImagesData) => {
              return (
                <Box key={image.id}>
                  <Flex gap={"5px"} wrap={"wrap"}>
                    <Flex
                      width={["90px", "80px"]}
                      height={["90px", "80px"]}
                      bg={"grey.7"}
                      borderRadius={"5px"}
                    >
                      <Image
                        id="1"
                        onClick={onOpenImage}
                        src={image.url}
                        width={"100%"}
                        height={"60%"}
                        margin={"auto"}
                      />
                    </Flex>
                  </Flex>

                  <ImageVehicleModal url={image.url}/>
                </Box>
              );
            })}
          </Flex>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
