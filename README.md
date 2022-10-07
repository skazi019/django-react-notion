# Notion Blog

> A simple blog built using Django RestFramework and React using Notion as a CMS

<br />

### Table of Contents
- [Motivation](#motivation)
- [Why is backend required? Why not just build it in React?](#why-is-backend-required-why-not-just-build-it-in-react)
- [Techstack](#techstack)
    - [Why React?](#why-react)
    - [Why Django?](#why-django)
    - [Why Notion?](#why-notion)
- [Run it Locally](#run-it-locally)
- [How to make changes?](#how-to-make-changes)
- [Prepaing for Production](#perparing-for-production)
- [Deployment](#deployment)

<br />

# Motivation 
- Wanted to build a blog but wanted easy access to write and publish with out getting into code again and again
- use notion everyday so it was best option for me instead of getting into a CMS or headless CMS
- went through other notion page renderers like react-notion-x and react-notion but they each were opinionated on how they called the official apis rather than using the apis as is
- Wanted to build it myself ;p

# Why is backend required? Why not just build it in React?
I did try calling the APIs from react in a useEffect hook like you normally would. But all the calls to the would result in a cors error.

Hence you need a backend to call the apis because while making the request to the official notion apis you can set the cors setting in the request headers no matter which backend framework you decide to use


Due to this there's not much to be done in the backend, just calling the official apis and passing over the data to the frontend.

<br />

# Techstack
## Why React?

## Why Django?

## Why Notion?

# Run it Locally

# How to make changes?

# Perparing for Production

# Deployment

# TODO

- [X] handle the lists ul and ol
- [ ] handle has_children for block in python code so i can show childrens in nested lists or toggle 
- [X] make proper padding for all blocks
- [ ] Add a search bar
- [ ] paginate the blogs lists
- [ ] Display video(youtube, loom etc)
- [ ] Hover states
- [ ] anchor or link style and hover
- [ ] custom pulse loader for blog list and pos
- [X] previous post is there in dom when loading new post