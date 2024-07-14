import { memo } from "react";

function PageBody({
  PageTitle,
  children,
}: {
  PageTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="p-5 text-2xl font-bold">{PageTitle}</h2>
      {children}
    </div>
  );
}

export default memo(PageBody);
