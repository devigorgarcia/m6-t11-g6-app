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
import { IEditModalProps } from "../../../interfaces/Modals/modals.interface";
import { DeleteVehicleModal } from "../../Modals/DeleteVehicleModal";
import { ModalContext } from "../../../contexts/ModalContext";

export const EditVehicleForm = ({ vehicleInfo, onClose }: IEditModalProps) => {
  const { updateVehicle } = useContext(VehicleContext);
  const { onOpenDelete } = useContext(ModalContext);
  const actualGalleryArray = () => {
    let newArray = [];
    if (vehicleInfo.gallery) {
      for (let i = 0; i < vehicleInfo.gallery.length; i++) {
        newArray.push(vehicleInfo.gallery[i].url);
      }
    }
    return newArray;
  };

  const [isCar, setIsCar] = useState<boolean>(vehicleInfo.isCar);
  const [isPublic, setIsPublic] = useState<boolean>(vehicleInfo.isActive);
  const [inputNumber, setInputNumber] = useState<string[]>(
    actualGalleryArray()
  );

  const createSchema = yup.object().shape({
    title: yup.string(),
    year: yup.number(),
    km: yup.number(),
    price: yup.number(),
    description: yup.string(),
    frontImg: yup.string(),
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
      isActive: isPublic,
    };

    updateVehicle(fulLData, vehicleInfo.id, onClose);
  };

  const addInputField = () => {
    const newInput = "";
    setInputNumber([...inputNumber, newInput]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={8} justifyContent="flex-start">
          <FormControl w="100%">
            <FormLabel>Tipo de Anuncio</FormLabel>
            <ButtonGroup w="100%">
              <Button variant="brand1" w="100%">
                Venda
              </Button>
              <Button disabled w="100%">
                Leil??o
              </Button>
            </ButtonGroup>
          </FormControl>
          <Box width="100%">
            <Heading size="sm">Informa????es do ve??culo</Heading>
          </Box>
          <FormControl w="100%">
            <FormLabel>T??tulo</FormLabel>
            <Input
              placeholder="Digite  titulo"
              {...register("title")}
              defaultValue={vehicleInfo.title}
            />
          </FormControl>

          <HStack>
            <FormControl w="100%">
              <FormLabel>Ano</FormLabel>
              <Input
                type="number"
                placeholder="Digitar Ano"
                {...register("year")}
                defaultValue={vehicleInfo.year}
              />
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Km</FormLabel>
              <Input
                type="number"
                placeholder="0"
                {...register("km")}
                defaultValue={vehicleInfo.km}
              />
            </FormControl>
            <FormControl w="100%">
              <FormLabel>Pre??o</FormLabel>
              <Input
                type="number"
                placeholder="Digitar Pre??o"
                {...register("price")}
                defaultValue={vehicleInfo.price}
              />
            </FormControl>
          </HStack>
          <FormControl w="100%">
            <FormLabel>Descri????o</FormLabel>
            <Textarea
              resize="none"
              {...register("description")}
              defaultValue={vehicleInfo.description}
            />
          </FormControl>

          <FormControl w="100%">
            <FormLabel>Tipo de ve??culo</FormLabel>
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
          <FormControl w="100%">
            <FormLabel>Publicado</FormLabel>
            <ButtonGroup w="100%">
              <Button
                onClick={() => setIsPublic(true)}
                variant={isPublic ? "brand1" : "outline1"}
                w="100%"
              >
                Sim
              </Button>
              <Button
                onClick={() => setIsPublic(false)}
                variant={isPublic ? "outline1" : "brand1"}
                w="100%"
              >
                N??o
              </Button>
            </ButtonGroup>
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Imagem da capa</FormLabel>
            <Input
              placeholder="Inserir URL da imagem"
              {...register("frontImg")}
              defaultValue={vehicleInfo.frontImg}
            />
          </FormControl>
          {inputNumber.map((gallery, index) => {
            return (
              <FormControl w="100%" key={index}>
                <FormLabel>{index + 1}?? Imagem da galeria</FormLabel>
                <Input
                  placeholder="Inserir URL da imagem"
                  {...register(`gallery.${index}`)}
                  defaultValue={gallery}
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
          <Button onClick={onOpenDelete} variant="negative">
            Excluir an??ncio
          </Button>
          <Button
            disabled={Object.entries(errors).length == 0 ? false : true}
            type="submit"
            variant="brand1"
            _hover={{}}
          >
            Salvar altera????es
          </Button>
        </ButtonGroup>
      </form>
      <DeleteVehicleModal vehicleId={vehicleInfo.id} />
    </>
  );
};
