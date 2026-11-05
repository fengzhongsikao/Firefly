---
title: Linux 发行版四大系列
published: 2026-08-31
updated: 2026-11-05
description: '按包管理把常见 Linux 发行版分成 Debian、红帽、SUSE、Arch 四大系列'
image: ''
tags: [linux]
category: 'linux生存日记'
draft: false
lang: ''
slug: linux
---

> 常见发行版按包管理分成四大系列。同一系列的安装命令大体通用；换了系列，教程里的 `apt`、`dnf`、`zypper`、`pacman` 就要跟着换。

## 四大系列速览

| 系列 | 包管理 | 性格 | 典型场景 |
| --- | --- | --- | --- |
| 一、Debian | apt / dpkg | 稳定、软件多 | 桌面、服务器、公有云 |
| 二、红帽 | dnf / rpm | 上游求新，下游企业级 | 桌面开发、生产服务器 |
| 三、SUSE | zypper / rpm | 欧洲企业市场，配置用 YaST | 企业服务器、滚动桌面 |
| 四、Arch | pacman | 滚动更新、自己动手 | 桌面、进阶玩家 |

各系常见成员：

- **Debian 系**：Debian、Ubuntu、Linux Mint、Pop!_OS、Zorin OS、elementary OS、KDE neon、Lingmo OS、Deepin、Raspberry Pi OS、Kali、Tails、Proxmox、MX Linux、Q4OS、antiX、Parrot、openKylin、Linux Lite、Puppy、Vanilla OS、Whonix
- **红帽系**：Fedora、CentOS Stream、红帽企业版、Rocky Linux、AlmaLinux、Oracle Linux、龙蜥 Anolis、Qubes OS、Nobara、Bazzite、RakuOS
- **SUSE 系**：openSUSE Leap、openSUSE Tumbleweed、SLES、GeckoLinux
- **Arch 系**：Arch Linux、Manjaro、EndeavourOS、Garuda、CachyOS、SteamOS、CatOS、BlackArch、Artix、Omarchy

---

## 一、Debian 系列

包管理用 apt / dpkg。Debian 和 Ubuntu 的教程，这一系的系统大多能用。

```text
Debian
├─ Ubuntu ─┬─ Linux Mint
│          ├─ Pop!_OS
│          ├─ Zorin OS
│          ├─ elementary OS
│          ├─ KDE neon
│          ├─ Lingmo OS
│          └─ 优麒麟（官方中文衍生）
├─ Raspberry Pi OS
├─ Kali Linux
├─ Tails
├─ Deepin → 统信 UOS、GXDE OS
├─ Proxmox VE
├─ MX Linux、antiX、Q4OS
├─ Parrot OS
├─ openKylin
├─ Linux Lite、Puppy Linux、Vanilla OS、Whonix
└─ Rhino Linux、Nitrux、PikaOS、TUXEDO OS、AnduinOS
```

### Debian

这一系的源头。稳定、保守，软件偏旧，但经过长时间测试。

- 不预装一堆应用，适合服务器和想要干净系统的桌面
- 稳定版几年才升级一次大版本
- 想要新软件，用测试版，或者改用下面的衍生版

### Ubuntu

基于 Debian。预装驱动、浏览器和常用软件，桌面拿来就能用，也是公有云上最常见的默认镜像。

- 长期支持版（LTS）两年一发，适合当日常系统；普通版半年一发，软件更新
- 同一套系统换桌面：Kubuntu（KDE）、Xubuntu（Xfce）、Lubuntu（LXQt）
- 优麒麟（Ubuntu Kylin）是官方中文衍生，不要和银河麒麟、开放麒麟当成同一个系统

### Linux Mint

基于 Ubuntu LTS，对从 Windows 过来的人最友好。

- 默认 Cinnamon 桌面，操作逻辑接近 Windows
- 预装多媒体解码，日常更新比 Ubuntu 更保守
- 适合办公、影音、轻度开发
- 另有 LMDE，直接基于 Debian，不经过 Ubuntu

### Pop!_OS

