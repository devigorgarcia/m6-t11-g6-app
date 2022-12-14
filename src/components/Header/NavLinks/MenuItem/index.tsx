import { Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  to: string;
  highlight?: boolean;
}

export const MenuItem = ({
  children,
  to,
  highlight,
  ...rest
}: MenuItemProps) => {
  return (
    <Link href={to} _hover={{ textDecor: "none" }}>
      <Text
        display={"flex"}
        alignItems="center"
        fontSize={["18px", "17px"]}
        gap="2"
        color={{ base: highlight ? "blue.900" : "gray.900" }}
        _hover={{ color: "brand.1" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};
