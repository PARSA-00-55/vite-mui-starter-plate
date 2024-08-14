import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { ThemeContextProvider } from "./ThemeContext";
import ThemeSwithcer from "./Components/ThemeSwithcer";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function App() {
  return (
    <>
      <h1
        style={{
          marginTop: "24px",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Theme playground
      </h1>
      <ThemeContextProvider>
        <Container>
          <Paper>
            <Box p={4} mb={10}>
              <ThemeSwithcer />
              {/* ===== headings ====== */}
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              {/* ======= buttons ====== */}
              <Button variant="contained">test</Button>&nbsp;
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
                <Fab variant="extended">
                  <NavigationIcon sx={{ mr: 1 }} />
                  Navigate
                </Fab>
                <Fab disabled aria-label="like">
                  <FavoriteIcon />
                </Fab>
              </Box>
              {/* ======= cards ====== */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    be
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              {/* ========== radio groups =========== */}
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Paper>
        </Container>
      </ThemeContextProvider>
    </>
  );
}

export default App;
