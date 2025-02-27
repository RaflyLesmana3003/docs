---
sidebar_position: 8
title: ❓ FAQ
description: Frequently asked questions.
---

If you have questions not answered here, please ask! Both filing an issue
or asking on [Discord](https://discord.gg/shorebird)) work.

### What is "code push"?

Code push, also referred to as "over the air updates" (OTA) is a cloud service
enabling Flutter developers to deploy updates to their apps in production.
Shorebird currently works on Android and iOS (alpha) and will eventually work
everywhere Flutter works.

"Code Push" is a reference to the name of a deploy feature used by the React
Native community from [Microsoft](https://appcenter.ms) and
[Expo](https://expo.dev), neither of which support Flutter.

### What is the difference between a patch and a release?

We use the term "release" to mean preparing a binary for the app stores. In
order to later generate a patch Shorebird needs to know the exact binary that
was shipped to the app stores. The `shorebird release` command is used to
prepare a binary for the app stores which includes the Shorebird updater.

We use the term "patch" to mean a binary that can be applied to a release to
update it to new code. The `shorebird patch` command is used to generate
a patch from your new local code which is then diffed with the release binary
to generate a patch which is then shipped to your users.

We explain more of these terms in [Concepts](concepts.md).

### What is the roadmap?

We try to keep: https://docs.shorebird.dev/status up to date with the status
of the project.

Our project boards are also public an found at:
https://github.com/orgs/shorebirdtech/projects

Our team also operates in the public, so you can see what we're working
on at any time. We're happy to answer any questions you have about our roadmap
or priorities via Github issues or [Discord](https://discord.gg/shorebird).

### Can I use Shorebird with my team?

Yes! The Shorebird free "Hobby" tier only supports a single developer, but all
other plans support unlimited developers.

See [Teams](teams.md) for more information.

### Does Shorebird store my source code?

No. Shorebird servers never see your source code. When you run
`shorebird release` or `shorebird patch` the `shorebird` tool only uploads the
same compiled app binary that you send to the app stores. Shorebird servers
never store your source code at any time.

See also our privacy policy: https://shorebird.dev/privacy

### Can I use Shorebird from my CI system?

Yes. Shorebird is intended to be used from CI systems. We've published a
guide for [Github Actions](ci/github.md), other CI systems should be similar.

Please don't hesitate to reach out over GitHub issues or Discord if you
encounter any issues.

### How does this relate to Firebase Remote Config or Launch Darkly?

Code push allows adding new code / replacing code on the device. Firebase
Remote Config and Launch Darkly are both configuration systems. They allow you
to change the configuration of your app without having to ship a new version.
They are not intended to replace code.

### How big of a dependency footprint does this add?

I haven't measured recently, but I expect the code push library to add less than
one megabyte to Flutter apps. `flutter build apk --release` vs.
`shorebird build apk --release` should give you a rough idea. We know of ways
we can make this smaller when that becomes a priority. If size is a blocker
for you, please let us know!

### Does code push work with large applications?

Yes. There is no limit on the size of the application that can be patched with
code push. As noted [below](#what-types-of-changes-does-shorebird-code-push-support),
Shorebird can change any Dart code in your application no matter of size.

### What can I use Shorebird code push for?

We've seen a variety of uses, including:

- Emergency fixes to production apps.
- Shipping bug fixes to users on older versions of your app.
- Shipping constantly (e.g. every hour).

Note that most app stores prohibit shipping code that changes the behavior of
the app in a significant way. Please see
[below](#how-does-this-relate-to-the-appplay-store-review-process-or-policies)
for more information.

### What can't we use Shorebird code push for?

As above, Shorebird should not be used to violate app store polices. Please see
[below](#does-shorebird-comply-with-play-store-guidelines) for more information.

Also Shorebird does not support changing native code (e.g. Java/Kotlin on
Android or Objective-C/Swift on iOS). The tool will warn you during an
attempted patch if you have changed native code.

### Does Shorebird submit to the stores for me?

Shorebird does not currently support submitting to the app stores on your
behalf. We have plans to add this in the future, but for now you will need to
continue to use your existing processes to submit to the app stores.
https://github.com/shorebirdtech/shorebird/issues/257

### What does Shorebird store on disk and where?

The Shorebird updater (included in your application when you build your app with
Shorebird) caches the latest downloaded patch in the same cache directory that
Flutter uses for caching compiled shaders or compiled Dart code. On Android,
this is located in `/data/user/0/com.example.app/code_cache/shorebird_updater`
although the base of that path is provided by the Android system and can change
dynamically at runtime. On iOS devices, data is stored under
`Library/Application Support/shorebird`.

The Shorebird command line tools (e.g. `shorebird patch`) are installed on disk
in `$HOME/.shorebird`, including bringing a copy of Flutter and Dart as well as
the Shorebird release tools themselves. This is similar to how the `flutter`
command works.

[Uninstall](uninstall.md) has details on how to remove Shorebird from your
system should you choose.

### How does this relate to Flutter Hot Reload?

Flutter's Hot reload is a development-time-only feature. Code push is for
production.

Hot reload is a feature of Flutter that allows you to change code on the device
during development. It requires building the Flutter engine with a debug-mode
Dart VM which includes a just-in-time (JIT) Dart compiler.

Code push is a feature that allows you to change code on the device in
production. We will use a variety of different techniques to make this possible
depending on the platform. Current demos execute ahead-of-time compiled Dart
code and do not require a JIT Dart compiler.

### What types of changes does Shorebird code push support?

Shorebird can change any Dart code in your application. This includes app code
and generated code. You can also update dependencies in `pubspec.yaml` as long
as they don't require native code changes.

We have plans to support changing Flutter asset files (from pubspec.yaml) in the
near future: https://github.com/shorebirdtech/shorebird/issues/318

We do not have plans to support changing native code (e.g. Java/Kotlin on
Android or Objective-C/Swift on iOS), and the tool will warn you if it detects
that you have changed native code as it will not be included in the patch.

### Does this support Flutter Web?

Code push isn't needed for Flutter web as the web already works this way. When
a user opens a web app it downloads the latest version from the server if
needed.

If you have a use case for code push with Fluter web, we'd
[love to know](https://github.com/shorebirdtech/shorebird/issues/new?assignees=&labels=feature&template=feature_request.md&title=feat%3A+)!

### Will this work on iOS, Android, Mac, Windows, Linux, etc?

Yes.

So far we've focused on Android and iOS support, but code push will eventually
work everywhere Flutter works. We're ensuring we've built all the infrastructure
needed to provide code push reliably, safely first before expanding to more
platforms.

### What OS versions does Shorebird support?

Shorebird supports the same versions of Android that Flutter supports.

Flutter currently supports Android API level 19+ and iOS 11.0+:
https://docs.flutter.dev/reference/supported-platforms

### What versions of Flutter does Shorebird support?

Shorebird currently supports only recent stable releases of Flutter. We could
support older versions of Flutter as well, we just haven't built out the
infrastructure necessary to maintain such over time. We intend to support
more versions of Flutter in the future, including any version for our
enterprise customers.
https://github.com/shorebirdtech/shorebird/issues/1100

Shorebird tracks Flutter stable and generally updates within a few hours of
any stable release. Our system for doing these updates is automated takes
a few minutes to run. We then do an extra manual verification step before
publishing to our servers.

### How does this relate to the App/Play Store review process or policies?

Developers are bound by their agreements with store providers when they choose
to use those stores. Code push is designed to allow developers to update their
apps and still comply with store policies on iOS and Android. Similar to the
variety of commercial products available to do so with React Native (e.g.
[Microsoft](https://appcenter.ms), [Expo](https://expo.dev)).

Microsoft also publishes a guide on how their solution complies with the app
stores:
https://github.com/microsoft/react-native-code-push#store-guideline-compliance

Code push is a widely used technique throughout the app stores. All of the
large apps I'm aware of use code push. The major policy to be aware of is
not to change the behavior of the app in a significant way. Please see
[below](#does-shorebird-comply-with-play-store-guidelines) for more information.

### Does Shorebird comply with Play Store guidelines?

Yes.

The Play Store offers two restrictions relating to update tools.

1.  Updates must use an interpreter or virtual machine (Shorebird
    uses the Dart Virtual Machine).
    https://support.google.com/googleplay/android-developer/answer/9888379?hl=en

```
    An app distributed via Google Play may not modify, replace, or update itself
    using any method other than Google Play's update mechanism. Likewise, an app
    may not download executable code (such as dex, JAR, .so files) from a
    source other than Google Play. *This restriction does not apply to code
    that runs in a virtual machine or an interpreter* where either provides
    indirect access to Android APIs (such as JavaScript in a webview or
    browser).

    Apps or third-party code, like SDKs, with interpreted languages (JavaScript,
    Python, Lua, etc.) loaded at run time (for example, not packaged with the
    app) must not allow potential violations of Google Play policies.
```

2.  Changes to the app must not be deceptive (e.g. changing the purpose of
    the app via update).
    https://support.google.com/googleplay/android-developer/answer/9888077
    Please be clear with your users about what you are providing with your
    application and do not violate their expectations with
    significant behavioral changes through the use of Shorebird.

Shorebird is designed to be compatible with the Play Store guidelines. However
Shorebird is a tool, and as with any tool, can be abused. Deliberately abusing
Shorebird to violate Play Store guidelines is in violation of the Shorebird
[Terms of Service](https://shorebird.dev/terms) and can result in termination of
your account.

Finally, code push services are widely used in the industry (all of the large
apps I'm aware of use them) and there are multiple other code push services
publicly available (e.g. expo.dev & appcenter.ms). This is a well trodden path.

Microsoft also publishes a guide on how their react native "codepush" library
complies with the app stores:
https://github.com/microsoft/react-native-code-push#store-guideline-compliance

### Does Shorebird comply with App Store guidelines?

Yes.

Similar to the Play Store, the App Store offers both technical and policy
restrictions.

```
3.2.2
... interpreted code may be downloaded to an Application but only so long as
such code:
(a) does not change the primary purpose of the Application by providing
features or functionality that are inconsistent with the intended and
advertised purpose of the Application as submitted to the App Store,
(b) does not create a store or storefront for other code or applications, and
(c) does not bypass signing, sandbox, or other security features of the OS.
```

Shorebird uses a custom Dart interpreter to comply with the interpreter-only
restriction for updates on iOS. So long as your application is not engaging
in deceptive behavior via updates (e.g. changing the purpose of the app via
update), updating via Shorebird (or any other code push solution) is standard
industry practice and compliant with App Store guidelines.

Deliberately abusing Shorebird to violate App Store guidelines is in violation
of the Shorebird [Terms of Service](https://shorebird.dev/terms) and can result
in termination of your account.

Microsoft also publishes a guide on how their react native "codepush" library
complies with the app stores:
https://github.com/microsoft/react-native-code-push#store-guideline-compliance

### Can I use Shorebird in my country?

We have not attempted to restrict access to Shorebird from any country.

We recognize that some countries have restrictions on what urls can be accessed
from within the country. Shorebird currently uses Google Cloud for hosting,
including Google Cloud Storage and Google Cloud Run.

The following URLs are used by Shorebird:

- https://api.shorebird.dev -- used by the `shorebird` command line tools to
  interact with the Shorebird servers as well as the Shorbird updater on users'
  devices to check for updates.
- https://download.shorebird.dev -- used by the `shorebird` command line tool to
  download Flutter artifacts for building releases and patches.
- https://storage.googleapis.com -- used by the `shorebird` command line tool to
  upload and download release and patch artifacts.

If all of those URLs are accessible from your country, then Shorebird should work.

If your region requires use of
[FLUTTER_STORAGE_BASE_URL](https://docs.flutter.dev/community/china) Shorebird
may not work for you at this time as we also use that environment variable as
part of our implementation. We have plans to [remove this
restriction](https://github.com/shorebirdtech/shorebird/issues/435), let us know
if this is important to you.

### Can I self-host Shorebird?

Not currently. We intend to offer [cloud-prem and on-prem
hosting](https://github.com/shorebirdtech/shorebird/issues/485) as an option on
enterprise plans. Please contact us if such is required for your adoption.

### Does code push require the internet to work?

Yes. One could imagine running a server to distribute the updates separately
from the general internet, but some form of network connectivity is required to
transport updates to the devices.

### How is Shorebird affected by lack of network connectivity?

Shorebird updater (included in your application when you build your app with
Shorebird) is designed to be resilient to network connectivity issues.

In the default update behavior, when the
application launches it alerts the Shorebird updater, which spawns a separate
thread to make a network request to Shorebird's servers and ask for an update.
We intentionally use a separate thread to avoid affecting blocking anything else
the application might be doing. If the network request fails or times out, the
updater will simply try to check again next time the application launches.

Shorebird command line tools (e.g. `shorebird patch`) require network
connectivity to function. If you are using Shorebird to distribute your app,
you should ensure that your CI system has network connectivity.

### What happens if a user doesn't update for a long time and misses an update?

Our implementation always sends an update specifically tailored for the device
that is requesting it updating the requestor always to the latest version
available. Thus if a user doesn't update for a while they will "miss"
intermediate updates.

The update server could be changed to support responding with either the next
incremental version or the latest version depending on your application's needs.
Please let us know if alternative update behaviors are important to you.

### Why are some parts of the code push library written in Rust?

Parts of the code push ("updater") system are written in Rust:

1. Avoids starting two Dart VMs (one for the updater and one for the app).
2. Allows accessing the updater code from multiple languages (e.g. both the C++
   engine as well as a Dart/Flutter application, or even Kotlin/Swift code if
   needed)

See our [Languages
Philosophy](https://github.com/shorebirdtech/handbook/blob/main/engineering.md#languages)
for more information as to why we chose Rust.

### How does Shorebird relate to Flutter?

Shorebird is a fork of Flutter that adds code push. Shorebird is not a
replacement for Flutter, but rather a replacement for the Flutter engine. You
can continue to use the Flutter tooling you already know and love.

`shorebird` uses a fork of Flutter that includes the Shorebird updater. We track
the latest stable release of Flutter and replace a few of the Flutter engine
files with our modified copies.

To implement our fork, we use `FLUTTER_STORAGE_BASE_URL` to point to
`https://download.shorebird.dev` instead of download.flutter.dev. We pass
through unmodified output from the `flutter` tool so you will see a warning from
Flutter:

```
Flutter assets will be downloaded from http://download.shorebird.dev. Make sure you trust this source!
```

For more information about why we had to fork Flutter see
[architecture.md](architecture.md).

### When do updates happen?

By default, the Shorebird updater checks for updates on app startup. It runs on
a background thread and does not block the UI thread. Any updates will be
installed while the user is using the app and will be applied the next time the
app is restarted.

It is also possible to run the Shorebird updater manually using
[package:shorebird_code_push](https://pub.dev/packages/shorebird_code_push),
through which it is possible to trigger updates at any time, including via
a push notification.

The Shorebird updater is designed such that when the network is not available,
or the server is down or otherwise unreachable, the app will continue to run
as normal. Should you ever choose to delete an update from our servers, all your
clients will continue to run as normal.

We have not yet added the ability to rollback patches. For now, the simplest
thing is to simply push a new patch that reverts the changes you want to undo.

### Do I need to keep my app_id secret?

No. The `app_id` is included in your app and is safe to be public. You can
check it into version control (even publicly) and not worry about someone
else accessing it.

Someone who has your `app_id` can fetch the latest version of your app from
Shorebird servers, but they cannot push updates to your app or access any
other aspect of your Shorebird account.

### What information is sent to Shorebird servers?

Although Shorebird connects to the network, it does not send any personally
identifiable information. Including Shorebird should not affect your
declarations for the Play Store or App Store.

Requests sent from the app to Shorebird servers include:

- app_id (specified `shorebird.yaml`)
- channel (optional in `shorebird.yaml`)
- release_version (versionName from AndroidManifest.xml)
- patch_number (generated as part of `shorebird patch android`)
- arch (e.g. 'aarch64', needed to send down the right patch)
- platform (e.g. 'android', needed to send down the right patch)
  That's it. The code for this is in `updater/library/src/network.rs`
- client_id (generated on the device on first run, used to de-duplicate
  per-device installs and allow us to charge based on users installed to
  (e.g. monthly active users), rather than total patches or total patch installs)

### What platforms does Shorebird support?

Currently, Shorebird supports iOS and Android. Android support is production
ready, iOS support is in alpha with [known issues](status.md#ios-alpha).

Use of Shorebird for iOS or Android can be independent decisions. You can
use `shorebird release` to ship to Google Play and an ipa built with
`flutter build` to the App Store or vice versa.

Shorebird can (relatively easily) be made to support
[desktop](https://github.com/shorebirdtech/shorebird/issues/397) or embedded
targets. If those are important to you, please let us know.

### How does Shorebird interact with Play Testing Tracks or Apple TestFlight?

Each of the app stores have separate mechanisms for distributing apps to limited
groups of users (e.g. "internal testing", "closed beta", etc.). These are all
mechanisms for segmenting your users into groups and distributing specific
versions of your apps to each.

Unfortunately, these not all of these mechanisms allow 3rd parties to detect
when apps are installed in any specific Test Track or via TestFlight. Thus, we
do not have reliable visibility into composition of these groups, and cannot
reliably gate access to Shorebird patches based on these groups.
https://stackoverflow.com/questions/53291007/can-an-android-application-identify-the-test-track-within-google-play
https://stackoverflow.com/questions/26081543/how-to-tell-at-runtime-whether-an-ios-app-is-running-through-a-testflight-beta-i

If you'd like to segment availability of Shorebird patches, there are 4 potential options:

1.  Use separate binaries / bundle ids for each group. This is the most
    straightforward approach, but requires you to manage multiple binaries.
    On Android the easy way to accomplish this is through flavors. You may
    already have a dev flavor and prod flavor with different availability. You
    can thus patch your dev flavor, verify it and then separately patch your
    prod flavor. We recommend using branches / tags in your version control
    to help keep track of the sources associated with each release.
2.  Track your own set of opt-in users, disable automatic updates, and trigger
    updates only for certain users via package:shorebird_code_push. This works
    today, but requires you to manage your own opt-in list.
3.  Shorebird could create its own opt-in mechanism on a per-device basis
    (similar to Test Tracks or TestFlight, just platform agnostic). This
    could allow your QA team to opt-in to patches before they're promoted to
    the general public. If this is important to you, please let us know:
    https://github.com/shorebirdtech/shorebird/issues/498
4.  Shorebird plans to add percentage based rollouts. This does not let you
    choose which devices to send to, but can help you roll out incrementally
    and roll-back on sight of any problems.
    https://github.com/shorebirdtech/shorebird/issues/497

## Billing

### How do I upgrade or downgrade my plan?

You can upgrade or downgrade your plan at any time by running `shorebird
account upgrade` or `shorebird account downgrade`.

### When does my billing period reset?

Billing periods are reset automatically every month on the month you first
subscribed to Shorebird. For example, if you subscribed on the 15th of the
month, your billing period will reset on the 15th of every month.

### How do I cancel my subscription?

You can cancel your subscription at any time by running `shorebird account
downgrade`. You will continue to have all the features of a paid account until
the end of your billing period.

### Can I pay for a year in advance?

Currently we have not yet implemented yearly billing. We don't expect it
will be hard, we just aren't quite sure what customers expect in terms
of overage charges on a yearly plan. If you have thoughts on this, please
let us know:
https://github.com/shorebirdtech/shorebird/issues/733

### What counts as a "patch install" for Shorebird?

A "patch install" is counted when a patch is successfully installed on a
user's device. Currently our counting is per-download, not per-install
but we intend to change this in the future to only charge for confirmed
successful installs. This is done simply because we do not currently report
patch install success back to our servers. We will need to do this for
analytics anyways and once we do we can adjust our accounting.
https://github.com/shorebirdtech/shorebird/issues/740

If you believe you've been charged for failed installs, please let us know
we're happy to refund you any difference.
