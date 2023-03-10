import classNames from "classnames";
import { FC, memo, useState } from "react";
import { ItemTypes, AnchorPoint, IDataState } from "../styles/constants";
import styles from "./index.less";
import DragDropIcon from "@/assets/drag-drop-icon.svg";
import IconFont from "@/components/Icon/Icon";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SimpleBar from "simplebar-react";
interface TargetThumbListProps {
  list: { id: string; text: string }[];
  curr: IDataState | null;
  move: any;
  onDelete: (id: string) => void;
  handleChangeCurr: (id: string, type: string) => void;
}

const TargetThumbList: FC<TargetThumbListProps> = memo(function TargetThumbList({
  list,
  curr,
  move,
  onDelete,
  handleChangeCurr,
}) {
  const [collapse, setCollapse] = useState(false);
  console.log("---list", list);

  return (
    <div className={styles.sticky}>
      <div
        className={styles["target-thumb"]}
        style={{
          maxHeight: collapse ? "46px" : `100%`,
          width: collapse ? "80px" : "158px",
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <div className={styles["target-thumb-title"]}>
          <span className={styles.title}>组件</span>
          <span onClick={() => setCollapse(!collapse)}>
            <IconFont
              type="iconarrow_down_up"
              className={classNames(styles["title-icon"], {
                [styles.rotate]: collapse,
              })}
            />
          </span>
        </div>
        {list.length ? (
          <DragDropContext onDragEnd={move}>
            <SimpleBar className={styles.scrollWrap}>
              <Droppable droppableId={ItemTypes.TARGET_LIST}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ul className={styles["target-thumb-list"]}>
                      {list.map((item, index) => {
                        return (
                          <DragTargetItem
                            key={item.id}
                            isCurrent={item.id === curr?.id}
                            id={item.id}
                            index={index}
                            text={item.text}
                            move={move}
                            onDelete={onDelete}
                            handleChangeCurr={handleChangeCurr}
                          />
                        );
                      })}
                    </ul>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </SimpleBar>
          </DragDropContext>
        ) : (
          <div className={styles.emptyList}>还未添加任何组件</div>
        )}
      </div>
    </div>
  );
});

const DragTargetItem = memo<{
  id: string;
  isCurrent: boolean;
  text: string;
  index: number;
  move: (id: string, afterId: string) => void;
  onDelete: (id: string) => void;
  handleChangeCurr: (id: string, type: string) => void;
}>(function DragTargetItem({ id, isCurrent, text, move, onDelete, index, handleChangeCurr }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => {
            handleChangeCurr(id, AnchorPoint.Target);
          }}
          id={`${id}-${AnchorPoint.Thumb}`}
          className={classNames({ [styles.isActive]: isCurrent })}
        >
          <img src={DragDropIcon} />
          <span>{text}</span>
          <IconFont
            type="icondelete"
            onClick={() => onDelete(id)}
            className={styles["delete-icon"]}
          />
        </li>
      )}
    </Draggable>
  );
});

export default TargetThumbList;
