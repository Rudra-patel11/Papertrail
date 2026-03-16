import { Card, CardContent, Typography } from "@mui/material";

function PaperCard({ title, authors, year }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2" color="text.secondary">
          {authors}
        </Typography>

        <Typography variant="caption">Published: {year}</Typography>
      </CardContent>
    </Card>
  );
}

export default PaperCard;