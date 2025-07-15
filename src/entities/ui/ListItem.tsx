import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

export type ListItemProps = {
  link: string;
  linkContent: React.ReactNode;
  imageSrc: string;
  description: string;
  text: string;
  rate: number;
  reviews: number;
  price: string;
  official?: boolean;
};

export const ListItem = ({
  link,
  linkContent,
  imageSrc,
  description,
  text,
  rate,
  reviews,
  price,
  official,
}: ListItemProps) => (
  <li className="ring-1 ring-gray-300 p-2 mb-4 rounded-md bg-item-bg sm:p-3 md:p-4 lg:mb-0">
    <div className="flex justify-between items-center gap-2 mb-2">
      <div className="flex items-center gap-2 w-full">
        <div className="left max-h-15 sm:max-h-20 aspect-square shrink-0">
          <img
            className="w-full h-full object-cover"
            src={imageSrc}
            alt="image"
          />
        </div>
        <div className="text-left flex flex-col gap-1 w-full sm:gap-1.5">
          <div className="flex justify-between text-xs sm:text-base">
            <a href={link} className="font-medium">
              {linkContent}
            </a>
            <p className="right font-medium text-custom-indigo">{price}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="fa-regular"
            ></FontAwesomeIcon>
            <p className="break-words">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rate flex items-center gap-1 px-1.5 py-0.25 bg-rate-bg rounded-2xl sm:py-0.5 sm:px-2">
              <p className="font-medium">{rate}</p>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <p className="font-light">{reviews} Rewiews</p>
            {official && (
              <div className="license flex items-center gap-1 bg-custom-indigo px-1.5 py-0.25 rounded-2xl text-white sm:py-0.5 sm:px-2">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                <p>Official software</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <p className="font-light line-clamp-2">{text}</p>
  </li>
);