基于 Ubuntu，System76 维护。单独提供 NVIDIA 镜像，桌面用自研的 COSMIC。适合游戏和开发。

### Zorin OS

基于 Ubuntu，界面可以仿 Windows 或 macOS。预装办公软件，适合想少配置的新手。

### elementary OS

基于 Ubuntu LTS，桌面是自研的 Pantheon，风格接近 macOS。界面统一，软件商店管得比较严，适合少折腾的桌面。

### KDE neon

KDE 官方出的系统。底层是 Ubuntu LTS，Plasma 桌面保持最新。适合想用新 KDE、又不想让整套系统一起滚动的人。

### Lingmo OS

> 官网：<https://lingmo.org/zh-CN>

基于 Debian/Ubuntu 的国产桌面发行版，视觉风格接近 macOS。

- 自研 Lingmo 桌面环境（LDE），基于 Qt6/C++ 与 Wayland
- 以 Dock 程序坞为核心，搭配顶栏、圆角窗口、半透明特效
- 安装镜像约 2GB，内存占用低，适合低性能硬件
- 兼容 Debian/Ubuntu 软件仓库，同时支持 Flatpak、Snap
- 中文本地化比较完整，也有龙芯 loong64 等架构
- 滚动更新，最新版本为 Lingmo OS 2025

> 项目仍较年轻，偶有粗糙之处，适合尝鲜和参与贡献。

### Deepin

国产桌面发行版，界面和自家应用是它的特点。社区版可以免费安装。统信 UOS 是面向政企的商业版。

### Raspberry Pi OS

树莓派官方系统，基于 Debian。分桌面版和精简版。在树莓派上优先用它，固件和配置工具是配套的。

### Kali Linux

基于 Debian 的渗透测试系统，预装大量安全工具。用来打靶和做安全实验，不适合当日常桌面或服务器。另有偏向防御的 Kali Purple。Parrot OS 也基于 Debian，有渗透工具，同时提供能当日常用的桌面版。

### Tails

基于 Debian 的活系统。从 U 盘启动，关机后不在这台电脑上留记录，上网走 Tor。适合在别人的电脑上临时匿名使用。

### Proxmox VE

基于 Debian 的虚拟化系统。装在物理机上，用浏览器管理 KVM 虚拟机和 LXC 容器。家用服务器和小型机房很常见。企业更新仓库要订阅，社区仓库免费。

### MX Linux

基于 Debian 稳定版，默认 Xfce，自带图形化的软件、驱动和快照工具。硬件要求低，适合旧电脑。

### antiX

基于 Debian，默认不用 systemd。系统很轻，适合旧电脑。MX Linux 和它是同一批人在维护。

### Q4OS

基于 Debian 稳定版，面向从 Windows 过来的人和旧电脑。默认桌面是 Trinity（KDE 3 的延续），外观接近 Windows，也可以选 KDE Plasma。安装比较简单，还能在 Windows 里直接装成双系统。

### openKylin

开放麒麟，国产桌面社区发行版，包管理走 Debian 系，侧重中文环境和国产硬件。它不是优麒麟，也不是银河麒麟。

### Linux Lite

基于 Ubuntu LTS，面向旧电脑和从 Windows 过来的人。预装软件少，桌面用 Xfce。

### Puppy Linux

可以装进 U 盘随身跑的超轻量系统，内存占用很低。常见版本基于 Ubuntu。EasyOS 从它发展而来，用容器隔开应用。

### Vanilla OS

不可变桌面。系统本体只读，其他发行版的软件放在容器里跑。现在基于 Debian。

### Whonix

基于 Debian 的隐私系统。工作系统和负责联网的系统分成两台虚拟机，流量走 Tor。

### Rhino Linux

把 Ubuntu 做成滚动更新，用自己的包管理命令安装软件。

### Nitrux

基于 Ubuntu 的不可变桌面，自带 NX 桌面。

### PikaOS

基于 Debian 测试版，面向游戏，驱动和游戏相关组件预装得比较全。

### TUXEDO OS

