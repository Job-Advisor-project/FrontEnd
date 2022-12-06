# Job Advisor

> Job Advisor helps organisations promote right values and job seekers to make
> right choices for their career.

## Table of contents

- [Name of project](#job-advisor)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Design protoype](#design-protoype)
  - [Tools and Technologies](#tools-and-technologies)
    - [UX/UI](#uxui)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Devops](#devops)
  - [Sample React code](#sample-react-code)
  - [App demo video](#app-demo-video)
  - [Inspiration](#inspiration)
  - [Contact](#contact)
  - [Instructions for use](#instructions-for-use)
  - [Code Quality Checks](#code-quality-checks)
  - [Authors](#authors)

## General info

> At Job Advisor, We help people to get jobs. We believe financial independence
> can help people live up to their potential and get back control of their own
> lives .

## Design protoype

[Our project prototype on FIGMA](https://www.figma.com/proto/JK9J0bDxJJN7OaA8TQm2xh/JA-design?node-id=3%3A1945)

## Tools and Technologies

### UX/UI

- Figma

### Frontend

- Node 14.16.0
- VSC code
- JavaScript
- React Material UI
- Cloudinary photo upload

### Backend

- Node
- Strapi
- Postman

### Devops

- Netlify
- Railway
- Github

## Sample React code

The frontend is using React material UI components. Here is a look at the script
tag for the banner component:

```js
import { Box, Grid, Typography, List, ListItemText } from "@mui/material";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Banner({ setCompany }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        alignItems: "stretch",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Grid item xs={6} md={4}>
        <Typography sx={{ ml: 4 }}>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={170}
            height={150}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h3",
                sm: "h4",
                xs: "h5",
              },
            }}
          >
            Discover a company DNA
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h3",
                sm: "h4",
                xs: "h5",
              },
            }}
          >
            to find perfect match for YOU!
          </Typography>
          <List>
            <ListItemText>
              <Typography
                lineHeight={2}
                sx={{
                  mt: 3,
                  textAlign: "center",
                  typography: { md: "body1", sm: "body2" },
                }}
              >
                Job Advisor helps companies promote the right values and job
                seekers make the right career choice.
              </Typography>
            </ListItemText>
            <SearchBar setCompany={setCompany}></SearchBar>
          </List>
        </Grid>
        <Grid item md={5} lg={4} sx={{ mb: 5 }}>
          <Typography>
            <img
              src="../../assets/figma download/edited-idea.png"
              alt="women"
              style={{
                width: "100%",
                height: "auto",
                textAlign: "center",
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
```

## App demo video

paste the link here

## Inspiration

- [linkedIn](https://www.linkedin.com) The platform is used for professional
  networking and career development, and allows job seekers to post their CVs
  and employers to post jobs

- [Indeed](https://au.indeed.com/)The website for job listings and allowing job
  seekers to apply directly to jobs on its site and offering resume posting and
  storage.

- [Glassdoor](https://www.glassdoor.com.au/index.htm)You deserve a job that
  loves you back. The website where current and former employees anonymously
  review companies.

- [Tripadvisor](https://www.tripadvisor.com/) The online travel company that
  operates a website and mobile app with user-generated content and a comparison
  shopping website. It also offers online hotel reservations and bookings for
  transportation, lodging, travel experiences, and restaurants

## Contact

<mailto:jobadvisor2022@gmail.com>

## Instructions for use

  <summary>Getting Started</summary>

### A guide to use FrontEnd repository

1. git clone`https://github.com/Job-Advisor-project/FrontEnd.git`
2. `cd react`
3. `npm start`

### A guide to use BackEnd repository

1. git clone`https://github.com/Job-Advisor-project/Job-Advisor-backend.git`
2. `npm run develop`

## Code Quality Checks

- `npm run format`: Makes sure all the code in this repository is well-formatted
  (looks good).
- `npm run lint:ls`: Checks to make sure all folder and file names match the
  repository conventions.
- `npm run lint:md`: Will lint all of the Markdown files in this repository.
- `npm run lint:css`: Will lint all of the CSS files in this repository.
- `npm run validate:html`: Validates all HTML files in your project.
- `npm run spell-check`: Goes through all the files in this repository looking
  for words it doesn't recognize. Just because it says something is a mistake
  doesn't mean it is! It doesn't know every word in the world. You can add new
  correct words to the [./.cspell.json](./.cspell.json) file so they won't cause
  an error.
- `npm run accessibility -- ./path/to/file.html`: Runs an accessibility analysis
  on all HTML files in the given path and writes the report to
  `/accessibility_report`

- ## Authors

![Yoshimalaise](https://wise.vub.ac.be/sites/default/files/members/2021-09/yoshi.png)

- [YoshiMalaise](https://github.com/yoshimalaise) // Coach

![Daniel](https://avatars.githubusercontent.com/u/78535490?v=4)

- [Daniel](https://github.com/danielhalasz) // Coach

![Fenny](https://avatars.githubusercontent.com/u/97218974?v=4)

- [Fenny](https://github.com/FennyWilriani) // UI/UX Designer, Frontend & DevOps

![Maria](https://avatars.githubusercontent.com/u/98428800?v=4>)

- [Maria](https://github.com/MMikhailova) // Project Manager Frontend , Backend
  & DevOps

![Minju ](https://avatars.githubusercontent.com/u/32439811?v=4)

- [Minju](https://github.com/minjupgeorge) // Team Leader Frontend & DevOps
