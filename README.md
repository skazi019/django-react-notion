# Notion Blog

> A simple blog built using **Django** **RestFramework** and **React** using **Notion** as a CMS

<br />

# Motivation 
- I wanted to build a blog but wanted easy access to write and publish with out getting into code again and again or logging into a CMS and have to think about how to structure the blog post
- I use notion everyday so it was best option for me instead of getting into a CMS or headless CMS
- went through other notion page renderers like react-notion-x and react-notion but they each were opinionated on how they called the official APIs rather than using the APIs as is
- I wanted to build it myself ;p

<br />


# Features
- Dark Mode
- Analytics(google analytics 4)
<!-- - [WIP]Discoverable by crawlers and search engines (prerendering using react-snap) -->
- Most notion blocks supported
- Styles similar to notion but can be tweaked to your own taste
- Search articles by 
  - input
  - tags
- Share directly to
  - Twitter
  - WhatsApp
- Ease of publishing and styling - Notion as a CMS
- Once deployed, no wrangling with code again

<br />

# Why is backend required? Why not just build it in React?
I did try calling the APIs from react in a useEffect hook like you normally would. But all the calls to the would result in a cors error.

Hence you need a backend to call the APIs because while making the request to the official notion APIs you can set the cors setting in the request headers no matter which backend framework you decide to use


Due to this there's not much to be done in the backend, just calling the official APIs and passing over the data to the frontend.

<br />

# Techstack
## Why React?
I'm currently learning react and being a beginner I wanted to build a real world project with it to learn and understand about its fundamentals as well as state management

## Why Django?
I'm primaryly a python developer and have some expeirence with django and django rest framework so that felt the optimum choice instead of learning node/express getting even more frustrated than I already am.

Please note that you can use any backend you want, the backend code is fairly simple


## Why Notion?
I use it everyday from planning and todos to notes and content and now, even blogging!

<br />

# Main Challenges Faced?

### Nesting lists till the end(used recursion or DFS)

<br />

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

<br />

# Port backend to another language
Porting backend is really simple, just refer to `v1/views.py`. The code is simple enough to re-write in any language you want.

# Perparing for Production

# Deployment
> Deployed on [fly.io](https://fly.io)

<br />

# Unsuppported Blocks
 - Columns
 - Toggle
 - Table
 - File
 - Numrical nested lists
