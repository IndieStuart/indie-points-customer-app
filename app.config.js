const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.indiestuart.customerapp.dev';
  }

  if (IS_PREVIEW) {
    return 'com.indiestuart.customerapp.preview';
  }

  return 'com.indiestuart.customerapp';
};

const getAppIcon = () => {
  if (IS_DEV) {
    return './assets/images/icon.dev.png';
  }

  if (IS_PREVIEW) {
    return './assets/images/icon.preview.png';
  }

  return './assets/images/icon.png';
};

const getSlug = () => {
  if (IS_DEV) {
    return 'customer-app-dev';
  }

  if (IS_PREVIEW) {
    return 'customer-app-preview';
  }

  return 'customer-app';
};

const getProjectId = () => {
  if (IS_DEV) {
    return '3405e21d-5d05-400b-9da1-cccdec909f53';
  }

  if (IS_PREVIEW) {
    return '1afa919e-7d4d-46a9-a3da-a841cceed2a7';
  }

  return '4707e1ae-7a89-442f-852e-acac64d79d2f';
};

const getUpdateUrl = () => {
  if (IS_DEV) {
    return 'https://u.expo.dev/3405e21d-5d05-400b-9da1-cccdec909f53';
  }

  if (IS_PREVIEW) {
    return 'https://u.expo.dev/1afa919e-7d4d-46a9-a3da-a841cceed2a7';
  }

  return 'https://u.expo.dev/4707e1ae-7a89-442f-852e-acac64d79d2f';
};

const getScheme = () => {
  if (IS_DEV) {
    return 'customer-mobile-app-dev';
  }

  if (IS_PREVIEW) {
    return 'customer-mobile-app-preview';
  }

  return 'customer-mobile-app';
};

const getGooglePluginConfig = () => {
  const androidClientId = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID;
  const iosUrlScheme = process.env.EXPO_PUBLIC_GOOGLE_IOS_REVERSED_CLIENT_ID;
  const isEasBuild = process.env.EAS_BUILD === 'true';

  // On local (non-EAS) runs, skip plugin config if env vars aren’t set
  if (!androidClientId || !iosUrlScheme) {
    if (!isEasBuild) {
      return null;
    }
    throw new Error(
      'Missing Google Sign-In env vars: set EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID and EXPO_PUBLIC_GOOGLE_IOS_REVERSED_CLIENT_ID.',
    );
  }

  return { androidClientId, iosUrlScheme };
};

export default ({ config }) => ({
  ...config,
  icon: getAppIcon(),
  slug: getSlug(),
  scheme: getScheme(),
  extra: {
    eas: {
      projectId: getProjectId(),
      updateUrl: getUpdateUrl(),
    },
  },
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
  plugins: [
    ...(config.plugins || []),
    ...(getGooglePluginConfig()
      ? [['@react-native-google-signin/google-signin', getGooglePluginConfig()]]
      : []),
  ],
});
