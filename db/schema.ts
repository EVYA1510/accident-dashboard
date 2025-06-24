import {
  pgTable,
  serial,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const accidentReports = pgTable("accident_reports", {
  id: serial("id").primaryKey(), // מזהה ייחודי
  title: varchar("title", { length: 255 }).notNull(), // כותרת - חובה
  reportDate: timestamp("report_date").defaultNow(), // תאריך ושעה
  content: varchar("content", { length: 1000 }), // תוכן ההודעה
  createdBy: varchar("created_by", { length: 100 }), // נוצר ע״י
  contactName: varchar("contact_name", { length: 100 }), // איש קשר שיצר את הדיווח
  sourceOrganization: varchar("source_organization", { length: 100 }), // התקבל מגוף
  sourceContact: varchar("source_contact", { length: 100 }), // איש קשר בגוף
  receptionMethod: varchar("reception_method", { length: 100 }), // אופן קבלה
  notes: varchar("notes", { length: 1000 }), // הערות
  responsibleEntity: varchar("responsible_entity", { length: 100 }), // גורם אחראי
  transferMethod: varchar("transfer_method", { length: 100 }), // אופן העברה
  taskOpened: boolean("task_opened").default(false), // פתיחת משימה לאירוע
  taskStatus: varchar("task_status", { length: 100 }), // סטטוס משימה במערכת
  taskInstructor: varchar("task_instructor", { length: 100 }), // מנחה המשימה
  eventLocation: varchar("event_location", { length: 255 }), // מיקום האירוע
  reporterPhone: varchar("reporter_phone", { length: 50 }), // מספר פלאפון מדווח
  subEntities: varchar("sub_entities", { length: 255 }), // תת גורמים (מלב"ח)
  missionBoardTask: boolean("mission_board_task").default(false), // יצירת משימה מיומן מבצעים
  isRelevantForAssessment: boolean("is_relevant_for_assessment").default(false), // רלוונטי להערכת מצב
  tagav: boolean("tagav").default(false), // תג"ב (למערכת משימות)
  createdAt: timestamp("created_at").defaultNow().notNull(), // נוצר
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // עודכן
});
