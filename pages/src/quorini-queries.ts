/**
 * This is auto-generated file by Quorini app
 * contatining GraphQL queries dedicated for users 
 * based on access permission of the project.
 * 
 * Place it in your web app project in ./src/quorini-queries.ts
 */

import { ObjectId } from "bson"

import type { Admin, User, Event, Interest } from "./quorini-types.ts"

type QueryWithParams<VarsType, ResponseType> = string & {
  __queryVars: VarsType,
  __queryResponse: ResponseType
}

export type getEventVars = {
  id: string  
}

export type getEventResponse = {
  getEvent: {
    id?: ObjectId
    createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  name?: string
  date?: Date
  description?: string
  tag?: Interest
  }
}


export const getEvent = `query get($id: ID!) { getEvent(id: $id) {
_id createdAt updatedAt createdBy name date description tag} }` as QueryWithParams<
  getEventVars,
  getEventResponse 
>


export type getAdminVars = {
  id: string  
}

export type getAdminResponse = {
  getAdmin: {
    id?: ObjectId
    createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  fullName?: string | "deprecated"
  }
}

/**
* Administartion user has full control of project application.
*/
export const getAdmin = `query get($id: ID!) { getAdmin(id: $id) {
_id createdAt updatedAt createdBy email invitedBy status fullName} }` as QueryWithParams<
  getAdminVars,
  getAdminResponse 
>


export type getUserVars = {
  id: string  
}

export type getUserResponse = {
  getUser: {
    id?: ObjectId
    createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  email?: string
  invitedBy?: ObjectId
  name?: string
  location?: string
  }
}


export const getUser = `query get($id: ID!) { getUser(id: $id) {
_id createdAt createdBy updatedAt status email invitedBy name location} }` as QueryWithParams<
  getUserVars,
  getUserResponse 
>


export type listEventsVars = {
    
  filter: eventFilterInput
  limit?: number
  nextToken?: string
}

export type listEventsResponse = {
  listEvents: {
    id?: ObjectId
    createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  name?: string
  date?: Date
  description?: string
  tag?: Interest
  }[]
}

export type eventFilterInput = {
  name?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  date?: {
    eq?: Date
    in?: Date
    ne?: Date
  }
  description?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  tag?: {
    eq?: Interest
    in?: Interest
    ne?: Interest
  }
}


export const listEvents = `query list(
  $filter: eventFilterInput
  $limit: Int
  $nextToken: String
) { listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
_id createdAt updatedAt createdBy name date description tag} }` as QueryWithParams<
  listEventsVars,
  listEventsResponse 
>


export type listAdminsVars = {
    
  filter: adminFilterInput
  limit?: number
  nextToken?: string
}

export type listAdminsResponse = {
  listAdmins: {
    id?: ObjectId
    createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  fullName?: string | "deprecated"
  }[]
}

export type adminFilterInput = {
  fullName?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
}

/**
* Administartion user has full control of project application.
*/
export const listAdmins = `query list(
  $filter: adminFilterInput
  $limit: Int
  $nextToken: String
) { listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
_id createdAt updatedAt createdBy email invitedBy status fullName} }` as QueryWithParams<
  listAdminsVars,
  listAdminsResponse 
>


export type listUsersVars = {
    
  filter: userFilterInput
  limit?: number
  nextToken?: string
}

export type listUsersResponse = {
  listUsers: {
    id?: ObjectId
    createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  email?: string
  invitedBy?: ObjectId
  name?: string
  location?: string
  }[]
}

export type userFilterInput = {
  name?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  location?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
}


export const listUsers = `query list(
  $filter: userFilterInput
  $limit: Int
  $nextToken: String
) { listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
_id createdAt createdBy updatedAt status email invitedBy name location} }` as QueryWithParams<
  listUsersVars,
  listUsersResponse 
>