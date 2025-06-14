import CreateForm from "../../../ui/customers/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customer",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
}
