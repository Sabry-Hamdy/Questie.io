import { Calendar } from 'lucide-react'; // Import a calendar icon from a library

export default function StyledInput({
  label,
  className,
  component: Component = 'input', // Default to 'input', can be 'textarea', 'select' or 'date'
  value,
  onChange,
  placeholder = '',
  required = false,
  options = [], // For select component
  ...props
}) {
  const fieldStyles =
    'mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white shadow-sm ring-offset-2 ring-offset-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-dark';

  return (
    <div className="flex-1">
      <label className="block font-medium text-gray-300">{label}</label>

      {Component === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          className={fieldStyles}
          required={required}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : Component === 'input' && props.type === 'date' ? (
        <div className="relative">
          <input
            type="date"
            value={value}
            onChange={onChange}
            className={`${fieldStyles} ${className} pr-10`} // Add padding to the right for the icon
            required={required}
            {...props}
          />
          <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
        </div>
      ) : (
        <Component
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={fieldStyles}
          required={required}
          {...props}
        />
      )}
    </div>
  );
}
