

export interface ITemplateTableModel {    
    gridAreas: string;
    brakePoints: ITemplateDisplayBreakPoint[];
}


interface ITemplateDisplayBreakPoint {
    maxWith?: number | null;
    gridColums: string;
    gridAreas: string;
}
