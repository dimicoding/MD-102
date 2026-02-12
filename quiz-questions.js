// MD-102 2026 Objectives Quiz — Question Bank
// Each question has: domain, objective, difficulty (basic/intermediate/advanced), question, options, answer (index), explanation

const quizQuestions = [

  // ═══════════════════════════════════════════════════════════════
  // DOMAIN 1: Deploy Windows Client (20–25%)
  // ═══════════════════════════════════════════════════════════════

  // --- 1.1 Prepare for a Windows Client Deployment ---

  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "basic",
    question: "Which Windows edition supports joining a device to Microsoft Entra ID (Azure AD) natively?",
    options: [
      "Windows Home",
      "Windows Pro",
      "Windows S Mode",
      "Windows Home in S mode"
    ],
    answer: 1,
    explanation: "Windows Pro, Enterprise, and Education editions support Microsoft Entra join. Windows Home does not support domain join or Entra join."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "basic",
    question: "What is the primary difference between a 'migrate' and a 'rebuild' approach for Windows deployment?",
    options: [
      "Migrate uses new hardware; rebuild uses existing hardware",
      "Migrate preserves user state and data; rebuild starts with a clean image",
      "Rebuild preserves user state; migrate does not",
      "There is no difference between the two approaches"
    ],
    answer: 1,
    explanation: "A migration preserves user settings, data, and applications while upgrading the OS. A rebuild (wipe-and-load) starts fresh with a clean image and then restores user data separately."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "intermediate",
    question: "An organization wants to deploy Windows Enterprise to 500 devices that currently run Windows Pro. They use Microsoft 365 E3 licenses. What activation method should they use?",
    options: [
      "KMS activation",
      "MAK activation",
      "Subscription-based activation",
      "OEM activation"
    ],
    answer: 2,
    explanation: "Subscription-based activation allows Windows Pro devices to automatically step-up to Windows Enterprise when a user with an eligible Microsoft 365 or Windows Enterprise E3/E5 license signs in."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "intermediate",
    question: "Which deployment tool is BEST suited for deploying a customized Windows image to bare-metal devices in an on-premises environment without internet connectivity?",
    options: [
      "Windows Autopilot",
      "Microsoft Deployment Toolkit (MDT)",
      "Intune",
      "Microsoft Store for Business"
    ],
    answer: 1,
    explanation: "MDT is designed for on-premises image-based deployments and does not require internet connectivity. Autopilot and Intune require internet access."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "advanced",
    question: "A company uses subscription-based activation. A user's Microsoft 365 E3 license is removed. What happens to the Windows Enterprise activation on their device?",
    options: [
      "The device immediately downgrades to Windows Pro",
      "The device remains on Windows Enterprise permanently",
      "The device has a grace period of up to 90 days before reverting to Windows Pro",
      "The device becomes unlicensed and stops functioning"
    ],
    answer: 2,
    explanation: "When the license is removed, there is a grace period of up to 90 days. After that, the device reverts to Windows Pro. The device does not immediately downgrade."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "advanced",
    question: "You need to deploy Windows 11 Enterprise to 1,000 new devices. Requirements: zero-touch provisioning, cloud-managed, no on-premises infrastructure. Which combination should you use?",
    options: [
      "MDT + SCCM",
      "Windows Autopilot + Intune + subscription-based activation",
      "MDT + Intune",
      "USB boot media + KMS activation"
    ],
    answer: 1,
    explanation: "Windows Autopilot with Intune provides zero-touch, cloud-based provisioning. Subscription-based activation handles the Pro-to-Enterprise step-up without on-premises infrastructure."
  },

  // --- 1.2 Plan and Implement Windows Autopilot ---

  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "basic",
    question: "What uniquely identifies a device when registering it for Windows Autopilot?",
    options: [
      "The device serial number only",
      "The hardware hash",
      "The MAC address",
      "The user's email address"
    ],
    answer: 1,
    explanation: "The hardware hash (a unique hardware identifier) is used to register a device for Autopilot. It includes information about the device hardware."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "basic",
    question: "What is the purpose of the Enrollment Status Page (ESP) in an Autopilot deployment?",
    options: [
      "To allow users to select their preferred language",
      "To show provisioning progress and block user access until required policies and apps are installed",
      "To display the terms of service agreement",
      "To configure network settings"
    ],
    answer: 1,
    explanation: "The ESP tracks the provisioning process and can block user access to the desktop until all required policies, certificates, and applications are installed."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "intermediate",
    question: "Which Autopilot deployment mode joins a device to Microsoft Entra ID and enrolls it in Intune without requiring any user interaction during OOBE?",
    options: [
      "User-driven mode",
      "Self-deploying mode",
      "White-glove (pre-provisioning) mode",
      "Hybrid Azure AD join mode"
    ],
    answer: 1,
    explanation: "Self-deploying mode requires no user interaction. It automatically joins the device to Entra ID and enrolls in Intune. It is ideal for shared devices or kiosks."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "intermediate",
    question: "You are configuring an Autopilot deployment profile. You want the device to join on-premises Active Directory AND be registered in Entra ID. Which mode should you choose?",
    options: [
      "User-driven with Microsoft Entra join",
      "Self-deploying mode",
      "User-driven with Microsoft Entra hybrid join",
      "Pre-provisioning mode"
    ],
    answer: 2,
    explanation: "Hybrid Entra join mode joins the device to on-premises AD (via the Intune Connector for Active Directory) and registers it in Entra ID."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "advanced",
    question: "An Autopilot deployment fails at the ESP with error 0x80180014. What is the most likely cause?",
    options: [
      "The device has no internet connectivity",
      "The MDM enrollment failed — the device exceeded the Intune device enrollment limit",
      "The user entered wrong credentials",
      "The Autopilot profile was not assigned"
    ],
    answer: 1,
    explanation: "Error 0x80180014 indicates that the MDM enrollment limit has been reached. Each user has a maximum number of devices they can enroll in Intune, and exceeding this causes enrollment failure."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "advanced",
    question: "You set up Autopilot pre-provisioning (white glove). A technician presses the Windows key five times during OOBE, but the pre-provisioning page does not appear. What should you check first?",
    options: [
      "The device has a TPM 2.0 chip and it is enabled",
      "The device has Windows Home installed",
      "The user has a Microsoft 365 F1 license",
      "The device is connected via Wi-Fi (not Ethernet)"
    ],
    answer: 0,
    explanation: "Pre-provisioning (white glove) requires TPM 2.0. If TPM is not present or not enabled in BIOS/UEFI, pre-provisioning will not be available."
  },

  // --- 1.3 Plan and Implement MDT Deployment ---

  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.3 Plan and Implement MDT Deployment",
    difficulty: "basic",
    question: "What is the Microsoft Deployment Toolkit (MDT) primarily used for?",
    options: [
      "Managing mobile devices",
      "Automating the deployment of Windows operating systems",
      "Managing Microsoft 365 licenses",
      "Monitoring device compliance"
    ],
    answer: 1,
    explanation: "MDT is a free tool from Microsoft for automating Windows OS deployment using task sequences, images, and scripts."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.3 Plan and Implement MDT Deployment",
    difficulty: "intermediate",
    question: "In MDT, what is the purpose of a task sequence?",
    options: [
      "To configure DHCP settings on the network",
      "To define the series of steps for deploying and configuring an operating system",
      "To create user accounts in Active Directory",
      "To assign Intune policies to devices"
    ],
    answer: 1,
    explanation: "A task sequence is an ordered list of steps that MDT executes during deployment, including partitioning disks, applying images, installing drivers, and configuring settings."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.3 Plan and Implement MDT Deployment",
    difficulty: "intermediate",
    question: "Which tool is used alongside MDT to capture and restore user state (files, settings) during migration?",
    options: [
      "Robocopy",
      "USMT (User State Migration Tool)",
      "OneDrive sync",
      "Windows Easy Transfer"
    ],
    answer: 1,
    explanation: "USMT (specifically ScanState and LoadState) is the tool used with MDT to capture and restore user profiles, files, and settings during an OS migration."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.3 Plan and Implement MDT Deployment",
    difficulty: "advanced",
    question: "An MDT deployment fails during the 'Apply Operating System' step with an error indicating the image cannot be found. What should you verify?",
    options: [
      "The deployment share is accessible over the network and the .wim file path in the task sequence is correct",
      "The target device has TPM enabled",
      "The user has a valid Intune license",
      "Windows Update is accessible from the target device"
    ],
    answer: 0,
    explanation: "The most common cause is that the deployment share is not accessible (network or permissions issue) or the path to the .wim image file in the task sequence is incorrect."
  },

  // --- 1.4 Configure Remote Management ---

  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.4 Configure Remote Management",
    difficulty: "basic",
    question: "Which Intune feature allows a help desk technician to view and control a user's device screen with the user's permission?",
    options: [
      "Remote Desktop Protocol",
      "Remote Help",
      "Windows Admin Center",
      "TeamViewer"
    ],
    answer: 1,
    explanation: "Remote Help is an Intune add-on that allows help desk staff to remotely view or take control of a user's screen with the user's consent."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.4 Configure Remote Management",
    difficulty: "intermediate",
    question: "You need to enable Remote Desktop on Windows devices managed by Intune. What is the recommended approach?",
    options: [
      "Ask each user to enable it manually in Settings",
      "Deploy a device configuration profile that enables Remote Desktop",
      "Use Group Policy from an on-premises domain controller only",
      "Install third-party remote access software"
    ],
    answer: 1,
    explanation: "The recommended approach for Intune-managed devices is to deploy a configuration profile (Settings Catalog or custom OMA-URI) that enables Remote Desktop."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.4 Configure Remote Management",
    difficulty: "advanced",
    question: "Windows Admin Center is installed in gateway mode. Technicians report they cannot connect to managed devices. What should you check first?",
    options: [
      "WinRM (Windows Remote Management) is enabled on the target devices and the appropriate firewall ports are open",
      "The devices have Microsoft 365 licenses",
      "The devices are enrolled in Autopilot",
      "Remote Help is enabled in Intune"
    ],
    answer: 0,
    explanation: "Windows Admin Center uses WinRM for remote management. If WinRM is disabled or the firewall blocks the required ports (5985/5986), connections will fail."
  },

  // ═══════════════════════════════════════════════════════════════
  // DOMAIN 2: Manage Identity and Compliance (15–20%)
  // ═══════════════════════════════════════════════════════════════

  // --- 2.1 Manage Identity ---

  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "basic",
    question: "What is Windows Hello for Business?",
    options: [
      "A cloud-based email service",
      "A biometric and PIN-based authentication method that replaces passwords",
      "A remote desktop application",
      "A device encryption tool"
    ],
    answer: 1,
    explanation: "Windows Hello for Business provides passwordless sign-in using biometrics (fingerprint, facial recognition) or a PIN that is backed by asymmetric key-based credentials."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "basic",
    question: "What is RBAC in the context of Microsoft Intune?",
    options: [
      "Remote Backup and Configuration",
      "Role-Based Access Control — assigns permissions based on roles",
      "Rapid Browser Access Control",
      "Registry-Based Application Configuration"
    ],
    answer: 1,
    explanation: "RBAC (Role-Based Access Control) in Intune allows administrators to assign permissions based on predefined or custom roles, controlling who can do what in the Intune portal."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "intermediate",
    question: "What is the purpose of the Intune Connector for Active Directory?",
    options: [
      "To sync Intune policies to on-premises Group Policy",
      "To create computer objects in on-premises AD during Autopilot Hybrid Entra Join deployments",
      "To migrate users from on-premises AD to Entra ID",
      "To back up Active Directory to the cloud"
    ],
    answer: 1,
    explanation: "The Intune Connector for Active Directory runs on an on-premises server and creates computer objects in AD during Hybrid Azure AD Join Autopilot deployments."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "intermediate",
    question: "Which solution allows automatic management of local administrator passwords on Microsoft Entra joined devices?",
    options: [
      "Windows Hello for Business",
      "Microsoft LAPS (Local Administrator Password Solution) for Entra ID",
      "BitLocker",
      "Credential Guard"
    ],
    answer: 1,
    explanation: "Microsoft LAPS for Entra ID automatically rotates and stores local administrator passwords for Entra-joined and Hybrid-joined devices, with passwords stored in Entra ID."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "advanced",
    question: "You need to configure Windows Hello for Business using a cloud-only Kerberos trust model. Which of the following is NOT required?",
    options: [
      "Microsoft Entra Kerberos enabled in the on-premises domain",
      "An on-premises Certificate Authority (CA) for user certificate enrollment",
      "Devices enrolled in Intune or configured via Group Policy",
      "Microsoft Entra Connect synchronizing users"
    ],
    answer: 1,
    explanation: "The Cloud Kerberos trust model does NOT require an on-premises Certificate Authority. That is needed for the certificate trust model. Cloud Kerberos trust simplifies deployment by using Entra Kerberos."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "advanced",
    question: "A company wants to restrict the local Administrators group on Entra-joined devices to only include a specific Entra ID security group. How should you configure this?",
    options: [
      "Use Intune Account Protection policy to manage local group membership",
      "Manually edit the group on each device",
      "Use Windows Hello for Business",
      "Configure a compliance policy"
    ],
    answer: 0,
    explanation: "Intune's Account Protection or Endpoint Privilege Management policy allows you to manage local group membership on Entra-joined devices, including restricting the local Administrators group to specific Entra ID groups."
  },

  // --- 2.2 Implement Compliance Policies ---

  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "basic",
    question: "What is the purpose of a compliance policy in Microsoft Intune?",
    options: [
      "To deploy applications to devices",
      "To define the rules and settings a device must meet to be considered compliant",
      "To configure the Wi-Fi settings on a device",
      "To reset a device to factory settings"
    ],
    answer: 1,
    explanation: "Compliance policies define the minimum requirements (e.g., OS version, encryption, password complexity) that a device must meet to be marked as compliant."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "basic",
    question: "What happens by default when a device does not meet an Intune compliance policy?",
    options: [
      "The device is immediately wiped",
      "The device is marked as not compliant",
      "The user receives a phone call from IT",
      "The device is automatically re-enrolled"
    ],
    answer: 1,
    explanation: "By default, a non-compliant device is marked as 'Not compliant.' Additional actions (like blocking access or sending notifications) must be configured through actions for non-compliance or Conditional Access."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "intermediate",
    question: "How does Conditional Access work with Intune compliance policies?",
    options: [
      "Conditional Access automatically installs apps on compliant devices",
      "Conditional Access can block or grant access to corporate resources based on the device's compliance status",
      "Conditional Access replaces compliance policies",
      "Conditional Access only works with on-premises devices"
    ],
    answer: 1,
    explanation: "Conditional Access policies in Entra ID can require a device to be marked as compliant in Intune before granting access to corporate resources like Exchange Online, SharePoint, etc."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "intermediate",
    question: "You configure a compliance policy that requires device encryption. An action for non-compliance is configured to 'Mark device as non-compliant' after a 5-day grace period. What happens during the grace period?",
    options: [
      "The device is immediately marked as non-compliant",
      "The device status shows 'In grace period' and the user can still access resources",
      "The device is retired from Intune",
      "The device is blocked from all network access"
    ],
    answer: 1,
    explanation: "During the grace period, the device status shows 'In grace period' (not compliant, not non-compliant). The user retains access to resources while having time to remediate."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "advanced",
    question: "You have devices that are not enrolled in Intune. You need to ensure only compliant devices can access Microsoft 365. Which Conditional Access grant control should you use?",
    options: [
      "Require device to be marked as compliant",
      "Require app protection policy",
      "Require hybrid Azure AD joined device",
      "Require multifactor authentication only"
    ],
    answer: 1,
    explanation: "For unenrolled devices, 'Require app protection policy' ensures the app itself enforces protection. 'Require device to be marked as compliant' requires enrollment. App protection policies can protect data without full device enrollment."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "advanced",
    question: "A compliance policy is assigned to a group of Android Enterprise personally-owned work profile devices. The policy requires a minimum OS version of 14. Devices running Android 13 are still showing as compliant. What is the most likely issue?",
    options: [
      "The compliance policy is assigned to users, not devices",
      "There is a conflicting compliance policy with a lower OS version requirement, and the device is receiving the less restrictive setting",
      "Android devices don't support OS version checks",
      "The devices need to be restarted"
    ],
    answer: 1,
    explanation: "When multiple compliance policies apply and there are conflicts, the least restrictive setting may be applied depending on configuration. You should review all assigned policies for conflicts."
  },

  // ═══════════════════════════════════════════════════════════════
  // DOMAIN 3: Manage, Maintain, and Protect Devices (40–45%)
  // ═══════════════════════════════════════════════════════════════

  // --- 3.1 Manage the Device Lifecycle in Intune ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "basic",
    question: "What is the difference between 'Retire' and 'Wipe' in Intune?",
    options: [
      "Retire removes the device completely; Wipe only removes corporate data",
      "Retire removes only corporate data and management; Wipe factory-resets the entire device",
      "They are the same action",
      "Retire is for iOS only; Wipe is for Android only"
    ],
    answer: 1,
    explanation: "Retire removes corporate data, apps, and the management profile but leaves personal data. Wipe factory-resets the device, removing all data."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "basic",
    question: "What is automatic enrollment in Intune?",
    options: [
      "Users manually register their devices through a portal",
      "Devices are automatically enrolled in Intune when they join or register with Entra ID",
      "Devices are automatically ordered from a vendor",
      "Applications are automatically installed without enrollment"
    ],
    answer: 1,
    explanation: "Automatic enrollment is configured so that when a Windows device joins or registers with Entra ID, it is automatically enrolled in Intune MDM."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "intermediate",
    question: "You need to bulk-enroll 200 Windows devices into Intune without user interaction. Which method should you use?",
    options: [
      "Ask each user to go to Settings > Accounts > Access work or school",
      "Use a provisioning package created with Windows Configuration Designer",
      "Use Apple Business Manager",
      "Send enrollment invitations via email"
    ],
    answer: 1,
    explanation: "Windows Configuration Designer creates provisioning packages (.ppkg) that can bulk-enroll Windows devices into Entra ID and Intune without user interaction."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "intermediate",
    question: "What is a 'Policy Set' in Intune?",
    options: [
      "A set of network firewall rules",
      "A collection of management objects (apps, policies, profiles) grouped together for assignment to a single group",
      "A backup of all Intune policies",
      "A PowerShell script that applies policies"
    ],
    answer: 1,
    explanation: "Policy Sets in Intune allow you to bundle apps, configuration policies, compliance policies, and other objects into a single unit for simplified assignment."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "advanced",
    question: "An employee's personal Android device was enrolled using Android Enterprise personally-owned work profile. The employee leaves the company. Which Intune action should you perform?",
    options: [
      "Wipe — to factory-reset the personal device",
      "Retire — to remove the work profile and corporate data only",
      "Delete the device from Intune — this removes everything",
      "Do nothing — the data will expire on its own"
    ],
    answer: 1,
    explanation: "For a personally-owned device, you should use 'Retire' to remove only the work profile containing corporate data. Wiping a personal device would erase all personal data, which is inappropriate."
  },

  // --- 3.2 Manage Device Configuration ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "basic",
    question: "What is a configuration profile in Intune?",
    options: [
      "A profile that tracks a user's location",
      "A set of settings that configure features and security on devices",
      "A document that lists hardware specifications",
      "A tool for creating backup images"
    ],
    answer: 1,
    explanation: "Configuration profiles in Intune define settings for device features, restrictions, email, Wi-Fi, VPN, and more that are pushed to managed devices."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "basic",
    question: "Which Intune configuration profile type would you use to restrict a Windows device to running only a single application (kiosk)?",
    options: [
      "Device restrictions profile",
      "Kiosk profile",
      "Email profile",
      "VPN profile"
    ],
    answer: 1,
    explanation: "A Kiosk profile configures a Windows device to run in single-app or multi-app kiosk mode, restricting user access to specified applications only."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "intermediate",
    question: "You assigned two configuration profiles to the same group. Both profiles configure the same Wi-Fi setting but with different values. What happens?",
    options: [
      "Both settings are applied simultaneously",
      "A conflict is reported and the setting may not be applied; the device shows an error status",
      "The most recently created profile always wins",
      "The user is prompted to choose which setting to apply"
    ],
    answer: 1,
    explanation: "When two profiles configure the same setting with different values, Intune reports a conflict. The conflicting setting may not be applied and appears as an error in monitoring."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "intermediate",
    question: "What is the difference between an Android Enterprise 'Fully Managed' device and a 'Dedicated' device?",
    options: [
      "There is no difference",
      "Fully Managed is for corporate-owned user-associated devices; Dedicated is for corporate-owned single-purpose devices without user sign-in",
      "Dedicated devices require user sign-in; Fully Managed does not",
      "Fully Managed is for personal devices; Dedicated is for corporate devices"
    ],
    answer: 1,
    explanation: "Fully Managed devices are corporate-owned with a user associated. Dedicated devices are corporate-owned single-purpose devices (like kiosks) that typically don't have a specific user sign-in."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "advanced",
    question: "You need to provide VPN connectivity to Intune-managed iOS and Android devices for accessing on-premises resources. The solution must support per-app VPN and not require third-party VPN infrastructure. What should you implement?",
    options: [
      "Always-on VPN with a third-party provider",
      "Microsoft Tunnel for Intune",
      "DirectAccess",
      "Windows VPN built-in client"
    ],
    answer: 1,
    explanation: "Microsoft Tunnel is a VPN gateway solution for Intune that supports per-app VPN on iOS and Android, allowing managed apps to access on-premises resources without third-party infrastructure."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "advanced",
    question: "A Settings Catalog profile in Intune shows 'Not applicable' for several devices. What is the most common reason?",
    options: [
      "The settings are not supported on the OS version or edition of those devices",
      "The devices do not have internet access",
      "The Intune license has expired",
      "The profile was assigned to the wrong tenant"
    ],
    answer: 0,
    explanation: "'Not applicable' typically means the setting targets a platform, OS version, or edition that does not match the device. For example, a Windows Enterprise-only setting won't apply to Windows Pro."
  },

  // --- 3.3 Monitor Devices ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.3 Monitor Devices",
    difficulty: "basic",
    question: "Where in the Intune admin center can you view the overall status of device compliance?",
    options: [
      "Apps > All apps",
      "Devices > Overview (compliance dashboard)",
      "Tenant administration > Roles",
      "Endpoint security > Antivirus"
    ],
    answer: 1,
    explanation: "The Devices > Overview section in the Intune admin center shows a compliance dashboard with charts showing compliant, non-compliant, and not evaluated devices."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.3 Monitor Devices",
    difficulty: "intermediate",
    question: "What is Endpoint Analytics in Intune used for?",
    options: [
      "To monitor real-time network traffic",
      "To provide insights into device performance, startup times, and user experience to proactively identify issues",
      "To scan for malware",
      "To deploy Windows updates"
    ],
    answer: 1,
    explanation: "Endpoint Analytics provides visibility into startup performance, application reliability, and user experience scores, helping IT proactively identify and resolve issues affecting productivity."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.3 Monitor Devices",
    difficulty: "advanced",
    question: "You need to create a custom report that shows all devices with a specific installed app and their compliance status. Which approach should you use?",
    options: [
      "Export the Intune device list to Excel manually",
      "Use Intune's built-in reporting with filters and export, or connect Intune data to Azure Monitor / Log Analytics for custom queries",
      "Check each device individually in the Intune portal",
      "Use Windows Event Viewer"
    ],
    answer: 1,
    explanation: "For custom cross-referencing of app inventory and compliance, you can use Intune's export features or integrate with Log Analytics (Azure Monitor) for advanced KQL-based querying."
  },

  // --- 3.4 Manage Device Updates ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "basic",
    question: "What is a Windows Update Ring in Intune?",
    options: [
      "A physical device that distributes updates",
      "A policy that controls when and how Windows updates are installed on devices",
      "A Microsoft 365 subscription tier",
      "A network configuration for downloading updates"
    ],
    answer: 1,
    explanation: "Update Rings in Intune are policies that configure Windows Update for Business settings, such as deferral periods, maintenance windows, and update behavior."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "basic",
    question: "What is Delivery Optimization in Windows?",
    options: [
      "A feature that speeds up application launch times",
      "A peer-to-peer content sharing technology that reduces bandwidth by sharing update downloads between devices",
      "An email delivery optimization service",
      "A network routing protocol"
    ],
    answer: 1,
    explanation: "Delivery Optimization allows devices to share update content with other devices on the same network (or across the internet), reducing bandwidth usage on WAN links."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "intermediate",
    question: "You want to delay quality updates by 7 days and feature updates by 60 days for a pilot group. Where do you configure this in Intune?",
    options: [
      "Compliance policies",
      "Windows Update Rings — set deferral periods for quality and feature updates",
      "Configuration profiles > Device restrictions",
      "App protection policies"
    ],
    answer: 1,
    explanation: "Windows Update Rings allow you to set deferral periods for both quality updates (days) and feature updates (days), enabling staged rollouts."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "intermediate",
    question: "How do you manage iOS/iPadOS updates for supervised devices using Intune?",
    options: [
      "iOS devices always update automatically; you cannot control updates",
      "Create an Update policy for iOS/iPadOS that can defer updates and schedule install times",
      "Use Windows Update Rings",
      "Deploy a configuration profile with VPN settings"
    ],
    answer: 1,
    explanation: "For supervised iOS/iPadOS devices, Intune allows you to create update policies that can defer software updates for a set number of days and schedule installation windows."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "advanced",
    question: "You configure a Windows Feature Update policy in Intune to keep devices on Windows 11 23H2. Some devices in the target group are still on Windows 10 22H2. What happens to those Windows 10 devices?",
    options: [
      "They automatically upgrade to Windows 11 23H2",
      "The feature update policy does not apply — feature update policies target specific Windows versions and won't cross major version boundaries (10 to 11) unless specifically configured",
      "They receive an error and are blocked from all updates",
      "They upgrade to Windows 10 22H2 again"
    ],
    answer: 1,
    explanation: "Feature update policies pin devices to a specific version. A policy targeting Windows 11 23H2 won't upgrade Windows 10 devices to Windows 11 unless that cross-version upgrade is explicitly configured with the correct target version."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "advanced",
    question: "Windows Driver updates management in Intune allows administrators to:",
    options: [
      "Automatically install all available drivers without review",
      "Review, approve, and deploy specific driver updates to targeted groups, with the ability to pause problematic drivers",
      "Only manage printer drivers",
      "Manage drivers for Linux devices"
    ],
    answer: 1,
    explanation: "Intune's Windows Driver Update management lets admins review available driver updates, approve or decline them, and deploy to specific groups. Problematic drivers can be paused."
  },

  // --- 3.5 Implement Endpoint Protection ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "basic",
    question: "What is a security baseline in Intune?",
    options: [
      "A minimum hardware requirement for devices",
      "A preconfigured group of Windows settings recommended by Microsoft security teams to secure devices",
      "A list of approved applications",
      "A backup of security policies"
    ],
    answer: 1,
    explanation: "Security baselines are preconfigured groups of settings recommended by Microsoft that help secure Windows devices by enabling best-practice security configurations."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "basic",
    question: "What does ASR stand for in Microsoft Defender?",
    options: [
      "Application Security Registry",
      "Attack Surface Reduction",
      "Automatic System Recovery",
      "Azure Security Response"
    ],
    answer: 1,
    explanation: "ASR (Attack Surface Reduction) rules help prevent actions and apps that are typically used by exploit-seeking malware to infect machines."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "intermediate",
    question: "You need to onboard Windows devices to Microsoft Defender for Endpoint using Intune. What is the correct process?",
    options: [
      "Install Defender manually on each device",
      "Create an Endpoint Detection and Response (EDR) policy in Intune Endpoint Security and assign it to device groups",
      "Use Windows Update to install Defender for Endpoint",
      "Create a compliance policy that requires Defender"
    ],
    answer: 1,
    explanation: "In Intune, you create an EDR onboarding policy under Endpoint Security > Endpoint detection and response, configure the onboarding package, and assign it to target device groups."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "intermediate",
    question: "Which Intune Endpoint Security policy type would you use to configure BitLocker encryption on Windows devices?",
    options: [
      "Antivirus policy",
      "Disk encryption policy",
      "Firewall policy",
      "Account protection policy"
    ],
    answer: 1,
    explanation: "Disk encryption policies under Endpoint Security allow you to configure BitLocker settings for Windows devices and FileVault for macOS."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "advanced",
    question: "You configure automated investigation and response in Defender for Endpoint. An alert is triggered on a device. What can the automated investigation do?",
    options: [
      "Only send an email notification",
      "Analyze the threat, collect evidence, and automatically remediate (quarantine files, stop processes, isolate devices) based on the automation level configured",
      "Only log the alert for manual review",
      "Automatically wipe the device"
    ],
    answer: 1,
    explanation: "Automated investigation and response in Defender for Endpoint can analyze threats, collect evidence, and take remediation actions (quarantine, stop processes, isolate devices) automatically, depending on the automation level set (full, semi, or none)."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "advanced",
    question: "You deploy a security baseline and a separate Endpoint Security antivirus policy. Both configure the 'Real-time protection' setting but with different values. How does Intune handle this conflict?",
    options: [
      "The security baseline always takes precedence",
      "A conflict is reported; you must resolve it by aligning the settings across all profiles and baselines",
      "The antivirus policy always overrides the baseline",
      "Both settings are applied simultaneously"
    ],
    answer: 1,
    explanation: "Intune reports a conflict when the same setting is configured differently across multiple profiles or baselines. The setting may not apply correctly until the conflict is resolved."
  },

  // --- 3.6 Manage Endpoint Privilege Management ---

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.6 Manage Endpoint Privilege Management",
    difficulty: "basic",
    question: "What is Endpoint Privilege Management (EPM) in Intune?",
    options: [
      "A tool for managing network privileges",
      "A feature that allows standard users to perform tasks that normally require administrator privileges, with organizational control",
      "A password management tool",
      "A remote desktop feature"
    ],
    answer: 1,
    explanation: "EPM allows organizations to let standard (non-admin) users perform specific elevated tasks (like installing approved applications) without granting full admin rights."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.6 Manage Endpoint Privilege Management",
    difficulty: "intermediate",
    question: "In EPM, what is an 'elevation rule'?",
    options: [
      "A rule that determines which floor of a building a device can be used on",
      "A policy that defines which applications or tasks standard users can run with elevated (admin) privileges",
      "A firewall rule for elevated network traffic",
      "A rule that elevates a user to Global Admin"
    ],
    answer: 1,
    explanation: "Elevation rules in EPM specify which executables or processes a standard user can run with elevated privileges, including conditions like file hash, certificate, or file path."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.6 Manage Endpoint Privilege Management",
    difficulty: "advanced",
    question: "You are deploying EPM. You need to ensure that only a specific digitally signed application can be elevated, and users must provide a business justification before elevation. How should you configure the elevation rule?",
    options: [
      "Create a rule based on file name only with automatic elevation",
      "Create a rule using the certificate (publisher) identification, set the elevation type to 'user confirmed', and require a business justification",
      "Allow all applications to be elevated automatically",
      "Block all elevations and use admin accounts instead"
    ],
    answer: 1,
    explanation: "Using certificate-based identification is more secure than file name/path. Setting 'user confirmed' with a business justification requirement ensures users consciously acknowledge the elevation and provide a reason."
  },

  // ═══════════════════════════════════════════════════════════════
  // DOMAIN 4: Manage Applications (10–15%)
  // ═══════════════════════════════════════════════════════════════

  // --- 4.1 Deploy and Update Apps ---

  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "basic",
    question: "Which app type in Intune is used to deploy traditional desktop applications packaged as .exe or .msi files?",
    options: [
      "Web app",
      "Win32 app",
      "Managed Google Play app",
      "iOS store app"
    ],
    answer: 1,
    explanation: "Win32 apps in Intune handle traditional .exe and .msi installers (packaged as .intunewin files using the Content Prep Tool) for deployment to Windows devices."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "basic",
    question: "What is the difference between 'Required' and 'Available' app assignments in Intune?",
    options: [
      "Required apps are optional; Available apps are mandatory",
      "Required apps are automatically installed; Available apps appear in the Company Portal for users to install voluntarily",
      "There is no difference",
      "Available apps are installed first, then Required apps"
    ],
    answer: 1,
    explanation: "Required apps are automatically installed without user intervention. Available apps are published to the Company Portal, and users can choose whether to install them."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "intermediate",
    question: "You need to deploy a Win32 app via Intune. What tool must you use to prepare the app package?",
    options: [
      "7-Zip",
      "Microsoft Win32 Content Prep Tool (IntuneWinAppUtil.exe)",
      "Windows Configuration Designer",
      "MDT Deployment Workbench"
    ],
    answer: 1,
    explanation: "The Microsoft Win32 Content Prep Tool converts your app installer (and any supporting files) into the .intunewin format required by Intune for Win32 app deployment."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "intermediate",
    question: "How do you deploy apps to Android Enterprise devices from Intune?",
    options: [
      "Sideload APK files directly",
      "Approve and sync apps from Managed Google Play, then assign them in Intune",
      "Email the APK to users",
      "Use the Microsoft Store"
    ],
    answer: 1,
    explanation: "For Android Enterprise, apps are approved in the Managed Google Play store, synced to Intune, and then assigned to user or device groups for deployment."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "intermediate",
    question: "You are deploying Microsoft 365 Apps using Intune. Where do you configure the deployment?",
    options: [
      "Devices > Configuration profiles",
      "Apps > All apps > Add > Microsoft 365 Apps (Windows 10 and later)",
      "Endpoint security > Antivirus",
      "Tenant administration > Connectors"
    ],
    answer: 1,
    explanation: "Microsoft 365 Apps are deployed through Apps > All apps > Add, selecting 'Microsoft 365 Apps' as the app type, then configuring the apps suite, update channel, and assignment."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "advanced",
    question: "A Win32 app deployment shows 'Install pending' for several hours on target devices. What should you investigate?",
    options: [
      "The Company Portal is not installed on the devices",
      "Check the Intune Management Extension logs on the device (IntuneManagementExtension.log), verify network connectivity, and ensure the detection rules are correctly configured",
      "Restart the Intune service in the admin center",
      "Uninstall and re-enroll the devices"
    ],
    answer: 1,
    explanation: "Win32 app installations are handled by the Intune Management Extension. Checking its logs reveals download/install errors. Common issues include detection rule mismatches, network problems, or install command errors."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "advanced",
    question: "You deploy a Win32 app with a detection rule based on MSI product code. The app installs successfully, but Intune reports it as 'Not installed'. What is the most likely cause?",
    options: [
      "The device is not connected to the internet",
      "The detection rule (MSI product code or version) does not match the installed application's actual product code or version",
      "The user declined the installation",
      "The app requires a restart that hasn't happened yet"
    ],
    answer: 1,
    explanation: "If the detection rule doesn't match what's actually installed (wrong product code, wrong version comparison), Intune cannot detect the app and reports it as not installed even though it is."
  },

  // --- 4.2 Plan and Implement App Protection and App Configuration Policies ---

  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "basic",
    question: "What is an App Protection Policy (APP) in Intune?",
    options: [
      "A policy that prevents apps from being installed",
      "A policy that protects corporate data within apps by controlling data transfer, requiring PINs, and preventing copy/paste to unmanaged apps",
      "A policy that updates apps automatically",
      "A policy that configures app appearance and themes"
    ],
    answer: 1,
    explanation: "App Protection Policies (also called MAM policies) protect corporate data at the app level by controlling how data is accessed, shared, and stored within managed apps."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "basic",
    question: "Do App Protection Policies require device enrollment in Intune?",
    options: [
      "Yes, the device must be fully enrolled",
      "No, App Protection Policies can be applied to apps on unenrolled (unmanaged) devices",
      "Only Android devices need enrollment",
      "Only iOS devices need enrollment"
    ],
    answer: 1,
    explanation: "App Protection Policies (MAM without enrollment) can protect corporate data in apps on devices that are not enrolled in Intune, making them ideal for BYOD scenarios."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "intermediate",
    question: "You create an App Protection Policy for Outlook on iOS. You configure 'Prevent Save As to personal storage'. What does this do?",
    options: [
      "It prevents Outlook from saving any attachments anywhere",
      "It prevents users from saving corporate email attachments to personal storage locations like personal OneDrive or iCloud, while allowing saves to managed locations",
      "It disables the Outlook app entirely",
      "It requires users to sign in again"
    ],
    answer: 1,
    explanation: "The 'Prevent Save As' setting in APP restricts where corporate data can be saved, blocking personal/unmanaged locations while allowing managed corporate storage."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "intermediate",
    question: "What is the difference between an App Protection Policy and an App Configuration Policy?",
    options: [
      "They are the same thing",
      "App Protection Policies secure data within apps; App Configuration Policies push settings/configurations to apps (e.g., server URLs, default settings)",
      "App Configuration Policies are only for Android",
      "App Protection Policies are only for iOS"
    ],
    answer: 1,
    explanation: "APP protects data (DLP controls). App Configuration Policies push settings to apps, like email server addresses, default behaviors, or feature toggles — they don't enforce data protection."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "advanced",
    question: "You configure an App Protection Policy with the setting 'Wipe corporate data after 90 days of offline access'. A user's device is offline for 91 days. What happens when the device comes back online?",
    options: [
      "Nothing happens; the policy only applies while online",
      "The corporate data within the managed app is selectively wiped; the app itself and personal data remain intact",
      "The entire device is factory-reset",
      "The user is permanently blocked from the app"
    ],
    answer: 1,
    explanation: "The selective wipe removes only corporate data from the managed app. The app remains installed and personal data is untouched. The user can re-authenticate to access corporate data again."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "advanced",
    question: "You have a Conditional Access policy that requires an app protection policy. A user tries to access Exchange Online from a non-managed app on their personal phone. What happens?",
    options: [
      "Access is granted normally",
      "The user is blocked and prompted to use a managed app that supports app protection policies (like Outlook)",
      "The device is enrolled in Intune automatically",
      "The user receives an email asking them to install the Company Portal"
    ],
    answer: 1,
    explanation: "When Conditional Access requires an app protection policy, only apps that support and have an active APP can access the resource. Users are redirected to use a managed app like Outlook."
  },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL VARIETY QUESTIONS (Extra complexity per objective)
  // ═══════════════════════════════════════════════════════════════

  // Extra Domain 1 questions

  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.1 Prepare for a Windows Client Deployment",
    difficulty: "basic",
    question: "Which Windows edition is typically NOT available for enterprise deployment via volume licensing?",
    options: [
      "Windows Enterprise",
      "Windows Education",
      "Windows Home",
      "Windows Pro"
    ],
    answer: 2,
    explanation: "Windows Home is a consumer edition not available through volume licensing. Enterprise, Education, and Pro are available through volume licensing channels."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.2 Plan and Implement Windows Autopilot",
    difficulty: "intermediate",
    question: "Which of the following is a prerequisite for Windows Autopilot deployment?",
    options: [
      "Devices must be running Windows Server",
      "Devices must have an active internet connection and be registered in the Autopilot service",
      "Devices must be domain-joined to on-premises AD before Autopilot",
      "Users must have local admin rights"
    ],
    answer: 1,
    explanation: "Autopilot requires internet connectivity during OOBE to contact the Autopilot service, and devices must be registered (via hardware hash) in the Autopilot service."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.3 Plan and Implement MDT Deployment",
    difficulty: "basic",
    question: "MDT uses which type of file to store the Windows operating system image?",
    options: [
      ".iso file",
      ".wim file",
      ".vhd file only",
      ".exe file"
    ],
    answer: 1,
    explanation: "MDT uses WIM (Windows Imaging) files (.wim) to store the operating system image for deployment."
  },
  {
    domain: "Domain 1: Deploy Windows Client",
    objective: "1.4 Configure Remote Management",
    difficulty: "intermediate",
    question: "Remote Help in Intune supports which of the following capabilities?",
    options: [
      "View-only mode and full control mode with user consent",
      "Unattended access without any user interaction",
      "File transfer between devices only",
      "Remote BIOS configuration"
    ],
    answer: 0,
    explanation: "Remote Help supports view-only mode and full control mode. Both require the end user's consent, and the help desk technician must be authenticated with appropriate RBAC permissions."
  },

  // Extra Domain 2 questions

  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "basic",
    question: "What are the three types of device identity states in Microsoft Entra ID?",
    options: [
      "Enrolled, Unenrolled, Blocked",
      "Registered, Entra Joined, Hybrid Entra Joined",
      "Active, Inactive, Suspended",
      "Compliant, Non-compliant, Unknown"
    ],
    answer: 1,
    explanation: "Devices can be Entra Registered (typically BYOD), Entra Joined (cloud-only corporate), or Hybrid Entra Joined (joined to both on-premises AD and Entra ID)."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.1 Manage Identity",
    difficulty: "intermediate",
    question: "Which RBAC role in Intune allows a technician to perform remote actions on devices (like restart and wipe) but NOT modify policies?",
    options: [
      "Intune Administrator",
      "Help Desk Operator (built-in role)",
      "Global Administrator",
      "Compliance Administrator"
    ],
    answer: 1,
    explanation: "The Help Desk Operator built-in role provides permissions to perform remote tasks and view device/user info but does not allow creating or modifying policies or profiles."
  },
  {
    domain: "Domain 2: Manage Identity and Compliance",
    objective: "2.2 Implement Compliance Policies",
    difficulty: "intermediate",
    question: "You want to notify users by email 3 days before their device is marked as non-compliant. How do you configure this?",
    options: [
      "Create a Power Automate flow",
      "Configure 'Actions for non-compliance' in the compliance policy with a notification template and schedule",
      "Set up a manual email reminder process",
      "Use Conditional Access to send emails"
    ],
    answer: 1,
    explanation: "In compliance policies, 'Actions for non-compliance' allow you to configure email notifications to users using message templates, with scheduling before the device is marked non-compliant."
  },

  // Extra Domain 3 questions

  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.1 Manage the Device Lifecycle in Intune",
    difficulty: "advanced",
    question: "What is the difference between 'Delete' and 'Retire' for a device in Intune?",
    options: [
      "They are the same action",
      "Delete removes the device record from Intune entirely; Retire removes corporate data/management but the device record remains until cleaned up",
      "Retire deletes the device record; Delete removes corporate data",
      "Delete is for Windows only; Retire is for all platforms"
    ],
    answer: 1,
    explanation: "Delete removes the device record from the Intune console. Retire sends a command to the device to remove corporate data and management profiles. They serve different purposes."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.2 Manage Device Configuration",
    difficulty: "basic",
    question: "What is the 'Settings Catalog' in Intune?",
    options: [
      "A physical catalog of Microsoft hardware",
      "A comprehensive list of all available device settings that can be individually selected and configured in a profile",
      "A list of available apps in the Microsoft Store",
      "A backup catalog of device configurations"
    ],
    answer: 1,
    explanation: "The Settings Catalog in Intune provides a granular, searchable list of all available settings across platforms, allowing you to pick individual settings to configure in a profile."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.4 Manage Device Updates",
    difficulty: "intermediate",
    question: "What is the purpose of a 'Feature Update' policy in Intune (as opposed to an Update Ring)?",
    options: [
      "Feature Update policies and Update Rings are identical",
      "Feature Update policies target a specific Windows version to deploy or hold devices at; Update Rings control the timing and behavior of updates",
      "Feature Update policies are for quality updates; Update Rings are for feature updates",
      "Feature Update policies only apply to macOS"
    ],
    answer: 1,
    explanation: "Feature Update policies specify which version of Windows to deploy (e.g., 23H2). Update Rings control deferral periods, maintenance windows, and update experience settings."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.5 Implement Endpoint Protection",
    difficulty: "intermediate",
    question: "What is the Microsoft Defender Vulnerability Management dashboard used for?",
    options: [
      "Deploying antivirus definitions",
      "Identifying, assessing, and remediating vulnerabilities and misconfigurations across endpoints",
      "Configuring firewall rules",
      "Managing user passwords"
    ],
    answer: 1,
    explanation: "The Defender Vulnerability Management dashboard provides visibility into software vulnerabilities, security misconfigurations, and remediation recommendations across your endpoint estate."
  },
  {
    domain: "Domain 3: Manage, Maintain, and Protect Devices",
    objective: "3.3 Monitor Devices",
    difficulty: "basic",
    question: "What is Adoption Score (previously Productivity Score) used for?",
    options: [
      "Measuring network bandwidth",
      "Providing insights into how the organization uses Microsoft 365 products and the technology experiences supporting them",
      "Scoring device hardware quality",
      "Rating user satisfaction with IT support"
    ],
    answer: 1,
    explanation: "Adoption Score provides insights into the organization's digital transformation journey across people experiences (how people use M365) and technology experiences (endpoint, network)."
  },

  // Extra Domain 4 questions

  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "basic",
    question: "What is the Company Portal in Intune?",
    options: [
      "A web browser",
      "An app/website where users can enroll devices, install available apps, and get IT support information",
      "An admin console for managing policies",
      "A cloud storage service"
    ],
    answer: 1,
    explanation: "The Company Portal (available as an app and website) is the user-facing interface for Intune, where users enroll devices, browse/install available apps, and find IT help."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "advanced",
    question: "You need to deploy a macOS LOB app via Intune. What file format should the app be packaged in?",
    options: [
      ".msi",
      ".intunewin",
      ".pkg or .dmg",
      ".apk"
    ],
    answer: 2,
    explanation: "macOS line-of-business apps are deployed via Intune using .pkg or .dmg file formats. .msi and .intunewin are for Windows; .apk is for Android."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.2 App Protection and App Configuration Policies",
    difficulty: "intermediate",
    question: "You configure an App Protection Policy for Microsoft Teams on Android. You set 'Minimum app version: 1.0.0.2024'. A user has version 1.0.0.2023 installed. What happens?",
    options: [
      "The app continues to work normally",
      "The user is warned or blocked from accessing corporate data until the app is updated, depending on the configured action",
      "The device is wiped",
      "The policy is ignored"
    ],
    answer: 1,
    explanation: "When the app version doesn't meet the minimum requirement defined in the APP, the configured action is enforced — either warn the user or block access until the app is updated."
  },
  {
    domain: "Domain 4: Manage Applications",
    objective: "4.1 Deploy and Update Apps",
    difficulty: "intermediate",
    question: "What is the Microsoft 365 Apps admin center used for?",
    options: [
      "Managing Intune device enrollment",
      "Managing and monitoring Microsoft 365 Apps deployments, update channels, servicing profiles, and inventory across the organization",
      "Creating compliance policies",
      "Configuring Windows Autopilot"
    ],
    answer: 1,
    explanation: "The Microsoft 365 Apps admin center (config.office.com) provides tools for managing M365 Apps deployments, update channels, servicing profiles, and monitoring the health of Office installations."
  }
];

// Export for use in quiz app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizQuestions };
}
