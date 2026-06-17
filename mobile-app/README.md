# mobile-app (Ionic + Angular)

This is a minimal Ionic + Angular scaffold for a simple mobile access app. It includes:
- Login screen (client-side mock)
- Home list of resources (mock data)
- Detail page for each item
- Settings page with theme toggle

Quick start

1. Install dependencies

   cd mobile-app
   npm install

2. Run locally in browser (Ionic dev server)

   npm run ionic:serve

or with Angular CLI

   npm start

3. Build for production

   npm run build

Capacitor / Device builds (optional)

1. Create a production web build (outputs into `www`):

   npm run build:web

2. Initialize Capacitor (only once)

   npm run cap:init

3. Add native platform(s) (only once):

   npm run cap:add:android
   npm run cap:add:ios

4. Sync web build to native project after changes:

   npm run cap:sync

5. Open native IDE:

   npm run cap:open:android
   npm run cap:open:ios

Notes

- The repository already contains a basic scaffold. After running `npm install`, follow the steps above to prepare native builds.
- Building for Android/iOS requires native SDKs (Android Studio/Xcode) on your machine or CI runners.

Files added to repo: mobile-app/*
