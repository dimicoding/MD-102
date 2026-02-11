# MD-102: Endpoint Administrator — 2026 Exam Study Guide

A simplified, plain-language summary of every objective on the **MD-102 Endpoint Administrator** exam (2026 refresh). Use this as a quick-reference companion while you study.

---

## Domain 1: Prepare Infrastructure for Devices (25-30%)

### 1.1 Plan a device deployment

| Topic | What you need to know |
|---|---|
| **Assess deployment readiness** | Evaluate existing hardware, OS versions, and network capacity before rolling out new devices or OS upgrades. Use tools like **Endpoint Analytics** and **Readiness reports** in Intune to find blockers. |
| **Choose a deployment method** | Know the differences between **Windows Autopilot**, **Provisioning Packages (PPKG)**, **in-place upgrade**, **wipe-and-load (clean install)**, and **subscription activation**. Pick the right one for the scenario (new hardware, refresh, BYOD, shared device, etc.). |
| **Plan for Autopilot** | Understand Autopilot profiles (user-driven, self-deploying, pre-provisioned / "white-glove"), hardware hash registration, the Deployment Service, and how Autopilot ties into Entra ID (Azure AD) join. |
| **Plan for co-management** | Know how to run **Configuration Manager (MECM/SCCM)** and **Intune** side-by-side via co-management. Understand workload sliders, prerequisites (Entra hybrid join, cloud-attach), and migration path to cloud-native. |

### 1.2 Manage device identities

| Topic | What you need to know |
|---|---|
| **Entra ID join types** | Distinguish **Entra ID joined** (cloud-only), **Entra hybrid joined** (domain + cloud), and **Entra ID registered** (BYOD / personal). Know when each is appropriate. |
| **Device registration** | Understand how devices register with Entra ID automatically (via Intune enrollment, GPO, or Autopilot) and the impact on Conditional Access. |
| **Device identity lifecycle** | Plan for stale/orphaned device objects, device writeback, and cleanup policies. |
| **Local admin management** | Configure **Windows LAPS** (Local Administrator Password Solution) through Intune or Entra ID to rotate and store local admin passwords. |

### 1.3 Plan device enrollment

| Topic | What you need to know |
|---|---|
| **Enrollment options for Windows** | Automatic enrollment via GPO or Entra ID join, bulk enrollment with provisioning packages, Autopilot enrollment, co-management enrollment. |
| **Enrollment options for iOS/iPadOS** | Apple Business Manager / Apple School Manager, Automated Device Enrollment (DEP successor), user enrollment (BYOD), and Company Portal. |
| **Enrollment options for Android** | Android Enterprise (work profile, fully managed, dedicated/kiosk), AOSP, and legacy device admin (deprecated). |
| **Enrollment options for macOS** | Automated Device Enrollment via Apple Business Manager, direct enrollment, user-initiated enrollment with Company Portal. |
| **Enrollment options for Linux** | Entra ID registration for Linux desktops; Intune management for Linux (Ubuntu) via Microsoft Edge-based enrollment. |
| **Enrollment restrictions** | Set platform restrictions, device limit restrictions, and device type restrictions in Intune to control who/what can enroll. |

### 1.4 Configure device profiles and policies at scale

| Topic | What you need to know |
|---|---|
| **Configuration profiles** | Create and assign profiles for Wi-Fi, VPN, certificates (SCEP/PKCS), email, device restrictions, and custom OMA-URI/CSP settings. |
| **Settings Catalog** | Use the Intune Settings Catalog for granular, searchable policy settings that replace many older template-based profiles. |
| **Group Policy Analytics** | Import on-prem GPOs into Intune's Group Policy Analytics to see which settings have MDM equivalents and plan migration. |
| **Filters & scope tags** | Use Intune assignment filters (by device property) and scope tags (for RBAC delegation) to target policies accurately. |
| **Policy sets & platform scripts** | Bundle related profiles, apps, and compliance policies into Policy Sets. Use PowerShell scripts (Windows) or shell scripts (macOS/Linux) for advanced config. |
| **Remediation scripts (Proactive remediations)** | Deploy detection + remediation script pairs to automatically find and fix configuration drift on endpoints. |

