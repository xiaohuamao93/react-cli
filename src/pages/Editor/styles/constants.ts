export const ItemTypes = {
  SOURCE: "source",
  TARGET: "target",
  TARGET_LIST: "target-list",
  SHOP: "shop",
};

export const AnchorPoint = {
  Target: "target",
  Thumb: "thumb",
};

export type IFormErrors = {
  [key: string]: { status: "error" | "success"; errMsg: string | undefined };
} | null;

export interface IDataState {
  id: string;
  item: any;
  index: number;
}

export interface UnitGroupType {
  editorConfig?: any;
  editorTitle: string;
  displayName: string;
  unitType: number;
  base?: string;
  type?: string;
  errors: IFormErrors;
  values: any;
  imgUrl: string;
  key: string;
  isTemplate?: boolean;
  templateValues?: any;
}
