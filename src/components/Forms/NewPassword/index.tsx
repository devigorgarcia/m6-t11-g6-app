import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ResetPasswordContext } from "../../../contexts/ResetPasswordContext";

export interface IResetPasswordData {
  password: string;
  confirmPassword: string;
}

export const NewPasswordForm = () => {
  const { updateNewPassword } = useContext(ResetPasswordContext);
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IResetPasswordData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IResetPasswordData) => {
    const { password } = data;

    updateNewPassword(password);
  };

  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <Flex
      flexDir={["column"]}
      p={["8"]}
      gap={["4"]}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors?.password}>
        <Flex flexDir={"column"}>
          <FormLabel htmlFor="password">Insira a nova senha</FormLabel>
          <InputGroup maxW={"500px"}>
            <Input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Digite a nova senha"
              {...register("password")}
            />
            <InputRightElement>
              {show ? (
                <AiFillEyeInvisible
                  cursor="pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEye cursor="pointer" onClick={handleShowPassword} />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </Flex>
      </FormControl>
      <FormControl isInvalid={!!errors?.confirmPassword}>
        <Flex flexDir={"column"} >
          <FormLabel htmlFor="confirmPassword">Confirme a nova senha</FormLabel>
          <InputGroup maxW={"500px"}>
            <Input
              id="confirmPassword"
              type={show ? "text" : "password"}
              placeholder="Digite a nova senha"
              {...register("confirmPassword")}
            />
            <InputRightElement>
              {show ? (
                <AiFillEyeInvisible
                  cursor="pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEye cursor="pointer" onClick={handleShowPassword} />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </Flex>
      </FormControl>
      <Button type="submit" variant={"brand1"}>
        Confirmar
      </Button>
    </Flex>
  );
};
