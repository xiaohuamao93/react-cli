import React, { useState } from "react";
import TargetThumbList from "./TargetThumbList/index";
import { IDataState } from "./constants";

const list: IDataState[] = [
  { id: "test1", item: { editorTitle: "item-1" }, index: 1 },
  { id: "testt2", item: { editorTitle: "item-2" }, index: 2 },
  { id: "test3", item: { editorTitle: "item-3" }, index: 3 },
  { id: "test4", item: { editorTitle: "item-4" }, index: 4 },
  { id: "te5", item: { editorTitle: "item-5" }, index: 5 },
];

const Editor = () => {
  const data = list;
  const [curr, setCurr] = useState(data[0]);

  const formatTargetList = (data: IDataState[]) => {
    return (
      data.map((item) => {
        return { id: item.id, text: item.item.editorTitle };
      }) || []
    );
  };

  const handleDragEnd = (id: string, afterId: string) => {
    console.log("--dargEnd", id, afterId);
  };

  const handleListDelete = () => {
    console.log("---delete");
  };

  const handleChangeCurr = () => {
    console.log("----change");
  };

  return (
    <div>
      <TargetThumbList
        list={formatTargetList(data)}
        curr={curr}
        move={handleDragEnd}
        onDelete={handleListDelete}
        handleChangeCurr={handleChangeCurr}
      />
    </div>
  );
};

export default Editor;
