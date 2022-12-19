import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { ICreateVehicleData } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const CreateVehicleForm = () => {
  const { createVehicle } = useContext(VehicleContext);

  const [isCar, setIsCar] = useState<boolean>(true);
  const [inputNumber, setInputNumber] = useState([1]);

  const createSchema = yup.object().shape({
    title: yup.string().required(),
    year: yup.number().required(),
    km: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    frontImg: yup.string().required(),
    gallery: yup.array(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICreateVehicleData>({
    resolver: yupResolver(createSchema),
  });

  const onSubmit = (data: ICreateVehicleData) => {
    const fulLData = {
      ...data,
      isCar: isCar,
    };

    createVehicle(fulLData);
  };

  const addInputField = () => {
    const newInput = inputNumber[inputNumber.length - 1] + 1;
    setInputNumber([...inputNumber, newInput]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8} justifyContent="flex-start">
        <FormControl w="100%">
          <FormLabel>Tipo de Anuncio</FormLabel>
          <ButtonGroup w="100%">
            <Button variant="brand1" w="100%">
              Venda
            </Button>
            <Button disabled w="100%">
              Leilão
            </Button>
          </ButtonGroup>
        </FormControl>
        <Box width="100%">
          <Heading size="sm">Informações do veículo</Heading>
        </Box>
        <FormControl isRequired w="100%">
          <FormLabel>Título</FormLabel>
          <Input placeholder="Digite  titulo" {...register("title")} />
        </FormControl>

        <HStack>
          <FormControl isRequired w="100%">
            <FormLabel>Ano</FormLabel>
            <Input
              type="number"
              placeholder="Digitar Ano"
              {...register("year")}
            />
          </FormControl>

          <FormControl isRequired w="100%">
            <FormLabel>Km</FormLabel>
            <Input type="number" placeholder="0" {...register("km")} />
          </FormControl>
          <FormControl isRequired w="100%">
            <FormLabel>Preço</FormLabel>
            <Input
              type="number"
              placeholder="Digitar Preço"
              {...register("price")}
            />
          </FormControl>
        </HStack>
        <FormControl isRequired w="100%">
          <FormLabel>Descrição</FormLabel>
          <Textarea resize="none" {...register("description")} />
        </FormControl>

        <FormControl isRequired w="100%">
          <FormLabel>Tipo de veículo</FormLabel>
          <ButtonGroup w="100%">
            <Button
              onClick={() => setIsCar(true)}
              variant={isCar ? "brand1" : "outline1"}
              w="100%"
            >
              Carro
            </Button>
            <Button
              onClick={() => setIsCar(false)}
              variant={isCar ? "outline1" : "brand1"}
              w="100%"
            >
              Moto
            </Button>
          </ButtonGroup>
        </FormControl>
        <FormControl isRequired w="100%">
          <FormLabel>Imagem da capa</FormLabel>
          <Input
            placeholder="Inserir URL da imagem"
            {...register("frontImg")}
          />
        </FormControl>
        {inputNumber.map((number, index) => {
          return (
            <FormControl w="100%" key={index}>
              <FormLabel>{number}ª Imagem da galeria</FormLabel>
              <Input
                placeholder="Inserir URL da imagem"
                {...register(`gallery.${index}`)}
              />
            </FormControl>
          );
        })}
        <ButtonGroup width="100%" justifyContent="flex-start">
          <Button
            w="90%"
            justifySelf="flex-start"
            variant="outlineBrand"
            onClick={addInputField}
            width="100%"
          >
            Adicionar campo para imagem da galeria
          </Button>
        </ButtonGroup>
      </VStack>
      <ButtonGroup
        mt="3.5rem"
        width="100%"
        justifyContent="flex-end"
        paddingBottom={6}
      >
        <Button variant="negative">Cancelar</Button>
        <Button
          disabled={Object.entries(errors).length == 0 ? false : true}
          type="submit"
          variant="brand1"
          _hover={{}}
        >
          Criar anúncio
        </Button>
      </ButtonGroup>
    </form>
  );
};
