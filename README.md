# Star Wars API Project

### Lego Star Wars

This is an individual project to make a Star Wars facts application. A user is can come to the page and get information about the people, vehicles, and planets of the Star Wars universe. Each card has a lego heart, that when clicked, will add that card to favorites which can be viewed on a seperate page. The page is also translatable to Skyriiwook; the language of the Wookies.
Data comes from the [Star Wars API](https://swapi.co/).

### Design

#### Web

![Design for Web](https://i.imgur.com/DqebSLB.png)

#### Mobile

![Design for mobile](https://i.imgur.com/RKbKDmql.png)


### Technologies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
It is a single page application using React router.

To get more information of the template used go [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).




### [Surge](https://surge.sh/)

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, for example:

```sh
       project path: /path/to/project/build
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file](https://surge.sh/help/adding-a-200-page-for-client-side-routing).
