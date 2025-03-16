export default function Empty({ message, icon: Icon }) {
  return (
    <div className="flex flex-col mt-16 items-center justify-center h-full text-center text-gray-500">
      {Icon && <Icon className="w-12 h-12 mb-4" />}
      <p className="text-lg">{message}</p>
    </div>
  );
}
