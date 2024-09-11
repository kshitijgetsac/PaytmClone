export function Button({ label, onClick }) {
  return (
    <div className="pt-4">
      <button
        onClick={onClick}
        className="w-full border rounded bg-black text-white justify-center"
      >
        {label}
      </button>
    </div>
  );
}
