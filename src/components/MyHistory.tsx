import { FaSquare } from "react-icons/fa";

const MyHistory = () => {
  const history = [
    {
      place: "Visa",
      title: "Senior Software Engineer",
      start: "2024",
      end: "Now",
      color: "text-blue-500",
    },
    {
      place: "Western Digital",
      title: "Senior Software Engineer",
      start: "2021",
      end: "2024",
      color: "text-blue-800",
    },
    {
        place: "IIIT Bangalore",
        title: "M.Tech in Computer Science",
        description: "Specialization in Data Science",
        start: "2019",
        end: "2021",
        color: "text-green-500",
    },
    {
        place: "BIT Sindri",
        title: "B.Tech in Computer Science",
        start: "2015",
        end: "2019",
        color: "text-green-800",
    }
  ];

  return (
    <ul className="font-gt-reg">
      {history.map((item) => (
        <li key={item.place} className="mt-2 mb-4">
          <div className="flex">
            <div className="basis-[100px] sm:basis-[100px]">
              <span>
                {item.start} -- {item.end}
              </span>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <span>
                  <FaSquare className={`size-2 ${item.color}`} />
                </span>
                <p>{item.place}</p>
              </div>
              <p className="text-muted-foreground font-jb-mono">{item.title}</p>
                {item.description && (
                    <p className="text-muted-foreground font-jb-mono text-sm">({item.description})</p>
                )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MyHistory;
