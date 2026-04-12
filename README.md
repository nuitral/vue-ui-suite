<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./media/vue-suite-dark.png" height="150" />
    <source media="(prefers-color-scheme: light)" srcset="./media/vue-suite-light.png"  height="150" />
    <img src="./media/vue-suite-light.png" alt="nuitral vue logo" height="150">
  </picture>
</p>

# nuitral Vue UI suite

**nuitral Vue UI suite** provides a complete, native, and flexible UI component library for Vue projects.

This library is part of the **nuitral** suite, a native UI toolkit designed to build modern, flexible, and
high-performance interfaces.

[Explore the suite](https://nuitral.github.io)

---

### Run the Local Demo

To run this library locally, first install the dependencies:

```bash
npm i
```

Then, use one of the following commands:

- **Run the local demo:**
  ```bash
  npm run demo
  ```

- **Run in development mode:**
  ```bash
  npm run dev
  ```

> ⚠️ When running in development mode, make sure all related libraries are located **in the same root directory** as
> this project.  
> Otherwise, update the Vite configuration aliases accordingly:

```js
const alias = {
	'@nuitral/core': path.resolve(__dirname, '../core/lib'),
	'@nuitral/icons/dist/nuitral-icons.scss': path.resolve(__dirname, '../icons/dist/nuitral-icons.scss'),
	'@nuitral/theming': path.resolve(__dirname, '../theming/lib/scss/_index.scss'),
	'@nuitral/types': path.resolve(__dirname, '../types'),
} 
```

---

### Progress Status

| Status | Module / Component | Description                        |
|--------|--------------------|------------------------------------|
| ✅      | `NuitralBox`       | Box component                      |
| ✅      | `NuitralButton`    | Button component                   |
| ☑️     | `NuitralCard`      | Card component – available in beta |
| ☑️     | `NuitralChip`      | Chip component – available in beta |
| ✅      | `NuitralIcon`      | Icon component                     |
| ✅      | `NuitralInput`     | Input component                    |
| 🕒     | `NuitralList`      | List component                     |
| 🕒     | `NuitralSelect`    | Select component                   |
| ✅      | `NuitralTab`       | Tab component                      |
| ✅      | `NuitralTabs`      | Tabs component                     |

### Component Status Legend

| Icon | Status Description                                                         |
|------|----------------------------------------------------------------------------|
| ✅    | Completed – component is finished and stable                               |
| ☑️   | Available – component is usable but still in beta or under refinement      |
| 🚧   | In progress – component is being actively developed                        |
| 🕒   | Planned – component is not yet started or scheduled for future development |

---

**Status:** Currently in **beta version**.

---

### License

This project is licensed under the [MIT License](https://github.com/nuitral/vue-ui-suite/blob/main/LICENSE).

Copyright (c) 2026 **Nicola Centonze**
