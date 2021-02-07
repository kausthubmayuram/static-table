# StaticTable

A Simple Library to use to create tables to be used as components.


## Features

- Dynamic Data Allocation
- Lightweight
- No third party Dependency
- Custom properties like  - Fixed Header,Table Cell Value alignments, etc

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

---

Use the Following Selector for the Table

```shell

<static-table [columns]="columns" [data]="data" tableId='firstTable'></static-table>

```
**tableId** is used to keep the ease to customize multiple implemented tables for the css. (*encapsulating all the styling for a specific table under the id, styling multiple tables together*)
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
---

For Fixed Header, enable the attribute as follows - 

```shell

<static-table [columns]="columns" [data]="data" [fixedHeader]="true"></static-table>

```
The fixedHeader is disabled by default.Only enable if the fixed header is required.

---

For Alignment of the Data inside of the table

```shell

<static-table tableId='firstTable' [columns]="columns" [data]="data" [fixedHeader]=true contentAlign="left" headerAlign='center'></static-table>

```
**contentAlign** Will align the Data of the data texts to - left/center/right.
Default the value is *left* if no customization is provided.

**headerAlign** Will align the Data of the header texts to - left/center/right.
Default the value is *left* if no customization is provided.

---

For Custom Stylings, customization of the design, The following classes can be used to target the table.

```shell
  
  #tableId (the id provded in the selector)
  
  .static-table-container

```




## Examples

Examples will be hosted soon.
## Limitations

Currently the plugin only supports passing the data with a specific format.
Further versions would include option to configure the format which the module should use.
Stylings are not included for the table so as to keep/provide freedom to the users to customise as the require.

## Contributions

Please use Use GitHub issues for requests or raise issue  -  [Static-Table](https://github.com/kausthubmayuram/static-table)

Pull Requests are always welcome.

## License
This package is available under the standard [MIT License](https://opensource.org/licenses/MIT)

