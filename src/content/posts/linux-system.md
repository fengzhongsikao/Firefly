---
title: Linux 发行版记录
published: 2026-08-31
description: ''
image: ''
tags: [linux]
category: 'linux 生存日记'
draft: false
lang: ''
slug: linux
---

> 按源码上游划分，Linux 主流发行版可分为四大系列。每个系列各有性格：Debian 稳、RHEL 商、SUSE 企、Arch 拼。

## 四大系列速览

| 系列 | 基础 | 性格关键词 | 典型场景 |
| --- | --- | --- | --- |
| Debian | apt / dpkg | 稳定、保守、社区驱动 | 桌面、服务器、公有云 |
| RHEL | yum / dnf / rpm | 企业级、商业支持 | 生产服务器 |
| SUSE | zypper / rpm | 欧洲市场、企业级 | 企业服务器 |
| Arch | pacman | 滚动更新、DIY 精神 | 桌面、进阶玩家 |

---

## Debian 系列

#### Debian（原版）

纯稳定、保守、极简，适合资深玩家、追求从零开始折腾的纯服务器。

#### Ubuntu

基于 Debian 开发，预装驱动、播放器、浏览器、常用软件，桌面体验完整，通用性强。

- 公有云默认镜像首选
- 衍生版：Kubuntu、Xubuntu、Lubuntu（初学者仅作了解）

### 桌面精选

#### Zorin OS

基于 Ubuntu 开发，仿 Windows/macOS 界面。

- 新手友好度拉满
- 预装办公软件
- 颜值高

#### Linux Mint

基于 Ubuntu 开发，对 Windows 用户最友好。

- 默认 Cinnamon 桌面，仿 Windows 操作逻辑
- 轻量流畅，预装多媒体解码
- 稳定性远超原生 Ubuntu
- 适合：办公、影音、轻度开发

#### Lingmo OS

> 官网：<https://lingmo.org/zh-CN>

基于 Debian/Ubuntu 开发的国产桌面 Linux 发行版，视觉风格接近 macOS。

- 自研 Lingmo 桌面环境（LDE），基于 Qt6/C++ 与 Wayland，界面简洁统一
- 以 Dock 程序坞为核心，搭配顶栏、圆角窗口、半透明特效
- 轻量化设计，安装镜像约 2GB，内存占用低，适合低性能硬件
- 完整兼容 Debian/Ubuntu 软件仓库，同时支持 Flatpak、Snap
- 深入的中文本地化与国产化适配（含龙芯 loong64 等架构）
- 滚动更新，最新版本为 Lingmo OS 2025

> 项目仍较年轻，偶有粗糙之处，适合尝鲜与参与开源贡献。

### Debian 系·其他成员

- **Raspberry Pi OS**：树莓派专用，基于 Debian 开发
- **Deepin 深度**：国内公司开发，桌面美观，办公娱乐工具齐全
- **Kali Linux**：渗透测试/网络安全专用，预装数百款安全工具，安全工程师标配

> Debian 系 = 稳定 + 丰富 + 社区活跃

---

## RHEL 系列

RHEL = Red Hat Enterprise Linux

#### Rocky Linux

社区驱动，由原 CentOS 创始人创立，与 RHEL 100% 二进制兼容。

#### AlmaLinux

由 CloudLinux 团队维护，同样 1:1 二进制兼容 RHEL，企业级支持。

---

## SUSE 系列

与 RHEL 系一样，企业级服务器系统，欧洲市场占有率高。

#### openSUSE

社区免费版，社区驱动，适合学习和测试。

#### SLES

SUSE Linux Enterprise Server，商业企业服务器版，付费支持。

---

## Arch 系列

#### Arch Linux（原版）

- 无图形化安装界面
- 滚动更新，软件最新
- 适合进阶用户

#### Manjaro

基于 Arch Linux，解决了 Arch 的安装复杂问题。

- 提供图形化安装器
- 支持 KDE/Gnome/Xfce 等桌面环境
- 提供软件包管理器，方便安装软件
- 适合：喜欢尝新、有一定 Linux 基础的桌面用户

#### EndeavourOS

> 官网：<https://endeavouros.com/>

基于 Arch Linux，定位为轻量、终端为中心（terminal-centric）的发行版。

- 轻量级系统，预置少量必要软件，方便个性化定制
- 以终端为核心，适合喜欢命令行操作的用户
- 社区活跃友好，文档与 Wiki 完善
- 提供图形化安装器，安装比原生 Arch 简单
- 滚动更新，保持软件较新

#### CatOS

> 官网：<https://github.com/CatOS-Home/CatOS/blob/main/README_zh_CN.md>

基于 Arch Linux 的开箱即用国产发行版，目标是让用户轻松领略 Arch 的魅力。

- **开箱即用**：原生中文，预配置图形桌面、国内镜像源（含 archlinuxcn、arch4edu）、输入法、显卡驱动（含 N 卡闭源驱动）、AUR 助手（yay）等
- **安装简便**：使用定制版 Calamares 图形化安装程序，一键傻瓜式操作；支持离线与在线两种安装模式，离线安装全程无需联网，约 3 分钟完成
- **Linux 子系统**：可一键安装 Ubuntu、CentOS、openSUSE、Deepin 等十余种子系统，便于体验其他发行版或构建隔离的开发/测试环境
- **快速稳定**：默认使用 BTRFS 文件系统配合 timeshift 快照，永不滚挂
- 适合：想体验 Arch 但被其复杂安装配置劝退的新手

---

## 参考

- 参考视频：<https://www.bilibili.com/video/BV1qCEE6hEYC/?spm_id_from=333.1387.favlist.content.click&vd_source=eb3ab359e0e7d2b78a582c9eec0b283f>
