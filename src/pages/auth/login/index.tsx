import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { IPropsLogin } from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = ({ setEmail, setPassword, navigate }): JSX.Element => {
  return (
    <>
      <Typography variant='h2' fontFamily={"Poppins"} textAlign='center'>
        Авторизація
      </Typography>
      <Typography variant='body1' marginBottom={3} fontFamily={"Poppins"} textAlign='center'>
        Ведіть свій логін і пароль
      </Typography>
      <TextField onChange={(e) => setEmail(e.target.value)} fullWidth={true} margin='normal' label='Email' variant='outlined' placeholder='Ведіть Email' />
      <TextField onChange={(e) => setPassword(e.target.value)} type='password' fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Ведіть Password' />
      <Button type='submit' sx={{ fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%" }} variant='contained'>
        Війти
      </Button>
      <Typography
        variant='body1'
        sx={{
          fontFamily: "Poppins",
        }}
      >
        Вас немає акаунта?
        <span className='incitingText' onClick={() => navigate("/register")}>
          Реєстрація
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
