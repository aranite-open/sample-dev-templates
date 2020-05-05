# jupyterlab_react

![react-widget](./react-jupyterextension.gif)

## Requirements

* JupyterLab >= 2.0

## Install

First, checkout [this page](https://jupyterlab.readthedocs.io/en/stable/developer/extension_tutorial.html) and install necessary tools, including your conda environment.


```bash
# Clone the repo to your local environment
git clone https://github.com/aranite-open/sample-dev-templates.git

# cd to the directory
cd sample-dev-templates/jupyterlab_ext

#acivate your conda environment if not active
conda activate jupyterlab-ext

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```
