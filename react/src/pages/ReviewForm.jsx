import {
  Box,
  Checkbox,
  Grid,
  Typography,
  Button,
  Rating,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddReview } from "../api/addReview";

export default function ReviewForm({ companyId }) {
  const navigate = useNavigate();
  const [review, setReview] = useState({
    jobTitle: "",
    stars: 0,
    employee: true,
    reviewTitle: "",
    feedback: "",
    company: {
      id: companyId,
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    getAddReview(review);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/cc-bg.png')`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        maxWidth: "100%",
      }}
    >
      <Grid item xs={4} md={4}>
        <Typography sx={{ ml: 5 }}>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={150}
            height={120}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography textAlign="center" variant="h4" sx={{ my: 3 }} gutterBottom>
          Your first-hand experience will help other job seekers.<br></br> Thank
          you!
        </Typography>
        <form
          style={{
            border: "2px solid #52D1A8",
            display: "flex",
            flexDirection: "column",
            minWidth: "30%",
            margin: "auto",
            height: "600px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onSubmit={handleSubmit}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="employee"
                value={review.employee}
                sx={{ m: 2 }}
                defaultChecked
                onChange={(e) => {
                  setReview({
                    ...review,
                    employee: !review.employee,
                  });
                }}
              />
            }
            label="Are you current or former employee of the company?"
            labelPlacement="start"
          />

          <TextField
            id="outlined-name"
            name="jobTitle"
            label="Title of your position"
            value={review.jobTitle}
            onChange={(e) => {
              setReview({
                ...review,
                jobTitle: e.target.value,
              });
            }}
          />
          <TextField
            id="outlined-name"
            name="reviewTitle"
            label="Title of your review"
            value={review.reviewTitle}
            onChange={(e) => {
              setReview({
                ...review,
                reviewTitle: e.target.value,
              });
            }}
          />
          <Typography component="legend">
            Your overall rating of the company
          </Typography>
          <Rating
            name="stars"
            value={review.stars}
            onChange={(e, newValue) => {
              setReview({
                ...review,
                stars: newValue,
              });
            }}
          />
          <TextField
            name="feedback"
            label="Your review"
            multiline
            maxRows={4}
            value={review.feedback}
            onChange={(e) => {
              setReview({
                ...review,
                feedback: e.target.value,
              });
            }}
          />

          <Button
            sx={{ m: 2 }}
            variant="outlined"
            cursor="pointer"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
