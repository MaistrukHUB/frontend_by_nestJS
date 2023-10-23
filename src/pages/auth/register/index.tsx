import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = ({ setEmail, setFirstName, setUserName, setPassword, setRepeatPassword, navigate }): JSX.Element => {
  return (
    <>
      <Typography variant='h2' fontFamily={"Poppins"} textAlign='center'>
        Реєстрація
      </Typography>
      <Typography variant='body1' marginBottom={3} fontFamily={"Poppins"} textAlign='center'>
        Ведіть дані для реєстрації
      </Typography>
      <TextField onChange={(e) => setFirstName(e.target.value)} fullWidth={true} margin='normal' label={`Ім'я`} variant='outlined' placeholder={`Ведіть ваше ім'я`} />
      <TextField onChange={(e) => setUserName(e.target.value)} fullWidth={true} margin='normal' label='Username' variant='outlined' placeholder='Ведіть ваш username' />
      <TextField onChange={(e) => setEmail(e.target.value)} fullWidth={true} margin='normal' label='Email' variant='outlined' placeholder='Ведіть Email' />
      <TextField onChange={(e) => setPassword(e.target.value)} type='password' fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Ведіть Password' />
      <TextField onChange={(e) => setRepeatPassword(e.target.value)} type='password' fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Повторіть Password' />
      <Button type='submit' sx={{ fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%" }} variant='contained'>
        Зареєструватись
      </Button>
      <Typography
        variant='body1'
        sx={{
          fontFamily: "Poppins",
        }}
      >
        Вас є акаунт?
        <span className='incitingText' onClick={() => navigate("/login")}>
          Війти
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
