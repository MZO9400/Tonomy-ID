# Tonomy-ID

Tonomy ID is the cross-platform mobile wallet (Android and iOS) for public and private EOSIO blockchains. This application allows you to sign transactions on the block chain, share your DID and Verifiable Credentials containing your identity with others in a consensual way and log into web2 and web3 applications. If you lose your phone several mechanisms exist to allow you to recover your account without trusting anyone with custody of your private keys.

Features:
1. EOSIO blockchain tx signing
2. EOSIO blockchain multi-sig signing
3. Social recovery
4. Hardware recovery
5. Security question recovery
6. Non-custodial third party recovery ("guardians in Wallet+ paper)
7. Verifiable Credential sharing
8. Peer-to-peer EOSIO account communication network
9. SSO login to web2 and web3 applications
10. Sovereign data cloud storage (client-side encrypted using a recoverable key)

## Dependancies

- Linux debian distribution (Ubuntu 20.0.4 LTS used)
- [Nodejs](https://nodejs.org) v16.4.1+ suggested installed with [nvm](https://github.com/nvm-sh/nvm)
- [Java JDK 11+](http://openjdk.java.net/)
- [Android studio](https://reactnative.dev/docs/environment-setup) v2021.2.1 follow all the instructions
  1. Install Android Studio
  2. Install the Android SDK
  3. Configure the ANDROID_SDK_ROOT environment variable
  - Install [Watchman](https://facebook.github.io/watchman/docs/install.html)
  Open Android Studio and Preparing the Android device
  - Preparing the Android device
  - Using a virtual device
- [React native](https://reactnative.dev) v7.0.3+

See `./scripts/install_prerequisits.sh` for installation of dependancies on Ubuntu 20.0.4

## Run

```bash
npm start
npm run android
#or
npm run ios
```

## Test

```bash
npm test
```