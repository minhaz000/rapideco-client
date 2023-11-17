const MobileBottomMenu = ({ Icon, onSidebar, name }: any) => {
  return (
    <div
      className="flex justify-center flex-col items-center cursor-pointer"
      onClick={onSidebar && onSidebar}
    >
      <Icon className="text-2xl text-slate-800" />
      <span className="text-slate-500 text-[14px]">{name}</span>
    </div>
  );
};

export default MobileBottomMenu;
