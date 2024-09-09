export function Button({ label }) {
  return (
    <div className="pt-4">
      <button className="w-full border rounded bg-black text-white justify-center">
        {label}
      </button>
    </div>
  );
}
