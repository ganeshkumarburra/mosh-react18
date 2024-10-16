
interface Expense {
  description: string;
  amount: number;
  category: string;
  id : number;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  return (
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
        {expenses.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
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
            {expenses.reduce((total, item) => {
              return total + item.amount;
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
