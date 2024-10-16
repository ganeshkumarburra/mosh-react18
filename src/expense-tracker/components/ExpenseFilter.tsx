import { useForm } from "react-hook-form";
import {CATEGORY_OPTIONS, SELECT_CATEGORY_OPTIONS} from '../constants'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";


const filterSchema = z.object({
  selectedCategory : z.enum(SELECT_CATEGORY_OPTIONS)
})

type FilterFormState = z.infer<typeof filterSchema>;

interface ExpenseFilterProps {
  onChangeCategory: (category:  typeof SELECT_CATEGORY_OPTIONS[number] ) => void;
}


const ExpenseFilter = ({onChangeCategory}:ExpenseFilterProps) => {
  const {
    register,
    formState: { errors },
    watch,

  } = useForm<FilterFormState>({ resolver: zodResolver(filterSchema) , defaultValues : {
    'selectedCategory' : SELECT_CATEGORY_OPTIONS[0]
  } });
  
  const selectedCategory = watch('selectedCategory');

  useEffect(()=> {
    if(selectedCategory) {
      onChangeCategory(selectedCategory);
    }
  },[
    selectedCategory
  ])

  
  return (
    <form>
      <div className="mb-3">
        <select
          id="category"
          className="form-select mb-3"
          {...register("selectedCategory")}
        >
          {SELECT_CATEGORY_OPTIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.selectedCategory && <p>{errors.selectedCategory.message}</p>}
      </div>
    </form>
  );
};

export default ExpenseFilter;

