# Go Container Action Starter
`create-go-action` is an NPX tool designed to quickstart a Containerized Golang GitHub action setup. With just one command, you can have a template containerized Golang action ready to customize and deploy.

![npm](https://img.shields.io/npm/v/create-go-action)

## Features
- 🚀 Quick and simple setup
- 📄 Creates boilerplate Golang action files
- ⚙️ Ready to integrate into your GitHub workflow

## Usage

To initiate a new Golang GitHub action setup in your current directory:

```bash
npx create-go-action .
```

Or, to creatge in a new directory:
```
npx create-go-action my-directory
```

The above command will generate all necessary files for a Golang GitHub action in your specified directory.

## Development
Want to contribute or modify for your use-case? Clone the repository:

```bash
git clone https://github.com/DaveVED/create-go-action.git
cd create-go-action
npm install
```

Then, you can run the tool locally using:

```bash
npx ./src/hello.ts
```
