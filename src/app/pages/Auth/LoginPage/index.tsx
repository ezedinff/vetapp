/**
 *
 * LoginPage
 *
 */
import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Form from 'app/components/Form';
import forms from 'utils/forms';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'assets/logo.png';
import { useHistory } from 'react-router-dom';
const LoginFooter = () => {
  return (
    <Typography
      style={{ textAlign: 'center', marginTop: '24px' }}
      variant="body1"
    >
      <Link color="textSecondary" to={'/register'} component={RouterLink}>
        Don&apos;t have an account?{' '}
      </Link>
    </Typography>
  );
};
export function LoginPage() {
  const history = useHistory();
  const submit = (value: { username: string; password: string }) => {
    if (value.username === 'test@gmail.com' && value.password === '123456') {
      history.push('/admin/dashboard');
    }
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box style={{ background: '#e3f2fd', overflow: 'hidden' }}>
        <div
          style={{ textAlign: 'center', padding: '24px', marginBottom: '24px' }}
        >
          <img width="128" loading="lazy" src={Logo} />
          <Typography
            variant="h4"
            color="textSecondary"
            style={{ fontWeight: 'bolder', textTransform: 'uppercase' }}
          >
            Veternaria
          </Typography>
        </div>
        <Container
          style={{
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          maxWidth="sm"
        >
          <Box style={{ padding: '24px' }} width="100%" component={Paper}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
              }}
            >
              <Typography
                color="primary"
                variant="h6"
                style={{ fontWeight: 'bolder' }}
              >
                Hi, Welcome Back
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle1"
                children={'Enter your credentials to continue'}
              />
            </div>
            <Form
              submitForm={submit}
              data={{ username: 'test@gmail.com', password: '123456' }}
              elements={forms.login}
              submitButtonTitle={'Login'}
            />
            <Divider />
            <LoginFooter />
          </Box>
        </Container>
      </Box>
    </>
  );
}
