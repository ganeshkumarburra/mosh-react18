import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name : z.string().min(3 , {message : 'Name should be minimum 3 charachters'}),
  age : z.number({invalid_type_error : 'Age must be Number' }).min(16, {message : 'Age shoud be minimum 16'})
})


// interface FormState {
//   name: string;
//   age: number;
// }

type FormState = z.infer<typeof schema>

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const {register, handleSubmit, formState : {errors, isValid : isFormInvalid}} = useForm<FormState>({resolver : zodResolver(schema)});
  // const person = {
  //   name: '',
  //   age: 0
  // }

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // if(nameRef.current != null)
  //   //   person.name = nameRef.current.value
  //   // if(ageRef.current != null)
  //   //   person.age = parseInt(ageRef.current.value)

  //   console.log(person);
  // };

  console.log("Re rendering")

  const onSubmit = (data : FieldValues) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // ref={nameRef}
          id="name"
          type="text"
          className="form-control"
          // onChange={(event) =>
          //   setPerson({
          //     ...person,
          //     name: (event.target as HTMLInputElement).value,
          //   })
          // }
          // value={person.name}
          {...register('name' , {required: true, minLength: 3})}
        />
        {errors.name && <p>{errors.name.message}</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // ref={ageRef}
          id="age"
          type="number"
          className="form-control"
          // onChange={(event) =>
          //   setPerson({
          //     ...person,
          //     age: (event.target as HTMLInputElement).value,
          //   })
          // }
          // value={person.age}
          {...register('age', {valueAsNumber : true})}
        />
        {errors.age && <p>{errors.age.message}</p> }
      </div>
      <button disabled={!isFormInvalid} className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
