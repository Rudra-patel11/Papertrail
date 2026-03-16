import { useState } from "react";
import { Container, Typography, Grid, Paper, Stack } from "@mui/material";
import SearchBar from "../components/common/SearchBar";
import PaperCard from "../components/common/PaperCard";

const samplePapers = [
  {
    id: 1,
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, et al.",
    year: 2017,
  },
  {
    id: 2,
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Jacob Devlin, Ming-Wei Chang, et al.",
    year: 2018,
  },
  {
    id: 3,
    title: "Graph Neural Networks: A Review of Methods and Applications",
    authors: "Zonghan Wu, Shirui Pan, et al.",
    year: 2020,
  },
];

function Dashboard() {
  const [results, setResults] = useState(samplePapers);

  const handleSearch = (query) => {
    const filtered = samplePapers.filter((paper) =>
      paper.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Search Papers</Typography>
              <SearchBar onSearch={handleSearch} />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, minHeight: 320 }}>
            <Typography variant="h6" gutterBottom>
              Search Results
            </Typography>

            {results.length > 0 ? (
              results.map((paper) => (
                <PaperCard
                  key={paper.id}
                  title={paper.title}
                  authors={paper.authors}
                  year={paper.year}
                />
              ))
            ) : (
              <Typography>No papers found.</Typography>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, minHeight: 320 }}>
            <Typography variant="h6" gutterBottom>
              Graph Preview
            </Typography>
            <Typography>
              Citation graph preview will go here later.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;