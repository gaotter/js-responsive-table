export interface IResponsiveTableModel {
    headers: IResponsiveTableHeader[];
    rows: ISearchTableRow[];
    sortOptions?: ISortOption[];
}

export interface ISearchTableRow {
    row: any;
    title?: string;
    lookupKey?:string;
    goToAreaShowElement?: boolean;
    textElements: ITextValue[];
    smallScreenElements?: ITextValue[];
    icon?: string;
    show?: boolean;
    hideNavigation?: boolean;
  
  }

  export interface ITextValue {
    value: string;
    type?: "date" | "number" | "area";
    subValue?: string;
    subValueType?: "date" | "number" | "area";
  }

export interface IResponsiveTableHeader {
    headerDisplay: string;
    headerSelectKey?: string;
    dataSize: "small" | "medium" | "large";
}

export interface ISortOption {
    name: string;
    prop: string;
    desc: boolean;
    type?: "number" | "text" | "date";
}