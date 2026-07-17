import userFields from "../../../data/users";

const AddUser = ({ newUser, dispatch }) => {
  return (
    <form id="submitForm" className="space-y-3">
      {userFields.map((field) => (
        <div key={field.key} className="flex flex-col gap-3">
          <label htmlFor={field.key} className="text-sm text-right">
            {" "}
            {field.label} :
          </label>
          <input
            id={field.key}
            type={field.inputType}
            className="input-style"
            value={newUser && newUser[field.key]}
            onChange={(event) => {
              dispatch({ type: field.key, payload: event.target.value });
            }}
            required
          />
        </div>
      ))}
    </form>
  );
};

export default AddUser;
