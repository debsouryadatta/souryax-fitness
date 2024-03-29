# Fitness-App-React-Native

![Image](https://cdn.dribbble.com/userupload/11359073/file/original-65749ff36820139e272a60d6eb11b3eb.png?resize=1024x768)


  

## Get Started

install dev dependencies

### `npm install`

## Then

go to https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb, create an account and get the api key, then use that api key in constants/index.js file

## Then

Run The app

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm run ios`

Like `npm start` / `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start` / `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

<br />

💙 If you like this project, give it a ⭐ and share it with friends!

<p align="left">
  <a href="https://www.youtube.com/channel/UCILovaLl2fUPAww1bGJ4sJQ?sub_confirmation=1"><img alt="Youtube" title="Youtube" src="https://img.shields.io/badge/-Subscribe-red?style=for-the-badge&logo=youtube&logoColor=white"/></a>
  <a href="https://twitter.com/codewithnomi_"><img alt="Twitter" title="Twitter" src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
</p>

<a href="https://www.buymeacoffee.com/syednoman">☕ Buy me a coffee</a>


### Steps Of Development
1. sudo npm install -g expo-cli
2. Download the github repo from yt tutorial, delete all the files from all the folders except the assets folder to start from scratch, npm i
3. npm start
4. npm i nativewind, npm i --dev tailwindcss@3.3.2, npx tailwindcss init, modifying the tailwind config, adding the babel config
5. npm i react-native-responsive-screen -> For responsive screen/font sizes
6. npm i expo-linear-gradient -> For gradient view on landing page
7. Adding the image, creating _layout.jsx file to set headers to false
8. Styling the landing page, applying the gradient, styling the text and the button
9. npx expo install react-native-reanimated -> For animations, also adding the babel plugin for reanimated, then - npx expo start -c
10. Converting View to Animated.View using reanimated
11. Adding useRouter from expo-router to navigate to the home page
12. <StatusBar style="dark" /> {/* To make status bar text dark */} -> On the Home page

13. <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']} > -> In your code, edges={['top']} means that the safe area will be applied to the top of the screen. This means your content will not extend into the area where the status bar is located, ensuring that it is always visible and not obscured by any device-specific display features.

14. npm i react-native-vector-icons -> For icons
15. Designing the Home Page
16. npm i react-native-snap-carousel -> For carousel
17. Configuring the carousel, adding the images, styling the carousel
18. Creating the BodyParts component, using flatlist to show all the images
19. Facing issues in modal presentation in expo router -> Conslusion: Expo router is not good for modal presentation on android so we will be using stack screen instead of modal presentation
20. Building the exercise page, npm i axios, creating fetchExercisesByBodypart function for fetching exercise data in exerciseDB.js

21. Storing demoExercises temporarily in the constants folder so that we do not fetch api again and again during development
22. Ignoring error logs using LogBox.ignoreLogs in _layout.jsx
23. Using vector icons, taking image from the params, styling the exercise page
24. Creating ExerciseList component, copying the format of the body parts list used earlier(Flatlist), creating ExerciseCard inside it.
25. Using Flatlist inside Scrollview -> showing error -> Solution: Using npm i react-native-virtualized-view, taking ScrollView from it, using it instead of ScrollView

26. npx expo install expo-image -> For Better Image component(Images get cached)
27. After done with the exercise page, creating the exerciseDetails page which will open on pressing the Image in the exercise page
28. Designing the exerciseDetails page, using vector icons
29. Secondary muscles is an array -> When we write item?.secondaryMuscles, it is shown by comma
30. Adding animations in the bodyparts, exercise and exerciseDetails page

31. Then Deployment -> npm install -g eas-cli, eas build --platform android (having issues in deployment, gradle issues, issue with local images)
32. Fixed the above issue by pushing the local images to cloudinary and using only the urls
33. Changing the eas.json according to the expo docs(link - https://docs.expo.dev/build-reference/apk/), then eas build -p android --profile preview to build the apk file
<!-- eas update -->
34. After trying so much in Ubuntu, eas update didn't work there, so had to switch to windows, then eas update worked
35. eas update -> It gives us a link through which we can run our application in the expo app