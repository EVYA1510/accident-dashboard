import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccidentForm from "@/components/forms/AccidentForm";
import { PlusCircle } from "lucide-react";

export default function NewReportPage() {
  return (
    <section className="space-y-6 max-w-3xl mx-auto p-4">
      <Card className="p-4 shadow-md rounded-xl bg-white">
        <CardHeader>
          <CardTitle className="text-primary text-2xl font-bold flex items-center gap-2">
            <PlusCircle size={22} />
            הוספת דיווח חדש
          </CardTitle>
        </CardHeader>

        <Separator className="my-2" />

        <CardContent>
          <AccidentForm />
        </CardContent>
      </Card>
    </section>
  );
}
