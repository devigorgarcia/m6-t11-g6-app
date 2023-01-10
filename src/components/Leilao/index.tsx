import { Flex, Heading, HStack } from "@chakra-ui/react";
import { LeilaoCard } from "../LeilaoCard";

export interface ILeilaoData {
  photo: string;
  name: string;
  description: string;
  km: number;
  year: number;
  price: number;
  owner: string;
  time: string;
}

export const Leilao = () => {
  const firstData: ILeilaoData = {
    photo: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202212/20221229/bmw-320i-2.0-16v-turbo-flex-m-sport-automatico-wmimagem14083153791.jpg?s=fill&w=552&h=414&q=60",
    name: "BMW 320i",
    description: "2.0 16V TURBO FLEX M SPORT AUTOMÁTICO",
    km: 6262,
    year: 2022,
    price: 324900,
    owner: "Renato Suzuki",
    time: "00:38:26"
  }

  const secondData: ILeilaoData = {
    photo: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202212/20221206/mercedesbenz-c-300-2.0-cgi-gasolina-sport-9gtronic-wmimagem15363447839.jpg?s=fill&w=552&h=414&q=60",
    name: "MERCEDES-BENZ C 300",
    description: "2.0 CGI GASOLINA SPORT 9G-TRONIC",
    km: 33000,
    year: 2018,
    price: 269900,
    owner: "Cayo Nakasato",
    time: "07:21:39"
  }

  const thirdData: ILeilaoData = {
    photo: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202212/20221228/porsche-macan-2.0-16v-gasolina-4p-automatico-wmimagem11350394014.jpg?s=fill&w=552&h=414&q=60",
    name: "PORSCHE MACAN",
    description: "2.0 16V GASOLINA 4P AUTOMÁTICO",
    km: 25800,
    year: 2020,
    price: 496900,
    owner: "Igor Garcia",
    time: "04:16:09"
  }

  const fourthData: ILeilaoData = {
    photo: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202210/20221004/mitsubishi-eclipse-cross-1.5-mivec-turbo-gasolina-hpes-sawc-cvt-wmimagem15453429740.jpg?s=fill&w=552&h=414&q=60",
    name: "MITSUBISHI ECLIPSE CROSS",
    description: "1.5 MIVEC TURBO GASOLINA HPE-S S-AWC CVT",
    km: 0,
    year: 2023,
    price: 245990,
    owner: "Matheus Willcox",
    time: "35:53:02"
  }

    return (
        <Flex flexDir="column" p="1rem" mt="15" gap={"30"}>
          <Heading fontFamily={"Lexend"} fontSize="24px" fontWeight="600">
            Leilão
          </Heading>
          <Flex gap={"5"} overflowX="auto">
            <LeilaoCard data={firstData}/>
            <LeilaoCard data={secondData}/>
            <LeilaoCard data={thirdData}/>
            <LeilaoCard data={fourthData}/>
          </Flex>
        </Flex>
      );
}