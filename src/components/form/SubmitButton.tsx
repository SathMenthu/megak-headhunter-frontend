interface SubmitButtonProps {
  text: string;
}

export function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group flex justify-center py-1 px-2 border border-transparent text-xs font-medium rounded-sm text-white bg-red-700 hover:bg-red-900 focus:outline-none"
    >
      {text}
    </button>
  );
}
