# Macau Recycling Map

## Overview
Macau Recycling Map is a web application that helps users locate recycling points across Macau. It provides an interactive map interface to easily find and get information about various recycling facilities in the city.
I am building this with the assitance of Claude 3.5 Sonnet, which is very powerful. 

## Features
- Interactive map showing recycling points in Macau
- Search functionality to find specific recycling locations
- Filtering options for different types of recycling facilities
- Responsive design for both desktop and mobile use
- Multilingual support (Chinese, Portuguese, and English)

## Data Source
This project utilizes data from the Macau Open Data Platform, specifically the Plastic and Can Recycling Points dataset. The data is provided by the Environmental Protection Bureau (DSPA) of Macau.

## Technologies Used
- React.js
- Leaflet for map rendering
- Axios for API requests
- Fuse.js for search functionality

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/johnku2011/macau_recycling_map.git
   cd macau_recycling_map
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
This project is deployed using GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://johnku2011.github.io/macau_recycling_map/"
   ```

2. Run the deploy script:
   ```
   npm run deploy
   ```

## Contributing
Contributions to improve the Macau Recycling Map are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Macau Open Data Platform for making the data accessible
- All contributors who have helped to improve this project

---

For any questions or support, please open an issue in the GitHub repository.
