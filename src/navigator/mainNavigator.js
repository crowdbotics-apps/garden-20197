import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile100337Navigator from '../features/UserProfile100337/navigator';
import Tutorial100336Navigator from '../features/Tutorial100336/navigator';
import NotificationList100308Navigator from '../features/NotificationList100308/navigator';
import Settings100307Navigator from '../features/Settings100307/navigator';
import Settings100299Navigator from '../features/Settings100299/navigator';
import UserProfile100297Navigator from '../features/UserProfile100297/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile100337: { screen: UserProfile100337Navigator },
Tutorial100336: { screen: Tutorial100336Navigator },
NotificationList100308: { screen: NotificationList100308Navigator },
Settings100307: { screen: Settings100307Navigator },
Settings100299: { screen: Settings100299Navigator },
UserProfile100297: { screen: UserProfile100297Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
