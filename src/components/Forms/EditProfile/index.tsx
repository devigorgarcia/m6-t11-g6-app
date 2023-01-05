import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  VStack,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/userContext";
import jwt_decode from "jwt-decode";
import { ModalContext } from "../../../contexts/ModalContext";

interface IEditProfileData {
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: Date;
  descripiton: string;
}

export const EditProfileForm = () => {
  const { onCloseEditProfile } = useContext(ModalContext);
  const { getUserProfile, userProfile } = useContext(UserContext);
  const token = localStorage.getItem("@MotorShop:Token");

  useEffect(() => {
    if (token) {
      let decodeToken = jwt_decode<any>(token);
      getUserProfile(decodeToken.id);
    }
  }, []);

  let year = userProfile.birthday.substring(0, 4);
  let month = userProfile.birthday.substring(5, 7);
  let day = userProfile.birthday.substring(8, 10);

  let completeDate = day + "/" + month + "/" + year;

  const createSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    cpf: yup.string(),
    fone: yup.string(),
    birthday: yup.date(),
    descripiton: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IEditProfileData>({
    resolver: yupResolver(createSchema),
  });

  const onSubmit = (data: IEditProfileData) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8} justifyContent="flex-start">
        <Box width="100%">
          <Heading size="sm">Informações pessoais</Heading>
        </Box>
        <FormControl w="100%">
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder={userProfile.name}
            {...register("name")}
            defaultValue={userProfile.name}
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder={userProfile.email}
            {...register("email")}
            defaultValue={userProfile.email}
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>CPF</FormLabel>
          <Input
            placeholder={userProfile.cpf}
            {...register("cpf")}
            defaultValue={userProfile.cpf}
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Celular</FormLabel>
          <Input
            placeholder={userProfile.fone}
            {...register("fone")}
            defaultValue={userProfile.fone}
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Data de nascimento</FormLabel>
          <Input
            placeholder={completeDate}
            {...register("birthday")}
            defaultValue={completeDate}
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Descrição</FormLabel>
          <Textarea
            resize="none"
            {...register("descripiton")}
            defaultValue={userProfile.descripiton}
            placeholder={userProfile.descripiton}
          />
        </FormControl>
      </VStack>
      <ButtonGroup
        mt="3.5rem"
        width="100%"
        justifyContent="flex-end"
        paddingBottom={6}
      >
        <Button variant="negative" onClick={onCloseEditProfile}>
          Cancelar
        </Button>
        <Button
          disabled={Object.entries(errors).length == 0 ? false : true}
          type="submit"
          variant="brand1"
          _hover={{}}
          width="50%"
          paddingX={["1em", "0", "0", "0"]}
        >
          Salvar Alterações
        </Button>
      </ButtonGroup>
    </form>
  );
};
