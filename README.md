# StaticTable

A Simple Library to use to create tables to be used as components.

## Features

- Dynamic Data Allocation
- Lightweight
- No third party Dependency
- Custom properties like  - Fixed Header,Table Cell Value alignments


## Getting started

Install `static-table` using npm.

```shell
npm install static-table
```

Import static-table module from the node modules

```shell
import { StaticTableModule  } from 'static-table';
```
Add the imported module to the imports

```shell
imports: [    
    StaticTableModule
    ]
```

Use the Following Selector for the Table

```shell

<static-table [columns]="columns" [data]="data"></static-table>

```
Note: columns and data takes the object in the form of array  as follows - 

```shell

columns = ['Column_Name1','Column_Name2','Column_Name3', ... ,'Column_NameN'];

data = [
   ['Column_Value1','Column_Value2','Column_Value3', ... ,'Column_ValueN'],
   ['Column_Value1','Column_Value2','Column_Value3', ... ,'Column_ValueN'],
   ['Column_Value1','Column_Value2','Column_Value3', ... ,'Column_ValueN'],
   ['Column_Value1','Column_Value2','Column_Value3', ... ,'Column_ValueN'],
  ];
  
```

## Examples

## Limitations

Currently the plugin only supports passing the data with a specific format.
Further versions would include option to configure the format which the module should use.
Stylings are not included for the table so as to keep/provide freedom to the users to customise as the require.


## Contributions

Please use Use GitHub issues for requests or raise issue  -  [Static-Table](https://github.com/kausthubmayuram/static-table)

Pull Requests are always welcome.

## License
This package is available under the standard [MIT License](https://opensource.org/licenses/MIT)
