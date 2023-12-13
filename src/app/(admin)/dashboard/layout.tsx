export default function DashboardLayout({
  children,
  product,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div className="p-5">
        <div className="">{children}</div>
        <div className="mt-5 gap-5 flex justify-center items-center">
          {product}
          {analytics}
        </div>
        {payments}
      </div>
    </>
  );
}
