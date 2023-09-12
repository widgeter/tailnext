import { twMerge } from 'tailwind-merge';
import { ItemGrid } from '~/shared/types';
import CTA from './CTA';

const ItemGrid = ({
  id,
  items,
  columns,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGrid) => {
  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${
              columns === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
                : columns === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2'
                : columns === 2
                ? 'sm:grid-cols-2 '
                : ''
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon: Icon, callToAction }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
                <div className="flex justify-center">
                  {Icon && <Icon className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />}
                </div>
                <div className="mt-0.5">
                  {title && <h3 className={twMerge('text-xl font-bold', titleClass)}>{title}</h3>}
                  {description && (
                    <p className={twMerge('text-gray-600 dark:text-slate-400', descriptionClass)}>{description}</p>
                  )}
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      linkClass={twMerge(
                        `${title || description ? 'mt-3' : ''} text-primary cursor-pointer`,
                        actionClass,
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemGrid;