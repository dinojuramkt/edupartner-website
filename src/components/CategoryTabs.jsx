export default function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-lg bg-slate-50 p-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            className={[
              "min-h-11 rounded-full px-4 py-2 text-sm font-bold transition",
              isActive
                ? "bg-navy text-white shadow-soft"
                : "bg-white text-slate-600 hover:bg-skybrand/10 hover:text-navy",
            ].join(" ")}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
