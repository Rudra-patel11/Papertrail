import { Box, Paper, Typography, Stack } from "@mui/material";

function GraphNode({ label, subtitle, isMain = false }) {
  return (
    <Paper
      elevation={isMain ? 4 : 2}
      sx={{
        p: 2,
        width: 180,
        minHeight: 90,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        border: isMain ? "2px solid #1976d2" : "1px solid #d0d7de",
        backgroundColor: isMain ? "#eaf2ff" : "#ffffff",
      }}
    >
      <Typography variant="body2" fontWeight="bold">
        {label}
      </Typography>

      {subtitle && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      )}
    </Paper>
  );
}

function ConnectionLine({ horizontal = false }) {
  return (
    <Box
      sx={{
        width: horizontal ? 40 : 2,
        height: horizontal ? 2 : 40,
        backgroundColor: "#90a4ae",
      }}
    />
  );
}

function CitationGraph({ selectedPaper }) {
  if (!selectedPaper) {
    return <Typography>Select a paper to view its citation graph.</Typography>;
  }

  const citedPapers = [
    { id: 1, title: "Sequence Learning Foundations", relation: "Cited paper" },
    { id: 2, title: "Neural Machine Translation", relation: "Cited paper" },
    { id: 3, title: "Deep Context Models", relation: "Cited paper" },
  ];

  const referencingPapers = [
    { id: 4, title: "Transformer Applications in NLP", relation: "References this paper" },
    { id: 5, title: "Efficient Language Architectures", relation: "References this paper" },
    { id: 6, title: "Modern Graph-based Retrieval", relation: "References this paper" },
  ];

  return (
    <Box
      sx={{
        mt: 2,
        overflowX: "auto",
        py: 2,
      }}
    >
      <Box
        sx={{
          minWidth: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Stack spacing={2} alignItems="center">
          {citedPapers.map((paper) => (
            <Box
              key={paper.id}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <GraphNode label={paper.title} subtitle={paper.relation} />
              <ConnectionLine horizontal />
            </Box>
          ))}
        </Stack>

        <GraphNode
          label={selectedPaper.title}
          subtitle={`Main Paper • ${selectedPaper.year}`}
          isMain
        />

        <Stack spacing={2} alignItems="center">
          {referencingPapers.map((paper) => (
            <Box
              key={paper.id}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <ConnectionLine horizontal />
              <GraphNode label={paper.title} subtitle={paper.relation} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default CitationGraph;