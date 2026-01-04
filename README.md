# Smart Habit Tracker

A production-ready React Native habit tracking application with smart analytics and intelligent notifications.

## 🚀 Features

- ✅ **Habit Management**: Create, track, and manage daily/weekly habits
- 📊 **Smart Analytics**: Track patterns and get insights
- 🔔 **Intelligent Notifications**: Context-aware reminders
- 🎨 **Theme Support**: Light/Dark/System modes
- 📱 **Offline First**: Works without internet connection
- 🔐 **Secure**: Firebase Authentication

## 🛠️ Tech Stack

- **Framework**: React Native (CLI)
- **Language**: TypeScript
- **State Management**: Zustand + React Query
- **Storage**: MMKV (Fast persistent storage)
- **Navigation**: React Navigation
- **Testing**: Jest + React Native Testing Library
- **CI/CD**: GitHub Actions
- **Backend**: Firebase (Auth + Firestore + Functions)

## 📋 Prerequisites

- Node.js >= 18
- npm or yarn
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

## 🏗️ Installation

```bash
# Clone the repository
git clone https://github.com/ahmedalianz/smarthabits

# Navigate to project
cd smarthabits

# Install dependencies
npm install

# iOS only - Install pods
cd ios && pod install && cd ..
```

## 🔧 Configuration

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Fill in your environment variables (Firebase config, etc.)

## 🚀 Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔍 Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run tsc

# Format code
npm run format

# Run all checks
npm run validate
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # Feature modules
│   ├── auth/
│   ├── habits/
│   └── settings/
├── hooks/            # Custom React hooks
├── navigation/       # Navigation configuration
├── services/         # External services (API, Firebase)
├── store/            # Zustand store
├── theme/            # Theme configuration
├── types/            # TypeScript types
└── utils/            # Utility functions
```

## 🔄 CI/CD

This project uses GitHub Actions for:

- ✅ Linting and type checking
- ✅ Running tests
- ✅ Building Android APK/AAB
- ✅ Building iOS IPA
- ✅ Automated releases to stores

## 📦 Building for Production

### Android

```bash
cd android
./gradlew bundleRelease
```

### iOS

```bash
cd ios
xcodebuild -workspace SmartHabitTracker.xcworkspace -scheme SmartHabitTracker -configuration Release
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Ahmed Afify

## 🙏 Acknowledgments

- React Native community
- Firebase team
- All contributors

## TODO

Auth

Theme

Offline

Storage

Lists

Details

Settings

Performance

Clean architecture

📋 Sprint 1 Deliverables (If you choose Auth)
Week 1:

Firebase project setup
Email/Password registration screen
Email/Password login screen
Form validation (Zod)
Error handling & user feedback

Week 2:

Forgot password flow
Auth persistence (AsyncStorage)
Protected routes (navigation guards)
Loading states & spinners
Unit tests for auth flows
E2E test for login/register

Week 3 (Buffer):

Polish UI/UX
Add animations
Write documentation
Code review & refactor

🚀 Success Criteria
By end of Sprint 1, you should have:

✅ Working login/register screens
✅ User can create account
✅ User can login
✅ User stays logged in (persistence)
✅ User can logout
✅ All auth flows tested
✅ Clean, documented code
