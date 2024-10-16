import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MdDescription } from "react-icons/md";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(1),
  category: z.union([
    z.literal("Groceries"),
    z.literal("Entertainment"),
    z.literal("Utilities"),
  ]),
});

const filterSchema = z.object({
  selectedCategory: z.union([
    z.literal("All Categories"),
    z.literal("Groceries"),
    z.literal("Entertainment"),
    z.literal("Utilities"),
  ]),
});

type FormState = z.infer<typeof schema>;
type FilterFormState = z.infer<typeof filterSchema>;
const categories = ["", "Groceries", "Utilities", "Entertainment"];
const filterCategories = [
  "All Categories",
  "Groceries",
  "Utilities",
  "Entertainment",
];
const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormState>({ resolver: zodResolver(schema) });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    watch,
  } = useForm<FilterFormState>({ resolver: zodResolver(filterSchema) });
  const onSubmit = (data: FieldValues) => {
    setItems([...items, data as FormState]);
  };

  const [items, setItems] = useState<FormState[]>([]);

  const selectedCategory = watch("selectedCategory");
  const itemsToShow = items.filter((item) => {
    if (selectedCategory === "All Categories") return item;
    if (selectedCategory === item.category) return item;
  });

  const handleDeleteItem = ( item: FormState) => {
    setItems(items.filter((_item) => {
      if(item.description !== _item.description) return _item
    }))
  } 

  return (
    <div>
      <form key={1} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="descrption" className="form-label">
            Description
          </label>
          <input
            id="descrption"
            type="text"
            className="form-control"
            {...register("description")}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select mb-3"
            {...register("category")}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>

      <form key={2} onSubmit={handleSubmit2(onSubmit)}>
        <div className="mb-3">
          <select
            id="category"
            className="form-select mb-3"
            {...register2("selectedCategory")}
          >
            {filterCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors2.selectedCategory && (
            <p>{errors2.selectedCategory.message}</p>
          )}
        </div>
      </form>

      {itemsToShow.map((item) => (
        <h1>
          {item.amount} {item.category} {item.description}
        </h1>
      ))}

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemsToShow.map((item) => {
            return (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{handleDeleteItem(item)}}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {itemsToShow.reduce((total, item) => {
                return total + item.amount;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTracker;
