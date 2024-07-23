interface InputCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function InputCheckbox({ label, checked, onChange }: InputCheckboxProps) {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="hidden" />
      <div
        className={`w-8 h-8 border-2 rounded-full flex items-center justify-center ${checked ? "bg-primary-blue" : "bg-white"}`}
      >
        {checked && (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="max-w-[500px] ml-8">{label}</span>
    </label>
  );
}
