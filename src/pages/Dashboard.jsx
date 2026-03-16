import { useState } from "react";
import { Container, Typography, Grid, Paper, Stack, Divider } from "@mui/material";
import SearchBar from "../components/common/SearchBar";
import PaperCard from "../components/common/PaperCard";
import CitationGraph from "../components/graph/CitationGraph";

const samplePapers = [
  {
    id: 1,
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, et al.",
    year: 2017,
    abstract:
      "This paper introduced the Transformer architecture and changed the way sequence modeling and language tasks are handled.",
    citations: 120000,
    topic: "Natural Language Processing",
  },
  {
    id: 2,
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Jacob Devlin, Ming-Wei Chang, et al.",
    year: 2018,
    abstract:
      "This paper introduced BERT, a bidirectional language representation model that improved many NLP benchmarks.",
    citations: 95000,
    topic: "Language Models",
  },
  {
    id: 3,
    title: "Graph Neural Networks: A Review of Methods and Applications",
    authors: "Zonghan Wu, Shirui Pan, et al.",
    year: 2020,
    abstract:
      "This review summarizes graph neural network methods, applications, and research directions.",
    citations: 18000,
    topic: "Graph Learning",
  },
];

function Dashboard() {
  const [results, setResults] = useState(samplePapers);
  const [selectedPaper, setSelectedPaper] = useState(samplePapers[0]);

  const handleSearch = (query) => {
    const filtered = samplePapers.filter((paper) =>
      paper.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);

    if (filtered.length > 0) {
      setSelectedPaper(filtered[0]);
    } else {
      setSelectedPaper(null);
    }
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
          <Paper sx={{ p: 3, minHeight: 350 }}>
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
                  isSelected={selectedPaper?.id === paper.id}
                  onClick={() => setSelectedPaper(paper)}
                />
              ))
            ) : (
              <Typography>No papers found.</Typography>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, minHeight: 350 }}>
            <Typography variant="h6" gutterBottom>
              Paper Details
            </Typography>

            {selectedPaper ? (
              <Stack spacing={2}>
                <Typography variant="h6">{selectedPaper.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedPaper.authors}
                </Typography>

                <Divider />

                <Typography>
                  <strong>Year:</strong> {selectedPaper.year}
                </Typography>
                <Typography>
                  <strong>Topic:</strong> {selectedPaper.topic}
                </Typography>
                <Typography>
                  <strong>Citations:</strong> {selectedPaper.citations}
                </Typography>

                <Typography>
                  <strong>Abstract:</strong> {selectedPaper.abstract}
                </Typography>

                <Divider />

                <Typography variant="h6">Citation Network Preview</Typography>
                <Typography variant="body2" color="text.secondary">
                  Left side shows cited papers. Right side shows papers that reference the selected paper.
                </Typography>
                <CitationGraph selectedPaper={selectedPaper} />
              </Stack>
            ) : (
              <Typography>Select a paper to see details.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;