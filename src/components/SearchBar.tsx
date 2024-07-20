import { Dispatch } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type TSearchBarProps = {
  setSearchQuery: Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  setSearchQuery,
}: TSearchBarProps): JSX.Element {
  function handleSearch(value: string): void {
    setSearchQuery(value);
  }

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onChange={(e) => handleSearch(e.target.value)}
        type="search"
        placeholder="Search movies..."
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
