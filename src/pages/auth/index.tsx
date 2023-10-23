import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.scss";
import { Box } from "@mui/material";
// import axios from "axios";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === "/login") {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post("/auth/login", userData);
        // await dispatch(login(user.data));
        dispatch(login(user.data));
        navigate("/");
      } catch (error) {
        // throw new Error(error);
        return error;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            firstName,
            userName,
            email,
            password,
          };
          const newUser = await instance.post("/auth/register", userData);
          await dispatch(login(newUser.data));
          navigate("/");
        } catch (error) {
          // throw new Error(error);
          return error;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className='root'>
      <form className='form' onSubmit={handelSubmit}>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' maxWidth={640} margin='auto' padding={5} borderRadius={5} boxShadow={"-3px -2px 20px 1px #202020"}>
          {location.pathname === "/login" ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate} />
          ) : location.pathname === "/register" ? (
            <RegisterPage setEmail={setEmail} setFirstName={setFirstName} setUserName={setUserName} setPassword={setPassword} setRepeatPassword={setRepeatPassword} navigate={navigate} />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
