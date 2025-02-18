import create from 'zustand';
import RNKeyManager from '../utils/RNKeyManager';
import { initialize, User, SettingsType } from 'tonomy-id-sdk';
import Storage from '../utils/storage';
import settings from '../settings'

// TODO change this to be an instance of User class when we have implemented the RNKeyStore
interface UserState {
  username: string | null;
  user: User;
  isLoggedIn: () => boolean;
}

const sdkSettings: SettingsType = {
  blockchainUrl: settings.config.blockchainUrl
}

const useUserStore = create<UserState>((set, get) => ({
  username: null, // start by getting the username from tonomy prisitant storage
  user: initialize(new RNKeyManager(), new Storage(), sdkSettings),

  // Todo return true if username is not empty
  isLoggedIn: () => {
    return get().username !== null;
  }

}));



export default useUserStore;