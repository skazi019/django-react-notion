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
- I wanted to build a blog but wanted easy access to write and publish with out getting into code again and again or logging into a CMS and have to think about how to structure the blog post
- I use notion everyday so it was best option for me instead of getting into a CMS or headless CMS
- went through other notion page renderers like react-notion-x and react-notion but they each were opinionated on how they called the official APIs rather than using the APIs as is
- I wanted to build it myself ;p

<br />

# Why is backend required? Why not just build it in React?
I did try calling the APIs from react in a useEffect hook like you normally would. But all the calls to the would result in a cors error.

Hence you need a backend to call the APIs because while making the request to the official notion APIs you can set the cors setting in the request headers no matter which backend framework you decide to use


Due to this there's not much to be done in the backend, just calling the official APIs and passing over the data to the frontend.

<br />

# Techstack
## Why React?
I'm currently learning react and being a beginner I wanted to build a real world project with it to learn and understand about its fundamentals as well as state management

<br />

## Why Django?
I'm primaryly a python developer and have some expeirence with django and django rest framework so that felt the optimum choice instead of learning node/express getting even more frustrated than I already am.

Please note that you can use any backend you want, the backend code is fairly simple

## Why Notion?
I use it everyday from planning and todos to notes and content and now, even blogging!

## Main Challenges Faced?
### Nesting lists till the end(used recursion or DFS)

# Run it Locally
## Backend
- Make sure you have [python3](https://www.python.org/) installed
- Install `pipenv` 
    ```shell
    pip install pipenv
    ``` 
    OR
    ```shell
    pip3 install pipenv
    ```
- Create the virtual environment
    ```shell
    pipenv shell
    ```
- Install all the dependencies
    ```shell
    pipenv install
    ```
- Run the server
    ```shell
    python manage.py runserver
    ```

## Frontend
- Make sure you have [nodejs](https://nodejs.org/en/) installed
- Install the dependencies
    ```shell
    npm install
    ```
- Run the frontend
    ```shell
    npm run start
    ```


# Perparing for Production

# Deployment

# Unsuppported Blocks
 - Columns
 - Toggle
 - Table
 - File
 - Numrical nested lists

# TODO
### Functional
- [X] handle the lists ul and ol
- [X] handle has_children for block in python code so i can show childrens in nested lists or toggle 
- [X] Lists nesting problem; Nesting problem in general
- [X] Add a search bar
- [ ] ~~Sort filter by date~~
- [X] tab filter by tags
    - [X] tags are populating and working correctly
    - [ ] Make the filters act like AND gate
- [ ] ~~paginate the blogs lists~~
- [X] previous post is there in dom when loading new post
- [X] Error response in backend
- [X] Lazy load images
    - [X] Have added loading attribute to the img tag
- [X] Post open, shows loading for a split second but the content still takes time to load - switched to useState instead of Suspense
- [X] Error when individual post url open instead of opening from home page - need to fix this so i can share articles
- [X] After above fix add sharing option in navbar
- [ ] Add analytics

### Visual
- [X] make proper padding for all blocks
- [X] Display video(youtube, loom etc)
- [X] anchor style 
- [X] custom pulse loader for blog list and pos
- [X] Date in blog list view
- [X] mobile responsiveness [ ](make back button show on scoll)
- [X] Navbar (back button)
    - [ ] Make navbar show on scroll up
- [X] Add tags in the blog list view
- [X] Fix the width of the list when searching; the width collapses when the article isnt wide enough or no articles present
- [ ] image fullscreen
- [ ] Paragraph and text color
- [ ] Real data in Hero section
- [ ] Add animations
- [ ] Hover states