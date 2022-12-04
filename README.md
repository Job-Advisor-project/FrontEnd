# Job Advisor

> Job Advisor website is for motivated students and job seekers to help them to
> kickstart their career and also search their dream job without registration.

## Table of contents

- [Name of project](#name-of-project)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Design protoype](#design-protoype)
  - [Tools and Technologies](#tools-and-technologies)
    - [UX/UI](#uxui)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Devops](#devops)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
  - [Sample React code](#sample-react-code)
  - [App demo video](#app-demo-video)
  - [Inspiration](#inspiration)
  - [Contact](#contact)
  - [Instructions for use](#instructions-for-use)
  - [Code Quality Checks](#code-quality-checks)
  - [Continuous Integration (CI)](#continuous-integration-ci)
  - [Repo Setup](#repo-setup)
  - [Authors](#authors)

## General info

> At Job Advisor, We help people to get jobs. We believe financialindependence
> can help people live up to their potential and get back control of their own
> lives .

## Design protoype

[Our project prototype on FIGMA](https://www.figma.com/file/oAfz0ikoib20hxwG07WjiB/Job-Advisor?node-id=0%3A1&t=ovPyTH7TTB26kSq2-0)

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

## Screenshots

![JobAdvisor screenshot](./planning/jobAdvisorhomepage.png)

## Setup

- `npm run start`

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

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_

## Inspiration

Project by freeCodeCamp.org

## Contact

By [Name]

## Instructions for use

<details>
  <summary>Getting Started</summary>

<!-- a guide to using this repository -->

1. `git clone git@github.com:HackYourFutureBelgium/template-markdown.git`
2. `cd template-markdown`
3. `npm install`

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

## Continuous Integration (CI)

When you open a PR to `main`/`master` in your repository, GitHub will
automatically do a linting check on the code in this repository, you can see
this in the[./.github/workflows/lint.yml](./.github/workflows/lint.yml) file.

If the linting fails, you will not be able to merge the PR. You can double check
that your code will pass before pushing by running the code quality scripts
locally.

## Repo Setup

- Give each member _write_ access to the repo (if it's a group project)
- Turn on GitHub Pages and put a link to your website in the repo's description
- Turn on GitHub Actions
- in the _Branches_ section of your repo's settings make sure:
  - The repository
    [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/)
    before pull requests can be merged.
  - The `master`/`main` branch must "_Require status checks to pass before
    merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date
    before merging_"

</details>
