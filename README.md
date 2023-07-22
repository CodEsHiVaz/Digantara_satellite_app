# Digantara_satellite_app

This is a Vue.js app built using Vite that fetches satellite data from an external API and allows you to filter and search through the data.


## Features

- Fetches satellite data from an external API.
- Filters the data based on country code, orbit code, and object type.
- Allows searching for specific satellites by name or NORAD Catalog ID.
- Paginates the results to display a limited number of satellites per page.

## Usage

- The app will load the satellite data when the page is mounted. If the data retrieval is successful, the list of satellites will be displayed, and you can interact with the filters and search bar to refine the results.
- Use the filters to narrow down the displayed satellites based on country code, orbit code, and object type.
- Enter a search query in the search bar to filter the satellites by name or NORAD Catalog ID.
- The paginated results will show 10 satellites per page by default. Use the pagination buttons to navigate through the pages.


## Getting Started

### Prerequisites

Before running the app, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone this repository to your local machine:

```shell
$ git clone https://github.com/CodEsHiVaz/Digantra_satellite_app.git
```

2. Install the dependencies using npm:
```shell
$ npm install 
```

### Running the App

To start the development server and run the app locally, use the following command:
```shell
$ npm run dev
```

The app will be accessible at `http://localhost:5173` in your web browser.

### Build for Production

To build the app for production, use the following command:

```shell
$ npm run build
```
The production-ready files will be generated in the `dist` directory.



## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite&template=vite)

_Live Example: https://vite-vue-template.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```