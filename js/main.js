import  { UserInterface }  from './uiScript.js';
import {DataLoader} from './dataLoader.js';
import {Preferences} from './preferences.js';
UserInterface.init();
Preferences.setUserPreferences();
DataLoader.load();
