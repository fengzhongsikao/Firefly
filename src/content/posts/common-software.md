---
title: common-software.md
published: 2026-10-02
description: '关于archlinux常用软件的安装'
image: ''
tags: [linux]
category: 'linux生存日记'
draft: false
lang: ''
slug: common-software
---

## 看图软件
Loupe（GNOME 新版看图，现代简洁、Wayland 友好）
```bash
sudo pacman -S loupe
```

## pdf软件
批注 / 办公最强：Okular（KDE）
```bash
sudo pacman -S okular
```

## office办公软件
```bash
sudo pacman -S onlyoffice-bin 
```
## 文本编辑器
**Mousepad 是 Xfce 桌面的默认轻量 GTK 文本编辑器**，用来快速编辑纯文本、配置文件（`conf`/`md`/`sh`），类似 Windows 记事本，但功能更强，**非常适合 Hyprland/i3 平铺窗口管理器**，Wayland 正常工作
```bash
sudo pacman -S mousepad
```

## 现代终端文本编辑器
micro 是现代终端文本编辑器（Go 语言写的），可以理解成「升级版 nano」
```bash
sudo pacman -S micro
```
### micro操作
```bash
# micro 快捷键速查表
|快捷键|功能|
| ---- | ---- |
|Ctrl+S|保存文件|
|Ctrl+Q|退出编辑器|
|Ctrl+O|打开文件|
|Ctrl+E|打开命令行（输入set换主题、插件）|
|Ctrl+F|查找|
|Ctrl+H|查找替换|
|Ctrl+Z|撤销|
|Ctrl+Y|重做|
|Ctrl+C|复制选中内容|
|Ctrl+X|剪切|
|Ctrl+V|粘贴|
|Ctrl+A|全选|
|Ctrl+G|跳转到指定行号|
|Ctrl+D|复制当前行|
|Ctrl+K|删除当前行|
|Alt+N|新增多光标|
```
micro 简单命令示例（编辑器内，按 Ctrl+E 输入）
```bash
# 切换主题
set colorscheme monokai
# 显示行号
set shownumbers true
# 安装插件
plugin install linter
```
 
## 压缩解压
unzip /zip 处理 zip
```bash
sudo pacman -S unzip zip
```

### zip & unzip 命令速查表
### zip（压缩打包）
| 命令 | 说明 |
| ---- | ---- |
| `zip test.zip file.txt` | 压缩单个文件 |
| `zip -r myfiles.zip ~/Pictures/` | 递归压缩整个文件夹（文件夹必须加 -r） |
| `zip -r -q myfiles.zip ~/Pictures/` | 安静模式压缩，不输出日志 |
| `zip -r -9 high-compress.zip 文件夹/` | 最高级别压缩（级别0~9，0不压缩） |
| `zip myfiles.zip newpic.png` | 追加文件到已有压缩包 |
| `zip -r shturl.cc/3 dir/ -x "dir/*.log"` | 压缩并排除指定文件 |
| `zip -r -e secret.zip 文件夹/` | 加密压缩，交互式输入密码 |

## unzip（解压）
| 命令 | 说明 |
| ---- | ---- |
| `unzip test.zip` | 解压到当前目录 |
| `unzip test.zip -d ~/Downloads/` | 解压到指定目录（-d 指定路径） |
| `unzip -l test.zip` | 只查看压缩包内文件列表，不解压 |
| `unzip -t test.zip` | 校验压缩包完整性，不解压 |
| `unzip -q test.zip -d ~/Pics` | 安静解压，不打印输出 |
| `unzip -o test.zip -d ~/Pics` | 强制覆盖已有文件（无提示，谨慎使用） |
| `unzip -n test.zip -d ~/Pics` | 解压，跳过已存在文件，不覆盖 |
| `unzip -O GBK windows.zip` | 解决Windows压缩包中文文件名乱码 |

## 参数速查
| 工具 | 参数 | 作用 |
| ---- | ---- | ---- |
| zip | `-r` | 递归，压缩文件夹必备 |
| zip | `-q` | 安静模式，减少输出 |
| zip | `-0~-9` | 压缩等级，9为最高压缩率 |
| zip | `-e` | 开启加密 |
| zip | `-x` | 排除指定文件 |
| unzip | `-d` | 指定解压目录 |
| unzip | `-l` | 列出压缩包内容 |
| unzip | `-t` | 测试压缩包完整性 |
| unzip | `-o` | 强制覆盖文件 |
| unzip | `-n` | 不覆盖已有文件 |
| unzip | `-q` | 安静模式 |
| unzip | `-O` | 指定字符编码（解决中文乱码） |


## nvim-lazyvim安装
nvim安装
```bash
sudo pacman -S neovim
```
lazyvim安装
```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
```
启动
```bash
nvim
```

### lazyvim剪贴版
```bash
sudo pacman -S xclip
sudo pacman -S wl-clipboard
```
在neovim里执行
has('clipboard')返回为1 说明剪贴版可用

> 返回 1：支持剪贴板。
> 返回 0：说明当前 Neovim 没有剪贴板支持，需要先装依赖。



