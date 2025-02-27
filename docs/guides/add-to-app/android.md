---
sidebar_position: 1
title: Android | Code Push Add to App
sidebar_label: 🤖 Android
description: Use code push in an add-to-app scenario with an Android app
---

# Code Push With Add-to-App

This guide explains how to use Shorebird in an Android add-to-app scenario.

## Prerequisites

This guide assumes you have already have an Android app and a Flutter module. Our Android app will be named `android_app` and our Flutter module will be named `flutter_module`.

This guide also assumes that you have created a Shorebird account. If you have not, please see our [code push guide](../../code-push) for instructions.

The reference code for this guide is available at https://github.com/shorebirdtech/samples/tree/main/add_to_app.

## Add Shorebird to your Flutter module

First, run `shorebird init` in your Flutter module:

```sh
shorebird init
```

## Create a Shorebird release

Create a Shorebird release for your Flutter module:

```
shorebird release aar --release-version 1.2.3+1
```

The `release-version` parameter needs to match the version of the Android app
that uses this module (i.e., `versionName+versionCode` from the app's
`app/build.gradle` file).

:::note
Because Shorebird only works with release builds, this will only produce a
release version of your archive. This is similar to running
`flutter build aar --no-debug --no-profile`.
:::

:::note
This command creates an `aar` with a build number of `1.0`. As with the
`flutter build aar` command, you may optionally provide a different build number
using the `--build-number` argument, although this is not necessary. The build
number is used to identify the Flutter module in your app's `build.gradle` file,
as you can see
[below](#update-your-android-app-to-use-this-version-of-the-flutter-module).

Shorebird does not use the build number, but **it should remain consistent
between a release and patches to that release**.
:::

## Update your Android app to use the `download.shorebird.dev` Maven repository

In `settings.gradle`:

```diff
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven {
            url '../my_flutter_module/build/host/outputs/repo'
        }
+       maven {
-           url 'https://storage.googleapis.com/download.flutter.io'
+           url 'https://download.shorebird.dev/download.flutter.io'
+      }
    }
}
```

:::note
Even though we are replacing https://storage.googleapis.com/download.flutter.io.
with https://download.shorebird.dev/download.flutter.io, any Flutter
dependencies that are not unique to Shorebird will still be downloaded from
https://storage.googleapis.com/download.flutter.io. This will only work for
versions of Flutter that Shorebird supports.
:::

## Update your Android app to use this version of the Flutter module

In `app/build.gradle`, add the following:

```diff
dependencies {
    // ...
+    releaseImplementation 'com.example.my_flutter_module:flutter_release:1.0'
    // ...
}
```

## Verify that your app runs

In Android Studio, update the active build variant to release and run your app.
Your app should work as before with no differences.

## Submit your app to the Play Store

We won't cover this step in detail here, but this is where you would submit your
app to the Play Store. For code push to work, it is important that you submit
_with the same `aar` generated by the release command above_.

## Verify that Shorebird is working with a patch

Make an edit to the code in your Flutter module. Then run:

```
shorebird patch aar --release-version 1.2.3+1
```

:::note
`patch` will overwrite the `aar` generated by `release`, meaning that you will
see a "hash mismatch" error if you run the app from Android Studio.
:::

:::note
If you provided a build number to the `shorebird release aar` command using the
`--build-number` argument, you must also provide that same build number to the
`shorebird patch aar` command.
:::

As with the `release` command, the release version should be the version of the
Android app that uses this module.

Now run the app directly from the emulator or device (_not_ from Android
Studio), navigate to the Flutter screen, and verify that the patch is recognized
and applied. In logcat, you should see output like the following:

```
updater::network: Sending patch check request: PatchCheckRequest { app_id: "a3015582-6dee-435d-b468-803b9e0993ea", channel: "stable", release_version: "2.0.1+7", patch_number: Some(1), platform: "android", arch: "aarch64" }
updater::updater: Patch is compressed, inflating...
updater::updater: Reading patch file: "/data/user/0/com.example.shorebirdaddtoapp/code_cache/shorebird_updater/downloads/1"
updater::updater: Hash match: "/data/user/0/com.example.shorebirdaddtoapp/code_cache/shorebird_updater/downloads/1.full"
updater::cache: Setting slot 0 to Slot { path: "/data/user/0/com.example.shorebirdaddtoapp/code_cache/shorebird_updater/slot_0/dlc.vmcode", patch_number: 1 }
updater::updater: Patch 1 successfully installed.
```
