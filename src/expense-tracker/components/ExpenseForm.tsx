import { z } from "zod";
import { CATEGORY_OPTIONS } from "../constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(1),
  category: z.enum(CATEGORY_OPTIONS)
});

type FormState = z.infer<typeof schema>;

interface Expense {
  description: string;
  amount: number;
  category: string;
}
interface ExpenseFormProps {
  onSubmit : (expense : Expense) => void
}

const ExpenseForm = ({onSubmit} : ExpenseFormProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormState>({ resolver: zodResolver(schema) });


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {CATEGORY_OPTIONS.map((item) => (
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
  )
}

export default ExpenseForm