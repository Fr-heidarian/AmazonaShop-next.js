import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  time,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  price: numeric("price", { precision: 2 }).notNull().default("0"),
  rating: numeric("rating", { precision: 3, scale: 2 }).notNull().default("0"),
  brand: text("brand").notNull(),
  numReviews: integer("numReviews").notNull(),
  countInStock: integer("countInStock").notNull(),
  description: text("description").notNull(),
  isFeatured: boolean("isFeatured").notNull().default(false),
  banner: text("banner"),
  createdAt: time("createdAt").defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull().default("user"),
  password: text("password").notNull(),
  image: text("image"),
  address: text("address"),
  createdAt: time("createdAt").defaultNow().notNull(),
});

export const orders = pgTable("order", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("id")
    .defaultRandom()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  shippingAddress: text("shippingAddress"),
  paymentMethod: text("paymentMethod"),
  totalPrice: numeric("totalPrice"),
  isPaid: boolean("isPaid"),
  paidAt: timestamp("paidAt"),
  isDelivered: boolean("isDelivered"),
  createdAt: timestamp("createdAt").notNull(),
});
