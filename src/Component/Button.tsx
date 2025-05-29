type Props = {
  label?: string;
  classes?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button({ label, classes, type }: Props) {
  return (
    <div>
      <button
        type={type || "button"}
        className={` bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mt-2 ${classes}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
