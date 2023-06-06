# Frontend Mentor - REST Countries API with Color Theme Switcher Solution

This is my solution to the REST Countries API with Color Theme Switcher challenge on Frontend Mentor. Frontend Mentor challenges are a great way to improve your coding skills by building realistic projects. 

## Overview

### The challenge

The challenge required implementing the following features:

- Display all countries from the REST Countries API on the homepage
- Implement a search functionality to filter countries by name
- Implement a filter functionality to filter countries by region
- Allow users to click on a country to view more detailed information on a separate page
- Allow users to click through to the border countries on the detail page
- Implement an optional color theme switcher to toggle between light and dark mode

### Links

- Solution URL: [Add solution URL here](https://github.com/cuk-danijela/countries)
- Live Site URL: [Add live site URL here](https://countries-87c11.web.app)

## My process


### What I learned

While working on this project, I gained experience in implementing the following features:

- Fetching data from an API and rendering it dynamically
- Implementing search and filter functionalities to manipulate the displayed data
- Creating separate detail pages for individual countries and handling navigation between them
- Integrating a color theme switcher to provide a customizable user interface

Here's an example of code I'm proud of, where I implemented the search functionality:

```
const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm)
  );
  setFilteredCountries(filteredCountries);
};

```

### Continued development

In future projects, I would like to further enhance my skills in the following areas:

- Improving UI/UX design to create more visually appealing and user-friendly interfaces
- Enhancing the performance of React applications through code optimization and proper state management
- Exploring other frontend frameworks and libraries to expand my technical toolkit


## Author

- Website - [Danijela Cuk](https://cuk-danijela.github.io)
- Frontend Mentor - [@cuk-danijela](https://www.frontendmentor.io/profile/cuk-danijela)
- Linkedin - [@danijela-cuk](https://www.linkedin.com/in/danijela-cuk-1990)

## Acknowledgments

I would like to acknowledge Frontend Mentor for providing this challenge and the supportive community of developers who share their solutions and insights.
