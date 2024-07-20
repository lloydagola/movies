import movieData from "./_mocks/movies";

import "./App.css";
import Box from "@mui/material/Box";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Box>
          <Movies movies={movieData} />
        </Box>
      </body>
    </div>
  );
}

export default App;
