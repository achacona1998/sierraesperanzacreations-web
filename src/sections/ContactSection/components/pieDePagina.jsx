export const PieDePagina = () => {
  return (
    <div className="flex items-center justify-center h-full py-2 mt-8 text-sm text-center border-t border-gray-700">
      <p>
        &copy; {new Date().getFullYear()} All rights reserved | Designed and
        implemented by :&nbsp;{" "}
        <span className="font-semibold">Sierra-Esperanza Creations</span>
      </p>
    </div>
  );
};
