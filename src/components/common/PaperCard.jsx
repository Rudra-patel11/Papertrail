import { Card, CardContent, Typography } from "@mui/material";

function PaperCard({ title, authors, year, onClick, isSelected }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 2,
        cursor: "pointer",
        border: isSelected ? "2px solid #1976d2" : "1px solid transparent",
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {authors}
        </Typography>
        <Typography variant="caption">Published: {year}</Typography>
      </CardContent>
    </Card>
  );
}

export default PaperCard;