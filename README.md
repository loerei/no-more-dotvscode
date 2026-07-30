# 🧹 No More .vscode (Clean Workspace & Binary Isolator)

> 🎓 **Built specifically for CS Learners, Students, & Educators.**
> **Say goodbye to `.vscode` folder clutter and stray `.exe` files in your project directory.**

![VS Code Marketplace Version](https://img.shields.io/badge/VS%20Code%20Marketplace-v0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🧼 Why No More .vscode?

When learning C, C++, Rust, Go, or Java, VS Code often litters your project directories with:
- `.vscode/tasks.json` & `.vscode/launch.json`
- Compiled binary files (`.exe`, `.o`, `.out`) sitting right next to your clean source code files.

**No More .vscode** automatically isolates all compiled binaries to a single global build directory (`C:\VscodeBuilds`) and cleans up stray executables automatically!

---

## 🔥 Key Features

- **🛡️ Global Binary Output**: All C, C++, C#, Rust binaries are built in `C:\VscodeBuilds` exclusively.
- **🧹 Local Clutter Cleanup**: Automatically removes local executables and unwanted `.vscode` folders from project root.
- **✨ Clean Repositories**: Your Git status stays pristine without needing heavy `.gitignore` rules for binaries.

---

## 📦 Part of the F5 Anything Suite

This extension is part of the **F5 Anything Suite**, designed to make VS Code friction-free for Computer Science learners:

- **[F5 Anything](https://github.com/loerei/f5-anything)**: Press F5 to build & run any code file instantly.
- **[Easy Binary](https://github.com/loerei/easy-binary)**: Auto-install missing compilers (GCC, Python, JDK, Go) via Winget.
- **[F5 Anything Suite](https://github.com/loerei/f5-anything-suite)**: Install the complete zero-config package in 1 click!

---

## 📄 License

[MIT License](LICENSE) © [loerei](https://github.com/loerei)
