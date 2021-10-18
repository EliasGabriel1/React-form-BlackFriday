import React from "react";
import Field from "./../Field";
import Form from "./../Form";

import { useForm } from "react-hook-form";
import Button from "../Button";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormNew = () => {

  const schema = yup
    .object({
      name: yup.string().min(2, "É necessário no minimo 2 caracteres").required("Nome Obrigatório"),
      email: yup.string().email().required("E-mail é obrigatório"),
    })
    .required();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

  const newUser = (user) => {console.log(user);}

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" name="name" type="text" register={register} />
      {errors.name?.message}
      {errors.name?.type}
      <Field.Text label="Email" name="email" type="email" register={register} />
      {errors.email?.message}
      {errors.email?.type}
      <Button>Enviar</Button>
    </Form>
  );
};

export default FormNew;