德国电脑厂商 TUXEDO 基于 Ubuntu 做的桌面，主要给自己的笔记本用，KDE 体验比较完整。

### AnduinOS

基于 Ubuntu，外观接近 Windows 11。

### 更多 Debian 系

- **PureOS**：Purism 维护的 Debian，尽量不带专有软件
- **Trisquel**：完全自由软件的 Ubuntu 衍生
- **siduction**：Debian 不稳定分支的桌面
- **SpiralLinux**：把 Debian 做成开箱即用
- **Slax**：小体积活系统，现在基于 Debian
- **emmabuntüs**：用来翻新旧电脑的 Debian
- **GXDE OS**：经典 deepin 桌面，底层换成较新的 Debian
- **Cutefish**：2021 年以 CutefishOS 起步，是基于 Debian 的发行版，桌面也是自己的。代码在 [cutefishos](https://github.com/cutefishos)。中间停过更，Lingmo OS 沿用过它的界面。2026 年仓库重新有提交，桌面改成自己的 Wayland 合成器，一部分 macOS 应用能在开发版里打开，安装镜像还是 nightly
- **铜豌豆 atzlinux**：面向国内软件环境的 Debian
- **UALinux**：Ubuntu 的游戏整合版
- **Edubuntu、Ubuntu Unity、Ubuntu Sway**：Ubuntu 衍生，分别面向教育、Unity 桌面和平铺窗口
- **BackBox**：基于 Ubuntu 的渗透测试系统
- **Bodhi Linux**：基于 Ubuntu，桌面是轻量的 Moksha
- **SparkyLinux**：基于 Debian 的轻量桌面，版本分稳定和滚动
- **Kaisen Linux**：基于 Debian，预装系统管理员用的工具
- **Neptune**：Debian 加上 KDE
- **TurnKey Linux**：基于 Debian 的各种现成服务器模板
- **Kodachi**：基于 Debian 的隐私活系统
- **Linuxfx**：基于 Ubuntu，外观模仿 Windows
- **JingOS**：曾经面向平板的 Linux，更新已经停了
- **MakuluLinux、wattOS、LXLE、Elive、Xebian、Linspire、AcademiX、Gnoppix、Amarok Linux、iBuntu、PearOS**：Debian 或 Ubuntu 上的桌面改装，其中一部分已经停更

---

## 二、红帽系

包管理用 dnf / rpm。这一系的公司是红帽（Red Hat）。社区上游是 Fedora，商业产品的全称是 Red Hat Enterprise Linux，简称 RHEL，下面称红帽企业版。Rocky、Alma、Oracle Linux、龙蜥是旁边的兼容系统。

```text
Fedora → CentOS Stream → 红帽企业版
                          ├─ Rocky Linux
                          ├─ AlmaLinux
                          ├─ Oracle Linux
                          └─ 龙蜥 Anolis（8 兼容红帽企业版 8）

Fedora 上也长出 Nobara、Bazzite、RakuOS、Ultramarine、Qubes OS
红帽企业版旁边还有 EuroLinux
```

### Fedora

Red Hat 赞助的社区发行版，这一系的上游。新特性先在这里落地。

- 大约半年一个版本，软件较新，适合桌面和开发
- 默认开启 SELinux，默认桌面是 GNOME，另有 KDE 等官方 Spin
- Silverblue、Kinoite 是不可变版本，系统本体只读，应用主要走容器
- 苹果芯片的 Linux 现在走 Fedora Asahi Remix
- 没有商业支持

### CentOS Stream

红帽企业版的上游开发分支，持续接收下一个小版本的更新。可以免费用，但不是从前那种「和红帽企业版一模一样的免费复刻」。

> 旧的 CentOS Linux 已在 2024 年停止维护。网上很多教程还在写它，不要再拿来当生产系统。

### 红帽企业版

全称 Red Hat Enterprise Linux，简称 RHEL。商业订阅制。稳定、支持周期长，有官方安全更新和软硬件认证。云上和传统机房都很常见。

### Rocky Linux

原 CentOS 创始人发起的社区复刻，目标是与红帽企业版二进制兼容。免费，没有红帽企业版那种官方订阅。

### AlmaLinux

社区基金会维护的红帽企业版兼容系统，免费。项目由 CloudLinux 发起，现在独立运作。2023 年后目标是 ABI 兼容：给红帽企业版写的应用能跑，但不承诺每个软件包都逐字节相同。

### Oracle Linux

Oracle 维护的红帽企业版兼容系统，可以免费下载使用，官方支持要另买。可以选择兼容内核，或 Oracle 自己的 UEK。跑 Oracle 数据库的环境里很常见。

### 龙蜥 Anolis

龙蜥社区维护，阿里云等国内云厂商用得很多。Anolis 8 兼容红帽企业版 8。它是国产云环境里的常见镜像，不是红帽的官方下游。

### Qubes OS

基于 Fedora 的安全系统。用虚拟机把浏览器、工作和密码隔开。对硬件挑剔，不适合当第一套日常桌面。

### Nobara

基于 Fedora 的游戏桌面。显卡驱动、解码和游戏组件比原版 Fedora 省事。

### Bazzite

基于 Fedora 的不可变系统，面向游戏，也可以做成接近 SteamOS 的掌机界面。底层是 Universal Blue。

### RakuOS

基于 Fedora 的镜像系统。底盘用 bootc 整份更新，出问题可以启动上一份镜像。自己装的 RPM 放在单独的软件层里，不用为了装一个包去改系统镜像。

### Ultramarine

基于 Fedora，安装时可以换成不同桌面，也提供从其他发行版迁过来的工具。

### EuroLinux

红帽企业版的兼容复刻，可以免费使用，欧洲用得相对多。

### 更多红帽系

- **OsoLinux**：基于 Fedora，预置一些国内软件
- **Fedora SoaS**：Fedora 的教育版，桌面是 Sugar
- **VzLinux**：Virtuozzo 维护的红帽企业版兼容系统

---

## 三、SUSE 系列

包管理用 zypper / rpm。管理工具是 YaST，图形和命令行都能做系统配置。欧洲企业市场用得多。

```text
SLES（商业）—— openSUSE Leap（同源的社区稳定版）
openSUSE Tumbleweed（滚动，单独一条线）
GeckoLinux：把 openSUSE 配好再交付
```

### openSUSE Leap

社区稳定版，和 SLES 同源，软件版本跟着企业版走。适合学习和搭测试环境。

### openSUSE Tumbleweed

社区滚动版。软件新，发布前会过 openQA 自动测试。适合想要新软件、又希望比 Arch 多一层测试的桌面。

### SLES

SUSE Linux Enterprise Server，商业企业服务器，付费支持。

### GeckoLinux

基于 openSUSE，把软件源、桌面和常见编解码预先配好，安装完就能用。稳定版对应 Leap，滚动版对应 Tumbleweed。另有面向游戏的 **Regata OS**，也基于 openSUSE。

---

## 四、Arch 系列

包管理用 pacman。滚动更新，软件新。原版要自己装、自己维护，文档看 Arch Wiki。

```text
Arch Linux
├─ Manjaro
├─ EndeavourOS
├─ Garuda Linux
├─ CachyOS
├─ SteamOS
├─ CatOS
├─ BlackArch
├─ Artix Linux、Omarchy、Archcraft、blendOS
└─ Athena OS
```

### Arch Linux

- 默认没有图形化安装界面
- 装完是一个很干净的系统，桌面、驱动、软件都自己选
- 适合愿意读文档的进阶用户

### Manjaro

基于 Arch，把安装和日常维护包了一层。

- 自带图形化安装器，提供 KDE、GNOME、Xfce 等桌面
- 软件会比 Arch 官方仓库晚一点，中间多一道测试
- 适合喜欢尝新、又希望少踩坑的桌面用户

### EndeavourOS

> 官网：<https://endeavouros.com/>

更接近原版 Arch 的安装版。

- 系统很瘦，预装软件少，方便自己配
- 以终端为主，也提供图形化安装器
- 直接使用 Arch 官方仓库
- 社区和 Wiki 比较友好

### Garuda Linux

基于 Arch，默认是效果很多的 KDE，主打游戏和开箱即用。使用 Btrfs 快照，系统出问题可以回退。它有自己的额外仓库，排错时要分清包来自哪里。

### CachyOS

基于 Arch，软件按较新的 CPU 指令集做了优化，也提供自己的内核调度。适合在意性能、并且接受 Arch 维护方式的人。

### SteamOS

Steam Deck 出厂系统，基于 Arch，系统分区只读，界面围绕 Steam 游戏模式。它不是通用办公桌面。

### CatOS

> 官网：<https://github.com/CatOS-Home/CatOS/blob/main/README_zh_CN.md>

基于 Arch 的开箱即用国产发行版。

- **开箱即用**：原生中文，预配置图形桌面、国内镜像源（含 archlinuxcn、arch4edu）、输入法、显卡驱动（含 NVIDIA 闭源驱动）、AUR 助手（yay）
- **安装简便**：定制版 Calamares 图形安装程序。支持离线和在线安装，离线安装不用联网，大约 3 分钟
- **Linux 子系统**：可一键安装 Ubuntu、CentOS、openSUSE、Deepin 等十余种子系统，用来体验别的发行版，或隔开开发和测试环境
- **快照**：默认 Btrfs，配合 timeshift，系统滚挂了可以回退
- 适合想用 Arch、但不想从分区开始自己装的人

### BlackArch

基于 Arch 的渗透测试系统，工具仓库很大。维护方式和 Arch 一样，不像 Kali 那样拿来直接开用。

### Artix Linux

基于 Arch，但不用 systemd。初始化可选 OpenRC、runit 或 s6。

### Omarchy

基于 Arch 的平铺桌面，窗口管理用 Hyprland，配置收成一套开箱方案。

### Archcraft

基于 Arch 的轻量桌面，预置多套 Openbox、bspwm 主题。

### blendOS

基于 Arch 的不可变系统。除了自己的包，还能直接用其他发行版的软件包。

### Athena OS

基于 Arch 的渗透测试系统，界面偏向赛博风格。

### 更多 Arch 系

- **Mabox、BigLinux**：基于 Manjaro
- **Archman、Bluestar、Alter Linux、Archlabs、XeroLinux、Peux OS、TeaLinux**：Arch 上的桌面整合版
- **Obarun**：Arch 去掉 systemd，改用 s6
- **Parabola**：只收自由软件的 Arch
- **Arch Linux GUI**：给 Arch 加了图形安装器
- **ArcoLinux、RebornOS**：安装时可以自己选桌面和软件
- **Salient OS**：曾经面向游戏的 Arch，已经停更

---

## 系列之外

这些发行版不从 Debian、红帽、SUSE、Arch 衍生，包管理和设计都是自己的一套。

### Void Linux

独立的滚动发行版。初始化用 runit，包管理是 xbps。软件新，装完很干净，不绑在 Arch 的仓库上。

### KaOS

独立的滚动桌面，只用 KDE。安装命令长得像 pacman，但软件仓库是自己的，不是 Arch。

### Alpine Linux

体积极小，使用 musl 和 apk。Docker 镜像里最常见的基础系统之一。适合容器和路由器，不适合当日常桌面。

### NixOS

整套系统写在一份配置里，可以复现，也可以回滚。软件走 Nix，不走 apt 或 pacman。GNU 还有一套同类系统 **Guix System**，包管理用 Guix，默认只用自由软件。

### Gentoo

软件大多从源码编译，用 Portage 和 USE 标志自己裁剪。适合想控制编译选项的人。ChromeOS 的构建系统也从这套工具长出来，但 ChromeOS 本身不是 Gentoo 桌面。

基于它的还有 **Redcore**（做成可安装的桌面）、**Pentoo**（渗透测试）、**exGENT**（活系统）和已经停更的 **Sabayon**。

### Slackware

仍在维护的最老发行版之一。没有 systemd，包管理很朴素。现在更多是历史和极简路线，不是新手桌面。

基于它的还有 **Salix**、**Porteus**、**Zenwalk**、**Slackel**、**Absolute Linux**、**AUSTRUMI**、**Kongoni**、**NimbleX**，以及面向视障用户的 **Slint**。

### openEuler

开放原子开源基金会下的服务器发行版，华为发起。使用 rpm，但不是红帽企业版的复刻，内核和软件有自己的版本节奏。国内服务器和政企环境常见。

### 银河麒麟

麒麟软件的商业操作系统，国内政企桌面和服务器预装里常见。它不是优麒麟，也不是 openKylin。

### ChromeOS

Chrome 笔记本的预装系统，底层是 Linux，日常几乎只使用浏览器，以及可选的 Linux 开发环境。一般不作为独立发行版安装。旧电脑上的同类体验看 ChromeOS Flex。FydeOS 是同类的国内系统，openFyde 是它的开源版本。

### Chimera Linux

不用 GNU 用户态，C 库用 musl，初始化不用 systemd。适合想离开常见发行版那套组件的人。

### Tiny Core Linux

体积只有十几兆的活系统。自己几乎什么都不带，需要的软件现装。

### Clear Linux

Intel 做过的性能向发行版，软件更新很快。Intel 已在 2025 年停止维护。

### AOSC OS

安同开源社区的独立发行版，国内开发，桌面和软件源自己维护。

### Solus

独立的滚动桌面。包管理是 eopkg，不走 apt、dnf 或 pacman。Budgie 桌面最早从这里做出来。软件经过挑选后再放进仓库，更新节奏比 Arch 稳一些。

### ALT Linux

俄罗斯的独立发行版，软件包是 rpm，安装命令用 apt。Simply Linux 是它的桌面版。

### 4MLinux

很小的独立系统，把维护、服务器和多媒体收在一个活系统里。

### 更多独立发行版

- **openmamba**：意大利的独立桌面发行版
- **Venom Linux**：自己做包管理的轻量桌面
- **Dragora**：只使用自由软件的独立发行版，安装门槛高
- **Ming OS、Veket**：国产轻量桌面，不从四大系列直接衍生
- **Mageia**：从 Mandriva 分出来，包管理用 urpmi
- **PCLinuxOS**：滚动桌面，软件包是 rpm，安装命令用 apt
- **GoboLinux**：目录按每个软件分开，不走传统的 /usr 布局
- **SliTaz**：体积很小的独立活系统

---

## 类 Unix，不是 Linux

这些也能当桌面或服务器，但内核不是 Linux，包管理也和上面对不上。

### FreeBSD

最常用的 BSD。有自己的内核、用户态和软件包，文档完整。nomadBSD 是它的活系统，插上 U 盘就能用。GhostBSD 则是配好桌面的 FreeBSD。

### OpenBSD

以代码审计和默认安全设置出名。软件新度让位于少出漏洞。

### helloSystem

基于 FreeBSD，桌面模仿 macOS。

### ravynOS

也是往 macOS 的用法上靠，基于 FreeBSD。早期名字是 airyxOS。

### Redox OS

用 Rust 写的类 Unix 系统，微内核。还在早期，不能当日常系统。

### kaihongOS

开源鸿蒙的电脑系统，不是 Linux 发行版。

### OpenIndiana

OpenSolaris 停掉之后的延续，内核是 illumos，不是 Linux。

### Haiku

重写 BeOS 的桌面系统。不是 Linux，也不是 BSD。

### OS108

基于 NetBSD 的桌面系统。

---

## 参考

- 参考视频：<https://www.bilibili.com/video/BV1qCEE6hEYC/?spm_id_from=333.1387.favlist.content.click&vd_source=eb3ab359e0e7d2b78a582c9eec0b283f>
- [凛冬白桦林](https://space.bilibili.com/238268010)
- [火_炎焱燚燚焱炎_火](https://space.bilibili.com/320766887)
