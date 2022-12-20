import { Flex } from "@chakra-ui/react";
import { ProductPageOwnerDetail } from "./OwnerDetail";
import { CarImages } from "./CarImages";
import { CarDescription } from "./CarDescription/indedx";
import { CarAnnouncementInfo } from "./CarAnnouncementInfo";
import { Comments } from "./Comments";
import { CommentBox } from "./CommentBox";
import { CarImage } from "./CarImage";

export const ProductPage = () => {
  return (
    <Flex
      flexDirection={"column"}
      bg={"linear-gradient(#4529E6 15%, #FFFFFF 0%)"}
      gap={"20px"}
    >
      <CarImage/>
      
      <CarAnnouncementInfo />

      <CarDescription />

      <CarImages />

      <ProductPageOwnerDetail />

      <Comments />

      <CommentBox />
    </Flex>
  );
};
