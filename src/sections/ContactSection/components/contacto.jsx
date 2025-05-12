import { Contact } from "../constants/items";

export const ContactoCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold ">Contact</h3>
      <ul className="flex flex-col gap-2 ">
        {Contact.map((item) => (
          <li key={item.id}>
            <a
              target="_blank"
              rel="noopener"
              href={item.link}
              className="inline-block transition-transform duration-300 hover:text-cyan-400 hover:scale-110">
              {item.name}
            </a>
          </li>
        ))}{" "}
        <li>West Palm Beach, FL</li>
      </ul>
    </div>
  );
};
