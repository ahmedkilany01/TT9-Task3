import Header from "@/components/atoms/Header";
import { Card, Typography, FormControl, TextField, InputAdornment, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const LoginPage = () => {
  return (
    <div style={{height:2000}}>
      <Header />
      <Card variant="outlined" sx={{ width: 450, textAlign: "center", margin: "1rem auto" }}>
        <Typography variant="h4">Log in to Upwork</Typography>
        <FormControl variant="standard">
          <TextField
            placeholder="Username or Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button variant="contained">Continue with Email</Button>
          {/* OR */}
          <Button variant="contained">Continue with Google</Button>
          <Button variant="outlined">Continue with Apple</Button>

          {/* Don't have an Upwork account? */}
          <Button variant="outlined">Sign Up</Button>
        </FormControl>
      </Card>
    </div>
  );
};

export default LoginPage;
