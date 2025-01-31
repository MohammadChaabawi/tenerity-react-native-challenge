
# This is the final product from my attempt.


https://user-images.githubusercontent.com/91785623/160933763-02a01ec7-35d4-4d2a-96e5-2aa1136ff4d5.mp4



# Features implemented:
1. Offline mode.
2. Native animations using interpolation.
3. React queries for managing api data.
4. Mock service workers to mock API responses and to test the react queries for different HTTP codes.


# Libraries and tools used:
1. React query
2. Redux-persist.
3. Mock Service Workers.
4. React Navigation.
5. Jest

# Tenerity Mobile Technical Challenges
\* To start please fork this repository

## Project Structure

### AwesomeProject
In this folder you will find a react native application, where you need to implement your solution for the technical challenge.

### back
This folder contains a mock backend that serves the data needed to complete the technical challenge. This server is built using [JSON Server](https://github.com/typicode/json-server). To run this server, use the command `yarn serve`.
Refer to the [JSON Server](https://github.com/typicode/json-server) documentation on how to query data from the APIs.


## Mobile Technical Challenge

For this challenge, you are working on enhancing our brand new _Loyalty Rewards_ application called **Awesome Deals**!  We’d like you to design, build and test new application features explained bellow.

### Home screen slider
We'd like to showcase our offers in a form of a horizontal slider on the landing screen.  

#### Requirements:
1. Slider items must enable the user to add the selected offer to their list of _"myOffers"_
2. If an offer has the property `{ "promoted":  true }` it should be displayed at the beginning of the slider.

### My Offers screen
This screen must enable the user to view a list of their selected offers.

#### Requirements:
1. Users must be able to remove selected offers from their list of _"myOffers"_
2. Display the total cost of the selected offers


## Notes

 * You are free to design the component as you see fit, but bear in mind the user experience. 
 * We would like to see how you can think through a problem and design a user experience to meet them, how you approach the problem and what technologies you would choose. We expect you to be thinking about design, accessibility, performance, testability, extensibility and maintainability.
    
## Submission 

To submit your work, you should create a **Pull Request** back to this repository.
