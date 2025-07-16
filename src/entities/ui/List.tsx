import { listItemsMocks } from "../mocks/listItems.mock";
import { ListItem } from "./ListItem";

export const List = () => (
  <ul className="list p-1.25 bg-white text-black text-sm md:p-4">
    {listItemsMocks.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </ul>
);
