"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AccidentForm() {
  const [formData, setFormData] = useState({
    title: "",
    reportDate: "",
    content: "",
    createdBy: "",
    contactName: "",
    sourceOrganization: "",
    sourceContact: "",
    receptionMethod: "",
    notes: "",
    responsibleEntity: "",
    transferMethod: "",
    taskOpened: false,
    taskStatus: "",
    taskInstructor: "",
    eventLocation: "",
    reporterPhone: "",
    subEntities: "",
    missionBoardTask: false,
    isRelevantForAssessment: false,
    tagav: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // כאן אפשר לקרוא ל-API כדי לשמור את הדיווח בפועל
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto bg-white p-6 shadow-md rounded-xl"
    >
      <h2 className="text-2xl font-bold text-primary mb-4">טופס דיווח תאונה</h2>

      <div className="space-y-4">
        <div>
          <Label>כותרת *</Label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>תאריך ושעה</Label>
          <Input
            type="datetime-local"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>תוכן ההודעה</Label>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>נוצר ע״י</Label>
          <Input
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>איש קשר שיצר את הדיווח</Label>
          <Input
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label>התקבל מגוף</Label>
          <Input
            name="sourceOrganization"
            value={formData.sourceOrganization}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>איש קשר בגוף</Label>
          <Input
            name="sourceContact"
            value={formData.sourceContact}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>אופן קבלה</Label>
          <Input
            name="receptionMethod"
            value={formData.receptionMethod}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>הערות</Label>
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>גורם אחראי</Label>
          <Input
            name="responsibleEntity"
            value={formData.responsibleEntity}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>אופן העברה</Label>
          <Input
            name="transferMethod"
            value={formData.transferMethod}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            name="taskOpened"
            checked={formData.taskOpened}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, taskOpened: !!checked }))
            }
          />
          <Label>פתיחת משימה לאירוע</Label>
        </div>

        <div>
          <Label>סטטוס משימה במערכת</Label>
          <Input
            name="taskStatus"
            value={formData.taskStatus}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Label>מנחה המשימה</Label>
        <Input
          name="taskInstructor"
          value={formData.taskInstructor}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>מיקום האירוע</Label>
        <Input
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>מספר פלאפון מדווח</Label>
        <Input
          name="reporterPhone"
          value={formData.reporterPhone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>תת גורמים (מלב״ח)</Label>
        <Input
          name="subEntities"
          value={formData.subEntities}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            name="missionBoardTask"
            checked={formData.missionBoardTask}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, missionBoardTask: !!checked }))
            }
          />
          <Label>יצירת משימה מיומן מבצעים</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            name="isRelevantForAssessment"
            checked={formData.isRelevantForAssessment}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                isRelevantForAssessment: !!checked,
              }))
            }
          />
          <Label>רלוונטי להערכת מצב</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            name="tagav"
            checked={formData.tagav}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, tagav: !!checked }))
            }
          />
          <Label>תג"ב (מערכת משימות)</Label>
        </div>
      </div>

      <Button
        type="submit"
        className="bg-primary hover:bg-primaryDark text-white w-full"
      >
        שלח דיווח
      </Button>
    </form>
  );
}
