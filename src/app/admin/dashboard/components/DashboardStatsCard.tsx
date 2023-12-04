type Props = {
  styleCard: any;
  icon: any;
  title: string;
  subTitle: string;
};
const DashboardStatsCard = ({
  styleCard,
  icon: Icon,
  title,
  subTitle,
}: Props) => {
  return (
    <div className="flex items-center justify-start gap-4 py-8 rounded-md shadow-md ps-10 md:ps-0">
      <span className={`${styleCard} text-xl bg-opacity-30 py-5 px-5 rounded`}>
        <Icon />
      </span>
      <div>
        <h3 className="font-normal opacity-90 mb-1">{title}</h3>
        <p className="text-2xl font-semibold opacity-95">{subTitle}</p>
      </div>
    </div>
  );
};

export default DashboardStatsCard;
