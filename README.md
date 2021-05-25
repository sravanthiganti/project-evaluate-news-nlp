# Project Instructions

The goal of this project is to  practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

We could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called [Meaning cloud](https://www.meaningcloud.com/) has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

If you would like to use this project, start by forking this repo and begin your project setup.

Once you clone, you need to install all node modules by running

`cd` into your new folder and run:
- `npm install`

## Setting up the API

Here i use Meaning cloud API to get Sentiment Analysis and NLP.

This project runs on a local server. It uses Node. If you don't have Node already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).

### Step 1: Signup for an API key

First, you will need to go [Meaning Cloud developer Page ](https://www.meaningcloud.com/developer/login). Signing up will get you an API key. The sign-up page is [**here**](https://www.meaningcloud.com/developer/create-account).

After you get your API key, make a file called *.env* in the project root folder. File should contain:

```
API_KEY={your key here}
```

When those packages have installed, make builds and start the server with the following commands (note that the build-dev runs webpack-dev-server)

```
npm run build-dev
npm run build-prod
npm run start
```

### Results:

![Screenshots](https://github.com/sravanthiganti/project-evaluate-news-nlp/blob/main/results/Happy-Path.png)

![Error](https://github.com/sravanthiganti/project-evaluate-news-nlp/blob/main/results/error.png)


