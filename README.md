# UTSEUS Course Catalog Website

This website is a course catalog for UTSEUS (上海大学中欧工程技术学院), providing detailed information about the courses offered. It is built using Hugo, a static site generator, making it easy to update and manage course information.

## Features

- Displays detailed information about each course, including course title, date, academic year, type of training, formation, language, category, and semester.
- Allows students to browse courses based on their academic year, type of training, formation, language, category, and semester.
- Provides a search functionality for students to easily find courses based on keywords.
- Easy to update and manage course information through Hugo's content management system.

## Online Preview

The website is available online at [UTSEUS Lab](https://shu-utseus.github.io/). 

## Getting Started

To run the website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install Hugo if you haven't already (`brew install hugo` on macOS).
3. Navigate to the repository directory and run `hugo server` to start the local development server.
4. Open your browser and visit `http://localhost:1313` to view the website.

## Customization or Modification

1. You can add new courses or modify existing course information in the `content/courses` directory.
2. You can add new navigation pages or modify existing ones in the `content` directory. However, don't forget to add the relevant information for the navigation pages in the `config.toml` file; otherwise, the newly added navigation pages will not take effect.
3. You can view and modify the HTML files for this project in the `layouts` directory.
4. You can view and modify the Sass files for this project in the `assets/sass` directory, which can be compiled into CSS files, controlling the styling of the web page
5. You can view and modify the JS file for this project in the `assets/js/main.js` directory, which associates with the functionalities of the web.

## Contributing

If you would like to contribute to the website by adding new courses or updating existing information, please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- This website was built using the Hugo static site generator.
- Course information was sourced from UTSEUS.
- Special thanks to the contributors of Hugo and the Hugo community for their support.