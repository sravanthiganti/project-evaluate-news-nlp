# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The  Meaning cloud API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

This project runs on a local server. It uses Node. If you don't have Node already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).

### Step 1: Signup for an API key
First, you will need to go [Meaning Cloud developer Page ](https://www.meaningcloud.com/developer/login). Signing up will get you an API key. The sign-up page is [**here**](https://www.meaningcloud.com/developer/create-account).

After you get your API key, make a file called *.env* in the project root folder. File should contain:

```
API_KEY={your key here}
```

```
When those packages have installed, make builds and start the server with the following commands (note that the build-dev runs webpack-dev-server):

```
npm run build-dev
npm run build-prod
npm run start
```

### Results:

![Screenshots](https://github.com/sravanthiganti/project-evaluate-news-nlp/blob/main/results/Sentiment-Analyser.png)


