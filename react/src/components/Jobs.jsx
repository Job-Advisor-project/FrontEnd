import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getOpenJobsVm } from "../api/viewModelels/openJobsVm";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function OpenJobs({ company }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [openJobs, setOpenJobs] = useState([]);
  useEffect(() => {
    getOpenJobsVm(company).then((vm) => {
      setOpenJobs(vm);
    });
  }, [company]);
  console.log(openJobs);
  return (
    <Grid container spacing={4}>
      {openJobs.map((job) =>
        job.attributes.job_opportunities.data.map((j) => (
          <Grid item xs={12} sm={12} md={4}>
            <Card
              key={j.attributes.title}
              sx={{ minWidth: 250, minHeight: 400, mt: 4 }}
            >
              <CardActionArea>
                <CardMedia
                  key={j.attributes.title}
                  sx={{ objectFit: "cover", height: "20vh" }}
                  component="img"
                  image={`${job.attributes.image.data.attributes.formats.thumbnail.url}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {j.attributes.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {j.attributes.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  // href={`https://www.linkedin.com/company/${job.attributes.name}/jobs/`}
                  size="small"
                  color="primary"
                  target="_top"
                  rel="noopener noreferrer"
                  href={`mailto:${j.attributes.contactEmail}`}
                >
                  Apply here
                </Button>
                <Button
                  onClick={() =>
                    openInNewTab(
                      `https://www.linkedin.com/company/${job.attributes.name}/jobs/`
                    )
                  }
                  size="small"
                  color="primary"
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
