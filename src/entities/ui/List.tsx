import { listItemsMocks } from "../mocks/listItems.mock";
import { ListItem } from "./ListItem";

export const List = () => (
  <ul className="list p-2 bg-white text-black text-xxs sm:text-sm sm:p-3 md:p-4 lg:grid lg:grid-cols-2 lg:gap-4">
    {listItemsMocks.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </ul>
);
