import MyForm from "@/components/multi_page_form/MyForm";
import { Card } from "@/components/ui/card";
import React from "react";

function MultiPageFormPage() {
  return (
    <div>
      <h1 className="mb-3 text-xl">Multi-Page Form</h1>
      <Card className="max-w-xl p-5 bg-black/[0.7] text-white">
        <MyForm />
      </Card>
    </div>
  );
}

export default MultiPageFormPage;
