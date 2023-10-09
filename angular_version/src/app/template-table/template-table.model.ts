

export interface ITemplateTableModel {
    gridAreas: string;
    brakePoints: ITemplateDisplayBreakPoint[];
}


interface ITemplateDisplayBreakPoint {
   maxWith: number;
   gridColums: string;
   gridAreas: string;
}
