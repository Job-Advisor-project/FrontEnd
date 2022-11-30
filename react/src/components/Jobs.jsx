import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";
import { getOpenJobsVm } from "../api/viewModelels/openJobsVm";

import { Button, CardActionArea, CardActions, Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {openJobs.map((job) =>
        job.attributes.job_opportunities.data.map((j) => (
          <Card key={j.attributes.title} sx={{ width: 345, m: 5 }}>
            <CardActionArea>
              <CardMedia
                key={j.attributes.title}
                component="img"
                height="140"
                image={`https://strapi-production-ed57.up.railway.app${job.attributes.image.data.attributes.formats.thumbnail.url}`}
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
                target="_top"
                rel="noopener noreferrer"
              >
                Learn more
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
}
