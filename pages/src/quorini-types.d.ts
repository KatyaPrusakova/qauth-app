/**
 * This is auto-generated file by Quorini app containing general TS types of your project.
 *
 * Place it in your web app project in ./src/quorini-types.d.ts
 */

import { ObjectId } from "bson"

export type Admin = {
  fullName?: string | "protected" | "deprecated"
  id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
}

export type User = {
  name?: string | "protected"
  location?: string | "protected"
  id?: ObjectId
  createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  email?: string
  invitedBy?: ObjectId
}

export type Event = {
  name?: string | "protected"
  date?: Date | "protected"
  description?: string | "protected"
  tag?: Interest | "protected"
  id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
}

export type Interest =
  | "crypto"
  | " dance"
  | "meditation"
  | " nature"
  | "study"
  | " music"
  | "poems"
