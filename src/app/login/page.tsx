"use client";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const theme = createTheme();

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ email, password });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#212121",
            borderRadius: 2,
            padding: 3,
            boxShadow: 3,
            border: "2px solid #424242",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "white" }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, color: "white" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
                "& .MuiOutlinedInput-root": {
                  "& input": {
                    color: "#eeeeee",
                  },
                  "& fieldset": {
                    borderColor: "#616161", // Màu viền mặc định (trước khi chọn hoặc di chuột vào)
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161", // Màu chữ của nhãn (label)
                },
                "& .MuiOutlinedInput-root": {
                  "& input": {
                    color: "#eeeeee", // Màu chữ của trường nhập (input)
                  },
                  "& fieldset": {
                    borderColor: "#616161", // Màu viền mặc định (trước khi chọn hoặc di chuột vào)
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue", // Màu viền khi ô input đang được chọn
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Màu chữ của nhãn (label)
                  },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 5 }}
            >
              Sign In
            </Button>
            <Typography sx={{ textAlign: "center", color: "#616161" }}>
              Don&apos;t have an account?{" "}
              <span>
                <Link href="/material-ui/getting-started/templates/sign-in/">
                  Sign up
                </Link>
              </span>
            </Typography>
            <Divider sx={{ color: "#616161" }}>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                onClick={() => alert("Sign in with Google")}
                startIcon={<GoogleIcon />}
              >
                Sign in with Google
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                onClick={() => alert("Sign in with Facebook")}
                startIcon={<FacebookIcon />}
              >
                Sign in with Facebook
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
