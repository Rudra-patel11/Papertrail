import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Search papers..."
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Stack>
    </form>
  );
}

export default SearchBar;