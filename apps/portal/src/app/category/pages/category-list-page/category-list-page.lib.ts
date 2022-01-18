import {Category} from "../../models/category.model";

const sort = (catA: Category, catB: Category) => catA.order - catB.order;

export const sortCategories = (categories: Category[]) => {
  return categories.sort(sort);
};