---

## Domain 2: Manage and Maintain Devices (30-35%)

### 2.1 Manage the device lifecycle

| Topic | What you need to know |
|---|---|
| **Enrollment to retirement** | Understand the full lifecycle: Enroll -> Configure -> Protect -> Monitor -> Retire/Wipe. |
| **Remote actions** | Know the Intune remote actions: **Wipe** (factory reset), **Retire** (remove company data only), **Fresh Start**, **Autopilot Reset**, **Remote Lock**, **Restart**, **Rename**, **Sync**, **Collect diagnostics**. |
| **Bulk device actions** | Perform actions on multiple devices at once (bulk retire, bulk wipe, etc.) via Intune portal or Graph API. |
| **Device categories & groups** | Use device categories at enrollment to auto-sort devices into dynamic Entra ID groups for targeted policy assignment. |
| **Inventory & reporting** | Use Intune hardware/software inventory, discovered apps, and built-in/custom reports (via Log Analytics or the Intune Data Warehouse). |

### 2.2 Manage device configuration updates

| Topic | What you need to know |
|---|---|
| **Windows Update for Business (WUfB)** | Configure update rings in Intune to control deferral periods, deadlines, and active hours for quality and feature updates. |
| **Feature update policies** | Pin a specific Windows feature update version to devices so they upgrade (or stay) at a chosen release. |
| **Driver update management** | Use Intune's driver update policies (via Windows Update for Business) to approve and deploy driver/firmware updates. |
| **Expedite updates** | Use the "Expedite quality updates" policy to push critical security patches faster than the normal deferral schedule. |
| **Windows Update reports** | Monitor update compliance via **Windows Update for Business reports** (requires Log Analytics workspace) and Intune's built-in update reports. |
| **macOS & iOS updates** | Manage Apple OS updates through Intune update policies (deferral, enforcement). |

### 2.3 Monitor devices

| Topic | What you need to know |
|---|---|
| **Endpoint Analytics** | Measures startup performance, application reliability, and recommended software to quantify end-user experience. |
| **Intune reports** | Use device compliance, device configuration, and app install status reports. Know how to export and schedule reports. |
| **Log Analytics / Azure Monitor** | Send Intune diagnostic data to a Log Analytics workspace for advanced KQL queries and alerting. |
| **Audit logs & operational logs** | Review who changed what in Intune (audit) and enrollment/policy delivery events (operational). |
| **Tenant attach & CMPivot** | If co-managing, use tenant attach to see ConfigMgr-managed devices in the Intune portal and run CMPivot real-time queries. |
| **Remote Help** | Provide helpdesk support using Intune Remote Help (cloud-based remote assistance). |

### 2.4 Manage device compliance

| Topic | What you need to know |
|---|---|
| **Compliance policies** | Define rules a device must meet (OS version, encryption, password complexity, no jailbreak/root, threat level). Non-compliant devices can be blocked via Conditional Access. |
| **Compliance policy settings** | Configure the "mark devices with no compliance policy" default, grace periods, and notification actions (email user, remotely lock, retire). |
| **Custom compliance (scripts)** | Use custom compliance scripts (JSON + detection script) for settings not covered by built-in policies. |
| **Conditional Access integration** | Combine compliance state with **Entra Conditional Access** to gate access to Microsoft 365, LOB apps, and corporate resources. Understand "Require device to be marked as compliant" grant control. |
| **Partner compliance (third-party)** | Know that third-party MTD (Mobile Threat Defense) partners can feed risk signals into Intune compliance. |

---

## Domain 3: Manage Applications (15-20%)

### 3.1 Deploy and update applications

| Topic | What you need to know |
|---|---|
| **App types in Intune** | Microsoft Store apps (new), Win32 apps (.intunewin), LOB apps (.msi, .appx/.msix), web links/clips, managed Google Play, Apple VPP apps, macOS DMG/PKG. |
| **Win32 app deployment** | Package with **Microsoft Win32 Content Prep Tool**, define install/uninstall commands, detection rules (file, registry, or custom script), requirement rules, and dependencies/supersedence. |
| **Microsoft 365 Apps deployment** | Deploy Microsoft 365 Apps via Intune's built-in Office suite profile. Configure update channel, included apps, and languages. |
| **App assignment types** | **Required** (auto-install), **Available** (user chooses from Company Portal), and **Uninstall** (force remove). |
| **App supersedence & dependency** | Supersedence replaces an older app with a newer one. Dependency ensures prerequisite apps install first. |
| **App update strategies** | Keep apps current using Microsoft Store auto-update, Win32 supersedence, or patching through third-party tools integrated with Intune. |
| **Apple VPP / ABM apps** | Use volume-purchased app tokens synced to Intune for licensed iOS/macOS app distribution. |
| **Managed Google Play** | Approve and deploy Android Enterprise apps through the managed Google Play store in Intune. |

### 3.2 Plan and implement app protection

| Topic | What you need to know |
|---|---|
| **App Protection Policies (APP/MAM)** | Control cut/copy/paste, save-as, and screen capture within managed apps — **without requiring device enrollment**. Works with Office, Edge, and SDK-integrated apps. |
| **MAM for Windows** | Microsoft MAM on Windows (via Edge and Office) to protect data on unmanaged personal PCs. |
| **Data transfer restrictions** | Restrict data movement between managed and unmanaged apps (e.g., block copy from Outlook to a personal app). |
| **Conditional launch settings** | Block or wipe app data based on conditions: min OS version, jailbreak/root detection, max offline interval, max sign-in failures. |
| **Selective wipe** | Remove only corporate data from managed apps (not the entire device). |
| **App configuration policies** | Push configuration key-value pairs to apps (e.g., set default email server, enable SSO). Separate types for managed devices vs. managed apps. |

### 3.3 Monitor and troubleshoot applications

| Topic | What you need to know |
|---|---|
| **App install status** | Check per-device and per-user install status in the Intune portal to find failures. |
| **Discovered apps** | Review the list of apps Intune has inventoried on managed devices; useful for shadow-IT detection. |
| **App protection reports** | View user and app status for App Protection Policies to see which users are protected and which are blocked. |
| **Intune troubleshooting blade** | Use the Troubleshooting + Support blade (by user) to see app assignment and delivery status. |
| **Client-side logs** | Collect IME (Intune Management Extension) logs on Windows (`C:\ProgramData\Microsoft\IntuneManagementExtension\Logs`) for Win32 app troubleshooting. |

---

## Domain 4: Protect Devices (15-20%)

### 4.1 Plan and implement device security

| Topic | What you need to know |
|---|---|
| **Security baselines** | Deploy Microsoft-recommended security settings as a baseline profile in Intune (Windows, Edge, Defender for Endpoint, Microsoft 365 Apps). |
| **Endpoint security policies** | Configure dedicated Endpoint Security node policies: Antivirus, Disk Encryption, Firewall, EDR (Endpoint Detection and Response), Attack Surface Reduction, Account Protection. |
| **BitLocker / device encryption** | Enforce BitLocker on Windows (including silent encryption), escrow recovery keys to Entra ID, and manage FileVault on macOS. |
| **Windows Firewall rules** | Deploy firewall rules via Intune endpoint security profiles or imported from existing GPO/WFAS exports. |
| **Credential Guard** | Enable Windows Credential Guard to protect NTLM hashes and Kerberos tickets using virtualization-based security (VBS). |
| **LAPS** | Manage local admin passwords via **Windows LAPS** backed by Entra ID or on-prem AD; rotate and retrieve passwords through the portal. |

