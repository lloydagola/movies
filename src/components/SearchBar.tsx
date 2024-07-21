import { Dispatch, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type TSearchBarProps = {
  //setSearchQuery: Dispatch<React.SetStateAction<string>>;
  setSearchQuery: any;
};

export default function SearchBar({
  setSearchQuery,
}: TSearchBarProps): JSX.Element {
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onChange={setSearchQuery}
        type="search"
        placeholder="Search movies..."
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
