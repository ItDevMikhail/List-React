import { CheckIcon } from "../../shared/ui/icons/CheckIcon";
import { StarIcon } from "../../shared/ui/icons/StarIcon";
import { LockIcon } from "../../shared/ui/icons/LockIcon";
import { ArrowRightIcon } from "../../shared/ui/icons/ArrowRightIcon";
import { UsersIcon } from "../../shared/ui/icons/UsersIcon";

export type ListItemProps = {
  link: string;
  linkContent: string;
  imageSrc: string;
  views?: number;
  anySite?: boolean;
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
  anySite,
  views,
  text,
  rate,
  reviews,
  price,
  official,
}: ListItemProps) => (
  <li className="leading-6 ring-1 ring-item-border px-3.75 py-5 mb-2.5 rounded-2xl bg-item-bg min-h-46 md:mb-5 md:px-5 md:py-3">
    <div className="md:flex md:gap-4 md:mb-3 md:items-end">
      <ImageContainer className="hidden md:block" imageSrc={imageSrc} />
      <div className="w-full">
        <div className="flex gap-4 w-full mb-4 md:mb-1">
          <ImageContainer className="md:hidden" imageSrc={imageSrc} />
          <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between">
            <a
              href={link}
              className="display-ruby font-semibold text-xl leading-7.5 text-text-black hover:underline"
            >
              {linkContent}
              <ArrowRightIcon className="ml-1.5 mb-1" />
            </a>
            {official && (
              <StatusBadge className="inline-flex mr-auto md:hidden" />
            )}
            <p className="hidden right font-semibold text-custom-indigo md:text-xl md:block">
              {price}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mb-4 md:flex-row md:gap-5">
          {anySite && (
            <div className="flex items-center gap-1.5 shrink-1">
              <CheckIcon />
              <p className="break-words text-text-black">
                This software is designed to work with any site
              </p>
            </div>
          )}
          {views && (
            <div className="flex items-center gap-1.5">
              <UsersIcon />
              <p className="break-words text-text-black">
                {views} Users this week
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2.5">
          <div className="rate flex items-center gap-1 px-1.5 bg-rate-bg rounded-2xl md:px-2">
            <p className="font-semibold">{rate}</p>
            <StarIcon />
          </div>
          <p className="text-text-gray">{reviews} Reviews</p>
          {official && <StatusBadge className="hidden md:flex" />}
          <p className="text-xl leading-7.5 ml-auto font-semibold text-custom-indigo md:hidden">
            {price}
          </p>
        </div>
      </div>
    </div>
    <p className="text-text-gray line-clamp-2 hidden md:block">{text}</p>
  </li>
);

type StatusBadgeProps = {
  className?: string;
};

const StatusBadge = ({ className = "" }: StatusBadgeProps) => (
  <div
    className={`items-center gap-1 bg-custom-indigo px-2.5 rounded-2xl text-white md:px-2 ${className}`}
  >
    <LockIcon />
    <p>Official software</p>
  </div>
);

const ImageContainer = ({
  className,
  imageSrc,
}: {
  className?: string;
  imageSrc: string;
}) => (
  <div
    className={`left max-h-15 md:max-h-22.5 aspect-square shrink-0 ${className}`}
  >
    <img className="w-full h-full object-cover" src={imageSrc} alt="image" />
  </div>
);