### 4.2 Manage Microsoft Defender

| Topic | What you need to know |
|---|---|
| **Microsoft Defender Antivirus** | Configure real-time protection, cloud-delivered protection, automatic sample submission, exclusions, and scheduled scans via Intune antivirus policy. |
| **Microsoft Defender for Endpoint (MDE)** | Onboard devices to MDE for advanced threat detection, automated investigation, and threat & vulnerability management. Use Intune's EDR policy for onboarding. |
| **Attack Surface Reduction (ASR) rules** | Enable ASR rules to block common attack vectors (Office macros creating child processes, credential stealing from LSASS, etc.). Test in audit mode first. |
| **Exploit protection** | Configure system-level and app-level exploit mitigations (DEP, ASLR, etc.) through Intune. |
| **Tamper protection** | Prevent users or malware from disabling Defender protections. Managed through the Microsoft 365 Defender portal or Intune. |
| **Web protection & network protection** | Block malicious URLs (web protection) and extend SmartScreen to non-browser network traffic (network protection). |
| **Security Management for MDE** | Manage security settings on devices that are not enrolled in Intune by using MDE's built-in management channel ("MDE-attach"). |

### 4.3 Manage Conditional Access and compliance for security

| Topic | What you need to know |
|---|---|
| **Conditional Access policies** | Build policies in Entra ID that evaluate signals (user, device, location, risk, app) and enforce controls (require MFA, require compliant device, block). |
| **Require compliant device** | The key grant control that checks Intune compliance status before allowing access to cloud resources. |
| **Require approved/protected app** | Grant controls that require users to use Intune-managed or MAM-protected applications on mobile. |
| **Sign-in risk & device risk** | Integrate **Entra ID Protection** risk levels and **MDE** device risk levels into Conditional Access decisions. |
| **Named locations & terms of use** | Define trusted IP ranges (named locations) and attach Terms of Use to Conditional Access for legal/compliance needs. |
| **Report-only mode** | Test Conditional Access policies in report-only mode before enforcement to avoid lockouts. |
| **Continuous Access Evaluation (CAE)** | Near-real-time enforcement of policy changes and token revocation for supported workloads (Exchange, SharePoint, Teams). |

---

## Quick-Reference: Key Tools and Portals

| Tool / Portal | Purpose |
|---|---|
| **Microsoft Intune admin center** (`intune.microsoft.com`) | Central hub for device management, compliance, apps, endpoint security, and reports. |
| **Entra admin center** (`entra.microsoft.com`) | Identity management — users, groups, Conditional Access, device registration. |
| **Microsoft 365 Defender portal** (`security.microsoft.com`) | Threat detection, MDE onboarding, ASR, vulnerability management. |
| **Configuration Manager (MECM)** | On-prem device management; co-management bridge to Intune. |
| **Apple Business Manager** | Register Apple devices for Automated Device Enrollment; manage VPP app licenses. |
| **Managed Google Play** | Approve and distribute Android Enterprise apps. |
| **Windows Autopilot** | Zero-touch provisioning for new Windows devices. |
| **Endpoint Analytics** | User-experience and device-performance scoring. |

---

## Study Tips

1. **Hands-on labs** — Spin up a free Microsoft 365 developer tenant and Intune trial. Walk through Autopilot, compliance policies, app deployment, and Conditional Access firsthand.
2. **Focus on Intune + Entra ID integration** — Most scenario questions test how compliance, Conditional Access, and device identity work together.
3. **Know the "which tool" questions** — Be clear on when to use the Intune portal vs. the Defender portal vs. the Entra portal for a given task.
4. **Understand platform differences** — The exam covers Windows, iOS/iPadOS, Android Enterprise, macOS, and Linux. Know enrollment and management differences per platform.
5. **Scenarios over memorization** — Microsoft exams favor "what would you do" questions. Practice mapping a business requirement to the right feature/policy.

---

*Good luck with your MD-102 exam!*
