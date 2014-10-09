# Rise Vision Documentation

## Introduction

Rise vision documentation is a static site built with [Jekyll](http://jekyllrb.com/) to provide a easy and clean way to share our documentation with the community.

Project Name works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Built With
- *[Jekyll](http://jekyllrb.com/)*
- *[Bower](http://bower.io/)*
- *[Common-Style](http://rise-vision.github.io/style-guide/)*

## Development

### Local Development Environment Setup and Installation

* install Ruby on your environment 

* install Jekyll 
```bash
gem install jekyll
```

* clone the repo using Git to your local:
```bash
git clone https://github.com/Rise-Vision/risevision-documentation.git
```

* download components with bower
```bash
bower intall
```

* You can write new docs under the _post directory. Folders inside this directory is used to separate the content. 
Pay attention on the YALM front matter block when creating a new post: 
```markdown
---
layout: post
title:  "Companies"
date:   2014-10-01 10:52:00
category: documentation/core-api
parent-order: 0
order: 0
---
```

as *category*, *parent-order* and *order* variables are used to generate the sidebar menu. 

For further info please look at [Jekyll Documentation](http://jekyllrb.com/docs/home/)

### Run Local

* under the root directory run Jekyll server
```bash
jekyll server --watch --baseurl ''
```

* Open browser on http://localhost:4000

### Dependencies


### Testing

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it

### Languages

In order to support languages i18n needs to be added to this repository.  Please refer to our Suggested Contributions.

### Suggested Contributions
- We could use i18n Language Support

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

**Facilitator**

[Rodrigo Serviuc Pavezi](https://github.com/rodrigopavezi "Rodrigo Serviuc Pavezi")
