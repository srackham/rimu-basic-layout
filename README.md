# Minimal layout for Rimu Markup

A minimal unstyled HTML5 layout for the [Rimu Markup](http://rimumarkup.org) `rimuc`
command.

This package is also serves as an example of how to create Rimu layout
packages.

Once this package has been installed then you can use the `rimuc` command
`--layout basic` option to create plain HTML5 pages from Rimu markup.
The following example generates `mydocument.html`:

    rimuc --layout basic mydocument.rmu


## Installation
1. If you haven't already done so install Rimu:

    sudo npm install -g rimu

2. Install this package:

    sudo npm install -g rimu-basic-layout
    

## How it works
When the `rimuc` `--layout` option is specified `rimuc` searches for
a built-in layout with the same name. If it's not found then it
attempts to load a module named `rimu-<layout-name>-layout` (in this
case `rimu-basic-layout`). The loaded module contains two properties:
`header` and `footer` which contain the Rimu header and footer markup
respectively.


## Implementation notes
TODO
