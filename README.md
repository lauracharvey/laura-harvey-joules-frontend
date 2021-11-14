# Joules Frontend Project

## How to Run this Project Locally

1. Fork the Repo
2. Clone the Repo to your Machine
3. Open the project in your Terminal
4. Run "npm i"
5. Run "npx json-server --watch data/db.json --port 8000" to start the dummy server
6. Run "npm run start" to start the development server

The project should open on localhost:3000

## Requirements

The task is to consume the attached JSON file (to simulate an API response) and display the resulting data according to the attached wireframe. We will not be judging you on completion time, so how you dedicate your time is up to you, there is no rush, just make sure you’ve completed it before we meet to talk it through in a first stage interview.

The layout should loosely match the provided wireframe, but please don’t feel restricted by this – we're always looking for new ways to do things, so as long as you can explain your decisions, we’re all ears!

The look and feel is up to you but maybe you’ll want to take inspiration from the Joules branding and your interpretation of what would be right for a Joules customer.

We like to have a mobile-first approach, so the site should use responsive techniques to ensure that it works on a range of screen sizes but also is cross browser compatible.

The page should be built using HTML, CSS (SCSS encouraged) and JavaScript(utilising React where appropriate).

## Extra Considerations

If you feel like going the extra mile, here is a list of other things you might want to consider, either implemented or scoped.

* Filter By options
* Sort By options
* Load More style pagination
* Quick View functionality
* How would you test your code and functionality? (unit tests, e2e)
* Being in retail, SEO is very important to us, so any techniques you can demonstrate would be great

We’d like to see how you write code so try and keep it simple, but do not be afraid to add some flair to show off what you can do.

Ideally you would upload your repository to Github or similar, but a zip file is fine.

## Stretch Goals

### Home Page / Routing

I have added a dummy home page as I wanted to simulate routing and how the app might scale. 

### Pagination

I added pagination however, it isn't a "load more" style and it is a little big buggy and I don't think it would scale well in a full stack application (where you would likely deal with pagination on the backend instead), if I had more time I would have implemented this with the "load more" functionality rather than numbered pages.

### Testing

I've never worked in a test driven environment and unsure where to start with testing so rather than rush and make a bad job of it, I decided it was out of the scope of my current capabilities for this particular project. It's something I plan to learn whilst on leave.



