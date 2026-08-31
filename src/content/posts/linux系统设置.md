---
title: linux系统设置
published: 2026-08-31
description: '关于 archlinux的字体,软件等设置'
image: ''
tags: []
category: 'linux 生存日记'
draft: false
lang: ''
slug: linux-xi-tong-she-zhi
---

刚装完 Arch Linux 后系统几乎是"裸奔"状态，本篇带你一步步把常用工具配齐。

---

## 一、基础工具：终端与文件管理器

### 1. 安装 Konsole 终端

Konsole 是 KDE 平台上的 X 终端模拟器，便于用户使用命令行。它提供配置文件管理、回滚、配色方案和半透明效果等实用功能。

按 `Alt + F6` 进入 tty 模式，输入用户名和密码（密码输入时默认不显示）：

```bash
sudo pacman -S konsole
```

### 2. 安装 Dolphin 文件管理器

```bash
sudo pacman -S dolphin
```

安装完成后，按 `Alt + F2` 退出 tty 模式回到图形界面。

---

## 二、系统本地化：字体与中文支持

### 1. 修改 locale 配置

先安装一个轻量编辑器 mousepad：

```bash
sudo pacman -S mousepad
```

用 mousepad 打开 locale 配置文件：

```bash
sudo mousepad /etc/locale.gen
```

在文件中把以下两行取消注释（去掉行首的 `#`）：

```bash
zh_CN.UTF-8 UTF-8
en_US.UTF-8 UTF-8
```

保存后执行生成 locale：

```bash
sudo locale-gen
```

### 2. 安装中文字体

从官方仓库安装常用中文字体：

```bash
sudo pacman -S wqy-zenhei wqy-microhei noto-fonts-cjk
```

最后在系统设置里把系统语言切换为中文即可。

---

## 三、输入法配置：Fcitx5

### 1. 安装 Fcitx5 及组件

```bash
sudo pacman -S fcitx5 fcitx5-chinese-addons fcitx5-configtool \
    fcitx5-gtk fcitx5-qt
```

### 2. 配置输入法

启动 Fcitx5 配置工具，按向导添加中文输入法：

```bash
fcitx5-configtool
```

---

## 四、AUR 助手：安装 Paru

Arch 用户仓库（AUR）里有大量官方源没有的软件。如果不需要 AUR 的包，可以跳过这一步。

### 1. 安装编译依赖

```bash
sudo pacman -S --needed base-devel
```

### 2. 编译安装 Paru

```bash
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

### 3. 使用 Paru

安装完成后，就可以用 `paru` 替代 `pacman` 来安装 AUR 包了，例如：

```bash
paru -S linuxqq
```

---

## 五、常用软件安装

### 1. Firefox 浏览器

```bash
sudo pacman -S firefox
```

### 2. Linux QQ

```bash
paru -S linuxqq
```
