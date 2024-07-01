/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  dbCredentials: {
    url: 'postgresql://Expenses-Tracker_owner:pZGW6usArJ7w@ep-nameless-boat-a5honwxv.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require',
  }
};