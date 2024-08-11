# YumSpot

<picture>
  <img alt="YumSpot Logo" src="https://github.com/chingu-voyages/v50-tier2-team-16/tree/dev/src/assets/logo.png" width="400">
</picture>

## Overview

Yumspot is a front-end web application for ordering food from restaurants around the United States. Simply filter your desired search by location or foodtype, and all relevant participating restaurant menus populate for you to choose from.

## Features

**User access**: A guest visiting the website has the ability to register an account. Once registered, the user may add funds to their account and purchase products. User information is stored in localStorage and can reaccessed after logging out and back in.

**Account balance**: A signed-in user may add funds to their account. This feature is used for ordering products. A user cannot purchase from the menu without an adequate balance. When a purchase is made, the balance updates automatically.

**Filter functionality**: Filter through the results by your location (city and/or state) and preferred foodtype. If your chosen city is not available in the chosen state, the filter will include results for that city in other states. The foodtype filter can be applied independent of the location filter and vice versa, in the case you would like to just apply one filter.

**Interactive map**: Search restaurants in your city or a city near you to find a destination to eat. The map will display restaurant locations with information like restaurant name, rating, description, and an image. The user has the ability to zoom in and out and has the range to search all over the United States.

**Order section**: When the user has chosen to buy from the menu, they can add it to their order. The item is moved into a pop-out sidebar that displays a virtual cart. Items can be added and removed from the cart, the quantities can be modified, and the user has the ability to make a purchase. At checkout, the user may add a tip to the order. If the user has enough funds in their account, the purchase will be successfull.

## Running the project 

 1. Clone this project locally 
 2. `cd` into the project directory  
 3.To run the app on your local device, make sure to install the appropriate packages and run using the following command:
    ```bash
    npm install 
    npm run dev
    ```
 4. Search for the most Yumspot in your area!

## Dependencies

React  
Tailwind

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Our Team

- Kristi Hwang: [GitHub](https://github.com/kristi-h) / [LinkedIn](https://linkedin.com/in/liaccountname)
- Laura Gieg/Frosty: [GitHub](https://github.com/frosty8104∂) / [LinkedIn](https://www.linkedin.com/in/laura-gieg-web-designer-developer/)
- Yusuke Nagaoka: [GitHub](https://github.com/yusuken1121) / [LinkedIn](https://www.linkedin.com/in/yusuke-nagaoka)
- Matthew Neie: [GitHub](https://github.com/MatthewNeie) / [LinkedIn](https://linkedin.com/in/matthew-neie)
- Jesse Guerrero: [GitHub](https://github.com/arositen) / [LinkedIn](https://www.linkedin.com/in/jesse-guerrero-38628613b/)

## Deployed sites:

[https://yumspot.netlify.app](https://yumspot.netlify.app)  
[https://yumspotdev.netlify.app](https://yumspotdev.netlify.app)
